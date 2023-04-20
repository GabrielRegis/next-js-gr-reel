import Navbar from "../core/components/navbar";
import SectionTypography from "../core/components/section_typography";
import AboutMemhackSection from "../memhack/components/about_memhack_section";
import WorkExperiencesList from "../work_experiences/components/work_experiences_list";
import HeadlineSection from "./components/head_line_section";

const HomePage: React.FC = (props) => (
  <>
    <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-24 relative">
      <Navbar />
      <div className="max-w-4xl flex flex-col justify-center items-center">
        <HeadlineSection />
        <SectionTypography className=" w-full mt-12 mb-6">
          Work experience
        </SectionTypography>
        <WorkExperiencesList />

        {/* Future work */}
        {/* <AboutMemhackSection className=" mt-8" /> */}
        {/* <SectionTypography className=" w-full mt-12">
          My current stack
        </SectionTypography>
        <StackTable className="mt-6" /> */}
      </div>
    </main>
  </>
);

export default HomePage;
