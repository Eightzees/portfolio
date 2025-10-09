import imageBlog0 from "../assets/images/seikatsu/blog_01.png";
import imageBlog1 from "../assets/images/seikatsu/blog_02.png";
import imageBlog2 from "../assets/images/seikatsu/blog_03.png";
import imageBlog3 from "../assets/images/seikatsu/blog_04.png";
import imageBlog4 from "../assets/images/seikatsu/blog_05.png";
import imageBlog5 from "../assets/images/seikatsu/blog_06.png";
import imageBlog6 from "../assets/images/seikatsu/blog_07.png";
import imageRadio0 from "../assets/images/seikatsu/radio_pc.png";
import imageRadio1 from "../assets/images/seikatsu/radio_sp.png";

import type { MediaListItem } from "./types";

export const mediaListForRadio: MediaListItem[] = [
  {
    imagePath: imageRadio0,
    index: 0,
    caption:
      "たかみなに質問するセクションと、逆にたかみなからの質問に回答するセクションがあるので、その2つを対比させるような作りにしています。",
  },
  {
    imagePath: imageRadio1,
    index: 1,
    caption:
      "モバイル端末の場合は2つのセクションを同時に並列表示させることが厳しいので、タブで切り替える方式に。",
  },
];

export const mediaListForBlog: MediaListItem[] = [
  {
    imagePath: imageBlog0,
    index: 0,
    caption:
      "Yahoo!ブログにおけるユーザーのホーム画面。記事には必ず画像がある前提でデザインするようにとのことでした。",
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
      "ユーザーがフォローしているブロガーの一覧画面。リニューアル後は「フォロー」の概念が新しく設定されました。",
  },
  {
    imagePath: imageBlog3,
    index: 3,
    caption:
      "ユーザーのプロフィール入力画面。要素を最低限に減らして、サービスのイメージをごちゃごちゃした感じからスッキリしたものに転換させるという方針でした。",
  },
  {
    imagePath: imageBlog4,
    index: 4,
    caption:
      "記事内の画像の詳細画面。画像に対して場所やタグの設定をしてもらうことを想定していました。",
  },
  {
    imagePath: imageBlog5,
    index: 5,
    caption:
      "極力記事に画像を添えてもらう方針でしたが、万が一画像が添付されなかった場合の記事一覧をデザイン。記事タイトルの頭文字とランダムな色を使うことで、単純な「No Image」的な表現にならないよう、また連続して並んでも味気なくならないようにしました。",
  },
  {
    imagePath: imageBlog6,
    index: 6,
    caption:
      "ユーザーのアバター画像も「未設定」状態を避ける方針だったため、なるべく多くのプリセットを用意し、初期状態でもユーザーのアバターが極力かぶらないようにしました。",
  },
];
