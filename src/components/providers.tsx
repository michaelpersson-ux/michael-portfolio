"use client";
import React from "react";
import { ThemeProvider } from "./theme-provider";
import { TransitionContextProvider } from "@/components/transition-context";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TransitionContextProvider>{children}</TransitionContextProvider>
    </ThemeProvider>
  );
}
