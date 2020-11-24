---
title: Next.js+TypeScriptでvercelにデプロイ
date: "2020-11-14T23:01:00.284Z"
description: ""
---

リポジトリが[こちら](https://github.com/rrih/nextts)。本番環境は[こちら](https://nextts.vercel.app)  
Next.js、試しに触ってみたけど`npx create-next-app`してvercelでリポジトリ選択してポチポチするだけでデプロイできるの、体験が良過ぎますね。いろいろと隠蔽されてる感もすごいけど、React書ける人にとってはとりあえず動くものを作るのにかなり便利そう。今後のフロントエンドはNext+vercelの組み合わせ一択なのではないか？(流石にこれは言い過ぎか)

あと今回は、styled-componentsを適用するために`.babelrc`記述する必要がありました。こういうのは基本的に豊富な公式を参照すればよさそう。

時間が出来次第、Next.js+Vercelでなにかしらツール的なものを作りたい(๑╹ω╹๑ )  
vercelってなんて読むの？ばーせる？べるせる？英語弱すぎてなにもわからない…