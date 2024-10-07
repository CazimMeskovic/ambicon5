
import React, { FC, useState } from "react";
import { CustomSwitch } from "../../custom-switch/custom-switch"; 
import styles from "./text-switch.module.scss";

interface SliderTextProps {
  onChange: () => void;
  initialChecked: boolean;
  header: string;
  text: string;
  locked?: boolean;
  disabled?: boolean; 
}

const TextSwitch: FC<SliderTextProps> = ({ onChange, initialChecked, header, text, locked, disabled }) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = () => {
    if (!locked) {
      setChecked(!checked);
    }
    onChange();
  };

  return (
    <div className={styles.container}>
      <CustomSwitch checked={checked} onChange={handleChange} disabled={!!disabled} />
      <div>
        <h4 className={styles.header}>{header}</h4>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default TextSwitch;
