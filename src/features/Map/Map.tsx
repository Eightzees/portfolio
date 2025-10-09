import "./Map.scss";

import { useCallback, useState } from "react";

import imageBeforeAfter from "../../assets/images/map/before_after.png";
import imagePOIEndColors from "../../assets/images/map/poiend_colors.png";
import imagePOIEndFlow from "../../assets/images/map/poiend_flow.png";
import thumbnailComponents from "../../assets/images/map/thumbnail_components.png";
import thumbnailGuideline from "../../assets/images/map/thumbnail_guideline.png";
import Button from "../../components/Button/Button";
import Divider from "../../components/Divider/Divider";
import Heading from "../../components/Heading/Heading";
import Icon from "../../components/Icon/Icon";
import MediaViewer from "../../components/MediaViewer/MediaViewer";
import {
  mediaListForComponents,
  mediaListForGuideline,
} from "../../lib/mediaListForMap";

const Map = () => {
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
            Yahoo!のシステムから脱却するプロジェクトが進行し、Yahoo!地図も対応する必要がありました。しかし当時Yahoo!地図は最低限の保守のみで長年放置されておりソースコードや環境も古かったため、もはや手を入れることが難しいということで
            <span className="util-Text--highlighted">
              フルスクラッチでリニューアル
            </span>
            することとなりました。
          </p>
          <p>
            同タイミングで地図のエンジンもゼンリンからMapBpx
            に変更することになり、地図そのものの見た目や実装も含めて完全に新規開発の必要が発生しました。
          </p>
          <div className="Map__contentsRenewalImage">
            <img
              src={imageBeforeAfter}
              alt="Yahoo!地図 Before / After"
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
            <br />
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
            短期間での開発であったため、ヴィジュアル作成とヴィジュアルの実装をほぼ並行して行いました。
            <br />
            どちらも自分が主担当という強みを活かし、
            <span className="util-Text--highlighted">
              最初から実装を考慮したデザインシステムを検討し、実装しながら微調整していく
            </span>
            ことで、開発にかける時間を短縮することができました。
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
            ただしひとたび運用が始まれば、誰がデザイン調整や実装を行うかわからないので、
            <span className="util-Text--highlighted">
              「誰でも同じアウトプットでデザインができる」「デザインするときに迷わない」
            </span>
            ことを指針としてルールを明文化し、デザインパーツの仕様も必要なバリエーションは網羅しつつ極力シンプルになるように考慮しました。
          </p>
          <p>
            地図のための独特なUIパーツを考え出す必要があり、UIが複雑化しがちでした。そのため
            <span className="util-Text--highlighted">
              デザインパーツ・モジュール・スタイルはライブラリ化
            </span>
            し、参照すれば手軽にYahoo!地図の画面デザインを行えるような仕組みを整えました。
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
            内の様々なサービスで横断的に利用される「施設・店舗の詳細情報を提供する仕組み」を製作するプロジェクトが数年前から進行していましたが、突如NAVERが開発することになり、そのままNAVERによりリリース・運用されていました。
            <br />
            その後諸事情によりYahoo!
            JAPANでその仕組みを巻き取る必要が生じたものの、ソースコード等の共有は契約上不可だったため、リリースされている状態を参考にスクラッチで作り直すことになりました。
          </p>
          <p>
            人海戦術で短期間で完成させる必要がありかつデザイナーのリソースが全くと言っていいほどなかったため、通常ならデザイナーが担当するはずの見た目に関するコーディングもエンジニアの面々と協力して行いました。自分がデザインしたわけではないものに対して、
            <span className="util-Text--highlighted">
              エンジニア含めた全員が理解しやすいように咀嚼しデザインシステムに落とし込む
            </span>
            という、珍しい対応をする機会となりました。システマチックに作られていない部分は適宜調整し、なんとか形になるように落とし込みました。
          </p>
          <div className="Map__contentsPoiEndImage">
            <img
              src={imagePOIEndColors}
              alt="POI End のカラーパレット定義"
              width="100%"
              height="auto"
            />
            <p>
              ※すでにリリースされてはいたものの、カラーパレットは再定義。必要に応じて後追いでカラーコードの変更を行えるようなメンテナンス性と、デザイナー陣が迷わないようなセマンティックな色の定義を両立させました。
            </p>
          </div>

          <div className="Map__contentsPoiEndImage">
            <img
              src={imagePOIEndFlow}
              alt="POI End画面作成方法"
              width="100%"
              height="auto"
            />
            <p>
              ※リリースされている画面を見ながら必要なデザインパーツをすべて洗い出し、挙動や仕様も含めて定義しなおしたうえで、各画面を構成するようにしています。
            </p>
          </div>

          <p>
            システム化は
            <span className="util-Text--highlighted">
              エンジニア陣や他サービスのデザイナーに対して、デザイン思想の啓蒙やコードレビューを行いやすくする
            </span>
            という目的で行いましたが、結果的に、後々外部のメンバーに開発協力してもらう際たいへん役に立ちました。
          </p>
          <Button
            href="https://map.yahoo.co.jp/v3/place/eHVjmOhzROA"
            color="brown"
            text="施設詳細ページ（東京ミッドタウン - Yahoo!マップ）"
            iconRight="arrow_upper_right"
          />
        </section>

        <Divider color="brown" />

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
            href="./"
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
