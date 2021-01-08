import React, { ReactElement } from "react";
import "../assets/css/base/Checkbox.scss";

interface RadioButtonObj {
  radiobuttonList: {
    id: string;
    placeholder: string;
  };
  radiobuttonType?: string;
  style?: React.CSSProperties;
  name: string;
  disabled?: boolean;
}

const RadioButton: React.FC<RadioButtonObj> = (props): ReactElement => {
  const { radiobuttonList, disabled, name, radiobuttonType, style } = props;
  const list = Object.keys(radiobuttonList).map((item, i) => {
    return (
      <div>
        <input
          type="radio"
          id={`radio-${radiobuttonList[i].id}`}
          name={name}
          disabled={disabled}
        />
        <label htmlFor={`radio-${radiobuttonList[i].id}`}>
          {radiobuttonList[i].placeholder}
        </label>
      </div>
    );
  });
  return (
    <div
      style={style}
      className={[`checkbox-type-${radiobuttonType}`].join(" ")}>
      {list}
    </div>
  );
};

export default RadioButton;
