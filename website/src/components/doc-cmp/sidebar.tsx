import Link from "next/link";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";

export const sideLinks = [
  {
    title: "Introduction",
    href: "/docs/introduction",
  },
  {
    title: "Installation",
    href: "/docs/installation",
  },

  {
    title: "Props and Configuration",
    href: "/docs/props",
  },
  {
    title: "Styling",
    href: "/docs/styling",
  },
  {
    title: "Advanced Features",
    href: "/docs/advanced-features",
  },
  {
    title: "TypeScript Support",
    href: "/docs/typescript-support",
  },
  {
    title: "Troubleshooting",
    href: "/docs/troubleshooting",
  },
  {
    title: "Examples",
    href: "/docs/examples",
  },
];
const Sidebar = () => {
  return (
    <>
      <input type="checkbox" id="toggle-sidebar" className="hidden peer" />
      <aside className="bg-secondary md:!translate-x-0 md:!shadow-none peer-checked:shadow-[800px_0px_0px_800px_rgba(0,0,0,0.1)] fixed inset-y-0 left-0 z-50 md:z-30 md:static peer-checked:translate-x-0 -translate-x-full md:transition-none transition-all flex flex-col flex-shrink-0 border-r border-border-accent p-5">
        <ul className="space-y-2 w-full md:sticky md:top-20">
          {sideLinks.map((link) => {
            return (
              <li key={link.title}>
                <Link
                  className="md:text-sm block hover:bg-border-accent rounded-md p-2 px-3"
                  href={link.href}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <label
          htmlFor="toggle-sidebar"
          className="border border-border-accent rounded-md p-1 px-2 m-2 flex items-center justify-end w-fit md:hidden gap-2"
        >
          Close <IoCloseSharp />
        </label>
      </aside>
    </>
  );
};

export default Sidebar;
