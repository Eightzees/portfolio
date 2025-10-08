import "./Search.scss";

import { useCallback, useState } from "react";

import imageClockNewYork from "../../assets/images/search/clock_new_york.png";
import imageClockTokyo from "../../assets/images/search/clock_tokyo.png";
import thumbnailDD from "../../assets/images/search/thumbnail_dd.png";
import thumbnailPR from "../../assets/images/search/thumbnail_pr.png";
import Button from "../../components/Button/Button";
import Divider from "../../components/Divider/Divider";
import Heading from "../../components/Heading/Heading";
import Icon from "../../components/Icon/Icon";
import MediaViewer from "../../components/MediaViewer/MediaViewer";
import { mediaListForDD, mediaListForPR } from "../../lib/mediaListForSearch";

const Search = () => {
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
        <Heading level={1} text="Yahoo!検索" subText="でのお仕事" />
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
            数ピクセルの位置移動、サイズ変更、微妙な色の変更で億単位のお金が動く検索結果画面。そのためUIの変更を行う前には必ずバケットライブテスト（ABテスト）を行います。
            <br />
            どんなUIのパターンを何種類試すのか？　
            <span className="util-Text--highlighted">
              それぞれどのような効果が期待できるのか？　変更箇所の周辺に影響はないか？
            </span>
            　どのUIパーツのどんな数値を見たいのか？　あらかじめ設計したうえでテストを走らせます。
          </p>
          <p>
            例えばテキストリストのUIを提供したいとして、1件1件をカードのようにするか、シンプルな仕切り線のみで区切るかをテストする場合、その提供コンテンツの
            <span className="util-Text--highlighted">
              目標が何かによってそれぞれの評価は変わり、取得すべきデータも変わって
            </span>
            きます。
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
          <p>
            ある程度結果の予想を立てて、実際にその通りになるかどうかを念のためテストすることもあれば、予想がつかなかったり結果が予想と違ってしまうこともあります。
            <br />
            そのためテスト後、どのUIを採用するのか、また変更を見送るのかの判断は、プランナー・デザイナー・数値分析専門のチームで検証し、決めます。
            <br />
            もちろん数値のみですべてを判断するのではなく時には
            <span className="util-Text--highlighted">定性的な評価も必要</span>
            となるため、デザイナーを中心に定量と定性どちらに比重を置くのか、状況やコンテンツに合わせて柔軟に決める必要がありました。
          </p>
          <p>
            この経験により、
            <span className="util-Text--highlighted">
              どんなUIがユーザーに対してどのように作用するのか
            </span>
            、知見を得ることができました。
          </p>
        </section>

        <Divider color="blue" />

        <section className="Search__contentsDD">
          <Heading level={2} text="独自検索結果モジュール" />
          <p>
            ユーザーがオーガニックな検索結果から自身の求めている情報を選ぶ手間を省くため、検索キーワードをもとにユーザーが求めているであろう情報をわかり易くまとめて提供するモジュールの開発も行いました。
            {/* <br />これらは「ダイレクト・ディスプレイ」や「ショートカット」と呼ばれ、ユーザー意図に対して確度の高いものは検索結果の上に、やや確度の下がるものは途中にインサートされたり、最後に表示されます。*/}
          </p>
          <p>
            検索キーワードのボリュームから、より求めてられているであろう情報を割り出しモジュールを企画するところから始まります。
            <br />
            <span className="util-Text--highlighted">
              必要最低限、ただしユーザーにとって有用であろう情報は落とさないよう取捨選択
            </span>
            し、それらを見やすく、操作しやすく、
            <span className="util-Text--highlighted">
              オーガニックな検索結果を阻害しない
            </span>
            ようにデザインにする必要があります。
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
            UIは数パターン用意し、まずはバケットテストを実施します。各パターンのログを分析し、よりユーザーにとってメリットの大きいものを選定の上、正式にリリースします。
          </p>
          <p>
            ただしプロモーションや、季節性・お祭り要素を含むモジュールの場合、時には遊び心を加えたものを提案し実装することもありました。
            <br />
            以下はプロモーション要素を含むモジュールの例です。
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
            Yahoo!検索は独自のポータルサイト（「Yahoo!検索ガイド」）を持っていたため、外部の人気ライターの方々に連載をお願いし、
            <span className="util-Text--highlighted">
              Yahoo!検索に関連する漫画やおもしろ記事を掲載
            </span>
            。ライターの方々のファンや記事を読んだ人々にYahoo!検索を利用してもらうきっかけとなるよう、サイトの更新・運用を担当していました。
            <br />
            また担当期間中にサイトのリニューアルも実施し、主にコーディングとフロントエンドを担当しました。
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
            ポータルサイトの運用と並行して
            <span className="util-Text--highlighted">
              プランナー・エディターの方々とともにプロモーション案を検討
            </span>
            し、オフラインと連動したものも含めいくつもプロモーション案件を担当。主に企画や実装を担いました。
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

        <Divider color="blue" />

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
