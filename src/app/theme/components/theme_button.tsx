"use client";
import { useAtomValue, useSetAtom } from "jotai";
import themeAtom from "../atoms/current_theme";
import Switch from "@/app/core/components/switch";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import AppProps from "@/app/core/models/app_props";

interface ThemeButtonProps extends AppProps {
  className?: string;
}

const ThemeButton: React.FC<ThemeButtonProps> = (props) => {
  const setTheme = useSetAtom(themeAtom);
  const theme = useAtomValue(themeAtom);
  const toggle = () => setTheme(theme == "dark" ? "light" : "dark");
  const isDarkModeEnabled = theme === "dark";

  return (
    <div onClick={toggle} className="flex flex-row items-center">
      <Switch isEnabled={isDarkModeEnabled} onClick={toggle}>
        {!isDarkModeEnabled ? (
          <MdLightMode size={12} />
        ) : (
          <MdDarkMode size={12} />
        )}
      </Switch>
    </div>
  );
};

export default ThemeButton;


