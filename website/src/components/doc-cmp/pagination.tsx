"use client";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { sideLinks } from "./sidebar";

const Pagination = () => {
  const pathname = usePathname();
  const currentIndex = sideLinks.findIndex((link) => link.href === pathname);
  const prev = currentIndex > 0 ? sideLinks[currentIndex - 1] : null;
  const next =
    currentIndex < sideLinks.length - 1 ? sideLinks[currentIndex + 1] : null;

  return (
    <>
      <br />
      <br />
      <div className="p-3 border-t border-border-accent flex items-center w-full justify-between gap-2">
        <div className="flex flex-col gap-1">
          {prev && (
            <>
              <Link
                href={prev.href}
                className="flex items-center gap-1  hover:underline"
              >
                <IoIosArrowBack /> Previous
              </Link>
              <Link
                href={prev.href}
                className="text-sm text-dim hover:underline"
              >
                {prev.title}
              </Link>
            </>
          )}
        </div>
        <div className="flex flex-col gap-1 items-end">
          {next && (
            <>
              <Link
                href={next.href}
                className="flex items-center gap-1  hover:underline"
              >
                Next <IoIosArrowForward />
              </Link>
              <Link
                href={next.href}
                className="text-sm text-dim hover:underline"
              >
                {next.title}
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Pagination;
