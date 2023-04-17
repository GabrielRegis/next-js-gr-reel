import { atom } from "jotai";

const themeAtom = atom<"dark" | "light">("light");

export default themeAtom;
