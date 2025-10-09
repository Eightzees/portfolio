import "./PR.scss";

import { useCallback, useState } from "react";

import thumbnail311 from "../../assets/images/pr/thumbnail_311.png";
import thumbnailBonenkai from "../../assets/images/pr/thumbnail_bonenkai.png";
import thumbnailGhit from "../../assets/images/pr/thumbnail_ghit.png";
import thumbnailSatNav from "../../assets/images/pr/thumbnail_satnav.png";
import thumbnailYoshimotozaka from "../../assets/images/pr/thumbnail_yoshimotozaka.png";
import Button from "../../components/Button/Button";
import Divider from "../../components/Divider/Divider";
import Heading from "../../components/Heading/Heading";
import Icon from "../../components/Icon/Icon";
import MediaViewer from "../../components/MediaViewer/MediaViewer";
import {
  mediaListFor311,
  mediaListForBonenkai,
  mediaListForGhit,
  mediaListForSatNav,
  mediaListForYoshimotozaka,
} from "../../lib/mediaListForPR";

const PR = () => {
  const [isVisibleMediaViewerForGhit, setIsVisibleMediaViewerForGhit] =
    useState(false);
  const [selectedIndexForGhit, setSelectedIndexForGhit] = useState(0);
  const [isVisibleMediaViewerFor311, setIsVisibleMediaViewerFor311] =
    useState(false);
  const [selectedIndexFor311, setSelectedIndexFor311] = useState(0);
  const [isVisibleMediaViewerForSatNav, setIsVisibleMediaViewerForSatNav] =
    useState(false);
  const [selectedIndexForSatNav, setSelectedIndexForSatNav] = useState(0);
  const [isVisibleMediaViewerForBonenkai, setIsVisibleMediaViewerForBonenkai] =
    useState(false);
  const [selectedIndexForBonenkai, setSelectedIndexForBonenkai] = useState(0);
  const [
    isVisibleMediaViewerForYoshimotozaka,
    setIsVisibleMediaViewerForYoshimotozaka,
  ] = useState(false);
  const [selectedIndexForYoshimotozaka, setSelectedIndexForYoshimotozaka] =
    useState(0);

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

  const showMediaViewerFor311 = useCallback(
    (index: number) => {
      setSelectedIndexFor311(index);
      setIsVisibleMediaViewerFor311(true);
    },
    [selectedIndexFor311]
  );

  const hideMediaViewerFor311 = useCallback(() => {
    setIsVisibleMediaViewerFor311(false);
  }, []);

  const showMediaViewerForSatNav = useCallback(
    (index: number) => {
      setSelectedIndexForSatNav(index);
      setIsVisibleMediaViewerForSatNav(true);
    },
    [selectedIndexForSatNav]
  );

  const hideMediaViewerForSatNav = useCallback(() => {
    setIsVisibleMediaViewerForSatNav(false);
  }, []);

  const showMediaViewerForBonenkai = useCallback(
    (index: number) => {
      setSelectedIndexForBonenkai(index);
      setIsVisibleMediaViewerForBonenkai(true);
    },
    [selectedIndexForBonenkai]
  );

  const hideMediaViewerForBonenkai = useCallback(() => {
    setIsVisibleMediaViewerForBonenkai(false);
  }, []);

  const showMediaViewerForYoshimotozaka = useCallback(
    (index: number) => {
      setSelectedIndexForYoshimotozaka(index);
      setIsVisibleMediaViewerForYoshimotozaka(true);
    },
    [selectedIndexForYoshimotozaka]
  );

  const hideMediaViewerForYoshimotozaka = useCallback(() => {
    setIsVisibleMediaViewerForYoshimotozaka(false);
  }, []);

  return (
    <div className="PR">
      <div className="PR__contents">
        <Heading level={1} text="プロモーション活動" subText="のお仕事" />
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
            text="GHIT Fund | 世界の人々を感染症から救う - Yahoo! JAPAN"
          />
          <p>
            GHIT Fund
            社からの依頼で、グローバルヘルスを啓蒙するウェブサイトを作ることになり、制作を担当しました。
            <br />
            グローバルヘルスの世界では大物である博士たちにインタビューし、撮影し、記事をまとめ...
            コンテンツづくりから社内のチームでわいわい手掛けるという、とても楽しい現場でした（ライターは編集部、撮影はカメラ部）。
            <br />
            <span className="util-Text--highlighted">
              クライアントへのヒアリングや撮影ディレクションなど、デザインやコーディング以外でもウェブサイト制作に関する部分はほぼ一人で担当。
            </span>
          </p>
          <p>
            サイトの公開後にインタビューした博士の一人が
            <span className="util-Text--highlighted">ノーベル賞を受賞</span>
            するという素晴らしい事態も起き、公開後の反響も含めクライアントには大変喜んでいただけました。
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

        <section className="PR__contents311">
          <Heading level={2} text="3.11、検索は応援になる - Yahoo!検索" />
          <p>
            東日本大震災が発生してから3年が経とうという頃に、震災の記憶を風化させないためにYahoo!検索としてなにかできないか、チームでアイデアを出し合って実現させた企画。
            <br />
            チーム内で企画を固めた後、広告代理店と連携し、震災当日の検索ワードとそのワードの検索数を可視化したビジュアルムービーを作成しました。
            <br />
            また3月11日に「3.11」と検索された数に応じた金額を東北に寄付するという内容も盛り込みました。
          </p>
          <p>
            結果、
            <span className="util-Text--highlighted">
              用意していた予算を遥かに上回る検索数を叩き出し、
            </span>
            役員に相談の末、予算を超えて検索数通りの募金をする許可を得たものの、社内の稟議を通すのが大変に。
          </p>
          <p>
            企画立案から3月11日までの時間が短く（思いついたのが割と直前だったため）、ドタバタした状況の中なんとかサイトの公開を3月11日に間に合わせました。
            <br />
            当日参加した一般ユーザーの方から「英語版もほしい」という声をいただき、数日後に言語切り替え機能も追加で実装しました。
          </p>
          <p>
            現在に至るまで未だ毎年続けられている企画の初年度と2年目を担当しましたが、
            <span className="util-Text--highlighted">
              初年度のエモーショナルさ
            </span>
            は後にも先にも経験しがたいものでした。
          </p>
          <div className="PR__contents311Image">
            <button
              onClick={() => showMediaViewerFor311(0)}
              className="PR__contents311ImageThumbnail"
            >
              <img
                src={thumbnail311}
                alt="3.11企画の画像"
                width="100%"
                height="auto"
              />
            </button>
            <div className="PR__contents311ImageTrigger">
              <Button
                color="orange"
                onClickHandler={() => showMediaViewerFor311(0)}
                text="画像を見る"
                iconRight="arrow_upper_right"
                isInline={true}
              />
            </div>
          </div>
        </section>

        <Divider color="orange" />

        <section className="PR__contentsSatNav">
          <Heading level={2} text="秋の3大キャンペーン - Yahoo!カーナビ" />
          <p>
            Yahoo!カーナビを利用することでTポイントがたまるというよくあるキャンペーンの訴求サイト。
            <br />
            よくあるので少し遊び心を入れることにし、車のGIFアニメーションを作り、
            <span className="util-Text--highlighted">
              道路を模した背景と道路標識を横スクロールさせることで車が走っている様子を擬似的に表現しました。
            </span>
          </p>
          <p>
            SP版は同じコンセプトを踏襲しつつも横スクロールが難しいので、車のアニメーションや背景は専用のものを用意し、縦スクロールで同じ世界観を表現できるようにしました。
          </p>
          <div className="PR__contentsSatNavImage">
            <button
              onClick={() => showMediaViewerForSatNav(0)}
              className="PR__contentsSatNavImageThumbnail"
            >
              <img
                src={thumbnailSatNav}
                alt="Yahoo!カーナビ 秋の3大キャンペーンの画像"
                width="100%"
                height="auto"
              />
            </button>

            <div className="PR__contentsSatNavImageTrigger">
              <Button
                color="orange"
                onClickHandler={() => showMediaViewerForSatNav(0)}
                text="すべての画像を見る"
                iconRight="arrow_upper_right"
                isInline={true}
              />
            </div>
          </div>
        </section>

        <Divider color="orange" />

        <section className="PR__contentsBonenkai">
          <Heading
            level={2}
            text="幹事5,000人に忘年会大調査 - Yahoo!予約飲食"
          />
          <p>
            忘年会シーズンに毎年恒例で作成されるアンケート結果まとめページ。例年、シンプルな円グラフや棒グラフで結果を表示する形式で作成されていましたが、担当になったので例年とは変えて少し遊び心を入れたインフォグラフィック風にすることにしました。
            <br />
            出したアイデアが
            <span className="util-Text--highlighted">
              大量のピクトグラムやイラスト画像
            </span>
            を必要としたため、制作期間の兼ね合いでイラスト部分を外注することに。
          </p>
          <p>
            イラストはすべて自ら手描きで描いて指示コメントとともに発注したところ、思ったより担当してくれるスタッフの人数が多く、フィードバックやクオリティのばらつきの調整になかなかの時間を割くこととなりました。
            <br />
            しかしながら内容が比較的ふざけていたため、
            <span className="util-Text--highlighted">
              外注スタッフの方々も楽しそうに作業
            </span>
            してくれ、出し戻しの作業も和気あいあいとした雰囲気の中進めることができました。
          </p>
          <div className="PR__contentsBonenkaiImage">
            <button
              onClick={() => showMediaViewerForBonenkai(0)}
              className="PR__contentsBonenkaiImageThumbnail"
            >
              <img
                src={thumbnailBonenkai}
                alt="幹事5,000人に忘年会大調査の画像"
                width="100%"
                height="auto"
              />
            </button>

            <div className="PR__contentsBonenkaiImageTrigger">
              <Button
                color="orange"
                onClickHandler={() => showMediaViewerForBonenkai(0)}
                text="すべての画像を見る"
                iconRight="arrow_upper_right"
                isInline={true}
              />
            </div>
          </div>
        </section>

        <Divider color="orange" />

        <section className="PR__contentsYoshimotozaka">
          <Heading
            level={2}
            text="吉本坂46の泣かせメシ！ - Yahoo!ライフマガジン"
          />
          <p>
            短期間（2～3日）で作ることを依頼されたタレント素材を扱う系の案件。
            <br />
            レギュレーションは厳しくなかったものの、
            <span className="util-Text--highlighted">
              46人分の素材の編集が（「46」というなんともレイアウトの難しい数のおかげで）
            </span>
            とにかく大変でした。
          </p>
          <div className="PR__contentsYoshimotozakaImage">
            <button
              onClick={() => showMediaViewerForYoshimotozaka(0)}
              className="PR__contentsYoshimotozakaImageThumbnail"
            >
              <img
                src={thumbnailYoshimotozaka}
                alt="吉本坂46の泣かせメシ！　の画像"
                width="100%"
                height="auto"
              />
            </button>

            <div className="PR__contentsYoshimotozakaImageTrigger">
              <Button
                color="orange"
                onClickHandler={() => showMediaViewerForYoshimotozaka(0)}
                text="画像を見る"
                iconRight="arrow_upper_right"
                isInline={true}
              />
            </div>
          </div>
        </section>

        <Divider color="orange" />

        <section className="PR__contentsRolls">
          <Heading level={2} text="担当領域・技術" />
          <ul className="PR__contentsRollsList">
            <li className="PR__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>UI設計（UIデザイン）</span>
            </li>
            <li className="PR__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>
                ビジュアルデザイン（アイコン作成 / イラストレーション /
                ウェブページデザイン）
              </span>
            </li>
            <li className="PR__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>コーディング（HTML / CSS（SASS） / JavaScript / PHP）</span>
            </li>
            <li className="PR__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>CMS運用</span>
            </li>
            <li className="PR__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>撮影ディレクション</span>
            </li>
          </ul>

          <Heading level={2} text="利用ツール" />
          <ul className="PR__contentsRollsList">
            <li className="PR__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>Adobe Illustrator</span>
            </li>
            <li className="PR__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>Adobe Photoshop</span>
            </li>
            <li className="PR__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>MovableType</span>
            </li>
          </ul>
        </section>

        <div className="PR__contentsBack">
          <Button
            href="../"
            color="orange"
            text="トップページへ戻る"
            iconLeft="arrow_left"
            isInline={true}
            target="_self"
          />
        </div>
      </div>

      {isVisibleMediaViewerForGhit && (
        <MediaViewer
          mediaList={mediaListForGhit}
          selectedIndex={selectedIndexForGhit}
          onClickHandlerForClosing={hideMediaViewerForGhit}
        />
      )}

      {isVisibleMediaViewerFor311 && (
        <MediaViewer
          mediaList={mediaListFor311}
          selectedIndex={selectedIndexFor311}
          onClickHandlerForClosing={hideMediaViewerFor311}
        />
      )}

      {isVisibleMediaViewerForSatNav && (
        <MediaViewer
          mediaList={mediaListForSatNav}
          selectedIndex={selectedIndexForSatNav}
          onClickHandlerForClosing={hideMediaViewerForSatNav}
        />
      )}

      {isVisibleMediaViewerForBonenkai && (
        <MediaViewer
          mediaList={mediaListForBonenkai}
          selectedIndex={selectedIndexForBonenkai}
          onClickHandlerForClosing={hideMediaViewerForBonenkai}
        />
      )}

      {isVisibleMediaViewerForYoshimotozaka && (
        <MediaViewer
          mediaList={mediaListForYoshimotozaka}
          selectedIndex={selectedIndexForYoshimotozaka}
          onClickHandlerForClosing={hideMediaViewerForYoshimotozaka}
        />
      )}
    </div>
  );
};

export default PR;
