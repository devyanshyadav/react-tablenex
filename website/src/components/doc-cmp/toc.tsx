"use client";
import React, { useState, useEffect, useCallback } from "react";
import slugify from "slugify";
import { usePathname } from "next/navigation";

const TOC = () => {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [activeId, setActiveId] = useState("");
  const pathname = usePathname();

  // Debounce function to limit how often the scroll handler fires
  const debounce = (func: any, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const updateActiveHeading = useCallback(
    debounce((id: string, text: string) => {
      setActiveId(id);
      // Only update URL hash without triggering navigation
      window.history.replaceState(
        null,
        "",
        `#${text.replace(" ", "-").toLowerCase()}`
      );
    }, 100),
    [pathname]
  );

  useEffect(() => {
    const docContent = document.getElementById("doc-content");
    if (!docContent) return;

    const h2Elements = docContent.querySelectorAll("h2");
    const headingsList = Array.from(h2Elements).map((heading, index) => {
      if (!heading.id) {
        const id = `heading-${index}`;
        heading.id = id;
      }
      return {
        id: heading.id,
        text: heading.textContent || `Section ${index + 1}`,
      };
    });

    setHeadings(headingsList);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateActiveHeading(
              entry.target.id,
              entry.target.textContent || ""
            );
          }
        });
      },
      {
        rootMargin: "0px 0px -50% 0px",
        threshold: 0.1,
      }
    );

    h2Elements.forEach((heading) => observer.observe(heading));

    return () => {
      h2Elements.forEach((heading) => observer.unobserve(heading));
    };
  }, [updateActiveHeading, pathname]);

  const handleClick = (id: string, text: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
      window.history.replaceState(
        null,
        "",
        `#${slugify(text, { lower: true })}`
      );
    }
  };

  return (
    <aside className="bg-primary hidden md:block">
      <div className="space-y-2 w-full sticky top-20 border-l border-border-accent">
        <h3 className="font-medium px-4">On this page</h3>
        <nav>
          <ul className="space-y-3 text-sm mt- pr-2">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className=" overflow-hidden  -translate-x-0.5"
              >
                <button
                  onClick={() => handleClick(heading.id, heading.text)}
                  className={`text-sm block px-5 w-full text-left truncate border-l-4  transition-colors ${
                    activeId === heading.id
                      ? "opacity-100 border-text-color"
                      : "opacity-70 border-transparent"
                  }`}
                >
                  {heading.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default TOC;
