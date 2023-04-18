"use client";
import VerticalDivider from "@/app/core/components/vertical_divider";
import AppProps from "@/app/core/models/app_props";
import FrameworkButton from "@/app/my_stack/components/framework_button";
import { useAtom, useAtomValue } from "jotai";
import currentStackAtom from "../atoms/my_current_stack";

interface StackTableProps extends AppProps {
  className?: string;
}

const StackTable: React.FC<StackTableProps> = (props) => {
  const [currentStack] = useAtom(currentStackAtom);
  return (
    <div className="grid grid-flow-col justify-start gap-4 w-full mt-4">
      {currentStack.state === "hasData" ? (
        currentStack.data.map((stack, index) => {
          return (
            <FrameworkButton
              key={index}
              src={stack.imageSrc}
              href={stack.href}
            />
          );
        })
      ) : (
        <div className=" grid ">
          <div className="w-[30px] aspect-square bg-white rounded-full animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

export default StackTable;
