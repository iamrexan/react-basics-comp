import React, { ReactElement } from "react";
import "../../assets/css/button/index.css";

export interface BtnProps {
  onClick?: any;
  onHover?: any;
  style?: React.CSSProperties;
  btnType?: string;
}

const Button: React.FC<BtnProps> = (props): ReactElement => {
  const { style, btnType, children, onClick } = props;
  const classes = [`btn button-${btnType}`].join(" ");

  return (
    <button type="button" onClick={onClick} style={style} className={classes}>
      {children}
    </button>
  );
};

export const DangerButton: React.FC<BtnProps> = (props): ReactElement => {
  return <Button {...props} btnType="danger" />;
};

export const PrimaryButton: React.FC<BtnProps> = (props): ReactElement => {
  return <Button {...props} btnType="primary" />;
};

export const LightButton: React.FC<BtnProps> = (props): ReactElement => {
  return <Button {...props} btnType="light" />;
};

export const DarkButton: React.FC<BtnProps> = (props): ReactElement => {
  return <Button {...props} btnType="dark" />;
};

export default Button;
