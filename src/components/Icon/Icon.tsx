import "./Icon.scss";

import classnames from "classnames";

import ArrowDown from "./IconGlyphs/ArrowDown";
import ArrowheadDown from "./IconGlyphs/ArrowheadDown";
import ArrowheadLeft from "./IconGlyphs/ArrowheadLeft";
import ArrowheadRight from "./IconGlyphs/ArrowheadRight";
import ArrowLeft from "./IconGlyphs/ArrowLeft";
import ArrowUpperRight from "./IconGlyphs/ArrowUpperRight";
import Cross from "./IconGlyphs/Cross";
import Hyphen from "./IconGlyphs/Hyphen";

import type { IconType } from "./IconType";
import type { ColorType } from "../../lib/constants";
export interface IconProps {
  color: ColorType | "inverted" | "primary";
  size: "small" | "medium" | "large";
  type: IconType;
}

const getIconType = (type: IconType) => {
  switch (type) {
    case "arrow_down":
      return <ArrowDown />;
    case "arrow_left":
      return <ArrowLeft />;
    case "arrow_upper_right":
      return <ArrowUpperRight />;

    case "arrowhead_down":
      return <ArrowheadDown />;
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
