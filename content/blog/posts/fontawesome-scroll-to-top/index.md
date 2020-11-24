---
title: react-fontawesome+react-scrollでページトップへスクロールするやつを追加した
date: "2020-11-21T06:17:00.284Z"
description: ""
---

深夜に寝る前に思いつきで追加したのでてきとうすぎです。

#### 手順
先に必要なパッケージをインストールしておく
```bash
$ npm i react-scroll
$ npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

あとはlayout.jsに書くだけ。

ちなみにreact-fontawesomeで使用する場合、camel caseで読み込みます。  
`fa-arrow-up`の場合、`faArrowUp`で読み込むことができます。

具体的には

```javascript
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
.
.
.

<FontAwesomeIcon icon={faArrowUp} onClick={scroll.scrollToTop();} />
.
.
.
```
このような感じ。

当サイトの該当コードは[こちら](https://github.com/rrih/rrih.github.io/blob/master/src/components/layout.js#L87)

#### 参考文献
- [React-Scrollでsmoothなスクロールを実装してみた。](https://qiita.com/takk0715/items/6b82d7b4d13134d717eb)
- [GatsbyJSでfontawesomeを使う](https://www.corylog.com/gatsby/gatsby014/)

#### 関連記事
[react-fontawesome(fas, far, fab)](/posts/fontawesome-perfect-understand)