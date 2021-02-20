---
title: サイトのマイナーチェンジ
date: "2020-12-21T00:19:00.284Z"
description: ""
tags: ["雑記"]
---

お久しぶりです。
今回は暇つぶしに[rrih.github.io](https://rrih.github.io)の不要な情報を削減しました✨(全然暇じゃない)

before  
![before](../assets/before_top_screen.png)

after  
![PC版](../assets/top_screen_shot_20201221.png)

![スマホ版](../assets/top_screen_shot_sp_20201221.png)

こんな感じになりました。  
人はごちゃごちゃした(情報量多い)サイト作ってるとシンプルさを求めたくなるのでしょうか。

![](../assets/kouiunodeiindayo_kouiunode.jpeg)

というか before の時の自分のデザインセンス皆無ですね。  
シンプルにすればそもそもデザインがどうとか気にならなくなってよいです。

ちなみにリンクボタンですが、aタグの中でsvg展開させて位置調整にmargin等弄って目視で位置調整するという、とてもひどいことになってます。  
html, cssわからなすぎつらみですね。  

前々からGitHubのプロフィールがよいなと思っていたので、API叩いて情報持ってくればよくね？ってなったのでそのようにしてみました。  
ぼくの場合`https://api.github.com/users/rrih`をGETすることで取得できます。  
というわけでコードだけ見るとindex.tsxに日本語直接書くようなことはほぼしてない感じです。  
プロフィールだけ変えたくなったときにindex.tsxを編集しなくてよくなります。(これまではわざわざindex.tsxにcommitしてpushしてた。煩わしい。)

それでは  
(卒論おわらん😭)