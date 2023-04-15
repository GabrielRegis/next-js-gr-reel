"use client";
import AppProps from "@/app/core/models/app_props";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { InView } from "react-intersection-observer";

interface AvatarProps extends AppProps {
  className?: string;
}

const Avatar: React.FC<AvatarProps> = (props) => (
  <Image
    className={
      "h-[150px] md:h-[230px] lg:h-[300px] object-cover rounded-[150px] shadow-2xl outline outline-primary outline-offset-4 aspect-square " +
      props.className
    }
    src={"/me_b.jpg"}
    width={300}
    height={300}
    alt={"Profile image"}
  />
);

export default Avatar;
