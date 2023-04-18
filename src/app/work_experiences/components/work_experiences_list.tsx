"use client";

import Tag from "@/app/core/components/tag";
import AppProps from "@/app/core/models/app_props";
import ReactButton from "@/app/my_stack/components/react_button";
import SwiftButton from "@/app/my_stack/components/swift_button";
import currentExperiencesAtom from "../atoms/current_work_experiences";
import WorkExperienceButton from "./work_experience_button";
import { useAtom } from "jotai";
import FrameworkButton from "@/app/my_stack/components/framework_button";

interface WorkExperiencesListProps extends AppProps {
  className?: string;
}

const WorkExperiencesList: React.FC<WorkExperiencesListProps> = (props) => {
  const [currentExperiences] = useAtom(currentExperiencesAtom);

  return (
    <div className="flex flex-col md:flex-row-reverse justify-end content-start w-full gap-8 md:gap-12">
      {currentExperiences.state === "hasData" ? (
        currentExperiences.data.map((w, i) => (
          <div
            key={i}
            className="flex flex-row items-center rounded-md gap-6 md:flex-col md:max-w-[150px]"
          >
            <WorkExperienceButton
              href={w.companyUrl ?? ""}
              src={w.imageSrc ?? ""}
            />

            <div className="flex flex-col font-medium text-on-background">
              <h4 className="text-sm ">{w.title}</h4>
              <h3 className="mb-2">{w.companyName}</h3>
              <Tag className="text-[10px] w-fit">
                {w.fromYear +
                  (w.toYear != null ? " - " + w.toYear : " - Current")}
              </Tag>
              <div className=" flex flex-wrap gap-2 mt-4">
                {w.Framework.map((f, i) => (
                  <FrameworkButton
                    key={f.name + i}
                    src={f.imageSrc}
                    href={f.href}
                    className="w-[36px]"
                  />
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default WorkExperiencesList;
