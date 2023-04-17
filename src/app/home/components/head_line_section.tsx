import AppProps from "@/app/core/models/app_props";
import Avatar from "./avatar";
import Headline from "./head_line";
import HireMeButton from "./hire_me_button";

interface HeadlineSectionProps extends AppProps {
  className?: string;
}

const HeadlineSection: React.FC<HeadlineSectionProps> = (props) => (
  <>
    <div
      className="content-between justify-between items-center
flex flex-row pt-8 gap-4 sm:gap-10 relative"
    >
      <div className="flex flex-col items-start z-10">
        <Avatar className="sm:hidden self-center h-[180px]" />
        <Headline className="text-center my-10 sm:my-0 sm:text-left " />
        <HireMeButton className="self-center sm:mt-8 sm:block sm:self-baseline " />
      </div>
      <Avatar className=" hidden sm:block" />
    </div>
    <h3 className="mt-12 leading-[2.5] tracking-tight text-lg">
      {" I'm a senior "}
      <strong className=" decoration-blue-400 underline underline-offset-3">
        {"Frontend developer "}
      </strong>
      {" and "}
      <strong className=" decoration-pink-400 underline underline-offset-3">
        {"Tech Manager"}
      </strong>
      {
        " with 5 years of experience, having worked with over 12 different applications. I have experience leading a team of 3 frontend developers and 4 backend developers, and knowledge in Swift, React Native, ReactJS, FastAPI, AWS services, NextJs and product health metrics management and monitoring. I'm constantly seeking to improve my skills and learn new technologies to contribute to the company's success."
      }
    </h3>
  </>
);

export default HeadlineSection;
