import "./Heading.scss";
import { createElement } from "react";

export interface HeadingProps {
  level: 1 | 2 | 3 | 4;
  text: string;
}

const Heading: React.FC<HeadingProps> = (props) => {
  return createElement(`h${props.level}`, { className: "Heading" }, props.text);
};

export default Heading;
