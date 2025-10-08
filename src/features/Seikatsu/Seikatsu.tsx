import "./Seikatsu.scss";

import { useCallback, useState } from "react";

import imageInterview from "../../assets/images/seikatsu/interview.png";
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
        <Heading level={1} text="Yahoo!生活メディア" subText="でのお仕事" />
        <p>
          ※Yahoo!生活メディアとは、Yahoo!知恵袋/ Yahoo!カーナビ/ Yahoo!乗換案内/
          Yahoo!ブログ/ Yahoo!ロコ/ Yahoo!地図/
          Yahoo!ライフマガジン、等を統括していたサービスです。
        </p>
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

        <section className="Seikatsu__contentsRadio">
          <Heading level={2} text="Yahoo!知恵袋と東京FMの連動企画" />
          <p>
            東京FMからラジオ番組のコーナーでYahoo!知恵袋を利用したいとの依頼があり、Yahoo!知恵袋側で企画コーナーのウェブサイトを作製することになりました。
            <br />
            東京FMの要望・イメージなどをヒアリングし、毎週の放送内容に連動してコンテンツを更新できるようなデザインにしました。
          </p>
          <p>
            タレント撮影時のコンディションがかなり悪く、暗い部屋で照明なし・メイク直しなし・撮影時間5分でチェックもしっかりできず、レタッチしてもあまりクオリティを上げることができなかったので、
            <span className="util-Text--highlighted">
              利用可能な素材が限定されたことでビジュアルデザインがかなり難儀
            </span>
            しました。
            <br />
            そのためタレント素材をふんだんに利用する方向ではなく、
            <span className="util-Text--highlighted">
              間を持たせるための細かい素材を作ることでなんとかやりくり
            </span>
            しながら画面を構成しました。
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
            Yahoo!カーナビが弱虫ペダルとコラボレーションするということで、アプリ内で利用する車のイラストレーション及びキャラクター素材の作製依頼がありました。（アプリ自体の実装や画面構成は別チーム）
            <br />
            弱虫ペダルについては知識がない中、チーム（学校）毎にイメージカラーがあるようだったので、大量にあるキャラクターのイラスト素材に反映し、メリハリがつくようにしました。
          </p>
          <p>
            また車のイラストの加減もなかなか難しく、キャラクターの顔が認識できる程度の大きさかつ運転ナビゲーションを邪魔しないサイズであり、昼と夜どちらでも見やすいカラーリングであり、また真俯瞰だと車の形状の表現が分かりづらくなるのでややパースをつけたり、
            <span className="util-Text--highlighted">
              カーナビ特有の工夫が必要
            </span>
            でした。
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
            Yahoo!ブログをリニューアルするプロジェクトが進行しており、参画したタイミングですでにリニューアルの方針は決定され設計も終わっていたので、ビジュアルデザインから参加しました（ビジュアルデザイナーとして招集されました）。
            <br />
            これまでのYahoo!ブログの方向性とは180度方向性を変え、
            <span className="util-Text--highlighted">
              ユーザーが使える機能（主に本文の文字装飾や絵文字の利用、トラックバック機能など）は制限し、見た目の面でも極力シンプルに、
            </span>
            というオーダーでした。
            <br />
            既存のYahoo!ブログの特徴をほぼ引き継がないため、全くの新規サービスを作るような感覚で、ビジュアルデザインとしては楽な部類でしたが、Yahoo!ブログを長年愛用してくれているユーザーからのハレーションは大きなものになるであろうという予感はありました。
          </p>
          <p>
            ビジュアルを完成させたタイミングで他プロジェクトに呼ばれてしまったため、実装開発・リリースには携わることができませんでした。
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

        <Divider color="green" />

        <section className="Seikatsu__contentsInterview">
          <Heading level={2} text="Yahoo!ロコ ユーザーインタビュー" />
          <p>
            競合サービスと使い勝手を比較するため、ユーザーインタビュー（定性調査）を行いました。リーチしたいターゲット層に合わせてペルソナを設定し、それに基づいた一般ユーザーを数名お呼びして、インタビューとプロトタイプの操作のトラッキングをさせていただきました。
          </p>
          <p>
            インタビューとトラッキングの結果をまとめ、カスタマージャーニーマップを作成しました。
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
