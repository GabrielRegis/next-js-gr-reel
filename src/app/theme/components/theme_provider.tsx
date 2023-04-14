"use client";

import { useAtomValue } from "jotai";
import themeAtom from "../atoms/current_theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useAtomValue(themeAtom);
  return <div className={`theme-${theme}`}>{children}</div>;
}
