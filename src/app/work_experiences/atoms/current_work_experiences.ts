import prisma from "@/app/api/prisma";
import { Framework, WorkExperience } from "@prisma/client";
import { atom } from "jotai";
import { loadable } from "jotai/utils";

const experiencesAtom = atom<
  (WorkExperience & {
    Framework: Framework[];
  })[]
>([]);

const currentExperiencesAtom = loadable(
  atom(async (get) => {
    const e = await fetch("api/experiences/");
    const experiences: (WorkExperience & {
      Framework: Framework[];
    })[] = await e.json();
    return get(experiencesAtom).concat(
      experiences.sort((a, b) => (a.fromYear < b.fromYear ? 1 : -1))
    );
  })
);

export default currentExperiencesAtom;
