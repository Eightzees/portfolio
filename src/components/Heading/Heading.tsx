import "./Heading.scss";

import type { JSX } from "react";

export interface HeadingProps {
  level: 1 | 2 | 3 | 4;
  text: string;
  subText?: string;
}

const Heading: React.FC<HeadingProps> = (props) => {
  const WrapperElement = `h${props.level}` as keyof JSX.IntrinsicElements;

  return (
    <WrapperElement className="Heading">
      {props.text}
      {props.subText && (
        <span className="Heading__subText">{props.subText}</span>
      )}
    </WrapperElement>
  );
};

export default Heading;
