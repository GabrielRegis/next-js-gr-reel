import AppProps from "@/app/core/models/app_props";
import FrameworkButton from "./framework_button";

interface ReactButtonProps extends AppProps {
  className?: string;
}

const ReactButton: React.FC<ReactButtonProps> = (props) => (
  <FrameworkButton
    className={props.className}
    src="/react.svg"
    href="https://react.dev/"
  />
);

export default ReactButton;
