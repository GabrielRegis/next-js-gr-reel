import AppProps from "@/app/core/models/app_props";
import Link from "next/link";

interface HireMeButtonProps extends AppProps {
  className?: string;
}

const HireMeButton: React.FC<HireMeButtonProps> = (props) => (
  <Link
    href={"https://www.linkedin.com/in/gabriel-regis-941618152/"}
    rel="noopener noreferrer"
    target="_blank"
    className={
      "px-10 py-3 rounded-full bg-primary font-bold hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.04] transition-all text-white " +
      props.className
    }
  >
    Hire me!
  </Link>
);

export default HireMeButton;
