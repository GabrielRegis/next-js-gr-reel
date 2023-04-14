import AppProps from "@/app/core/models/app_props";
import Image from "next/image";
import Link from "next/link";

interface FrameworkButtonProps extends AppProps {
  className?: string;
  src?: string;
  href?: string;
}

const FrameworkButton: React.FC<FrameworkButtonProps> = (props) => (
  <Link
    className="p-2 rounded-full bg-on-background aspect-square w-[50px] outline outline-primary outline-offset-1 outline-1 hover:outline-offset-2 hover:bg-primary transition-all"
    href={props.href ?? ""}
    rel="noopener noreferrer"
    target="_blank"
  >
    {props.src == null ? (
      props.children
    ) : (
      <Image
        className="aspect-square object-contain"
        src={props.src}
        width={50}
        height={50}
        alt={"Flutter logo"}
      />
    )}
  </Link>
);

export default FrameworkButton;
