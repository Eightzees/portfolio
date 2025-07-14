import Heading from "../../components/Heading/Heading";
import Icon from "../../components/Icon/Icon";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import "./PR.scss";

import thumbnailGhit from "../../assets/images/pr/thumbnail_ghit.png";
import imageGhit0 from "../../assets/images/pr/ghit_top.png";
import imageGhit1 from "../../assets/images/pr/ghit_interview_02.png";
import imageGhit2 from "../../assets/images/pr/ghit_interview_01_sp.png";
import imageGhit3 from "../../assets/images/pr/ghit_dengue.png";
import { useCallback, useState } from "react";
import type { MediaList } from "../../components/MediaViewer/MediaViewer";
import MediaViewer from "../../components/MediaViewer/MediaViewer";
import Divider from "../../components/Divider/Divider";
import Button from "../../components/Button/Button";

const PR = () => {
  const mediaListForGhit: MediaList[] = [
    {
      imagePath: imageGhit0,
      index: 0,
      caption:
        "グローバルヘルス特集のトップページ。メインコンテンツである博士たちのインタビュー記事やデング熱解説ページへの導線、GHIT Fund 社の概要を掲載",
    },
    {
      imagePath: imageGhit1,
      index: 1,
      caption:
        "各インタビューページには、博士のメインビジュアルとインタビュー記事、またその博士が携わっている分野についての簡単な解説を掲載。読み物コンテンツなので、タイポグラフィは読みやすさを意識した",
    },
    {
      imagePath: imageGhit2,
      index: 2,
      caption:
        "モバイル表示時は別レイアウトを用意。また日本語・英語の2言語切替に対応した",
    },
    {
      imagePath: imageGhit3,
      index: 3,
      caption:
        "当時デング熱が流行して国内で問題になっていたため、インタビューした博士の一人に監修していただきデング熱について解説するページを別途作成した。",
    },
  ];

  const [isVisibleMediaViewerForGhit, setIsVisibleMediaViewerForGhit] =
    useState(false);
  const [selectedIndexForGhit, setSelectedIndexForGhit] = useState(0);
  const showMediaViewerForGhit = useCallback(
    (index: number) => {
      setSelectedIndexForGhit(index);
      setIsVisibleMediaViewerForGhit(true);
    },
    [selectedIndexForGhit]
  );

  const hideMediaViewerForGhit = useCallback(() => {
    setIsVisibleMediaViewerForGhit(false);
  }, []);

  return (
    <div className="PR">
      <div className="PR__contents">
        <Heading level={1} text="プロモーション活動" />
        <section className="PR__contentsSummary">
          <Heading level={2} text="経験したこと" />
          <ul className="PR__contentsSummaryList">
            <li className="PR__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>
                UIデザイン<span className="util-delimiter">/</span>
                ビジュアルデザイン<span className="util-delimiter">/</span>
                コーディング
              </span>
            </li>
            <li className="PR__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>CMS運用</span>
            </li>
            <li className="PR__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>クライアントワーク</span>
            </li>
            <li className="PR__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>イラストレーション分業</span>
            </li>
            <li className="PR__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>素材管理</span>
            </li>
          </ul>
        </section>

        <Divider color="orange" />

        <section className="PR__contentsGhit">
          <Heading
            level={2}
            text="GHIT Fund | グローバルヘルス特集 - Yahoo! JAPAN"
          />
          <p>
            GHIT Fund
            社からの依頼で、グローバルヘルスを啓蒙するサイトを作ることになり、制作をほぼすべて担当。
            <br />
            グローバルヘルスの世界では大物である博士たちにインタビューし、コンテンツづくりから社内チームで手掛けた（ライターは編集部、撮影はカメラ部）。
            <span className="util-Text--highlighted">
              クライアントへのヒアリングや撮影ディレクション、また実際に形にする部分はほぼ一人で担当。
            </span>
            <br />
            クライアントには大変喜んでいただき、さらにサイトの公開後にインタビューした博士の一人がノーベル賞を受賞するという素晴らしい事態も。
          </p>
          <div className="PR__contentsGhitImage">
            <button
              onClick={() => showMediaViewerForGhit(0)}
              className="PR__contentsGhitImageThumbnail"
            >
              <img
                src={thumbnailGhit}
                alt="GHIT Fund グローバルヘルス特集の画像"
                width="100%"
                height="auto"
              />
            </button>
            <div className="PR__contentsGhitImageTrigger">
              <Button
                color="orange"
                onClickHandler={() => showMediaViewerForGhit(0)}
                text="すべての画像を見る"
                iconRight="arrow_upper_right"
                isInline={true}
              />
            </div>
          </div>
        </section>
        <Divider color="orange" />
      </div>

      {isVisibleMediaViewerForGhit && (
        <MediaViewer
          mediaList={mediaListForGhit}
          selectedIndex={selectedIndexForGhit}
          onClickHandlerForClosing={hideMediaViewerForGhit}
        />
      )}
    </div>
  );
};

export default PR;
