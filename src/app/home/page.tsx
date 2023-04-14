import Navbar from "../core/components/navbar";
import SectionTypography from "../core/components/section_typography";
import FrameworkButton from "../my_stack/components/framework_button";
import NextJsButton from "../my_stack/components/nextjs_button";
import Avatar from "./components/avatar";
import Headline from "./components/head_line";
import HireMeButton from "./components/hire_me_button";
import SplineScene from "./components/spline";
import StackTable from "./components/stack_table";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-24">
      <Navbar />
      <div className="max-w-4xl flex flex-col justify-center items-center">
        <div
          className="content-between justify-between items-center
      flex flex-row max-h-fit pt-8 gap-4 sm:gap-10"
        >
          <div className="flex flex-col items-start">
            <Headline />
            <HireMeButton className=" mt-8" />
          </div>
          <Avatar className="hidden sm:block" />
        </div>
        <h3 className="mt-12 leading-[2.5] tracking-tight text-lg">
          {" I'm a senior "}
          <strong className=" decoration-blue-400 underline underline-offset-3">
            {"Frontend"}
          </strong>
          {" developer and "}
          <strong className=" decoration-pink-400 underline underline-offset-3">
            {"Tech Manager"}
          </strong>
          {
            " with 5 years of experience, having worked with over 12 different applications. I have experience leading a team of 3 frontend developers and 4 backend developers, and knowledge in Swift, React Native, ReactJS, FastAPI, AWS services, and product health metrics management and monitoring. I'm constantly seeking to improve my skills and learn new technologies to contribute to the company's success."
          }
        </h3>
        <SectionTypography className=" w-full mt-12">
          My stack
        </SectionTypography>
        <StackTable className="mt-2" />
      </div>
    </main>
  );
}
