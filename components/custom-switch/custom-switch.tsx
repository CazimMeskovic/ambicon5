
import { FC } from "react";
import Switch from "react-switch";

interface Props {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;  
}  

export const CustomSwitch: FC<Props> = ({ checked, onChange, disabled }) => {
  return (
    <Switch
      checkedIcon={false}
      uncheckedIcon={false}
      onChange={onChange}
      checked={checked}
      disabled={disabled}
    />
  );
};

export default CustomSwitch;
