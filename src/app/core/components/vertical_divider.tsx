import AppProps from "../models/app_props";

interface VerticalDividerProps extends AppProps {
  className?: string;
}

const VerticalDivider: React.FC<VerticalDividerProps> = (props) => (
  <div
    className={"w-[1px] bg-on-background/20 rounded-lg " + props.className}
  />
);

export default VerticalDivider;
