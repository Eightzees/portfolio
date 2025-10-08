import image3110 from "../assets/images/pr/311_pc.png";
import imageBonenkai0 from "../assets/images/pr/bonenkai_01.png";
import imageBonenkai1 from "../assets/images/pr/bonenkai_02.png";
import imageBonenkai2 from "../assets/images/pr/bonenkai_03.png";
import imageBonenkai3 from "../assets/images/pr/bonenkai_04.png";
import imageGhit3 from "../assets/images/pr/ghit_dengue.png";
import imageGhit2 from "../assets/images/pr/ghit_interview_01_sp.png";
import imageGhit1 from "../assets/images/pr/ghit_interview_02.png";
import imageGhit0 from "../assets/images/pr/ghit_top.png";
import imageSatNav0 from "../assets/images/pr/satnav_pc.png";
import imageSatNav1 from "../assets/images/pr/satnav_sp.png";
import imageYoshimotozaka0 from "../assets/images/pr/yoshimotozaka_pc.png";

import type { MediaListItem } from "./types";

export const mediaListForGhit: MediaListItem[] = [
  {
    imagePath: imageGhit0,
    index: 0,
    caption:
      "グローバルヘルス特集のトップページ。メインコンテンツである博士たちのインタビュー記事やデング熱解説ページへの導線、GHIT Fund 社の概要を掲載。",
  },
  {
    imagePath: imageGhit1,
    index: 1,
    caption:
      "各インタビューページには、博士のメインビジュアルとインタビュー記事、またその博士が携わっている分野についての簡単な解説を掲載。読み物コンテンツなので、タイポグラフィは文字の読みやすさを意識しました。",
  },
  {
    imagePath: imageGhit2,
    index: 2,
    caption:
      "モバイル表示用には別レイアウトを用意。また日本語・英語の2言語に対応しました。",
  },
  {
    imagePath: imageGhit3,
    index: 3,
    caption:
      "当時デング熱が流行して国内で問題になっていたため、インタビューした博士の一人に監修していただきデング熱について解説するページを別途作成しました。",
  },
];

export const mediaListFor311: MediaListItem[] = [
  {
    imagePath: image3110,
    index: 0,
    caption:
      "ビジュアルデザインに関しては広告代理店から素材の支給もあったため、サイト制作の実作業はコーディング以降をすべて担当しました。",
  },
];

export const mediaListForSatNav: MediaListItem[] = [
  {
    imagePath: imageSatNav0,
    index: 0,
    caption:
      "PC版。車のアニメーションは位置が固定されており、背景とメインコンテンツである道路標識のみがスクロールする構造。",
  },
  {
    imagePath: imageSatNav1,
    index: 1,
    caption:
      "SP版は縦スクロールで車が走っている様子を表現するため、車のアニメーションは正面のものを別途用意。背景と道路標識を視差スクロールさせることで、コンテンツを閲覧していくと車が前に走ってくるように見える構造にしました。",
  },
];

export const mediaListForBonenkai: MediaListItem[] = [
  {
    imagePath: imageBonenkai0,
    index: 0,
    caption: "忘年会アンケートその1",
  },
  {
    imagePath: imageBonenkai1,
    index: 1,
    caption: "忘年会アンケートその2",
  },
  {
    imagePath: imageBonenkai2,
    index: 2,
    caption: "忘年会アンケートその3",
  },
  {
    imagePath: imageBonenkai3,
    index: 3,
    caption: "忘年会アンケートその4",
  },
];

export const mediaListForYoshimotozaka: MediaListItem[] = [
  {
    imagePath: imageYoshimotozaka0,
    index: 0,
    caption:
      "トップの集合素材のバランス調整に、全工程の90%の時間を使ったと言っても過言ではない",
  },
];
