import type { ColorType } from "../../constants";
import "./Divider.scss";
import classnames from "classnames";

export interface DividerProps {
  color: ColorType;
}

const Divider: React.FC<DividerProps> = (props) => {
  const classNames = classnames({
    Divider: true,
    [`Divider--${props.color}`]: props.color,
  });

  return (
    <div className={classNames}>
      <hr />
    </div>
  );
};

export default Divider;
