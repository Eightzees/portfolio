import "./Thumbnail.scss";
import classnames from "classnames";

export interface ThumbnailProps {
  alt: string;
  hasRoundedCorners?: boolean;
  imagePath: string;
  onClickHandler?: () => void;
  ratio: "1/1" | "1/2" | "4/3" | "16/9";
  width: string;
}

const Thumbnail: React.FC<ThumbnailProps> = (props) => {
  const BodyElement = props.onClickHandler ? "button" : "div";
  const classNames = classnames({
    Thumbnail: true,
    "Thumbnail--cornersRounded": props.hasRoundedCorners,
  });

  return (
    <BodyElement
      className={classNames}
      onClick={props.onClickHandler || undefined}
      style={{
        width: props.width,
      }}
    >
      <figure
        className="Thumbnail__image"
        style={{
          width: props.width,
          aspectRatio: props.ratio,
          backgroundImage: `url(${props.imagePath})`,
        }}
      >
        <figcaption className="util-Text--hidden">{props.alt}</figcaption>
      </figure>
    </BodyElement>
  );
};

export default Thumbnail;
