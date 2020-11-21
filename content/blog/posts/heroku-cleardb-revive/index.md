---
title: 昨日落ちてたやつが復活してた件
date: "2020-11-17T18:47:00.284Z"
description: ""
---

前回[これ](https://github.com/rrih/feel)の[本番](htps://feel-prod.herokuapp.com)が落ちていた時、[こんなこと](/posts/heroku-cleardb-dead/)を言ってましたが、今見たら完全に復活してました。

全然わからないですね🤔

調べてみたところ、ClearDBの無料分を超えたから死んだと思ってたのだけれど復活するとなるとそうでもなさそう？そもそも5Mもいってなさそう。

ということで測ってみました。

```bash
mysql> SELECT
    ->     table_schema, sum(data_length+index_length) /1024 /1024 AS MB
    -> FROM
    ->     information_schema.tables
    -> GROUP BY
    ->     table_schema
    -> ORDER BY
    ->     sum(data_length+index_length) DESC;
+------------------------+------------+
| table_schema           | MB         |
+------------------------+------------+
| heroku_3012b33fc1d1892 | 0.10937500 |
| information_schema     | 0.00878906 |
+------------------------+------------+
```

はい、まだ耐えてますね。