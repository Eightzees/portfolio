import Heading from "../../components/Heading/Heading";
import Icon from "../../components/Icon/Icon";
import "./Search.scss";

import imageDD0 from "../../assets/images/search/dd_01.png";
import imageDD1 from "../../assets/images/search/dd_02.png";
import imageDD2 from "../../assets/images/search/dd_03.jpg";
import imagePR0 from "../../assets/images/search/pr_01.png";
import imagePR1 from "../../assets/images/search/pr_01.png";
import imagePR2 from "../../assets/images/search/pr_01.png";
import thumbnailDD from "../../assets/images/search/thumbnail_dd.png";
import thumbnailPR from "../../assets/images/search/thumbnail_pr.png";
import imageClockTokyo from "../../assets/images/search/clock_tokyo.png";
import imageClockNewYork from "../../assets/images/search/clock_new_york.png";

import { useCallback, useState } from "react";
import type { MediaList } from "../../components/MediaViewer/MediaViewer";
import MediaViewer from "../../components/MediaViewer/MediaViewer";
import Divider from "../../components/Divider/Divider";
import Button from "../../components/Button/Button";

const Search = () => {
  const mediaListForDD: MediaList[] = [
    {
      imagePath: imageDD0,
      index: 0,
      caption:
        "日替わりで世界の絶景画像を直接表示するものや、検索ワードにその場で一発回答するもの、特定の人物や物事を深堀りしたもの（現在のナレッジパネルの前身）など、これまで以上に場所を取るけれど有益だったり、Yahoo!検索の再訪問につながる検索ショートカットを企画した",
    },
    {
      imagePath: imageDD1,
      index: 1,
      caption:
        "スターウォーズの日を盛り上げるためにルーカスフィルム（当時）と協力して検索結果画面をスターウォーズ仕様にする企画。冒頭のメッセージをスター・ウォーズのオープニングのように斜めのパースで自動スクロールするロジックに苦心した。（でもやりたかった）",
    },
    {
      imagePath: imageDD2,
      index: 2,
      caption:
        "検索画面の何処かにトリガーを隠し、見つけてクリックするとAKB48メンバーのグッズ抽選に応募できる企画。検索結果画面にここまで大胆に画像をオーバーレイする挙動は当時とてもめずらしかった",
    },
  ];

  const mediaListForPR: MediaList[] = [
    {
      imagePath: imagePR0,
      index: 0,
      caption:
        "質問・疑問に一発回答したいというYahoo!検索の方針にピッタリの書籍をプロモーションする企画。主にコーディングとフロントエンドを担当",
    },
    {
      imagePath: imagePR1,
      index: 1,
      caption:
        "毎年年末に近づくとYahoo!検索で公開していた「Yahoo!検索ランキング」の特集ページ。3年間担当したが、集計が比較的公開日の直前になることが多いため、毎年年末はバタバタする傾向があった。主にコーディングとフロントエンドを担当。現在の「Yahoo!検索大賞」に続く企画",
    },
    {
      imagePath: imagePR2,
      index: 2,
      caption:
        "Yahoo!検索主体で企画した、毎年恒例となる東日本の復興支援企画のウェブサイト。初年度と2年目を担当",
    },
  ];

  const [isVisibleMediaViewerForDD, setIsVisibleMediaViewerForDD] =
    useState(false);
  const [selectedIndexForDD, setSelectedIndexForDD] = useState(0);
  const [isVisibleMediaViewerForPR, setIsVisibleMediaViewerForPR] =
    useState(false);
  const [selectedIndexForPR, setSelectedIndexForPR] = useState(0);

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

  const showMediaViewerForPR = useCallback(
    (index: number) => {
      setSelectedIndexForPR(index);
      setIsVisibleMediaViewerForPR(true);
    },
    [selectedIndexForPR]
  );

  const hideMediaViewerForPR = useCallback(() => {
    setIsVisibleMediaViewerForPR(false);
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

        <Divider color="blue" />

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

        <Divider color="blue" />

        <section className="Search__contentsDD">
          <Heading level={2} text="独自検索結果モジュール" />
          <p>
            オーガニックな検索結果から求めている情報を選ぶ手間を省くため、検索キーワードからユーザーが求めているであろう情報をわかり易くまとめて提供するモジュールの開発も行いました。
            <br />
            ここもまずは数値分析から、検索キーワードのボリュームから求めてられている情報を割り出しモジュールを企画、UIは数パターン用意し、まずはライブテストを実施します。各パターンのログを分析し、ユーザーにとってメリットのあるものを選定の上、正式にリリースします。その際オーガニックな検索結果を阻害しない程度の内容であることも大事です。
          </p>

          <div className="Search__contentsDDSample">
            <div className="Search__contentsDDSampleText">
              <div className="Search__contentsDDSampleTextSearchBox">
                <span>検索</span>
              </div>
              <Heading level={3} text="東京とニューヨークの時差" />
              <div className="Search__contentsDDSampleTextBody">
                <div className="Search__contentsDDSampleTextBodyTokyo">
                  <span className="util-Text--emphasized">東京</span>
                  <span>7月1日</span>
                  <span className="Search__contentsDDSampleTextBodyTokyoTime">
                    3:25
                  </span>
                </div>
                <div className="Search__contentsDDSampleTextBodyDiff">
                  <span className="util-Text--emphasized">-13時間</span>
                </div>
                <div className="Search__contentsDDSampleTextBodyNewYork">
                  <span className="util-Text--emphasized">ニューヨーク</span>
                  <span>6月30日</span>
                  <span className="Search__contentsDDSampleTextBodyNewYorkTime">
                    14:25
                  </span>
                </div>
              </div>
            </div>
            <p>VS</p>
            <div className="Search__contentsDDSampleClock">
              <div className="Search__contentsDDSampleClockSearchBox">
                <span>検索</span>
              </div>
              <Heading level={3} text="東京とニューヨークの時差" />
              <p className="Search__contentsDDSampleClockDiff">-13時間</p>
              <div className="Search__contentsDDSampleClockBody">
                <div className="Search__contentsDDSampleClockBodyTokyo">
                  <img
                    src={imageClockTokyo}
                    width="80"
                    height="auto"
                    alt="東京の時刻 3時25分"
                  />
                  <span className="util-Text--emphasized">東京</span>
                  <span>7月1日 3:25</span>
                </div>
                <div className="Search__contentsDDSampleClockBodyNewYork">
                  <img
                    src={imageClockNewYork}
                    width="80"
                    height="auto"
                    alt="ニューヨークの時刻 16時25分"
                  />
                  <span className="util-Text--emphasized">ニューヨーク</span>
                  <span>6月30日 14:25</span>
                </div>
              </div>
            </div>
          </div>
          <p>
            ただしプロモーションや、季節性・お祭り要素を含むモジュールの場合、時には遊び心を加えたものを提案し実装することもありました。
          </p>

          <div className="Search__contentsDDImage">
            <button
              onClick={() => showMediaViewerForDD(0)}
              className="Search__contentsDDImageThumbnail"
            >
              <img
                src={thumbnailDD}
                alt="Yahoo!検索ショートカットに関する画像"
                width="100%"
                height="auto"
              />
            </button>

            <div className="Search__contentsDDImageTrigger">
              <Button
                color="blue"
                onClickHandler={() => showMediaViewerForDD(0)}
                text="画像をすべて見る"
                iconRight="arrow_upper_right"
                isInline={true}
              />
            </div>
          </div>
        </section>

        <Divider color="blue" />

        <section className="Search__contentsPR">
          <Heading level={2} text="Yahoo!検索のプロモーション活動" />
          <p>
            Yahoo!検索は独自のポータルサイトも持っていたため、外部のライターの方々に連載をお願いし、検索に関連する漫画や面白い記事を掲載。サイトの更新運用を行っていました。担当期間中にサイトのリニューアルも担当。
          </p>

          <div className="Search__contentsPRLink">
            <Button
              href="https://promo-search.yahoo.co.jp/"
              color="blue"
              text="Yahoo!検索ガイド"
              iconRight="arrow_upper_right"
            />
            <p>※担当当時のYahoo!検索ガイドからアップデートされています。</p>
          </div>

          <p>
            並行して企画・編集の方とともにプロモーション案を企画し、オフラインと連動したものも含めいくつもプロモーション案件を担当し、主に企画や実装を担いました。
          </p>

          <div className="Search__contentsPRImage">
            <button
              onClick={() => showMediaViewerForPR(0)}
              className="Search__contentsPRImageThumbnail"
            >
              <img
                src={thumbnailPR}
                alt="Yahoo!検索のプロモーション活動に関する画像"
                width="100%"
                height="auto"
              />
            </button>

            <div className="Search__contentsPRImageTrigger">
              <Button
                color="blue"
                onClickHandler={() => showMediaViewerForPR(0)}
                text="画像をすべて見る"
                iconRight="arrow_upper_right"
                isInline={true}
              />
            </div>
          </div>
        </section>

        <section className="Search__contentsRolls">
          <Heading level={2} text="担当領域・技術" />
          <ul className="Search__contentsRollsList">
            <li className="Search__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>コーディング（HTML / CSS / JavaScript / JQuery</span>
            </li>

            <li className="Search__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>UI設計（UIデザイン）</span>
            </li>
            <li className="Search__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>バケットライブテスト / 数値分析</span>
            </li>
            <li className="Search__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>CMS運用</span>
            </li>
          </ul>

          <Heading level={2} text="利用ツール" />
          <ul className="Search__contentsRollsList">
            <li className="Search__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>Adobe Dreamweaver</span>
            </li>
            <li className="Search__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>Adobe Photoshop</span>
            </li>
            <li className="Search__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>MovableType</span>
            </li>
          </ul>
        </section>

        <div className="Search__contentsBack">
          <Button
            href="/"
            color="blue"
            text="トップページへ戻る"
            iconLeft="arrow_left"
            isInline={true}
            target="_self"
          />
        </div>
      </div>

      {isVisibleMediaViewerForDD && (
        <MediaViewer
          mediaList={mediaListForDD}
          selectedIndex={selectedIndexForDD}
          onClickHandlerForClosing={hideMediaViewerForDD}
        />
      )}
      {isVisibleMediaViewerForPR && (
        <MediaViewer
          mediaList={mediaListForPR}
          selectedIndex={selectedIndexForPR}
          onClickHandlerForClosing={hideMediaViewerForPR}
        />
      )}
    </div>
  );
};

export default Search;
