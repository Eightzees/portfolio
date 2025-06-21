import { useState } from "react";
import "./Top.scss";
import Heading from "../../components/Heading/Heading";
import ButtonIconOnly from "../../components/ButtonIconOnly/ButtonIconOnly";
import { REPOSITORY_NAME } from "../../constants";

const Top = () => {
  const [isVisibleProfile, setIsVisibleProfile] = useState(false);

  const openProfile = () => {
    setIsVisibleProfile(true);
  };
  const closeProfile = () => {
    setIsVisibleProfile(false);
  };

  return (
    <div className="Top">
      <ul className="Top__list">
        <li className="Top__listItem Top__listItem--search">
          <a href={`${REPOSITORY_NAME}/search`}>
            <span>Yahoo!検索</span>
          </a>
        </li>
        <li className="Top__listItem Top__listItem--seikatsu">
          <a href="./seikatsu">
            <span>Yahoo!生活メディア</span>
          </a>
        </li>
        <li className="Top__listItem Top__listItem--chie">
          <a href="./chie">
            <span>Yahoo!知恵袋</span>
          </a>
        </li>
        <li className="Top__listItem Top__listItem--promotion">
          <a href="./promotion">
            <span>プロモーション案件</span>
          </a>
        </li>
        <li className="Top__listItem Top__listItem--map">
          <a href="./map">
            <span>Yahoo!地図</span>
          </a>
        </li>
      </ul>
      <div className="Top__trigger">
        <button onClick={openProfile}>Azusa Kojima</button>
      </div>

      {isVisibleProfile && (
        <div className="Top__profile">
          <section className="Top__profileContents">
            <Heading level={1} text="Azusa Kojima" />
            <section className="Top__profileContentsSection">
              <Heading level={2} text="Programming Languages" />
              <div className="Top__profileContentsSectionList">
                <span>HTML</span>
                <span className="util-delimiter">/</span>
                <span>CSS (SASS)</span>
                <span className="util-delimiter">/</span>
                <span>JavaScript</span>
                <span className="util-delimiter">/</span>
                <span>TypeScript (+ Redux)</span>
                <span className="util-delimiter">/</span>
                <span>PHP</span>
              </div>
            </section>

            <section className="Top__profileContentsSection">
              <Heading level={2} text="Design Tools" />
              <div className="Top__profileContentsSectionList">
                <span>Adobe Illustrator</span>
                <span className="util-delimiter">/</span>
                <span>Adobe Photoshop</span>
                <span className="util-delimiter">/</span>
                <span>Sketch (+ Abstract)</span>
                <span className="util-delimiter">/</span>
                <span>Figma</span>
              </div>
            </section>
            <section className="Top__profileContentsSection">
              <Heading level={2} text="Experiences" />
              <div className="Top__profileContentsSectionList">
                <span>バゲットテスト（数値分析）</span>
                <span className="util-delimiter">/</span>
                <span>ユーザーインタビュー</span>
                <span className="util-delimiter">/</span>
                <span>コンテ作成</span>
                <span className="util-delimiter">/</span>
                <span>撮影補助</span>
                <span className="util-delimiter">/</span>
                <span>デザインシステム設計</span>
                <span className="util-delimiter">/</span>
                <span>ビジュアルガイドライン作成</span>
                <span className="util-delimiter">/</span>
                <span>コーディングガイドライン作成</span>
                <span className="util-delimiter">/</span>
                <span>DB運用（Oracle, Postgres, MySQL）</span>
              </div>
            </section>
            <ButtonIconOnly
              iconType="cross"
              text="閉じる"
              onClickHandler={closeProfile}
            />
          </section>
        </div>
      )}
    </div>
  );
};

export default Top;
