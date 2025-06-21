import Cross from "./IconGlyphs/Cross";
import classnames from "classnames";

import "./Icon.scss";
import type { IconType } from "./IconType";
import Hyphen from "./IconGlyphs/Hyphen";

export interface IconProps {
  color: "inverted" | "primary";
  size: "small" | "medium" | "large";
  type: IconType;
}

const getIconType = (type: IconType) => {
  switch (type) {
    // case "arrowhead_down":
    // case "arrowhead_left":
    // case "arrowhead_right":
    case "cross":
      return <Cross />;
    case "hyphen":
      return <Hyphen />;
    default:
      return null;
  }
};

const Icon: React.FC<IconProps> = (props) => {
  const classNames = classnames({
    Icon: true,
    [`Icon--${props.color}`]: props.color,
    [`Icon--${props.size}`]: props.size,
  });

  return <i className={classNames}>{getIconType(props.type)}</i>;
};

export default Icon;
