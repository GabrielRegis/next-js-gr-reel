"use client";

import { Provider } from "jotai";
import { ThemeProvider } from "./theme/components/theme_provider";
import AppProps from "./core/models/app_props";


interface ProvidersProps extends AppProps {
  className?: string;
}

const Providers: React.FC<ProvidersProps> = (props) => (
  <Provider>{<ThemeProvider>{props.children}</ThemeProvider>}</Provider>
);

export default Providers;
