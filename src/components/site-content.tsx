"use client";
import React from "react";
import TransitionContext from "./transition-context";

interface SiteContentProps {
  children: React.ReactNode;
}

export function SiteContent({ children }: SiteContentProps) {
  const transition = React.useContext(TransitionContext);
  return (
    <div className="flex justify-center">
      <div
        className={
          "flex w-full min-h-screen mt-[-80px] pt-[80px] max-w-5xl flex-row" +
          (transition.transitioning ? " animate-m-exit" : " animate-m-enter")
        }
      >
        <div className="flex grow flex-col md:flex-row justify-start md:justify-center items-center min-h-0 md:min-h-[calc(90%-80px)] gap-6 pt-8 md:pt-0 px-8">
          {children}
        </div>
      </div>
    </div>
  );
}
