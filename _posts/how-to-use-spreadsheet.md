---
title: '[Google スプレッドシート]関数使い方'
excerpt: 'はい'
coverImage: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
date: '2021-03-04T00:05:07.322+09:00'
author:
  name: ろい
  picture: 'https://github.com/rrih.png'
ogImage:
  url: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
---

使えそうなやつ、使い所メモ
## VLOOKUP
SQLの`JOIN ON`的な別シート同士連結できる。  
`=VLOOKUP(key, 範囲, 何列目, FALSE)` 第一引数は検索ワード、範囲は`$`を追加で絶対範囲を指定可能。デフォルトで相対。第4引数はだいたい`FALSE`で。

## IFERROR
`=IFERROR(値、エラー値)` 出し分けするやつ

## FILTER
`=FILTER(範囲、条件1、条件2)` おそらく異常系消すとかならIFERRORよりこっち使うべき

## 参考文献
スプレッドシート使う前にこれを読め
https://support.google.com/docs/table/25273?hl=ja