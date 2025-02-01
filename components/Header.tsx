'use client'
import Link from "next/link";
import { useState } from "react";
import Nav from "./Nav";

interface HeaderProps {
  className: string;
}


export default function Header({ className }:HeaderProps ) {
  return (
    <Nav className={`${className}   `} />
  );
}
