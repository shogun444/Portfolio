import React from "react";
import { cn } from "@/lib/utils";


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
        "mx-auto w-full max-w-4xl bg-neutral-100 p-2 shadow-md pb-1000",
        className,
      )}
    >
      {children}
    </div>

  );
}
