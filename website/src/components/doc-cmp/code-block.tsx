import React from "react";
import CopyClip from "../global-cmp/copy-clip";

const CodeBlock = ({ code, head, description }: { code: string, head:{title: string, icon: React.ReactNode}, description?: string }) => {
  return (
    <>
    <p>{description}</p>
    <div className="rounded-md codeBlock mt-3 border overflow-hidden border-border-accent lineShadow ">
        <div className="w-full p-1.5 px-2 text-sm *:text-dim items-center flex justify-between bg-secondary border-b border-border-accent">
            <div className="flex items-center gap-1 text-xs">
                {head?.icon}
                <span>{head?.title}</span>
            </div>
            <CopyClip textClip={code} />
        </div>
      <div className="overflow-hidden p-3 bg-gradient-to-tr from-primary to-secondary">
        <code className="overflow-auto">
          <pre className="text-dim font-mono">{code}</pre>
        </code>
      </div>
    </div>
    <br />
    </>
  );
};

export default CodeBlock;
