import "./Divider.scss";
import classnames from "classnames";

export interface DividerProps {
  color: "blue" | "brown" | "green" | "orange" | "yellow";
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
