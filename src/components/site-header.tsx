"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Gem } from "lucide-react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import TransitionHelper from "@/components/transition-helper";

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
    <div className="flex justify-center w-full h-[80px] bg-primary">
      <div className="px-6 flex w-full max-w-5xl flex-row items-center text-primary-foreground justify-between z-10">
        <TransitionHelper url={"/"}>
          <div className="flex flex-row items-center gap-2">
            <Gem />
            <p className="font-bold text-xl">Michael Persson</p>
            <p className="font-light text-xl">UX</p>
          </div>
        </TransitionHelper>
        <div className="flex items-center gap-2">
          <div>
            {themeMode != "light" ? (
              <Moon className="w-6" />
            ) : (
              <Sun className="w-6" />
            )}
          </div>
          <Switch
            className="invert data-[state=unchecked]:bg-primary"
            checked={themeMode === "light"}
            onCheckedChange={toggleTheme}
          />
        </div>
      </div>
    </div>
  );
}
