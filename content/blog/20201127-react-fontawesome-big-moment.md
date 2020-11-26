---
title: react-fontawesomeの一瞬巨大アイコンが表示される問題
date: "2020-11-27T03:56:00.284Z"
description: ""
tags: ["react", "fontawesome"]
---

#### 結論

```javascript
import { library, config } from '@fortawesome/fontawesome-svg-core'
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false
```

これでよい

`autoAddCss`に`false`を指定する

[ここ](https://github.com/rrih/rrih.github.io/commit/d79e39e1ac0839e5014cfb2f6a07689c0b18dca5)で直した

#### 参考文献
- [react-fontawesome でページ読み込み時に一瞬だけアイコンが大きくなる問題 | monolithic kernel](https://blog.mono0x.net/2020/06/16/react-fontawesome/)
