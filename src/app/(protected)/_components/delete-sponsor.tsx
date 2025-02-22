"use client";
import { deleteSponser } from "@/actions/delete-sponser";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import React from "react";
import { toast } from "sonner";

interface DeletingProps {
  id: string;
}

const DeleteSponser = ({ id }: DeletingProps) => {
  const onClick = async () => {
    try {
      await deleteSponser(id);
      toast.success("Sponser got deleted successfully!");
    } catch (error) {
      toast.error("Error deleting sponser");
      console.log("Error: " + error);
    }
  };
  return (
    <Button
      className="bg-red-200 w-10 aspect-square hover:bg-red-300 duration-300 hover:text-red-700"
      onClick={onClick}
    >
      <Trash className="text-red-500" />
    </Button>
  );
};

export default DeleteSponser;
