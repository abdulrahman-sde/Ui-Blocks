"use client";

import type { ReactNode } from "react";

interface TextRollProps {
  text: string;
  as?: "span" | "div";
  className?: string;
  icon?: ReactNode;
  iconWrapperClassName?: string;
}

export function TextRoll({ text, as: Tag = "span", className, icon, iconWrapperClassName }: TextRollProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className || ""}`}>
      <span className="relative overflow-hidden h-[20px] inline-block align-middle">
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <Tag>{text}</Tag>
          <Tag>{text}</Tag>
        </span>
      </span>
      {icon && (
        <span className={`flex items-center justify-center w-6 h-6 sm:w-7 sm:h-8 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 ${iconWrapperClassName || ""}`}>
          {icon}
        </span>
      )}
    </span>
  );
}
