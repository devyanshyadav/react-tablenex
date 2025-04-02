import React from "react";
import ThemeSwitch from "./theme-switch";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import ToggleDocSidebar from "./toggle-doc-sidebar";

const Header = () => {
  return (
    <header className="w-full border-b border-border-accent bg-primary p-2 sticky grid place-items-center top-0 z-50">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div>
          <Link href="/" className="text-xl select-none font-medium">
            TableNex
          </Link>
        </div>
        <div className="text-xl *:px-3 flex items-center">
          <Link
            href="https://github.com/devyansh-yadav/react-tablenex"
            className=" border-border-accent border-r block"
          >
            <FaGithub />
          </Link>
          <ThemeSwitch />
          <ToggleDocSidebar />
        </div>
      </div>
    </header>
  );
};

export default Header;
