import Heading from "../../components/Heading/Heading";
import Icon from "../../components/Icon/Icon";
import "./Seikatsu.scss";

import imageRadio0 from "../../assets/images/seikatsu/radio_pc.png";
import imageRadio1 from "../../assets/images/seikatsu/radio_sp.png";
import imageApp0 from "../../assets/images/chie/app_flow.png";
import imageApp1 from "../../assets/images/chie/app_question.png";
import thumbnailRadio from "../../assets/images/seikatsu/thumbnail_radio.png";
import thumbnailApp from "../../assets/images/chie/thumbnail_app.png";
import { useCallback, useState } from "react";
import type { MediaList } from "../../components/MediaViewer/MediaViewer";
import MediaViewer from "../../components/MediaViewer/MediaViewer";
import Divider from "../../components/Divider/Divider";
import Button from "../../components/Button/Button";

const Seikatsu = () => {
  const mediaListForRadio: MediaList[] = [
    {
      imagePath: imageRadio0,
      index: 0,
      caption:
        "たかみなに質問するセクションと、逆にたかみなからの質問に回答するセクションがあるので、その2つを対比させるような作りになっている",
    },
    {
      imagePath: imageRadio1,
      index: 1,
      caption:
        "モバイル端末の場合は2つのセクションを同時に並列表示させることが厳しいのでタブで切り替える方式になる",
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

  const [isVisibleMediaViewerForRadio, setIsVisibleMediaViewerForRadio] =
    useState(false);
  const [selectedIndexForRadio, setSelectedIndexForRadio] = useState(0);
  const [isVisibleMediaViewerForApp, setIsVisibleMediaViewerForApp] =
    useState(false);
  const [selectedIndexForApp, setSelectedIndexForApp] = useState(0);

  const showMediaViewerForRadio = useCallback(
    (index: number) => {
      setSelectedIndexForRadio(index);
      setIsVisibleMediaViewerForRadio(true);
    },
    [selectedIndexForRadio]
  );

  const hideMediaViewerForRadio = useCallback(() => {
    setIsVisibleMediaViewerForRadio(false);
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
    <div className="Seikatsu">
      <div className="Seikatsu__contents">
        <Heading level={1} text="Yahoo!生活メディア" />
        <section className="Seikatsu__contentsSummary">
          <Heading level={2} text="経験したこと" />
          <ul className="Seikatsu__contentsSummaryList">
            <li className="Seikatsu__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>
                UIデザイン<span className="util-delimiter">/</span>
                ビジュアルデザイン<span className="util-delimiter">/</span>
                コーディング
              </span>
            </li>
            <li className="Seikatsu__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>ユーザーインタビュー</span>
            </li>
            <li className="Seikatsu__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>クライアントワーク</span>
            </li>
            <li className="Seikatsu__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>サービスリニューアル</span>
            </li>
            <li className="Seikatsu__contentsSummaryListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>イラストレーション</span>
            </li>
          </ul>
        </section>

        <Divider color="green" />

        <section className="Seikatsu__contentsInterview">
          <Heading level={2} text="Yahoo!ロコ ユーザーインタビュー" />
          <p>
            競合サービスと使い勝手を比較するため、ユーザーインタビュー（定性調査）を行いました。リーチしたいターゲット層に合わせて設定したペルソナに基づいた人物を数名お呼びして、インタビューとプロトタイプの操作をトラッキングさせていただきました。
          </p>
          <div className="Seikatsu__contentsInterviewImage">
            <img
              src={thumbnailRadio}
              alt="ユーザーインタビューの画像"
              width="100%"
              height="auto"
            />
          </div>
        </section>

        <Divider color="green" />

        <section className="Seikatsu__contentsRadio">
          <Heading level={2} text="Yahoo!知恵袋と東京FMの連動企画" />
          <p>
            東京FMからラジオ番組のコーナーでYahoo!知恵袋を利用したいとの依頼があり、Yahoo!
            JAPAN 側でコーナーのウェブサイトを作製することになった。
            <br />
            東京FMの要望などヒアリングし、毎週の放送内容に連動してコンテンツを更新できるようなデザインにした。
          </p>
          <p>
            タレント撮影のコンディションがかなり悪く、暗い部屋で照明なし・撮影時間5分でチェックもしっかりできず、レタッチしてもあまりクオリティを上げることができなかったので、利用可能な素材がかなり限定された。そのためタレント素材をふんだんに利用する方向ではなく、なんとかやりくりしながら画面構成をした。
          </p>
          <div className="Seikatsu__contentsRadioImage">
            <button
              onClick={() => showMediaViewerForRadio(0)}
              className="Seikatsu__contentsRadioImageThumbnail"
            >
              <img
                src={thumbnailRadio}
                alt="高橋みなみのひとつのアンサー画像"
                width="100%"
                height="auto"
              />
            </button>
            <div className="Seikatsu__contentsRadioImageTrigger">
              <Button
                color="green"
                onClickHandler={() => showMediaViewerForRadio(0)}
                text="すべての画像を見る"
                iconRight="arrow_upper_right"
                isInline={true}
              />
            </div>
          </div>
        </section>

        <Divider color="green" />

        <section className="Seikatsu__contentsYowamushi">
          <Heading
            level={2}
            text="Yahoo!カーナビと弱虫ペダルのコラボレーション企画"
          />
          <p>
            Yahoo!カーナビが弱虫ペダルとコラボレーションするということで、そこで利用する車のイラストレーション及びキャラクター素材の作製依頼があった。（アプリ自体の実装や画面構成は別チーム）
            <br />
            弱虫ペダルについては知識がなかったが、チーム（学校）毎にイメージカラーがあるようだったので、イラストやキャラクター素材に反映するようにした。キャラクターの人数が多く、人物ごとに素材のサイズ感が微妙に違っていたため調整が大変であった。
            <br />
            車のイラストの加減がなかなか難しく、キャラクターの顔が認識できる程度には大きいが、運転ナビゲーションを邪魔しないサイズである必要があり、昼と夜どちらでも見やすいカラーリングである必要もあり、また真俯瞰だと車の形状の表現が分かりづらくなるのでややパースをつけるなどして工夫する必要があった。
          </p>
          <div className="Seikatsu__contentsYowamushiLink">
            <Button
              href="https://map.yahoo.co.jp/blog/archives/20170531_carnavi_yowapeda.html"
              color="green"
              text="弱虫ペダルコラボ企画紹介ページ"
              iconRight="arrow_upper_right"
            />
          </div>
        </section>

        <Divider color="green" />

        <section className="Seikatsu__contentsBlog">
          <Heading level={2} text="Yahoo!ブログ リニューアル" />
          <p>
            Yahoo!ブログをリニューアルするプロジェクトが進行しており、参画したタイミングですでにリニューアルの方向性や設計は終わっていたので、ビジュアルデザインから参加した。
            <br />
          </p>
          <div className="Seikatsu__contentsBlogImage">
            <button
              onClick={() => showMediaViewerForApp(0)}
              className="Seikatsu__contentsBlogThumbnail"
            >
              <img
                src={thumbnailApp}
                alt="Yahoo! ブログの画像"
                width="100%"
                height="auto"
              />
            </button>
            <div className="Seikatsu__contentsBlogImageTrigger">
              <Button
                color="green"
                onClickHandler={() => showMediaViewerForApp(0)}
                text="すべての画像を見る"
                iconRight="arrow_upper_right"
                isInline={true}
              />
            </div>
          </div>
        </section>

        <section className="Seikatsu__contentsRolls">
          <Heading level={2} text="担当領域・技術" />
          <ul className="Seikatsu__contentsRollsList">
            <li className="Seikatsu__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>UI設計 / UIデザイン</span>
            </li>
            <li className="Seikatsu__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>
                ビジュアルデザイン（バナー制作 / イラストレーション /
                サービスデザイン）
              </span>
            </li>
            <li className="Seikatsu__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>コーディング（HTML / CSS / PHP）</span>
            </li>
            <li className="Seikatsu__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>CMS運用</span>
            </li>
          </ul>

          <Heading level={2} text="利用ツール" />
          <ul className="Seikatsu__contentsRollsList">
            <li className="Seikatsu__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>Adobe Illustrator</span>
            </li>
            <li className="Seikatsu__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>Adobe Photoshop</span>
            </li>
            <li className="Seikatsu__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>Prott</span>
            </li>
            <li className="Seikatsu__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>Zeplin</span>
            </li>
            <li className="Seikatsu__contentsRollsListItem">
              <Icon type="hyphen" size="medium" color="primary" />
              <span>MovableType</span>
            </li>
          </ul>
        </section>

        <div className="Seikatsu__contentsBack">
          <Button
            href="/"
            color="green"
            text="トップページへ戻る"
            iconLeft="arrow_left"
            isInline={true}
            target="_self"
          />
        </div>
      </div>

      {isVisibleMediaViewerForRadio && (
        <MediaViewer
          mediaList={mediaListForRadio}
          selectedIndex={selectedIndexForRadio}
          onClickHandlerForClosing={hideMediaViewerForRadio}
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

export default Seikatsu;
