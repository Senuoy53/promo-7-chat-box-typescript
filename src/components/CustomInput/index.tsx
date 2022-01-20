import { CustomInputWrapper } from "./CustomInputWrapper";

const CustomInput = ({
  value,
  placeholder,
  onChange,
  onKeyPress,
}: CustomInputProps) => {
  return (
    <CustomInputWrapper
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};

export default CustomInput;
