"use client";
import { useCurrentRole } from "@/hooks/use-current-role";
import { ErrorMessage } from "../form-error";
import { UserRole } from "@prisma/client";
interface RoleGateProps {
  children: React.ReactNode;
  allowedRoles: UserRole;
}
export const RoleGate = ({ children, allowedRoles }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRoles) {
    return (
      <ErrorMessage message="You do not have permission to view this content!" />
    );
  }

  return <>{children}</>;
};
