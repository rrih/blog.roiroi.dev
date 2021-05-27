---
title: '[MySQL]not inはインデックスが効かない'
excerpt: ''
coverImage: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
date: '2021-05-27T15:17:07.322+09:00'
author:
  name: ろい
  picture: 'https://github.com/rrih.png'
ogImage:
  url: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
---

not in句を使うことはあまりないらしい。インデックスが効かないとかで。

## そもそもインデックス is なに…何も知らない。
基本的な知識です

### インデックスとは
索引のこと

### とは？
データ検索時に頭から一つずつみていくのではなく、索引を使うことで目的の行の場所を見つけてからその行のデータを読み取る。
大きなテーブルでインデックスを用いるとパフォーマンスが改善できる。

思考停止でnot in句使おうとしてたけど、インデックス使えないとかであまり選択肢にあがらないらしい…

## not in の代わりにどうするべきか
TBD

- 参考文献
https://qiita.com/katsukii/items/3409e3c3c96580d37c2b