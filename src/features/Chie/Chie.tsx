import Heading from "../../components/Heading/Heading";
import Icon from "../../components/Icon/Icon";
import "./Chie.scss";

import imageChie0 from "../../assets/images/chie/chie_profile_form.png";
import imageChie1 from "../../assets/images/chie/chie_voting.png";
import imageChie2 from "../../assets/images/chie/chie_dd.png";
import imageApp0 from "../../assets/images/chie/app_flow.png";
import imageApp1 from "../../assets/images/chie/app_question.png";
import thumbnailChie from "../../assets/images/chie/thumbnail_chie.png";
import thumbnailApp from "../../assets/images/chie/thumbnail_app.png";
import { useCallback, useState } from "react";
import type { MediaList } from "../../components/MediaViewer/MediaViewer";
import MediaViewer from "../../components/MediaViewer/MediaViewer";
import Divider from "../../components/Divider/Divider";
import Button from "../../components/Button/Button";

const Chie = () => {
  const mediaListForManaging: MediaList[] = [
    {
      imagePath: imageChie0,
      index: 0,
      caption:
        "ユーザー登録フォームの改善を行った際のモック。大きな変更は入れておらず、性別選択欄の改善や新しい項目の追加などをしている",
    },
    {
      imagePath: imageChie1,
      index: 1,
      caption:
        "ベストアンサーの投票を気軽に行ってもらうためのUI改善施策。一人のユーザーが複数人格を持てる古いシステムのせいで複雑化していた投票行為を簡略化した。また投票すると知恵コインを獲得できるが、獲得時にコインがキラキラ回転するアニメーションを表示し、投票時に気持ちよさのような感覚が得られるように工夫した",
    },
    {
      imagePath: imageChie2,
      index: 2,
      caption:
        "検索結果に表示するYahoo!知恵袋へのショートカットモジュールの改善。「Q・A」の文字のサイズ、装飾を数パターン用意しバケットテストを実施した",
    },
  ];

  const mediaListForApp: MediaList[] = [
    {
      imagePath: imageApp0,
      index: 0,
      caption: "アプリで表示するために簡易化した知恵袋のフロー図",
    },
    {
      imagePath: imageApp1,
      index: 1,
      caption:
        "アプリ表示用にリファインした質問と回答の画面。紫と黄色ベースのカラーリングを変更し、Yahoo! JAPAN アプリに馴染むようにした。",
    },
  ];

  const [isVisibleMediaViewerForManaging, setIsVisibleMediaViewerForManaging] =
    useState(false);
  const [selectedIndexForManaging, setSelectedIndexForManaging] = useState(0);
  const [isVisibleMediaViewerForApp, setIsVisibleMediaViewerForApp] =
    useState(false);
  const [selectedIndexForApp, setSelectedIndexForApp] = useState(0);

  const showMediaViewerForManaging = useCallback(
    (index: number) => {
      setSelectedIndexForManaging(index);
      setIsVisibleMediaViewerForManaging(true);
    },
    [selectedIndexForManaging]
  );

  const hideMediaViewerForManaging = useCallback(() => {
    setIsVisibleMediaViewerForManaging(false);
  }, []);

  const showMediaViewerForApp = useCallback(
    (index: number) => {
      setSelectedIndexForApp(index);
      setIsVisibleMediaViewerForApp(true);
    },
    [selectedIndexForApp]
  );

  const hideMediaViewerForApp = useCallback(() => {
    setIsVisibleMediaViewerForApp(false);
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
              onClick={() => showMediaViewerForManaging(0)}
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
                onClickHandler={() => showMediaViewerForManaging(0)}
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
            <br />
            （このシンプルに調整したものが、後のリニューアルの際にベースとなる。）
          </p>
          <p>
            Yahoo! JAPANアプリ側のデザイントーンと要望をヒアリングし、Yahoo!
            JAPANアプリに内包されても馴染むように、（スケジュールの都合上）かなり短期間で調整しました。
          </p>
          <div className="Chie__contentsAppImage">
            <button
              onClick={() => showMediaViewerForApp(0)}
              className="Chie__contentsAppImageThumbnail"
            >
              <img
                src={thumbnailApp}
                alt="Yahoo! JAPAN アプリ向けのYahoo!知恵袋の画像"
                width="100%"
                height="auto"
              />
            </button>
            <div className="Chie__contentsAppImageTrigger">
              <Button
                color="yellow"
                onClickHandler={() => showMediaViewerForApp(0)}
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
            <br />
            それまでデザイナーが見た目のテンプレートを作るレポジトリとエンジニアのレポジトリが別れていたが、このタイミングでレポジトリを統合する方針に切り替わり、デザイナーもReact
            やVue などでコーディングすることとなった。
            <br />
            同時にデザインのリニューアルについても、イメージボードや
          </p>
          <div className="Chie__contentsRenewalLink">
            <Button
              href="https://chiebukuro.yahoo.co.jp/"
              color="yellow"
              text="Yahoo!知恵袋"
              iconRight="arrow_upper_right"
            />
            <p>※担当当時のYahoo!知恵袋からアップデートされています。</p>
          </div>
        </section>

        <section className="Chie__contentsRolls">
          <Heading level={2} text="担当領域・技術" />
          <ul className="Chie__contentsRollsList">
            <li className="Chie__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>UI設計（UIデザイン）</span>
            </li>
            <li className="Chie__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>
                ビジュアルデザイン（イラストレーション / サービスデザイン）
              </span>
            </li>
            <li className="Chie__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>
                コーディング（HTML / SASS / PHP / React + JavaScript）
              </span>
            </li>
            <li className="Chie__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>地図スタイルメンテナンス</span>
            </li>
          </ul>

          <Heading level={2} text="利用ツール" />
          <ul className="Chie__contentsRollsList">
            <li className="Chie__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>Adobe Illustrator</span>
            </li>
            <li className="Chie__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>Adobe Photoshop</span>
            </li>
            <li className="Chie__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>Sketch</span>
            </li>
          </ul>
        </section>

        <div className="Chie__contentsBack">
          <Button
            href="/"
            color="yellow"
            text="トップページへ戻る"
            iconLeft="arrow_left"
            isInline={true}
            target="_self"
          />
        </div>
      </div>

      {isVisibleMediaViewerForManaging && (
        <MediaViewer
          mediaList={mediaListForManaging}
          selectedIndex={selectedIndexForManaging}
          onClickHandlerForClosing={hideMediaViewerForManaging}
        />
      )}
      {isVisibleMediaViewerForApp && (
        <MediaViewer
          mediaList={mediaListForApp}
          selectedIndex={selectedIndexForApp}
          onClickHandlerForClosing={hideMediaViewerForApp}
        />
      )}
    </div>
  );
};

export default Chie;
