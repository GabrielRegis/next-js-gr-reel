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
    className=" rounded-full overflow-clip outline outline-primary outline-offset-4 outline-3 hover:outline-offset-2 hover:bg-primary select-none transition-all w-[50px] aspect-square sm:w-[100px]"
    rel="noopener noreferrer"
    target="_blank"
    href={props.href ?? ""}
    draggable="false"
  >
    <Image
      src={props.src ?? ""}
      alt={""}
      width={100}
      height={100}
      draggable="false"
    />
  </Link>
);

export default WorkExperienceButton;
