"use client";
import { deleteSpeaker } from "@/actions/delete-speaker";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import React from "react";
import { toast } from "sonner";

interface DeletingProps {
  id: string;
}

const DeleteSpeaker = ({ id }: DeletingProps) => {
  const onClick = async () => {
    try {
      await deleteSpeaker(id);
      toast.success("Speaker got deleted successfully!");
    } catch (error) {
      toast.error("Error deleting speaker");
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

export default DeleteSpeaker;
