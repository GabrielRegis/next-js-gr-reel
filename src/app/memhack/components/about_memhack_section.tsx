import AppProps from "@/app/core/models/app_props";
import Image from "next/image";
interface AboutMemhackSectionProps extends AppProps {
  className?: string;
}

const AboutMemhackSection: React.FC<AboutMemhackSectionProps> = (props) => {
  return (
    <div
      className={
        "p-8 rounded-3xl bg-memhack-primary w-full shadow-2xl shadow-memhack-primary/30 flex flex-col gap-4 " +
        props.className
      }
    >
      <Image
        className="w-[100px] sm:w-[150px] ml-4"
        src={"/memhack.png"}
        alt={""}
        width={150}
        height={80}
      />
      <div className="flex flex-row gap-4">
        <div className="relative w-fit h-fit">
          <div className="absolute inset-0 shadow-2xl shadow-black/50 rounded-3xl m-6 z-10" />
          <Image
            className=" z-20"
            src={"/memhack_lib.png"}
            alt={""}
            width={300}
            quality={100}
            height={800}
          />
        </div>
        <h3 className="flex-1">
          {
            "Memhack is a language learning app that utilizes an advanced SRS algorithm to enhance memory retention through spaced repetition. Designed to serve as a valuable tool for Fluency Academy students, Memhack enables learners to easily recall and reinforce the content learned in class through interactive decks and flashcards. With the app available on iOS, Android, and the web, learners can access Memhack anytime, anywhere, making language learning more accessible and convenient than ever before."
          }
        </h3>
      </div>
    </div>
  );
};

export default AboutMemhackSection;
