import Heading from "../../components/Heading/Heading";
import Icon from "../../components/Icon/Icon";
import "./Search.scss";

const Search = () => {
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
        </section>
      </div>
      <Icon type="cross" color="inverted" size="medium" />
    </div>
  );
};

export default Search;
