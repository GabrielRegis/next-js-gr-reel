import HorizontalDivider from "../core/components/horizontal_divider";
import Navbar from "../core/components/navbar";
import SectionTypography from "../core/components/section_typography";
import Tag from "../core/components/tag";
import NextJsButton from "../my_stack/components/nextjs_button";
import WorkExperienceButton from "../work_experiences/components/work_experience_button";
import Avatar from "./components/avatar";
import Headline from "./components/head_line";
import HireMeButton from "./components/hire_me_button";
import StackTable from "../my_stack/components/stack_table";
import FlutterButton from "../my_stack/components/flutter_button";
import ReactButton from "../my_stack/components/react_button";
import SwiftButton from "../my_stack/components/swift_button";
import FastApiButton from "../my_stack/components/fast_api_button";
import HeadlineSection from "./components/head_line_section";
import WorkExperiencesList from "../work_experiences/components/work_experiences_list";
import Link from "next/link";

const HomePage: React.FC = (props) => (
  <>
    {/* <BackgroundAnimation className=" top-0 absolute z-0 w-full h-20" /> */}
    <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-24 relative">
      <Navbar />
      <div className="max-w-4xl flex flex-col justify-center items-center">
        <HeadlineSection />
        <SectionTypography className=" w-full mt-12 mb-6">
          Work experience
        </SectionTypography>
        <WorkExperiencesList />

        {/* <SectionTypography className=" w-full mt-12">
          My current stack
        </SectionTypography>
        <StackTable className="mt-6" /> */}
      </div>
    </main>
  </>
);

export default HomePage;
