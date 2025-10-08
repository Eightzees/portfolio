import imageApp0 from "../assets/images/chie/app_flow.png";
import imageApp1 from "../assets/images/chie/app_question.png";
import imageChie3 from "../assets/images/chie/chie_dd.png";
import imageChie0 from "../assets/images/chie/chie_flows.png";
import imageChie1 from "../assets/images/chie/chie_profile_form.png";
import imageChie2 from "../assets/images/chie/chie_voting.png";

import type { MediaListItem } from "./types";

export const mediaListForManaging: MediaListItem[] = [
  {
    imagePath: imageChie0,
    index: 0,
    caption:
      "複雑な知恵袋の行動フローをまず整理し、投稿のハードルを下げるためにどのようにユーザーに分かりやすく説明するかを検討した際のフロー図。",
  },
  {
    imagePath: imageChie1,
    index: 1,
    caption:
      "ユーザー登録フォームの改善を行った際のモック。大きな変更は入れず、性別選択欄の改善や新しい項目の追加などをしている。",
  },
  {
    imagePath: imageChie2,
    index: 2,
    caption:
      "ベストアンサーの投票を気軽に行ってもらうためのUI改善施策。一人のユーザーが複数人格を持てる古いシステムのために複雑化していた投票行為を簡略化しました。またもともと投票時に知恵コインが獲得できる仕組みでしたが、獲得時にコインがキラキラ回転するアニメーションを追加し、投票時に触覚的な手ごたえが感じられるように工夫しました。",
  },
  {
    imagePath: imageChie3,
    index: 3,
    caption:
      "検索結果に表示するYahoo!知恵袋へのショートカットモジュールの改善。「Q・A」の文字のサイズや装飾を数パターン用意し、バケットテストを実施しました。",
  },
];

export const mediaListForApp: MediaListItem[] = [
  {
    imagePath: imageApp0,
    index: 0,
    caption: "アプリで表示するために機能を簡易化した知恵袋のフロー図。",
  },
  {
    imagePath: imageApp1,
    index: 1,
    caption:
      "アプリ表示用にリファインした質問と回答の画面。紫と黄色ベースのカラーリングを変更し、Yahoo! JAPAN アプリに馴染むようにしました。",
  },
];
