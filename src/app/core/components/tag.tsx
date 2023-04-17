import AppProps from "../models/app_props";

interface TagProps extends AppProps {
  className?: string;
}

const Tag: React.FC<TagProps> = (props) => (
  <div
    className={
      "px-2 py-[2px] bg-on-background rounded-md text-xs font-medium text-background " +
      props.className
    }
  >
    {props.children}
  </div>
);

export default Tag;
