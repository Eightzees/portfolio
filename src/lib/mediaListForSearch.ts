import imageDD0 from "../assets/images/search/dd_01.png";
import imageDD1 from "../assets/images/search/dd_02.png";
import imageDD2 from "../assets/images/search/dd_03.jpg";
import imagePR0 from "../assets/images/search/pr_01.png";
import imagePR1 from "../assets/images/search/pr_02.png";
import imagePR2 from "../assets/images/search/pr_03.png";
import imagePR3 from "../assets/images/search/pr_04.png";
import imagePR4 from "../assets/images/search/pr_05.png";

import type { MediaListItem } from "./types";

export const mediaListForDD: MediaListItem[] = [
  {
    imagePath: imageDD0,
    index: 0,
    caption:
      "検索ワードにその場で一発回答するものや、特定の人物や物事を深堀りしたもの（現在のナレッジパネルの前身）など、通常のショートカットモジュールよりは場所を取るけれど、有益だったりYahoo!検索の再訪問につながるものを企画しました。",
  },
  {
    imagePath: imageDD1,
    index: 1,
    caption:
      "スターウォーズの日を盛り上げるためにルーカスフィルム（当時）と協力して、検索結果画面をスターウォーズ仕様にする企画。冒頭のメッセージをスターウォーズのオープニングのような表現にしたくて、斜めのパースで自動スクロールするロジックに苦心しました。",
  },
  {
    imagePath: imageDD2,
    index: 2,
    caption:
      "検索画面の何処かにトリガーを隠し、見つけてクリックするとAKB48メンバーのグッズ抽選に応募できる企画。検索結果画面にここまで大胆に画像をオーバーレイする挙動は当時とてもめずらしかったのですが、大きな問題なくリリースすることができました。",
  },
];

export const mediaListForPR: MediaListItem[] = [
  {
    imagePath: imagePR0,
    index: 0,
    caption:
      "質問・疑問に一発回答したいというYahoo!検索の方針にピッタリの書籍をプロモーションする企画。主にコーディングとフロントエンドを担当。",
  },
  {
    imagePath: imagePR1,
    index: 1,
    caption:
      "毎年年末が近くなるとYahoo!検索で公開していた「Yahoo!検索ランキング」の特集ページ。3年間担当しましたが、集計が公開日の直前になることが多いため、毎年年末はバタバタする傾向がありました。主にコーディングとフロントエンドを担当。現在の「Yahoo!検索大賞」の前身企画。",
  },
  {
    imagePath: imagePR2,
    index: 2,
    caption:
      "Yahoo!検索主体で企画した、のちに毎年恒例となる東日本の復興支援企画のウェブサイト。初年度と2年目を担当しました。",
  },
  {
    imagePath: imagePR3,
    index: 3,
    caption:
      "ヴィジュアルデザインを外部に発注した珍しいパターンの企画。コーディングとフロントエンドを担当。制作時に他社と直接やり取りする機会があまりないため、担当領域が狭いわりにスケジュール管理を含めて難航しました。",
  },
  {
    imagePath: imagePR4,
    index: 4,
    caption:
      "Yahoo!検索のオフラインイベントで着用するためのスタッフポロのデザインを担当。オフラインプロダクトのデザインは携わる機会が少ないため、大変勉強になりました。",
  },
];
