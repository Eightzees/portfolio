import classnames from "classnames";
import Icon from "../Icon/Icon";
import type { IconType } from "../Icon/IconType";
import "./Button.scss";
import type { ColorType } from "../../constants";

export interface ButtonProps {
  color?: ColorType;
  href?: string;
  iconLeft?: IconType;
  iconRight?: IconType;
  isDisabled?: boolean;
  isInline?: boolean;
  onClickHandler?: () => void;
  target?: "_blank" | "_self";
  text: string;
  additionalClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  color = "blue",
  href,
  iconLeft,
  iconRight,
  isDisabled = false,
  isInline = false,
  onClickHandler,
  target = "_blank",
  text,
  additionalClassName,
}) => {
  const BodyElement = onClickHandler ? "button" : href ? "a" : "div";

  const classNames = classnames({
    Button: true,
    [`Button--${color}`]: color,
    "Button--inline": isInline,
    [`${additionalClassName}`]: additionalClassName,
  });

  return (
    <BodyElement
      className={classNames}
      onClick={onClickHandler || undefined}
      disabled={isDisabled}
      href={href || undefined}
      target={target}
      rel={href && target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {iconLeft && (
        <Icon
          type={iconLeft}
          color={isInline ? color : color === "yellow" ? "primary" : "inverted"}
          size="medium"
        />
      )}
      <span>{text}</span>
      {iconRight && (
        <Icon
          type={iconRight}
          color={isInline ? color : color === "yellow" ? "primary" : "inverted"}
          size="medium"
        />
      )}
    </BodyElement>
  );
};

export default Button;
