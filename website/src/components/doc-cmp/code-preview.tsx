"use client";
import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import CopyClip from "../global-cmp/copy-clip";

interface CodeDisplayProps {
  code: string;
  language?: string;
  component?: React.ReactNode;
  title?: string;
  description?: string;
}

export default function CodePreview({
  code,
  language = "tsx",
  component,
  title,
  description,
}: CodeDisplayProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">(
    component ? "preview" : "code"
  );
  const [highlightedCode, setHighlightedCode] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const highlighted = Prism.highlight(
        code,
        Prism.languages[language] || Prism.languages.javascript,
        language
      );
      setHighlightedCode(highlighted);
      Prism.highlightAll();
    }
  }, [code, language]);


  return (
    <div>
      {description && <p>{description}</p>}
      <br />
      <div className="flex justify-between items-center px-4  border-b border-border-accent">
        <div className="flex *:p-2 *:px-3 divide-x !divide-border-accent ">
          {component && (
            <button
              onClick={() => setActiveTab("preview")}
              className={`${
                activeTab === "preview" &&
                "bg-gradient-to-r from-primary to-accent rounded-tl-lg"
              }`}
            >
              Preview
            </button>
          )}
          <button
            onClick={() => setActiveTab("code")}
            className={`${
              activeTab === "code" &&
              "bg-gradient-to-r from-accent to-primary  rounded-tr-lg"
            }`}
          >
            Code
          </button>
        </div>

        {title && <div className="text-sm text-gray-400">{title}</div>}

        <CopyClip textClip={code} />
      </div>

      {/* Content area */}
      <div className="relative overflow-hidden bg-secondary mt-3 rounded-md border border-border-accent *:md:p-6 *:p-3 min-h-32 ">
        {/* Preview section */}
        {component && activeTab === "preview" && (
          <div className="flex items-center justify-center">{component}</div>
        )}

        {/* Code section */}
        {activeTab === "code" && (
          <div className="overflow-auto max-h-96 bg-[#171715] !p-0 ">
            <pre className="line-numbers text-left text-sm font-mono p-4">
              <code
                className={` language-${language}`}
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              />
            </pre>
          </div>
        )}
      </div>

      {/* Include Prism CSS from CDN for the demo */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css');
            @import url('https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.css');
            
            /* Custom styles for Prism */
            :not(pre) > code[class*="language-"],
            pre[class*="language-"] {
              background: #1e1e1e;
              border-radius: 0.25rem;
            }
            
            .line-numbers .line-numbers-rows {
              border-right: 1px solid #4b5563;
            }
            
            .line-numbers-rows > span:before {
              color: #6b7280;
            }
          `,
        }}
      />
    </div>
  );
}
