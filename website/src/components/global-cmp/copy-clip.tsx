//TSX code 
"use client";
import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { TbChecks } from "react-icons/tb";

type ClipboardProps = {
  textClip: string;
  setCopy?: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  beforeCopy?: React.ReactNode;
  afterCopy?: React.ReactNode;
};

const CopyClip = ({
  textClip,
  beforeCopy = <IoCopyOutline/>,
  afterCopy = <TbChecks/>,
  className,
}:ClipboardProps) => {
  const [copy, setCopy] = useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textClip);
      if (setCopy) {
        setCopy(true);
        setTimeout(() => setCopy(false), 1000); // Reset copied state after 1 seconds
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button className={className} onClick={copyToClipboard}>
      {copy ? afterCopy : beforeCopy}
    </button>
  );
};

export default CopyClip;
