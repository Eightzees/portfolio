import classnames from "classnames";
import Icon from "../Icon/Icon";
import type { IconType } from "../Icon/IconType";
import "./ButtonIconOnly.scss";

export interface ButtonIconOnlyProps {
  iconType: IconType;
  isDisabled?: boolean;
  isInverted?: boolean;
  onClickHandler: () => void;
  text: string;
  additionalClassName?: string;
}

const ButtonIconOnly: React.FC<ButtonIconOnlyProps> = ({
  iconType,
  isDisabled = false,
  isInverted = false,
  onClickHandler,
  text,
  additionalClassName,
}) => {
  const classNames = classnames({
    ButtonIconOnly: true,
    "ButtonIconOnly--inverted": isInverted,
    [`${additionalClassName}`]: additionalClassName,
  });

  return (
    <button
      className={classNames}
      onClick={onClickHandler}
      disabled={isDisabled}
    >
      <Icon
        type={iconType}
        color={isInverted ? "inverted" : "primary"}
        size="medium"
      />
      <span className="util-Text--hidden">{text}</span>
    </button>
  );
};

export default ButtonIconOnly;
