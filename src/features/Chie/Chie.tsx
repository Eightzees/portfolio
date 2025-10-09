import "./Chie.scss";

import { useCallback, useState } from "react";

import thumbnailApp from "../../assets/images/chie/thumbnail_app.png";
import thumbnailChie from "../../assets/images/chie/thumbnail_chie.png";
import Button from "../../components/Button/Button";
import Divider from "../../components/Divider/Divider";
import Heading from "../../components/Heading/Heading";
import Icon from "../../components/Icon/Icon";
import MediaViewer from "../../components/MediaViewer/MediaViewer";
import {
  mediaListForApp,
  mediaListForManaging,
} from "../../lib/mediaListForChie";

const Chie = () => {
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
        <Heading level={1} text="Yahoo!知恵袋" subText="でのお仕事" />
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
            しかしながら実はトラフィックの多くは、知りたいことを検索した結果Yahoo!知恵袋で類似の質問を見つけて参照する「閲覧ユーザー」が大半。Yahoo!知恵袋のコンテンツ拡充のために、
            <span className="util-Text--highlighted">
              いかに「質問ユーザー」と「回答ユーザー」を増やすか
            </span>
            が課題でした。
          </p>
          <p>
            複雑な質問・回答・ベストアンサー決定のプロセスの見直し、新たな「投票」の概念の追加とそのフローの整理、投稿フォームのUIの改善...
            <br />
            古く巨大なシステムであるため細かい部分から少しずつ取り組み、ログの数値を見てはブラッシュアップを繰り返すことで、徐々に使いやすいサービスにしていくことを目指しました。
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
            Yahoo! JAPAN
            アプリ内部にYahoo!知恵袋の機能を保持したいという依頼がありました。
            <br />
            Yahoo!知恵袋は（当時）紫と黄色をキーカラーとしたサービスでしたが、Yahoo!
            JAPAN
            は青とピンクがベース。またYahoo!知恵袋の大量で複雑なコンテンツのすべてをもたせる必要はないということで、
            <span className="util-Text--highlighted">
              必要最低限の要素をピックアップし、それに合わせてUIとビジュアルを刷新
            </span>
            しました。
            <br />（
            <span className="util-Text--highlighted">
              このシンプルに調整したデザインが、後のYahoo!知恵袋リニューアルの際にベースとなりました。
            </span>
            ）
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
            Yahoo!のシステムから脱却するプロジェクトが進行し、Yahoo!知恵袋も対応することになりました。またそれを期に環境のモダン化（SaaS利用など）とUI・ビジュアルのリニューアルを同時に行うこととなりました。
          </p>
          <p>
            それまではデザイナーが見た目のテンプレートを作って格納しておくレポジトリとエンジニアのレポジトリが別れていましたが、このタイミングで
            <span className="util-Text--highlighted">
              レポジトリを統合する方針に切り替わり、デザイナーもReact やVue
              などでコーディングするようになりました。
            </span>
            （Yahoo!知恵袋はReactを採用）
            <br />
            同時にデザインのリニューアルについても、方向性の検討やイメージボードの作成を進め始めました。（残念ながら途中で他サービスの全社プロジェクト参加のためYahoo!知恵袋から離脱）
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

        <Divider color="yellow" />

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
            href="./"
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
