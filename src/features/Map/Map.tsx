import "./Map.scss";

import { useCallback, useState } from "react";

import imageBeforeAfter from "../../assets/images/map/before_after.png";
import imageComponents0 from "../../assets/images/map/components_bubble.png";
import imageComponents1 from "../../assets/images/map/components_button.png";
import imageComponents2 from "../../assets/images/map/components_list.png";
import imageComponents3 from "../../assets/images/map/components_snackbar.png";
import imageComponents4 from "../../assets/images/map/components_tab.png";
import imageGuideline0 from "../../assets/images/map/guideline_colors.png";
import imageGuideline1 from "../../assets/images/map/guideline_elevation.png";
import imageGuideline2 from "../../assets/images/map/guideline_typography.png";
import thumbnailComponents from "../../assets/images/map/thumbnail_components.png";
import thumbnailGuideline from "../../assets/images/map/thumbnail_guideline.png";
import Button from "../../components/Button/Button";
import Divider from "../../components/Divider/Divider";
import Heading from "../../components/Heading/Heading";
import Icon from "../../components/Icon/Icon";
import MediaViewer from "../../components/MediaViewer/MediaViewer";

import type { MediaList } from "../../components/MediaViewer/MediaViewer";
const Map = () => {
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
    <div className="Map">
      <div className="Map__contents">
        <Heading level={1} text="Yahoo!マップ" />
        <section className="Map__contentsSummary">
          <Heading level={2} text="経験したこと" />
          <ul className="Map__contentsSummaryList">
            <li className="Map__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>サービスリニューアル</span>
            </li>

            <li className="Map__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>
                UIデザイン<span className="util-delimiter">/</span>
                ビジュアルデザイン<span className="util-delimiter">/</span>
                コーディング
              </span>
            </li>
            <li className="Map__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>
                デザインガイドライン策定
                <span className="util-delimiter">/</span>
                コーディングガイドライン策定
              </span>
            </li>
            <li className="Map__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>地図スタイル運用</span>
            </li>
          </ul>
        </section>

        <Divider color="brown" />

        <section className="Map__contentsRenewal">
          <Heading
            level={2}
            text="Yahoo!地図（現Yahoo!マップ） フルリニューアル"
          />
          <p>
            全社でUS
            Yahoo!のシステムから脱却するプロジェクトが進行し、Yahoo!地図も対応する必要がありました。しかし長年放置されソースコードや環境も古かったため、もはや手を入れることが難しいということで
            <span className="util-Text--highlighted">
              フルスクラッチでリニューアル
            </span>
            することとなりました。同タイミングで地図のエンジンもゼンリンからMapBpx
            に変更することになり、地図そのものの見た目や実装も含めて完全に新規開発の必要が発生しました。
          </p>
          <div className="Map__contentsRenewalImage">
            <img
              src={imageBeforeAfter}
              alt="Yahoo!地図 Before/ After"
              width="100%"
              height="auto"
            />
          </div>
          <p>
            デザイナーとエンジニアのみが存在するプロジェクトだったため、かなり自由度は高かったものの、新しい地図エンジンとの格闘や旧環境が残した仕組みを継承する必要があったりと、旧環境を知るものがいない中でかなり重い作業をする羽目に。
            旧Yahoo!地図の
            <span className="util-Text--highlighted">
              残すべき機能・削る機能・新規追加する機能の定義
            </span>
            を短期間で行う難しさは想像以上。
            結果バックエンド実装以外はすべて携わるという経験をすることができました。
          </p>
          <Button
            href="https://map.yahoo.co.jp/"
            color="brown"
            text="Yahoo!マップ"
            iconRight="arrow_upper_right"
          />
        </section>

        <Divider color="brown" />

        <section className="Map__contentsGuideline">
          <Heading level={2} text="Yahoo!地図 デザインガイドライン" />
          <p>
            短期間での開発であったため、ヴィジュアル作成とヴィジュアルの実装をほぼ並行して行いました。どちらも自分が主担当という強みを活かし、最初から実装を考慮したデザインシステムを検討し、実装しながら微調整していくことで、開発にかける時間を短縮することができました。
          </p>
          <div className="Map__contentsGuidelineImage">
            <button
              onClick={() => showMediaViewerForGuideline(0)}
              className="Map__contentsGuidelineImageThumbnail"
            >
              <img
                src={thumbnailGuideline}
                alt="Yahoo!地図のデザインガイドラインに関する画像"
                width="100%"
                height="auto"
              />
            </button>
            <div className="Map__contentsGuidelineImageTrigger">
              <Button
                color="brown"
                onClickHandler={() => showMediaViewerForGuideline(0)}
                text="すべての画像を見る"
                iconRight="arrow_upper_right"
                isInline={true}
              />
            </div>
          </div>

          <p>
            ただしひとたび運用が始まれば、誰がデザイン調整や実装を行うかわからないので、「誰でも同じアウトプットができる」「デザインするときに迷わない」ことを指針としてルールを明文化したり、デザインパーツも必要なバリエーションは網羅しつつも極力シンプルになるように考慮しました。
            地図のための独特なUIパーツを考え出す必要もあり、UIが複雑化しがち。そのためデザインパーツ・モジュール・スタイルはライブラリ化し、参照すれば手軽にYahoo!地図の画面作成を行えるような仕組みを整えました。
          </p>
          <div className="Map__contentsGuidelineImage">
            <button
              onClick={() => showMediaViewerForComponents(0)}
              className="Map__contentsGuidelineImageThumbnail"
            >
              <img
                src={thumbnailComponents}
                alt="Yahoo!地図のUIコンポーネント一覧の画像"
                width="100%"
                height="auto"
              />
            </button>
            <div className="Map__contentsGuidelineImageTrigger">
              <Button
                color="brown"
                onClickHandler={() => showMediaViewerForComponents(0)}
                text="すべての画像を見る"
                iconRight="arrow_upper_right"
                isInline={true}
              />
            </div>
          </div>
        </section>

        <Divider color="brown" />

        <section className="Map__contentsPoiEnd">
          <Heading level={2} text="施設詳細サービスの脱NAVER対応" />
          <p>
            Yahoo! JAPAN
            内のサービスを横断して利用できる、施設・店舗の詳細情報を提供する仕組みのプロジェクトが数年前から進行していたが、突如NAVERが作成することになり、そのままNAVERによりリリース・運用されていた。
            <br />
            しかしながら諸事情によりYahoo!
            JAPANで巻き取る必要が生じたが、ソースコード等の共有は契約上不可だったため、リリースされている状態を目指してスクラッチで作り直すこととなった。
          </p>
          <p>
            人海戦術で短期間で完成させる必要がありかつデザイナーのリソースが全くと言っていいほどなかったため、普段デザイナーが担当する見た目のコーディングもエンジニアの面々と協力して行った。自分がデザインしたわけではないものに対して、
            <span className="util-Text--highlighted">
              エンジニア含めた全員が理解しやすいように咀嚼しデザインシステムに落とし込む
            </span>
            という、珍しい対応をする機会となった。システマチックに作られていない部分は適宜噛み砕いてなんとか落とし込んだ。システム化することで
            <span className="util-Text--highlighted">
              エンジニア陣や他サービスのデザイナーへのデザイン思想の啓蒙・コードレビューをしやすくすることが目的。
            </span>
          </p>
          <Button
            href="https://map.yahoo.co.jp/v3/place/eHVjmOhzROA"
            color="brown"
            text="施設詳細ページ（東京ミッドタウン - Yahoo!マップ）"
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

export default Map;
