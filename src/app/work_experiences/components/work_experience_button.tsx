import AppProps from "@/app/core/models/app_props";
import Link from "next/link";
import Image from "next/image";

interface WorkExperienceButtonProps extends AppProps {
  className?: string;
  src?: string;
  href?: string;
}

const WorkExperienceButton: React.FC<WorkExperienceButtonProps> = (props) => (
  <Link
    className={
      "rounded-2xl overflow-clip shadow-xl select-none transition-all w-[100px] aspect-square sm:w-[120px] " +
      props.className
    }
    rel="noopener noreferrer"
    target="_blank"
    href={props.href ?? ""}
    draggable="false"
  >
    <Image
      src={props.src ?? ""}
      alt={""}
      width={120}
      height={120}
      draggable="false"
    />
  </Link>
);

export default WorkExperienceButton;
