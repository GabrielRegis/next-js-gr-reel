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

const HomePage: React.FC = (props) => (
  <>
    {/* <BackgroundAnimation className=" top-0 absolute z-0 w-full h-20" /> */}
    <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-24 relative">
      <Navbar />
      <div className="max-w-4xl flex flex-col justify-center items-center">
        <HeadlineSection />
        <SectionTypography className=" w-full mt-12">
          Work experience
        </SectionTypography>
        <div className=" flex flex-col-reverse sm:flex-row gap-4 content-center items-center w-full justify-between m-6 ">
          <div className="flex flex-col items-center content-center bg-on-background/[.08] backdrop-blur-xl shadow-xl shadow-black/5 p-4 rounded-xl">
            <Tag className="mb-4">Junior Developer</Tag>
            <WorkExperienceButton
              href="https://www.linkedin.com/company/esparta-tecnologia-e-inova%C3%A7%C3%A3o/"
              src="/esparta.jpg"
            />
            <div className=" flex flex-wrap items-center justify-center content-center gap-3 mt-4 inset-0">
              <SwiftButton className="w-[35.0px]" />
              <ReactButton className="w-[35.0px]" />
            </div>
          </div>
          <div className=" flex flex-col flex-1 relative ">
            <h4 className=" text-xs font-black absolute -top-[20px] inset-x-0 text-center">
              2018 - 2019
            </h4>
            <div className="grow border-1 border-primary border border-dashed" />
          </div>

          <div className="flex flex-col items-center content-center bg-on-background/[.08] backdrop-blur-xl shadow-xl shadow-black/5 p-4 rounded-xl">
            <Tag className="mb-4">Mid Developer</Tag>
            <WorkExperienceButton
              href="https://www.linkedin.com/company/pixelwolf/"
              src="/pixelwolf.jpg"
            />
            <div className=" flex flex-wrap items-center justify-center content-center gap-3 mt-4 inset-0">
              <ReactButton className="w-[35.0px]" />
              <FlutterButton className="w-[35.0px]" />
            </div>
          </div>
          <div className="grow border-1 border-primary border border-dashed" />

          <div className="flex flex-col items-center content-center bg-on-background/[.08] backdrop-blur-xl shadow-xl shadow-black/5 p-4 rounded-xl">
            <Tag className="mb-4">Senior Developer</Tag>
            <WorkExperienceButton
              href="https://www.linkedin.com/company/fluencyacademy/mycompany/verification/"
              src="/fluency.jpg"
            />
            <div className=" flex flex-wrap items-center justify-center content-center gap-3 mt-4  inset-0">
              <FlutterButton className="w-[35.0px]" />
              <NextJsButton className="w-[35.0px]" />
              <FastApiButton className="w-[35.0px]" />
            </div>
          </div>
        </div>
        <SectionTypography className=" w-full mt-12">
          My current stack
        </SectionTypography>
        <StackTable className="mt-6" />
      </div>
    </main>
  </>
);

export default HomePage;
