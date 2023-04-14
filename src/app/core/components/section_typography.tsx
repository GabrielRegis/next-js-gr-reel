import AppProps from "../models/app_props";

interface SectionTypographyProps extends AppProps {
  className?: string;
}

const SectionTypography: React.FC<SectionTypographyProps> = (props) => (
  <h1
    className={
      "text-xl sm:text-2xl md:text-3xl antialiased font-black tracking-tight text-on-background hover:text-primary transition-all first-letter:text-primary text-left " +
      props.className
    }
  >
    {props.children}
  </h1>
);

export default SectionTypography;
