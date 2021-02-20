---
title: react-fontawesome(fas, far, fab)
date: "2020-11-23T03:58:00.284Z"
description: ""
tags: ["react", "fontawesome"]
---

fontawesome完全に理解した(ダニングクルーガー効果定期)

```javascript
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, far, fab)

<FontAwesomeIcon icon={fab.faReact} />
```

これで`fas`、`far`、`fab`が動く

#### 関連記事

- [react-fontawesome+react-scrollでページトップへスクロールするやつを追加した](/20201121-fontawesome-scroll-to-top)
