import imageComponents0 from "../assets/images/map/components_bubble.png";
import imageComponents1 from "../assets/images/map/components_button.png";
import imageComponents2 from "../assets/images/map/components_list.png";
import imageComponents3 from "../assets/images/map/components_snackbar.png";
import imageComponents4 from "../assets/images/map/components_tab.png";
import imageGuideline0 from "../assets/images/map/guideline_colors.png";
import imageGuideline1 from "../assets/images/map/guideline_elevation.png";
import imageGuideline2 from "../assets/images/map/guideline_typography.png";

import type { MediaListItem } from "./types";

export const mediaListForGuideline: MediaListItem[] = [
  {
    imagePath: imageGuideline0,
    index: 0,
    caption: "Yahoo!地図のカラー定義：各色には意味や用途が設定されている",
  },
  {
    imagePath: imageGuideline1,
    index: 1,
    caption:
      "Yahoo!地図のエレベーション定義：各オブジェクトの存在すると階層と、階層ごとの影のスタイル定義",
  },
  {
    imagePath: imageGuideline2,
    index: 2,
    caption:
      "Yahoo!地図のタイポグラフィ定義：テキストも用途ごとにサイズや色が決まっている",
  },
];

export const mediaListForComponents: MediaListItem[] = [
  {
    imagePath: imageComponents0,
    index: 0,
    caption: "地図上に配置するための特殊なUIコンポーネント",
  },
  {
    imagePath: imageComponents1,
    index: 1,
    caption: "ボタンは強さ・用途ごとに段階を設定して利用すべき箇所を明確化",
  },
  {
    imagePath: imageComponents2,
    index: 2,
    caption: "なにか（押せるもの）を羅列するときのUIも複数パターンを用意",
  },
  {
    imagePath: imageComponents3,
    index: 3,
    caption:
      "ユーザーのアクションに対するフィードバックを通知するためのコンポーネント。フェードイン・アウトがReact と相性が悪く、実装が複雑化",
  },
  {
    imagePath: imageComponents4,
    index: 4,
    caption:
      "地図がサービスのメインなので、それ以外の情報は極力狭い領域内に押し込める必要があった。ひとつのパネル内で内容をまるっと切り替えるためのUIは色々検討",
  },
];
