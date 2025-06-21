import Icon from "../Icon/Icon";
import type { IconType } from "../Icon/IconType";
import "./ButtonIconOnly.scss";
import { createElement } from "react";

export interface ButtonIconOnlyProps {
  href?: string;
  iconType: IconType;
  onClickHandler?: () => void;
  text: string;
}

const ButtonIconOnly: React.FC<ButtonIconOnlyProps> = (props) => {
  return (
    <button className="ButtonIconOnly" onClick={props.onClickHandler}>
      <Icon type={props.iconType} color="inverted" size="medium" />
      <span className="util-Text--hidden">{props.text}</span>
    </button>
  );
};

export default ButtonIconOnly;
