import { useCallback, useState } from "react";
import "./MediaViewer.scss";
import ButtonIconOnly from "../ButtonIconOnly/ButtonIconOnly";

export interface MediaList {
  imagePath: string;
  index: number;
  caption: string;
}

export interface MediaViewerProps {
  mediaList: MediaList[];
  onClickHandlerForClosing: () => void;
  selectedIndex: number;
}

const MediaViewer: React.FC<MediaViewerProps> = (props) => {
  const lengthMedia = props.mediaList.length;
  const [selectedIndex, setSelectedIndex] = useState(props.selectedIndex);
  const [selectedCaption, setSelectedCaption] = useState(
    props.mediaList[props.selectedIndex].caption
  );

  const updateIndex = useCallback((direction: "previous" | "next") => {}, []);

  return (
    <div className="MediaViewer">
      <div className="MediaViewer__header">
        <p className="MediaViewer__headerIndicator">
          <span className="MediaViewer__headerIndicatorIndex">
            {selectedIndex + 1}
          </span>
          <span className="util-delimiter">/</span>
          <span>{lengthMedia}</span>
        </p>
        <ButtonIconOnly
          iconType="cross"
          isInverted={true}
          onClickHandler={props.onClickHandlerForClosing}
          text="閉じる"
        />
      </div>

      <div className="MediaViewer__content">
        <div className="MediaViewer__contentMedia">
          <div className="MediaViewer__contentMediaSlider">
            <ul className="MediaViewer__contentMediaSliderList">
              {props.mediaList.map((item, index) => (
                <li
                  className="MediaViewer__contentMediaSliderListItem"
                  key={index}
                >
                  <img
                    src={item.imagePath}
                    alt={`${item.caption}の画像`}
                    className="MediaViewer__contentMediaSliderListItemImage"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="MediaViewer__contentNavigator">
          <ButtonIconOnly
            iconType="arrowhead_left"
            isInverted={true}
            text="前へ"
            onClickHandler={() => updateIndex("previous")}
            additionalClassName="MediaViewer__contentNavigatorButton MediaViewer__contentNavigatorButton--previous"
          />
          <ButtonIconOnly
            iconType="arrowhead_right"
            isInverted={true}
            text="次へ"
            onClickHandler={() => updateIndex("next")}
            additionalClassName="MediaViewer__contentNavigatorButton MediaViewer__contentNavigatorButton--next"
          />
        </div>
      </div>

      <div className="MediaViewer__footer">
        <p className="MediaViewer__footerContent">{selectedCaption}</p>
      </div>
    </div>
  );
};

export default MediaViewer;
