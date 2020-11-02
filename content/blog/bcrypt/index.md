---
title: bcryptjsについて軽くメモ
date: "2020-06-03T00:53:00.284Z"
---

## bcryptjsとは
認証のパスワードとかをサーバー側で受け取る時に使用したりする。  
`bcryptjs.hash()` によって60文字のハッシュ化された文字列を返す

```
const user = this.userService.findOne(username);
```

おしまい