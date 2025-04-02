"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { PiHamburger } from "react-icons/pi";

const ToggleDocSidebar = () => {
  const pathname = usePathname();
  const isDocsPage = pathname.startsWith("/docs");
  if (!isDocsPage) return null;
  return (
    <button className="md:hidden border-border-accent border-l block">
      <label htmlFor="toggle-sidebar">
      <PiHamburger />
      </label>
    </button>
  );
};

export default ToggleDocSidebar;
