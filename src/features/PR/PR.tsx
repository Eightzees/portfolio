import Heading from "../../components/Heading/Heading";
import Icon from "../../components/Icon/Icon";
import "./PR.scss";

import thumbnailGhit from "../../assets/images/pr/thumbnail_ghit.png";
import imageGhit0 from "../../assets/images/pr/ghit_top.png";
import imageGhit1 from "../../assets/images/pr/ghit_interview_02.png";
import imageGhit2 from "../../assets/images/pr/ghit_interview_01_sp.png";
import imageGhit3 from "../../assets/images/pr/ghit_dengue.png";
import thumbnail311 from "../../assets/images/pr/thumbnail_311.png";
import image3110 from "../../assets/images/pr/311_pc.png";
import thumbnailSatNav from "../../assets/images/pr/thumbnail_satnav.png";
import imageSatNav0 from "../../assets/images/pr/satnav_pc.png";
import imageSatNav1 from "../../assets/images/pr/satnav_sp.png";
import thumbnailBonenkai from "../../assets/images/pr/thumbnail_bonenkai.png";
import imageBonenkai0 from "../../assets/images/pr/bonenkai_01.png";
import imageBonenkai1 from "../../assets/images/pr/bonenkai_02.png";
import imageBonenkai2 from "../../assets/images/pr/bonenkai_03.png";
import imageBonenkai3 from "../../assets/images/pr/bonenkai_04.png";
import thumbnailYoshimotozaka from "../../assets/images/pr/thumbnail_yoshimotozaka.png";
import imageYoshimotozaka0 from "../../assets/images/pr/yoshimotozaka_pc.png";
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

  const mediaListFor311: MediaList[] = [
    {
      imagePath: image3110,
      index: 0,
      caption:
        "デザイン素材は広告代理店の支給もあったため、サイト制作の実作業はコーディング以降をすべて担当した",
    },
  ];

  const mediaListForSatNav: MediaList[] = [
    {
      imagePath: imageSatNav0,
      index: 0,
      caption:
        "PC版。車のアニメーションは位置が固定されており、背景のみがスクロールする",
    },
    {
      imagePath: imageSatNav1,
      index: 1,
      caption:
        "SP版は縦スクロールで走っている様子を表現するため、車の正面のアニメーションを別途用意。画面下部に固定し、空と看板のみをスクロール。背景の景色はずれてスクロールする仕様（視差スクロールは当時の流行だった）",
    },
  ];

  const mediaListForBonenkai: MediaList[] = [
    {
      imagePath: imageBonenkai0,
      index: 0,
      caption: "忘年会アンケートその1",
    },
    {
      imagePath: imageBonenkai1,
      index: 1,
      caption: "忘年会アンケートその2",
    },
    {
      imagePath: imageBonenkai2,
      index: 2,
      caption: "忘年会アンケートその3",
    },
    {
      imagePath: imageBonenkai3,
      index: 3,
      caption: "忘年会アンケートその4",
    },
  ];

  const mediaListForYoshimotozaka: MediaList[] = [
    {
      imagePath: imageYoshimotozaka0,
      index: 0,
      caption:
        "トップの集合素材のバランス調整に、全工程の90%の時間を使ったと言っても過言ではない",
    },
  ];

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
            text="GHIT Fund | 世界の人々を感染症から救う - Yahoo! JAPAN"
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

        <section className="PR__contents311">
          <Heading level={2} text="3.11、検索は応援になる - Yahoo!検索" />
          <p>
            東日本大震災が発生してから3年が経とうという頃に、震災の記憶を風化させないためにYahoo!検索としてなにかできないか、チームでアイデアを出し合って実現させた企画。
            <br />
            チーム内で企画を固めた後、広告代理店と連携し、震災当日の検索ワードと検索数を可視化したビジュアルを作成した。
            <br />
            また3月11日に「3.11」と検索された数に応じた金額を東北に寄付するという内容も盛り込んだ。結果、用意していた予算を遥かに上回る検索数を叩き出し、社内の稟議を通すのが大変になる。
            <br />
            企画立案から3月11日までの時間がとても短く（思いついたのが割と直前だったため）、ドタバタした状況の中なんとかサイトの公開を3月11日に間に合わせた。当日参加した一般ユーザーの方から「英語版もほしい」という声をいただき、数日後に言語切り替え機能も追加で実装した。
          </p>
          <p>
            現在に至っても未だ毎年続けられている企画の初年度と2年目を担当したが、
            <span className="util-Text--highlighted">
              初年度のエモーショナルさ
            </span>
            は後にも先にも経験しがたいものであった。
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
            Yahoo!カーナビを利用することでTポイントがたまるというよくあるキャンペーン。
            <br />
            よくあるので少し遊び心を入れることにし、車のGIFアニメーションを作り、道路を模した
            <span className="util-Text--highlighted">
              画面を横スクロールさせることで車が走っている様子を擬似的に表現。
            </span>
            <br />
            SP版は同じコンセプトを踏襲しつつも横スクロールが難しいので、アニメーションやレイアウトも専用で用意した。
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
            忘年会シーズンに毎年恒例で作成されるアンケート結果まとめページ。毎年円グラフや棒グラフで作成されていたが、担当になったので少し遊び心を入れたインフォグラフィック風にした。
            <br />
            出したアイデアが大量のベクター画像を必要としたため、制作期間的にイラスト部分を外注することにした。イラストはすべて手書きで書いて指示コメントとともに発注したが、思ったより担当してくれる方の人数が多くフィードバック作業がなかなか大変だった。内容が比較的ふざけていたため、
            <span className="util-Text--highlighted">
              外注スタッフの方々も楽しそうに作業
            </span>
            してくれて、戻し作業も含めてスムーズに運ぶことができた。
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
            短期間で作ることを依頼されたタレント素材を扱う系の案件。
            <br />
            レギュレーションは厳しくなかったものの、
            <span className="util-Text--highlighted">
              46人分の素材の編集が（「46」というなんともレイアウトの難しい数のおかげで）
            </span>
            とにかく大変であった。
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
            href="/"
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
