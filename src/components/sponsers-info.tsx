import Sponsors from "@/app/(protected)/_components/sponsers";
import { Card, CardContent, CardHeader } from "./ui/card";
import { AddSponsorDialog } from "@/app/(protected)/_components/Sponsor-Dialog";

interface SponsersInfoProps {
  label: string;
}

const SponsersInfo = ({ label }: SponsersInfoProps) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <h3 className="text-2xl font-semibold text-center">{label}</h3>
      </CardHeader>
      <AddSponsorDialog />
      <CardContent className="mt-5">
        <Sponsors />
      </CardContent>
    </Card>
  );
};

export default SponsersInfo;
