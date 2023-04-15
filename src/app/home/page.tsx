import Navbar from "../core/components/navbar";
import SectionTypography from "../core/components/section_typography";
import FrameworkButton from "../my_stack/components/framework_button";
import NextJsButton from "../my_stack/components/nextjs_button";
import Avatar from "./components/avatar";
import BackgroundAnimation from "./components/background_animation";
import Headline from "./components/head_line";
import HireMeButton from "./components/hire_me_button";
import SplineScene from "./components/spline";
import StackTable from "./components/stack_table";

export default function HomePage() {
  return (
    <>
      <BackgroundAnimation className=" top-0 absolute z-0 w-full h-20" />
      <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-24 relative">
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
            {/* <Avatar className="hidden sm:block" /> */}
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum." Section
            1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45
            BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </h3>
          <Avatar />
          <SectionTypography className=" w-full mt-12">
            My stack
          </SectionTypography>
          <StackTable className="mt-2" />
        </div>
      </main>
    </>
  );
}
