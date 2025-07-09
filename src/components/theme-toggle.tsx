"use client";

import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Sparkles, Circle } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState("glow");

  useEffect(() => {
    const storedTheme = localStorage.getItem("app-theme") || "glow";
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

  const handleThemeChange = (isGlow: boolean) => {
    const newTheme = isGlow ? "glow" : "original-dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("app-theme", newTheme);
  };

  return (
    <div className="flex items-center justify-center gap-3 p-2 group-data-[collapsible=icon]:hidden">
      <div className="flex items-center gap-1.5 text-muted-foreground">
        <Circle className="h-4 w-4" />
        <Label htmlFor="theme-switch" className="text-xs">Original</Label>
      </div>
      <Switch
        id="theme-switch"
        checked={theme === "glow"}
        onCheckedChange={handleThemeChange}
      />
      <div className="flex items-center gap-1.5 text-primary">
        <Sparkles className="h-4 w-4" />
        <Label htmlFor="theme-switch" className="text-xs">Glow</Label>
      </div>
    </div>
  );
}
