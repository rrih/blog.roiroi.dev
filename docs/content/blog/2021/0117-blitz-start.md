---
title: blitz.js 事始め
date: "2021-01-17T15:19:00.284Z"
description: ""
tags: ["blitz"]
---

巷で流行ってるblitzに入門してみるメモ。

グローバルインストール

```
npm i -g blitz
blitz new blitz-first-app
cd blitz-first-app
blitz -v # 現時点のバージョン表示
You are using beta software - if you have any problems, please open an issue here:
      https://github.com/blitz-js/blitz/issues/new/choose

macOS Catalina | darwin-x64 | Node: v12.16.1

blitz: 0.29.2 (global)
blitz: 0.29.2 (local)

  Package manager: yarn 
  System:
    OS: macOS 10.15.7
    CPU: (8) x64 Intel(R) Core(TM) i5-1030NG7 CPU @ 1.10GHz
    Memory: 98.86 MB / 16.00 GB
    Shell: 5.7.1 - /bin/zsh
  Binaries:
    Node: 12.16.1 - ~/.nvm/versions/node/v12.16.1/bin/node
    Yarn: 1.22.4 - /usr/local/bin/yarn
    npm: 6.14.4 - ~/.nvm/versions/node/v12.16.1/bin/npm
    Watchman: Not Found
  npmPackages:
    @prisma/cli: ~2.14 => 2.14.0 
    @prisma/client: ~2.14 => 2.14.0 
    blitz: 0.29.2 => 0.29.2 
    react: 0.0.0-experimental-3310209d0 => 0.0.0-experimental-3310209d0 
    react-dom: 0.0.0-experimental-3310209d0 => 0.0.0-experimental-3310209d0 
    typescript: 4.1.3 => 4.1.3 
```

知っておくべき知識
- React(Next.js)
- prisma

blitzはReactをnode.jsベースに、prisa(DB層)を持たせてクライアント、サーバサイド両刀のフルスタックフレームワークを作ろうという試み。

仮にblitzが流行らなかったとしても、思想は引き継がれそう、とのことから触っておこうかなという感じ。
いずれRailsを駆逐するのだろうか🤔r

ails界には`react-rails`というgemがあるらしく、既にrailsとreactを組み合わせるのはあるのだが、本質的にどのように優位な差があるのかは不明。やっぱり両方TSで書けるところとかなの？

## 参考文献
- https://blitzjs.com/docs/tutorial
- https://zenn.dev/mizchi/articles/cbe81299e145491676f8