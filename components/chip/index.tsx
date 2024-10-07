import { CSSProperties, FC } from "react";

interface Props {
  selected: boolean;
  text: string;
  onClicked?: () => void;
}

export const Chip: FC<Props> = ({ text, selected, onClicked }) => {
  const unselectedCSS: CSSProperties = {
    border: "1px solid #E0E0E0",
    borderRadius: 16,
    padding: "4px 16px",
    cursor: "pointer",
  };

  const selectedCSS: CSSProperties = {
    border: "1px solid #E0E0E0",
    borderRadius: 16,
    padding: "4px 16px",
    cursor: "pointer",
    color: "#fff",
    backgroundColor: "#ee7100",
  };

  return (
    <div onClick={onClicked} style={selected ? selectedCSS : unselectedCSS}>
      {text}
    </div>
  );
};
   /*  */