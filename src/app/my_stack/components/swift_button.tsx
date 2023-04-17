import AppProps from "@/app/core/models/app_props";
import FrameworkButton from "./framework_button";

interface SwiftButtonProps extends AppProps {
  className?: string;
}

const SwiftButton: React.FC<SwiftButtonProps> = (props) => (
  <FrameworkButton
    className={props.className}
    src="/swift.png"
    href="https://www.apple.com/swift/"
  />
);

export default SwiftButton;
