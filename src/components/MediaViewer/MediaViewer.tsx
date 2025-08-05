import "./MediaViewer.scss";

import { useCallback, useEffect, useRef, useState } from "react";

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
  const [isDisabledNext, setIsDisabledNext] = useState(false);
  const [isDisabledPrevious, setIsDisabledPrevious] = useState(false);

  const mediaViewerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const hasJustMounted = useRef(false);
  const hasTappedNavigation = useRef(false);

  const showOrHideNavigator = useCallback(() => {
    setIsDisabledPrevious(selectedIndex <= 0);
    setIsDisabledNext(selectedIndex >= lengthMedia - 1);
  }, [selectedIndex, lengthMedia]);

  const navigate = useCallback(
    (direction: "previous" | "next") => {
      if (direction === "previous" && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
        setSelectedCaption(props.mediaList[selectedIndex - 1].caption);
      } else if (direction === "next" && selectedIndex < lengthMedia - 1) {
        setSelectedIndex(selectedIndex + 1);
        setSelectedCaption(props.mediaList[selectedIndex + 1].caption);
      }

      hasTappedNavigation.current = true;
    },
    [selectedIndex, lengthMedia, setSelectedIndex, setSelectedCaption]
  );

  const updateIndex = useCallback(
    (direction: "previous" | "next") => {
      // update index
      if (direction === "previous") {
        if (selectedIndex <= 0) {
          return;
        }
        setSelectedIndex(selectedIndex - 1);
        setSelectedCaption(props.mediaList[selectedIndex - 1].caption);
      }

      if (direction === "next") {
        if (selectedIndex >= lengthMedia - 1) {
          return;
        }
        setSelectedIndex(selectedIndex + 1);
        setSelectedCaption(props.mediaList[selectedIndex + 1].caption);
      }
    },
    [selectedIndex, setSelectedIndex, setSelectedCaption]
  );

  useEffect(() => {
    if (!sliderRef.current || !mediaViewerRef.current) {
      return;
    }

    // const contentWidth = mediaViewerRef.current?.getBoundingClientRect().width ?? 0;
    const contentWidth = mediaViewerRef.current.clientWidth;
    const scrollAmount = selectedIndex * contentWidth;

    showOrHideNavigator();

    if (hasJustMounted.current) {
      sliderRef.current.scrollTo({ top: 0, left: scrollAmount });
      hasJustMounted.current = false;
    } else {
      sliderRef.current.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [selectedIndex, showOrHideNavigator]);

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

      <div className="MediaViewer__content" ref={mediaViewerRef}>
        <div className="MediaViewer__contentMedia">
          <div className="MediaViewer__contentMediaSlider" ref={sliderRef}>
            <ul className="MediaViewer__contentMediaSliderList" ref={listRef}>
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
            isDisabled={isDisabledPrevious}
            isInverted={true}
            text="前へ"
            onClickHandler={() => navigate("previous")}
            additionalClassName="MediaViewer__contentNavigatorButton MediaViewer__contentNavigatorButton--previous"
          />
          <ButtonIconOnly
            iconType="arrowhead_right"
            isDisabled={isDisabledNext}
            isInverted={true}
            text="次へ"
            onClickHandler={() => navigate("next")}
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
