---
title: 'Slack 使い方 メモ'
excerpt: ''
coverImage: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
date: '2021-03-20T15:17:07.322+09:00'
author:
  name: ろい
  picture: 'https://github.com/rrih.png'
ogImage:
  url: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
---

Slack の使い方についてメモ。

底辺webプログラマ見習いにとって Slack の使い方はかなり重要。リモートワークが主である現在は最優先で身につけていかないといけないスキルのうちの一つ。  
自走力の身につけ方を言ってもいいかも。

## 垂れ流す
ただ垂れ流せと言ってもいまいちピンと来ない。Twitter 廃人をイメージするとよさそう。  
ぼくは Twitter を息を吸うようにしていたのでそれを意識する。
- ググっているワード
- 参考にした記事のURL
- 参考にした記事の内容の一部引用
- 自分が今考えているコード(疑似コード含む)

### 思考を言語化する
設計やコードを書く際に考えていることを言語化する。詰まった時は特にそう

### 行動の形跡を残す
エラー対処 or 本番環境等での作業 or 環境構築 etc.

これに対して取る行動は逐次残す。特に壊してはいけないものを壊しかねない可能性がある作業などはほぼ確実に slack にログを残すべき。  
責任の分散にもなる(ならない？)

### エラーメッセージは省略しない
人は自分の思い込みにより行動を制限してしまいがち、なので…  
自分の考えよりまず機械が吐いた状況証拠であるエラーメッセージを無視してはいけない。もしエラーログがどこに吐かれるのか知らない、などが合ったら優先度MAXで人に聞く。

### 質問
質問する時はなるべくわかりそうな人にメンションをつけた方がいい。  
もしその人がわからなかったとしてもその人の考えるわかりそうな人を呼んでくれるかも。

質問内容は日本語としてまず明確に。

例）
〜〜しようとして、(局所的なゴールではない方がよい。その局所的なゴール自体間違ったものである可能性があるから。もし局所的なゴールを聞きたいのならそれ自体が妥当なものなのかどうか聞いた方がよさそう。)
〜〜を試したが (試したことは複数あってもよさそう)
〜〜という結果になりました。(画面のスクリーンショットやコマンドラインのログやエラーログなどを貼り付ける。なるべくテキストで貼り付ける。コピペで検索できないので)

みたいな感じ。

### 体調の悪化
体調が悪い時はそう言った方がよい。リモートワーク中は体調の良し悪しが伝わりにくいので。

## さいごに
結局垂れ流し文化が社内にできているかどうかがでかい気がする。
一社目は非常に垂れ流しの文化があったように見えるけど times channnel はなかった
二社目は情報に残す文化自体あまり浸透していない気がするけど、times channnel は用意されてる。
times のいいところは、個人の垂れ流しの場が担保されているところ。また、見ている人はいるが、無視されてもまた当然ということが周知されているところ。これが逆に垂れ流ししやすい環境にしている気がする