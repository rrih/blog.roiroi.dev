---
title: react-fontawesome+react-scrollでページトップへスクロールするやつを追加した
date: "2020-11-23T06:17:00.284Z"
description: ""
---

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