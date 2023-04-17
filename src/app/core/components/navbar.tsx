import LinkedInButton from "@/app/my_links/components/linkedin_button";
import ThemeButton from "@/app/theme/components/theme_button";
import Link from "next/link";

const Navbar: React.FC = (props) => (
  <nav className="fixed left-0 top-0 w-full p-4 backdrop-blur-xl flex justify-between flex-row z-20">
    <h1 className="font-black tracking-tight hover:tracking-wide transition-all">
      <Link href={"/"}>
        <h1 className="text-on-background first-letter:text-primary text-lg">
          GR
        </h1>
      </Link>
    </h1>
    <span className="flex flex-row justify-center items-center">
      <span className="pr-2">
        <ThemeButton />
      </span>
      <LinkedInButton />
    </span>
  </nav>
);

export default Navbar;