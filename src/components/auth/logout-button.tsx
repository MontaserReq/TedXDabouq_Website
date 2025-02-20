"use client";

import { logout } from "@/actions/logout";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = async () => {
    await logout();
    window.location.href = "/";
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LogoutButton;