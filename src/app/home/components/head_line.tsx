import AppProps from "@/app/core/models/app_props";

interface HeadlineProps extends AppProps {
  className?: string;
}

const Headline: React.FC<HeadlineProps> = (props) => (
  <h1
    className="text-3xl sm:text-4xl md:text-5xl antialiased font-black tracking-tight 
    text-on-background hover:text-primary transition-all first-letter:text-primary text-left"
  >
    Leadership and high-performing apps
  </h1>
);

export default Headline;

