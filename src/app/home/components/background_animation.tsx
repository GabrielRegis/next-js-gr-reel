"use client";
import Rive from "@rive-app/react-canvas";
import AppProps from "@/app/core/models/app_props";

interface BackgroundAnimationProps extends AppProps {
  className?: string;
}

const BackgroundAnimation: React.FC<BackgroundAnimationProps> = (props) => (
  <Rive
    className={props.className}
    src="https://cdn.rive.app/animations/vehicles.riv"
  />
);

export default BackgroundAnimation;
