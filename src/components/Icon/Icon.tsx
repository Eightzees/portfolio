import ArrowheadLeft from "./IconGlyphs/ArrowheadLeft";
import ArrowheadRight from "./IconGlyphs/ArrowheadRight";
import Cross from "./IconGlyphs/Cross";
import classnames from "classnames";

import "./Icon.scss";
import type { IconType } from "./IconType";
import Hyphen from "./IconGlyphs/Hyphen";

export interface IconProps {
  color:
    | "blue"
    | "brown"
    | "green"
    | "inverted"
    | "orange"
    | "primary"
    | "yellow";
  size: "small" | "medium" | "large";
  type: IconType;
}

const getIconType = (type: IconType) => {
  switch (type) {
    // case "arrowhead_down":
    case "arrowhead_left":
      return <ArrowheadLeft />;
    case "arrowhead_right":
      return <ArrowheadRight />;
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
