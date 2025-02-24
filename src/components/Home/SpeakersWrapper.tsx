import React from "react";
import Speakers from "./Speakers";
import { getAllSpeakers } from "@/data/speakers";

interface SpeakersProps {
  className: string;
}

const SpeakersWrapper = async ({ className }: SpeakersProps) => {
  const speakersList = (await getAllSpeakers()) || [];
  return <Speakers className={className} speakersList={speakersList} />;
};

export default SpeakersWrapper;
