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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageKitProvider, IKUpload } from "imagekitio-next";
import { createSpeaker } from "@/actions/create-speaker";
import {
  IKUploadResponse,
  UploadError,
} from "imagekitio-next/dist/types/components/IKUpload/props";
import { toast } from "sonner";
import { SpeakerSchema } from "@/schemas";

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

export function AddSpeakerDialog() {
  const [isPending, startTransition] = useTransition();
  const [uploadedImagePath, setUploadedImagePath] = useState<string | null>(
    null
  );
  const [isUploading, setIsUploading] = useState(false);
  const uploadRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof SpeakerSchema>>({
    resolver: zodResolver(SpeakerSchema),
    defaultValues: {
      FName: "",
      LName: "",
      Imgpath: "",
      SocialLink: "",
    },
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
    console.log("Success", res);
    setUploadedImagePath(res.filePath);
    toast.success("Image uploaded successfully!");
  };

  const onSubmit = (values: z.infer<typeof SpeakerSchema>) => {
    console.log("Submitting form...", values);
    if (!uploadedImagePath) {
      toast.error("Please upload an image before creating a speaker.");
      return;
    }
    values.Imgpath = uploadedImagePath;
    startTransition(() => {
      createSpeaker(values)
        .then((data) => {
          console.log("Response from server:", data);
          if (data?.error) {
            toast.error("Failed Creating the Speaker!");
          } else if (data?.success) {
            toast.success("Speaker Created Successfully !");
            form.reset();
            setUploadedImagePath(null);
            setIsUploading(false);
          }
        })
        .catch((err) => {
          toast.error("Something went wrong" + err);
        });
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="block mr-auto ml-3">Add Speaker</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Speaker 🎙️</DialogTitle>
        </DialogHeader>
        <ImageKitProvider
          publicKey={publicKey}
          urlEndpoint={urlEndpoint}
          authenticator={authenticator}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {["FName", "LName", "SocialLink"].map((name) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name as "FName" | "LName" | "SocialLink"}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {name
                          .replace("LName", " Last Name")
                          .replace("FName", " First Name")
                          .replace("SocialLink", " Social Link")}
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}

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
                fileName={`speaker-${Date.now()}.png`}
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
