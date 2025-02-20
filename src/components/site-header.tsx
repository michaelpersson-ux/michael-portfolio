"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Bird, Link } from "lucide-react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { Button } from "./ui/button";

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
    <div className="flex justify-center bg-primary">
      <div className="p-3 flex w-screen max-w-5xl flex-row items-center text-primary-foreground justify-between">
        <div className="flex flex-row items-center h-6 gap-2">
          <Bird />
          <p className="font-bold text-xl">Michael Persson</p>
          <Separator orientation="vertical" />
          <p className="font-light antialiased text-xl">UX Portfolio</p>
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
