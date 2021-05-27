---
title: '[jQuery]`$.post`ができず`$.ajax`ならいける [要検証]'
excerpt: 'はい'
coverImage: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
date: '2021-05-28T00:05:07.322+09:00'
author:
  name: ろい
  picture: 'https://github.com/rrih.png'
ogImage:
  url: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
---

## とある困った事象
`$.post`でjsonでパラメータ指定してwebapiを叩こうとしたけど何故かできず。400エラーが返ってきた。多分メソッドの使い方が正しくない。

## 解決策
`$.ajax`で`'POST'`指定でやったらとりあえずできた。なぜ。🤷



## 根本原因
TBD