import AppProps from "../models/app_props";

type HorizontalDividerProps = {
  className?: string;
} & AppProps;

const HorizontalDivider = (props: HorizontalDividerProps) => (
  <div
    className={"h-[1px] bg-on-background/20 rounded-lg " + props.className}
  />
);

export default HorizontalDivider;
