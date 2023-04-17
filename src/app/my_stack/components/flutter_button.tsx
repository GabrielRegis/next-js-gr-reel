import AppProps from "@/app/core/models/app_props";
import FrameworkButton from "./framework_button";

interface FlutterButtonProps extends AppProps {
  className?: string;
}

const FlutterButton: React.FC<FlutterButtonProps> = (props) => (
  <FrameworkButton
    className={props.className}
    src="/flutter.png"
    href="https://flutter.dev/"
  />
);

export default FlutterButton;
