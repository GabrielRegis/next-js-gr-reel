import AppProps from "../models/app_props";

interface HorizontalDividerProps extends AppProps {
  className?: string;
}

const HorizontalDivider: React.FC<HorizontalDividerProps> = (props) => (
  <div
    className={"h-[1px] bg-on-background/20 rounded-lg " + props.className}
  />
);

export default HorizontalDivider;
