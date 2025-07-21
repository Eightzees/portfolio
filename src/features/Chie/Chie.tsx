import Heading from "../../components/Heading/Heading";
import Icon from "../../components/Icon/Icon";
import "./Chie.scss";

import imageGuideline0 from "../../assets/images/map/guideline_colors.png";
import imageGuideline1 from "../../assets/images/map/guideline_elevation.png";
import imageGuideline2 from "../../assets/images/map/guideline_typography.png";
import imageComponents0 from "../../assets/images/map/components_bubble.png";
import imageComponents1 from "../../assets/images/map/components_button.png";
import imageComponents2 from "../../assets/images/map/components_list.png";
import imageComponents3 from "../../assets/images/map/components_snackbar.png";
import imageComponents4 from "../../assets/images/map/components_tab.png";
import thumbnailChie from "../../assets/images/chie/thumbnail_chie.png";
import thumbnailApp from "../../assets/images/chie/thumbnail_app.png";
import { useCallback, useState } from "react";
import type { MediaList } from "../../components/MediaViewer/MediaViewer";
import MediaViewer from "../../components/MediaViewer/MediaViewer";
import Divider from "../../components/Divider/Divider";
import Button from "../../components/Button/Button";

const Chie = () => {
  const mediaListForGuideline: MediaList[] = [
    {
      imagePath: imageGuideline0,
      index: 0,
      caption: "Yahoo!地図のカラー定義：各色には意味や用途が設定されている",
    },
    {
      imagePath: imageGuideline1,
      index: 1,
      caption:
        "Yahoo!地図のエレベーション定義：各オブジェクトの存在すると階層と、階層ごとの影のスタイル定義",
    },
    {
      imagePath: imageGuideline2,
      index: 2,
      caption:
        "Yahoo!地図のタイポグラフィ定義：テキストも用途ごとにサイズや色が決まっている",
    },
  ];

  const mediaListForComponents: MediaList[] = [
    {
      imagePath: imageComponents0,
      index: 0,
      caption: "地図上に配置するための特殊なUIコンポーネント",
    },
    {
      imagePath: imageComponents1,
      index: 1,
      caption: "ボタンは強さ・用途ごとに段階を設定して利用すべき箇所を明確化",
    },
    {
      imagePath: imageComponents2,
      index: 2,
      caption: "なにか（押せるもの）を羅列するときのUIも複数パターンを用意",
    },
    {
      imagePath: imageComponents3,
      index: 3,
      caption:
        "ユーザーのアクションに対するフィードバックを通知するためのコンポーネント。フェードイン・アウトがReact と相性が悪く、実装が複雑化",
    },
    {
      imagePath: imageComponents4,
      index: 4,
      caption:
        "地図がサービスのメインなので、それ以外の情報は極力狭い領域内に押し込める必要があった。ひとつのパネル内で内容をまるっと切り替えるためのUIは色々検討",
    },
  ];

  const [
    isVisibleMediaViewerForGuideline,
    setIsVisibleMediaViewerForGuideline,
  ] = useState(false);
  const [selectedIndexForGuideline, setSelectedIndexForGuideline] = useState(0);
  const [
    isVisibleMediaViewerForComponents,
    setIsVisibleMediaViewerForComponents,
  ] = useState(false);
  const [selectedIndexForComponents, setSelectedIndexForComponents] =
    useState(0);

  const showMediaViewerForGuideline = useCallback(
    (index: number) => {
      setSelectedIndexForGuideline(index);
      setIsVisibleMediaViewerForGuideline(true);
    },
    [selectedIndexForGuideline]
  );

  const hideMediaViewerForGuideline = useCallback(() => {
    setIsVisibleMediaViewerForGuideline(false);
  }, []);

  const showMediaViewerForComponents = useCallback(
    (index: number) => {
      setSelectedIndexForComponents(index);
      setIsVisibleMediaViewerForComponents(true);
    },
    [selectedIndexForComponents]
  );

  const hideMediaViewerForComponents = useCallback(() => {
    setIsVisibleMediaViewerForComponents(false);
  }, []);

  return (
    <div className="Chie">
      <div className="Chie__contents">
        <Heading level={1} text="Yahoo!知恵袋" />
        <section className="Chie__contentsSummary">
          <Heading level={2} text="経験したこと" />
          <ul className="Chie__contentsSummaryList">
            <li className="Chie__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>
                UIデザイン<span className="util-delimiter">/</span>
                ビジュアルデザイン<span className="util-delimiter">/</span>
                コーディング
              </span>
            </li>
            <li className="Chie__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>UGCサービス運用</span>
            </li>
            <li className="Chie__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>アプリ向けUI・ビジュアル作成</span>
            </li>
            <li className="Chie__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>サービスリニューアル</span>
            </li>
            <li className="Chie__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>数値分析</span>
            </li>
          </ul>
        </section>

        <Divider color="yellow" />

        <section className="Chie__contentsManaging">
          <Heading level={2} text="Yahoo!知恵袋運用・UI改善" />
          <p>
            Yahoo!知恵袋は誰でもわからないこと・疑問などを質問できるサービスです。
            <br />
            しかしながら実はトラフィックの多くは知りたいことを検索した結果、Yahoo!知恵袋で類似の質問を見つけて参照する「閲覧ユーザー」が大半。「質問ユーザー」と「回答ユーザー」を増やしてコンテンツ量を増大させることが課題でした。
          </p>
          <p>
            複雑な質問・回答・ベストアンサー決定のプロセスを見直したり、投稿フォームのUIを改善したり...
            <br />
            巨大なシステムであるため細かい部分から少しずつ取り組み、数値を見てブラッシュアップを繰り返しました。
          </p>
          <div className="Chie__contentsManagingImage">
            <button
              onClick={() => showMediaViewerForGuideline(0)}
              className="Chie__contentsManagingImageThumbnail"
            >
              <img
                src={thumbnailChie}
                alt="Yahoo!知恵袋の画像"
                width="100%"
                height="auto"
              />
            </button>
            <div className="Chie__contentsManagingImageTrigger">
              <Button
                color="yellow"
                onClickHandler={() => showMediaViewerForGuideline(0)}
                text="すべての画像を見る"
                iconRight="arrow_upper_right"
                isInline={true}
              />
            </div>
          </div>
        </section>

        <Divider color="yellow" />

        <section className="Chie__contentsApp">
          <Heading level={2} text="Yahoo! JAPANアプリ向け知恵袋" />
          <p>
            Yahoo！ JAPAN
            アプリ内部にYahoo!知恵袋の機能を保持したいという依頼がありました。Yahoo!知恵袋は（当時）紫と黄色をキーカラーとしたサービスでしたが、Yahoo!
            JAPAN
            は青とピンクがベース。またYahoo!知恵袋の大量で複雑なコンテンツのすべてをもたせる必要はないということで、必要最低限の要素をピックアップしUIとビジュアルを変更しました。
          </p>
          <p>
            Yahoo! JAPANアプリ側のデザイントーンと要望をヒアリングし、Yahoo!
            JAPANアプリに内包されても馴染むように、（スケジュールの都合上）かなり短期間で調整しました。
          </p>
          <div className="Chie__contentsAppImage">
            <button
              onClick={() => showMediaViewerForGuideline(0)}
              className="Chie__contentsAppImageThumbnail"
            >
              <img
                src={thumbnailApp}
                alt="Yahoo! JAPAN アプリ向けのYahoo!知恵袋の画像"
                width="100%"
                height="auto"
              />
            </button>
            <div className="Map__contentsAppImageTrigger">
              <Button
                color="yellow"
                onClickHandler={() => showMediaViewerForGuideline(0)}
                text="すべての画像を見る"
                iconRight="arrow_upper_right"
                isInline={true}
              />
            </div>
          </div>
        </section>

        <Divider color="yellow" />

        <section className="Chie__contentsRenewal">
          <Heading
            level={2}
            text="Yahoo!知恵袋 リニューアル + モダン環境移行"
          />
          <p>
            全社でUS
            Yahoo!のシステムから脱却するプロジェクトが進行し、Yahoo!知恵袋も対応することになった。またそれを期に、環境のモダン化（SaaS利用など）とUI・ビジュアルのリニューアルを図った。
          </p>
          <Button
            href="https://chiebukuro.yahoo.co.jp/"
            color="yellow"
            text="Yahoo!知恵袋"
            iconRight="arrow_upper_right"
          />
        </section>

        <section className="Map__contentsRolls">
          <Heading level={2} text="担当領域・技術" />
          <ul className="Map__contentsRollsList">
            <li className="Map__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>UI設計（UIデザイン）</span>
            </li>
            <li className="Map__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>ビジュアルデザイン</span>
            </li>
            <li className="Map__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>デザインシステム設計・運用</span>
            </li>
            <li className="Map__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>
                コーディング（React + TypeScript + Redux / React + TypeScript +
                Next.js / SASS）
              </span>
            </li>
            <li className="Map__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>地図スタイルメンテナンス</span>
            </li>
          </ul>

          <Heading level={2} text="利用ツール" />
          <ul className="Map__contentsRollsList">
            <li className="Map__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>Adobe Illustrator</span>
            </li>
            <li className="Map__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>Sketch + Abstract</span>
            </li>
            <li className="Map__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>Figma</span>
            </li>
            <li className="Map__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>MapBox Studio</span>
            </li>
          </ul>
        </section>

        <div className="Map__contentsBack">
          <Button
            href="/"
            color="brown"
            text="トップページへ戻る"
            iconLeft="arrow_left"
            isInline={true}
            target="_self"
          />
        </div>
      </div>

      {isVisibleMediaViewerForGuideline && (
        <MediaViewer
          mediaList={mediaListForGuideline}
          selectedIndex={selectedIndexForGuideline}
          onClickHandlerForClosing={hideMediaViewerForGuideline}
        />
      )}
      {isVisibleMediaViewerForComponents && (
        <MediaViewer
          mediaList={mediaListForComponents}
          selectedIndex={selectedIndexForComponents}
          onClickHandlerForClosing={hideMediaViewerForComponents}
        />
      )}
    </div>
  );
};

export default Chie;
