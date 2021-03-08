---
title: 'remarkでMarkdownからHTMLへ変換する時にコードハイライトを適用する'
excerpt: ''
coverImage: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
date: '2021-03-07T12:47:07.322+09:00'
author:
  name: ろい
  picture: 'https://github.com/rrih.png'
ogImage:
  url: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
---

当ブログを作るときに[これ](https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript)を使って雛形を生成していたのですが、`_posts`配下のコードハイライトが効いてなかったので`/lib`配下のサーバーサイド側でどのようにmdファイルの中身がhtmlに変換されているのか眺めてみたところ、`/lib/api.ts`で変換のマークダウンファイルの事前処理が実装されており、`/lib/markdownToHtml.ts`の`markdownToHtml`関数によって実際にマークダウンの文字列を受け取り返還後のHTMLを返しているようでした。元のソースコードでは`remark-html`の実態だけがuseされていましたが、これでは最低限のようでした。Markdown記法では、` ``` `としてソースコードを上下で挟むことで変換後のHTMLは`<pre><code></code></pre>`に囲われたもの(見た目としてはソースコードのようなもの)になります。この時の style が不足していました。例えば画面の幅を短くすると改行されておらず、コードだけ親要素の幅からはみ出てしまいブログの見た目が崩れてました。

どうやら多くの remark を使ったブログの style は remark-highlight.js を適用したものが多いらしかったのでインストールして以下のように変更してみました。

```bash
yarn add remark-highlight.js
```
<br />

```typescript
import remark from 'remark'
import html from 'remark-html'
import hljs from "remark-highlight.js"

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(hljs).use(html).process(markdown)
  return result.toString()
}

```

とりあえずこれで`_app.tsx`で`import "highlight.js/styles/github.css"` することで記事のコードブロックにスタイルが適用されました。import できる css は https://github.com/highlightjs/highlight.js/tree/master/src/styles に色々と用意されてるようなので好きなものを選ぶと良さそうです。

## 最後に
[ちなみに本家 example の方に PR を送ってみました](https://github.com/vercel/next.js/pull/22848)が、取り込まれはしませんでした。対応が紳士的で神でした。OSS への contribute 自体初でしたが、反応があると嬉しいですね。今度はNext本体のコードに貢献してみたい。