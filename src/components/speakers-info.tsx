import Speakers from "@/app/(protected)/_components/speakers";
import { Card, CardContent, CardHeader } from "./ui/card";
import { AddSpeakerDialog } from "@/app/(protected)/_components/Speaker-Dialog";

interface SpeakersInfoProps {
  label: string;
}

const SpeakersInfo = ({ label }: SpeakersInfoProps) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <h3 className="text-2xl font-semibold text-center">{label}</h3>
      </CardHeader>
      <AddSpeakerDialog />
      <CardContent className="mt-5">
        <Speakers />
      </CardContent>
    </Card>
  );
};

export default SpeakersInfo;
