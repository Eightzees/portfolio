import './Top.scss';

import { useState } from 'react';

import Badge from '../../components/Badge/Badge';
import ButtonIconOnly from '../../components/ButtonIconOnly/ButtonIconOnly';
import Heading from '../../components/Heading/Heading';

interface TopProps {
  isWip: boolean;
}
const Top = (props: TopProps) => {
  const [isVisibleProfile, setIsVisibleProfile] = useState(false);

  const openProfile = () => {
    setIsVisibleProfile(true);
  };
  const closeProfile = () => {
    setIsVisibleProfile(false);
  };

  return (
    <div className="Top">
      <div className="Top__trigger">
        <button onClick={openProfile}>Azusa Kojima</button>
      </div>

      <ul className="Top__list">
        <li className="Top__listItem Top__listItem--search">
          <a className="Top__listItemLink" href="#search">
            <span className="Top__listItemLinkDepartment">Yahoo!検索</span>
            <span className="Top__listItemLinkPeriod">2012〜2015</span>
          </a>
        </li>
        <li className="Top__listItem Top__listItem--seikatsu">
          <a className="Top__listItemLink" href="#seikatsu">
            <span className="Top__listItemLinkDepartment">Yahoo!生活メディア</span>
            <span className="Top__listItemLinkPeriod">2015〜2017</span>
          </a>
        </li>
        <li className="Top__listItem Top__listItem--chie">
          <a className="Top__listItemLink" href="#chie">
            <span className="Top__listItemLinkDepartment">Yahoo!知恵袋</span>
            <span className="Top__listItemLinkPeriod">2017〜2018</span>
          </a>
        </li>
        <li className="Top__listItem Top__listItem--pr">
          <a className="Top__listItemLink" href="#pr">
            <span className="Top__listItemLinkDepartment">プロモーション案件</span>
            <span className="Top__listItemLinkPeriod">2012〜2019</span>
          </a>
        </li>
        <li className="Top__listItem Top__listItem--map">
          <a className="Top__listItemLink" href="#map">
            <span className="Top__listItemLinkDepartment">Yahoo!地図</span>
            <span className="Top__listItemLinkPeriod">2019〜</span>
          </a>
          <Badge text="Current Department" color="brown" />
        </li>
      </ul>

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
                <span>バケットテスト（数値分析）</span>
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
            <ButtonIconOnly iconType="cross" text="閉じる" onClickHandler={closeProfile} />
          </section>
        </div>
      )}
      {props.isWip && (
        <div className="Top__wip">
          <p>Work in Progress</p>
        </div>
      )}
    </div>
  );
};

export default Top;
