"use client";
import { useAtom } from "jotai";
import AppProps from "../core/models/app_props";
import currentExperiencesAtom from "../work_experiences/atoms/current_work_experiences";

type AboutMePageProps = {
  className?: string;
} & AppProps;

const AboutMePage = (props: AboutMePageProps) => {
  const [currentExperiences] = useAtom(currentExperiencesAtom);
  return (
    <h1>
      {currentExperiences.state === "hasData" ? (
        currentExperiences.data.length
      ) : (
        <h1> Loading</h1>
      )}
    </h1>
  );
};

export default AboutMePage;
