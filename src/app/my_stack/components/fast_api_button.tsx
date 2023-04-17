import AppProps from "@/app/core/models/app_props";
import FrameworkButton from "./framework_button";

interface FastApiButtonProps extends AppProps {
  className?: string;
}

const FastApiButton: React.FC<FastApiButtonProps> = (props) => (
  <FrameworkButton
    className={props.className}
    src="/fastapi.svg"
    href="https://fastapi.tiangolo.com/"
  />
);

export default FastApiButton;
