// import { Header } from "@/components/auth/header";
// import { BackButton } from "./back-button";
// import { Card, CardFooter, CardHeader } from "../ui/card";
import { CardWrapper } from "./card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
export const ErrorCard = () => {
  return (
    // <Card className="w-[400px] shadow-md">
    //   <CardHeader>
    //     <Header label="Oops! Something went wrong!" />
    //   </CardHeader>
    //   <CardFooter>
    //     <BackButton href="/auth/login" label="Back to Login" />
    //   </CardFooter>
    // </Card>
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};
