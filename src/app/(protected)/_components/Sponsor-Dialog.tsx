"use client";
import { useRef, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageKitProvider, IKUpload } from "imagekitio-next";
import { SponsorSchema } from "@/schemas";
import { SponsersCatg } from "@prisma/client";
import { createSponsor } from "@/actions/create-sponser";
import {
  IKUploadResponse,
  UploadError,
} from "imagekitio-next/dist/types/components/IKUpload/props";
import { toast } from "sonner";

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY!;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT!;
const authenticator = async () => {
  try {
    const response = await fetch("/api/auth");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }
    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Authentication request failed: ${error.message}`);
    } else {
      throw new Error("Authentication request failed");
    }
  }
};

export function AddSponsorDialog() {
  const [isPending, startTransition] = useTransition();
  const [uploadedImagePath, setUploadedImagePath] = useState<string | null>(
    null
  );
  const [imgId, setImgId] = useState<string | null>();
  const [isUploading, setIsUploading] = useState(false);
  const uploadRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof SponsorSchema>>({
    resolver: zodResolver(SponsorSchema),
    defaultValues: { Name: "", Imgpath: "", fileId: "", SocialLink: "" },
  });

  const handleFileSelect = () => {
    if (uploadRef.current) {
      uploadRef.current.click();
    }
  };

  const onError = (err: UploadError) => {
    console.log("Error", err);
    toast.error("Image upload failed. Please try again.");
  };

  const onSuccess = (res: IKUploadResponse) => {
    setUploadedImagePath(res.filePath);
    setImgId(res.fileId);
    toast.success("Image uploaded successfully!");
  };

  const onSubmit = (values: z.infer<typeof SponsorSchema>) => {
    console.log("Submitting form...", values);

    if (!uploadedImagePath || !imgId) {
      toast.error("Please upload an image before creating a sponsor.");
      return;
    }

    values.Imgpath = uploadedImagePath;
    values.fileId = imgId;

    startTransition(() => {
      createSponsor(values)
        .then((data) => {
          console.log("Response from server:", data);

          if (data?.error) {
            toast.error(data.error);
          } else if (data?.success) {
            toast.success("Sponsor Created Successfully!");
            form.reset();
            setUploadedImagePath(null);
            setIsUploading(false);
          }
        })
        .catch((err) => {
          console.error("Error:", err);
          toast.error("Something went wrong" + err);
        });
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="block mr-auto ml-3">Add Sponsor</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Sponsor 🤑</DialogTitle>
        </DialogHeader>
        <ImageKitProvider
          publicKey={publicKey}
          urlEndpoint={urlEndpoint}
          authenticator={authenticator}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name={"Name"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Category"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select
                        disabled={isPending}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={SponsersCatg.Bronze}>
                            Bronze
                          </SelectItem>
                          <SelectItem value={SponsersCatg.Silver}>
                            Silver
                          </SelectItem>
                          <SelectItem value={SponsersCatg.Gold}>
                            Gold
                          </SelectItem>
                          <SelectItem value={SponsersCatg.Platinum}>
                            Platinum
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name={"SocialLink"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Social Link</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    <Input
                      name="Imgpath"
                      type="text"
                      value={uploadedImagePath || ""}
                      readOnly
                      className="flex-1 cursor-not-allowed"
                      placeholder="No image selected"
                    />
                    <Button
                      type="button"
                      onClick={handleFileSelect}
                      disabled={isUploading || isPending}
                    >
                      {isUploading ? "Uploading..." : "Choose File"}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>

              <IKUpload
                ref={uploadRef}
                fileName={`sponsor-${Date.now()}.png`}
                onError={onError}
                onSuccess={onSuccess}
                style={{ display: "none" }}
              />

              <DialogFooter>
                <Button
                  type="submit"
                  disabled={isUploading || isPending || !uploadedImagePath}
                >
                  {isPending ? "Saving..." : "Save"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </ImageKitProvider>
      </DialogContent>
    </Dialog>
  );
}
