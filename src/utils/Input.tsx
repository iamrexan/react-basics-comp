import React, { ReactElement } from "react";

interface inputObj {
  style?: React.CSSProperties;
  placeholder?: string;
  disabled?: boolean;
}

const Input: React.FC<inputObj> = (props): ReactElement => {
  const { placeholder, style, disabled } = props;
  return <input placeholder={placeholder} style={style} disabled={disabled} />;
};

export default Input;
