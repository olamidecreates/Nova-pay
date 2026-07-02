"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/70 transition hover:bg-ink/5 dark:border-white/10 dark:text-white/70 dark:hover:bg-white/5"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
