import prisma from "@/app/api/prisma";
import { Framework } from "@prisma/client";
import { atom } from "jotai";
import { loadable } from "jotai/utils";

const stackAtom = atom<Framework[]>([]);

const currentStackAtom = loadable(
  atom(async (get) => {
    const f = await fetch("api/frameworks/");
    const frameworks: Framework[] = await f.json();
    return get(stackAtom).concat(frameworks.filter((f, i) => f.isCurrent));
  })
);

export default currentStackAtom;
