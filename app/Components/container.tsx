import React from "react";
import { cn } from "@/lib/utils";
import Footer from "./Footer";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto min-h-screen w-full max-w-4xl bg-neutral-100 p-2 shadow-md",
        className,
      )}
    >
      <div className="flex-col justify-end">{children}</div>
    </div>
  );
}
