"use client";
import AppProps from "@/app/core/models/app_props";
import { motion, HTMLMotionProps, ForwardRefComponent } from "framer-motion";

type MotionDivProps = {} & AppProps & HTMLMotionProps<"div">;

const MotionDiv = (props: MotionDivProps) => {
  return <motion.div {...props}>{props.children}</motion.div>;
};

export default MotionDiv;
