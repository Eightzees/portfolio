import Heading from "../../components/Heading/Heading";
import Icon from "../../components/Icon/Icon";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import "./Search.scss";

import imageDD03 from "../../assets/images/search/dd_03.png";
import { useCallback, useState } from "react";
import type { MediaList } from "../../components/MediaViewer/MediaViewer";
import MediaViewer from "../../components/MediaViewer/MediaViewer";

const Search = () => {
  const mediaListForDD: MediaList[] = [
    { imagePath: imageDD03, index: 0, caption: "まゆゆ1" },
    { imagePath: imageDD03, index: 1, caption: "まゆゆ2" },
    { imagePath: imageDD03, index: 2, caption: "まゆゆ3" },
  ];
  const [isVisibleMediaViewerForDD, setIsVisibleMediaViewerForDD] =
    useState(false);
  const [selectedIndexForDD, setSelectedIndexForDD] = useState(0);

  const showMediaViewerForDD = useCallback(
    (index: number) => {
      setSelectedIndexForDD(index);
      setIsVisibleMediaViewerForDD(true);
    },
    [selectedIndexForDD]
  );

  const hideMediaViewerForDD = useCallback(() => {
    setIsVisibleMediaViewerForDD(false);
  }, []);

  return (
    <div className="Search">
      <div className="Search__contents">
        <Heading level={1} text="Yahoo!検索" />
        <section className="Search__contentsSummary">
          <Heading level={2} text="経験したこと" />
          <ul className="Search__contentsSummaryList">
            <li className="Search__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>
                UIデザイン<span className="util-delimiter">/</span>
                ビジュアルデザイン<span className="util-delimiter">/</span>
                コーディング
              </span>
            </li>
            <li className="Search__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>バケットライブテスト（数値分析）</span>
            </li>
            <li className="Search__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>ポータルサイト運用</span>
            </li>
            <li className="Search__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>
                プロモーション企画<span className="util-delimiter">/</span>
                CMS実装
              </span>
            </li>
          </ul>
        </section>

        <section className="Search__contentsTest">
          <Heading level={2} text="検索結果画面の改善と数値分析" />
          <p>
            数ピクセルの違いで億単位のお金が動く検索結果画面。そのためUIの変更はバケットライブテスト（ABテスト）を行ってから。
            <br />
            どんなUIのパターンを何種類試すのか？　それぞれどのような効果が期待できるのか？変更箇所の周辺に影響はないか？　どのUIパーツのどんな数値を見たいのか？　あらかじめ設計したうえでテストを走らせます。
          </p>
          <div className="Search__contentsTestImage">
            <div className="Search__contentsTestImageCombo">
              <ol>
                <li>
                  <span>Blah Blah</span>
                </li>
                <li>
                  <span>Blah Blah</span>
                </li>
                <li>
                  <span>Blah Blah</span>
                </li>
              </ol>
            </div>
            <p>VS</p>
            <div className="Search__contentsTestImageUniversal">
              <ol>
                <li>
                  <span>Blah Blah</span>
                </li>
                <li>
                  <span>Blah Blah</span>
                </li>
                <li>
                  <span>Blah Blah</span>
                </li>
              </ol>
            </div>
          </div>
          <p className="util-Text--caption">
            ログの集計結果は数値分析専門のチームとデザイナーで検証し、どのUIを採用するか・しないかを決定。
            <br />
            どんなUIがユーザーに対してどのように作用するのか、知見を得ることができました。
          </p>
        </section>

        <section className="Search__contentsDD">
          <Heading level={2} text="独自検索結果モジュール" />
          <p>
            オーガニックな検索結果から求めている情報を選ぶ手間を省くため、検索キーワードからユーザーが求めているであろう情報をわかり易くまとめて提供するモジュールの開発も行いました。
            <br />
            ここもまずは数値分析から、検索キーワードのボリュームから求めてられている情報を割り出しモジュールを企画、UIは数パターン用意し、まずはライブテストを実施します。各パターンのログを分析し、ユーザーにとってメリットのあるものを選定の上、正式にリリースします。その際オーガニックな検索結果を阻害しない程度の内容であることも大事です。
          </p>
          <div className="Search__contentsDDThumbnails">
            <ul className="Search__contentsDDThumbnailsList">
              <li className="Search__contentsDDThumbnailsListItem">
                <Thumbnail
                  alt="独自検索結果モジュールの画像 1"
                  imagePath={imageDD03}
                  onClickHandler={() => showMediaViewerForDD(0)}
                  ratio="1/1"
                  width="100%"
                />
              </li>
              <li className="Search__contentsDDThumbnailsListItem">
                <Thumbnail
                  alt="独自検索結果モジュールの画像 2"
                  imagePath="../../assets/images/search/dd_03.png"
                  onClickHandler={() => showMediaViewerForDD(1)}
                  ratio="1/1"
                  width="100%"
                />
              </li>
              <li className="Search__contentsDDThumbnailsListItem">
                <Thumbnail
                  alt="独自検索結果モジュールの画像 3"
                  imagePath="./assets/images/search/dd_03.png"
                  onClickHandler={() => showMediaViewerForDD(2)}
                  ratio="1/1"
                  width="100%"
                />
              </li>
            </ul>
          </div>
          <p>
            ただしプロモーションや、季節性・お祭り要素を含むモジュールの場合、時には遊び心を加えたものを提案し実装することもありました。
          </p>
        </section>
      </div>

      {isVisibleMediaViewerForDD && (
        <MediaViewer
          mediaList={mediaListForDD}
          selectedIndex={selectedIndexForDD}
          onClickHandlerForClosing={hideMediaViewerForDD}
        />
      )}
    </div>
  );
};

export default Search;
