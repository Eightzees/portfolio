import "./Seikatsu.scss";

import { useCallback, useState } from "react";

import thumbnailApp from "../../assets/images/chie/thumbnail_app.png";
import imageBlog0 from "../../assets/images/seikatsu/blog_01.png";
import imageBlog1 from "../../assets/images/seikatsu/blog_02.png";
import imageBlog2 from "../../assets/images/seikatsu/blog_03.png";
import imageBlog3 from "../../assets/images/seikatsu/blog_04.png";
import imageBlog4 from "../../assets/images/seikatsu/blog_05.png";
import imageInterview from "../../assets/images/seikatsu/interview.png";
import imageRadio0 from "../../assets/images/seikatsu/radio_pc.png";
import imageRadio1 from "../../assets/images/seikatsu/radio_sp.png";
import thumbnailRadio from "../../assets/images/seikatsu/thumbnail_radio.png";
import Button from "../../components/Button/Button";
import Divider from "../../components/Divider/Divider";
import Heading from "../../components/Heading/Heading";
import Icon from "../../components/Icon/Icon";
import MediaViewer from "../../components/MediaViewer/MediaViewer";
import {
  mediaListForBlog,
  mediaListForRadio,
} from "../../lib/mediaListForSeikatsu";

const Seikatsu = () => {
  // const mediaListForRadio: MediaList[] = [
  //   {
  //     imagePath: imageRadio0,
  //     index: 0,
  //     caption:
  //       "たかみなに質問するセクションと、逆にたかみなからの質問に回答するセクションがあるので、その2つを対比させるような作りになっている",
  //   },
  //   {
  //     imagePath: imageRadio1,
  //     index: 1,
  //     caption:
  //       "モバイル端末の場合は2つのセクションを同時に並列表示させることが厳しいのでタブで切り替える方式になる",
  //   },
  // ];

  // const mediaListForBlog: MediaList[] = [
  //   {
  //     imagePath: imageBlog0,
  //     index: 0,
  //     caption: "Yahoo!ブログにおける各ユーザーのホーム画面",
  //   },
  //   {
  //     imagePath: imageBlog1,
  //     index: 1,
  //     caption: "Yahoo!ブログのマイページ",
  //   },
  //   {
  //     imagePath: imageBlog2,
  //     index: 2,
  //     caption:
  //       "リニューアル後は「フォロー」の概念を設定。フォローしているブロガーの一覧画面",
  //   },
  //   {
  //     imagePath: imageBlog3,
  //     index: 3,
  //     caption:
  //       "ユーザーのプロフィール入力画面。要素を最低限に減らして、サービスのイメージをスッキリさせるという方針だった",
  //   },
  //   {
  //     imagePath: imageBlog4,
  //     index: 4,
  //     caption: "記事内の画像詳細画面。画像ごとに場所やタグの設定を想定していた",
  //   },
  // ];

  const [isVisibleMediaViewerForRadio, setIsVisibleMediaViewerForRadio] =
    useState(false);
  const [selectedIndexForRadio, setSelectedIndexForRadio] = useState(0);
  const [isVisibleMediaViewerForBlog, setIsVisibleMediaViewerForBlog] =
    useState(false);
  const [selectedIndexForBlog, setSelectedIndexForBlog] = useState(0);

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

  const showMediaViewerForBlog = useCallback(
    (index: number) => {
      setSelectedIndexForBlog(index);
      setIsVisibleMediaViewerForBlog(true);
    },
    [selectedIndexForBlog]
  );

  const hideMediaViewerForBlog = useCallback(() => {
    setIsVisibleMediaViewerForBlog(false);
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
              src={imageInterview}
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
              onClick={() => showMediaViewerForBlog(0)}
              className="Seikatsu__contentsBlogImageThumbnail"
            >
              <div className="Seikatsu__contentsBlogImageThumbnailCanvas">
                <iframe width="100%" src="pencil.html"></iframe>
              </div>
            </button>
            <div className="Seikatsu__contentsBlogImageTrigger">
              <Button
                color="green"
                onClickHandler={() => showMediaViewerForBlog(0)}
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
            href="#"
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
      {isVisibleMediaViewerForBlog && (
        <MediaViewer
          mediaList={mediaListForBlog}
          selectedIndex={selectedIndexForBlog}
          onClickHandlerForClosing={hideMediaViewerForBlog}
        />
      )}
    </div>
  );
};

export default Seikatsu;
