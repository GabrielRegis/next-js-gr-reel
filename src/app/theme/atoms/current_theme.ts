import { atom } from "jotai";

const themeAtom = atom<'dark'|'light'>('dark')

export default themeAtom
