---
title: 'remarkでmarkdown→htmlする時にコードハイライトを適用'
excerpt: ''
coverImage: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
date: '2021-03-06T18:40:07.322+09:00'
author:
  name: ろい
  picture: 'https://github.com/rrih.png'
ogImage:
  url: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
---

当ブログを作るときに[これ](https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript)を使って雛形を生成していたのですが、`_posts`配下のコードハイライトが効いてなかったので`/lib`配下のサーバーサイド側でどのようにmdファイルの中身がhtmlに変換されているのか調査してみたところ、

