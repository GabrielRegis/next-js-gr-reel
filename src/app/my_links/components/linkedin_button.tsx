import AppProps from "@/app/core/models/app_props";
import Link from "next/link";

const LinkedInIcon = (props: any) => (
  <svg
    className="fill-on-background"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    {...props}
  >
    <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
  </svg>
);

interface LinkedInButtonProps extends AppProps {
  className?: string;
}

const LinkedInButton: React.FC<LinkedInButtonProps> = (props) => (
  <Link
    href={"https://www.linkedin.com/in/gabriel-regis-941618152/"}
    rel="noopener noreferrer"
    target="_blank"
  >
    {<LinkedInIcon />}
  </Link>
);

export default LinkedInButton;
