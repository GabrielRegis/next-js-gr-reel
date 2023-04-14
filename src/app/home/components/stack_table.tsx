import VerticalDivider from "@/app/core/components/vertical_divider";
import AppProps from "@/app/core/models/app_props";
import FrameworkButton from "@/app/my_stack/components/framework_button";
import NextJsButton from "@/app/my_stack/components/nextjs_button";
import Image from "next/image";

interface StackTableProps extends AppProps {
  className?: string;
}

const StackTable: React.FC<StackTableProps> = (props) => (
  <div className="grid grid-flow-col justify-start gap-4 w-full mt-4">
    <FrameworkButton src="/flutter.png" href="https://flutter.dev/" />
    <NextJsButton />
    <FrameworkButton src="/react.svg" href="https://react.dev/" />
    <FrameworkButton src="/python.png" href="https://www.python.org/" />
    <FrameworkButton src="/fastapi.svg" href="https://fastapi.tiangolo.com/" />
  </div>
);

export default StackTable;
