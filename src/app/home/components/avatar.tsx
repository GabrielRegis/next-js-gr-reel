"use client";
import Tag from "@/app/core/components/tag";
import AppProps from "@/app/core/models/app_props";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { InView } from "react-intersection-observer";

interface AvatarProps extends AppProps {
  className?: string;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <div
      className={
        "h-[150px] md:h-[230px] lg:h-[250px] aspect-square object-cover rounded-full transition-all relative " +
        props.className
      }
    >
      <div className="flex flex-row justify-between absolute inset-x-[-60px] inset-y-0 scale-y-50">
        {Array.from({ length: 13 }, (value, index) => index).map((v, i) => (
          <div
            key={v}
            className={
              " w-[5.5px] rounded-full odd:bg-primary odd:scale-y-50 even:bg-primary/20 "
            }
          />
        ))}
      </div>
      <Tag className="absolute z-1 -right-20 top-5 rounded-3xl rounded-bl-sm bg-primary text-white">
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
    </div>
  );
};

export default Avatar;
