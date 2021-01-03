---
title: 【PHP】compactについて
date: "2020-12-28T19:19:00.284Z"
description: ""
tags: ["php"]
---

ControllerでORMで引っ張ってきたデータをtoList()で配列にした変数に対し、

```php
$this->set(compact('idsOfMessageRecipient'));
```

こんな感じ([ここ](https://github.com/rrih/feel/blob/master/src/Controller/MessagesController.php#L46)を参照)でViewに渡しているのですが、set()やcompact()一つ一つをあまり理解していなかったので公式を参考にメモります。

## Cake\View\View::set()


## 参考文献
- [PHP: compact - Manual](https://www.php.net/manual/ja/function.compact.php)
- [ビュー変数の設定](https://book.cakephp.org/4/ja/views.html#id5)