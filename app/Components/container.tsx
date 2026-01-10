import React from "react";
import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("min-w-4xl  max-w-4xl mx-auto  bg-neutral-100 shadow-md p-4", className)}>

    {children}</div>;
}
