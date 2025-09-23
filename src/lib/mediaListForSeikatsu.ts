import imageBlog0 from "../assets/images/seikatsu/blog_01.png";
import imageBlog1 from "../assets/images/seikatsu/blog_02.png";
import imageBlog2 from "../assets/images/seikatsu/blog_03.png";
import imageBlog3 from "../assets/images/seikatsu/blog_04.png";
import imageBlog4 from "../assets/images/seikatsu/blog_05.png";
import imageRadio0 from "../assets/images/seikatsu/radio_pc.png";
import imageRadio1 from "../assets/images/seikatsu/radio_sp.png";

import type { MediaListItem } from "./types";

export const mediaListForRadio: MediaListItem[] = [
  {
    imagePath: imageRadio0,
    index: 0,
    caption:
      "たかみなに質問するセクションと、逆にたかみなからの質問に回答するセクションがあるので、その2つを対比させるような作りになっている",
  },
  {
    imagePath: imageRadio1,
    index: 1,
    caption:
      "モバイル端末の場合は2つのセクションを同時に並列表示させることが厳しいのでタブで切り替える方式になる",
  },
];

export const mediaListForBlog: MediaListItem[] = [
  {
    imagePath: imageBlog0,
    index: 0,
    caption: "Yahoo!ブログにおける各ユーザーのホーム画面",
  },
  {
    imagePath: imageBlog1,
    index: 1,
    caption: "Yahoo!ブログのマイページ",
  },
  {
    imagePath: imageBlog2,
    index: 2,
    caption:
      "リニューアル後は「フォロー」の概念を設定。フォローしているブロガーの一覧画面",
  },
  {
    imagePath: imageBlog3,
    index: 3,
    caption:
      "ユーザーのプロフィール入力画面。要素を最低限に減らして、サービスのイメージをスッキリさせるという方針だった",
  },
  {
    imagePath: imageBlog4,
    index: 4,
    caption: "記事内の画像詳細画面。画像ごとに場所やタグの設定を想定していた",
  },
];
