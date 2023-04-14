interface SwitchProps {
  isEnabled: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

export default function Switch(props: SwitchProps) {
  return (
    <button onClick={props.onClick}>
      <div
        className={"bg-on-background p-1 w-10 rounded-2xl flex justify-center"}
      >
        <div
          className={
            "bg-background rounded-lg transition-all p-[2px] " +
            (props.isEnabled ? "translate-x-2" : "-translate-x-2")
          }
        >
          {props.children}
        </div>
      </div>
    </button>
  );
}
