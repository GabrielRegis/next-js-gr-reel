"use client";

import { Provider } from "jotai";
import { ThemeProvider } from "./theme/components/theme_provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider>{<ThemeProvider>{children}</ThemeProvider>}</Provider>;
}
