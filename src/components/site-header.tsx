"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { Gem } from "lucide-react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

export function SiteHeader() {
  const { setTheme } = useTheme();
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  };

  useEffect(() => {
    setTheme(themeMode);
  }, [themeMode]);

  return (
    <div className="flex justify-center w-screen h-[80px] bg-primary z-10">
      <div className="px-6 flex w-full max-w-5xl flex-row items-center text-primary-foreground justify-between">
        <div className="flex flex-row items-center gap-2">
          <Link
            href="/"
            rel="noopener noreferrer"
            className="flex items-center gap-2 select-none"
          >
            <Gem />
            <p className="font-bold text-xl">Michael Persson</p>
            <p className="font-light text-xl">UX</p>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <div>
            {themeMode != "light" ? (
              <Moon className="w-6" />
            ) : (
              <Sun className="w-6" />
            )}
          </div>
          <Switch
            className={"invert data-[state=unchecked]:bg-primary"}
            checked={themeMode === "light"}
            onCheckedChange={toggleTheme}
          />
        </div>
      </div>
    </div>
  );
}
