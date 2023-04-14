"use client";
import AppProps from "@/app/core/models/app_props";
import Spline from "@splinetool/react-spline";

interface SplineSceneProps extends AppProps {
  className?: string;
}

const SplineScene: React.FC<SplineSceneProps> = (props) => (
  <Spline scene="https://prod.spline.design/ObQJeCsmmmxhIl6S/scene.splinecode" />
);

export default SplineScene;
