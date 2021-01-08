import React, { ReactElement } from "react";
import "../assets/css/base/Checkbox.scss";

interface CheckboxObj {
  checkboxList: ChecklistObj;
  checkBoxListType?: string;
  style?: React.CSSProperties;
  name: string;
  disabled?: boolean;
}

interface ChecklistObj {
  [index: number]: { id?: number | string; placeholder: string };
}

const Checkbox: React.FC<CheckboxObj> = (props): ReactElement => {
  const { checkboxList, name, disabled, style, checkBoxListType } = props;
  const list = Object.keys(checkboxList).map((item, i) => {
    return (
      <div>
        <input
          type="checkbox"
          id={`checkbox-${checkboxList[i].id}`}
          name={name}
          disabled={disabled}
        />
        <label htmlFor={`checkbox-${checkboxList[i].id}`}>
          {checkboxList[i].placeholder}
        </label>
      </div>
    );
  });
  return (
    <div
      style={style}
      className={[`checkbox-type-${checkBoxListType}`].join(" ")}>
      {list}
    </div>
  );
};

export default Checkbox;
