import Tag from "@/app/core/components/tag";
import Image from "next/image";
import AppProps from "@/app/core/models/app_props";
import { motion } from "framer-motion";
import SSRMotion from "@/app/core/components/motion_div";
import MotionDiv from "@/app/core/components/motion_div";

type AvatarProps = {
  className?: string;
} & AppProps;

const Avatar = (props: AvatarProps) => {
  return (
    <MotionDiv
      className={
        "h-[150px] md:h-[230px] lg:h-[250px] aspect-square object-cover rounded-full transition-all relative " +
        props.className
      }
    >
      <div className="flex flex-row justify-between absolute inset-x-[-30px] sm:inset-x-[-50px] inset-y-0 scale-y-50">
        {Array.from({ length: 13 }, (value, index) => index).map((v, i) => (
          <div
            key={v}
            className={
              "w-[5.5px] rounded-full odd:bg-primary odd:scale-y-50 even:bg-primary/20"
            }
          />
        ))}
      </div>
      <Tag className="absolute z-1 -right-20 top-5 rounded-3xl rounded-bl-sm bg-primary text-white animate-waving-up-down ">
        Hey, I'm Gab!
      </Tag>
      <Image
        className={" rounded-full shadow-2xl relative"}
        draggable="false"
        src={"/me_b.jpg"}
        width={250}
        height={250}
        quality={100}
        alt={"Profile image"}
      />
    </MotionDiv>
  );
};

export default Avatar;
