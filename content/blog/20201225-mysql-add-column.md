---
title: 【MySQL】boolean型のカラムを追加する際のエラー「ERROR 1064 (42000) You have an error in your SQL syntax」
date: "2020-12-25T09:19:00.284Z"
description: ""
tags: ["mysql"]
---

## 結論
自分の場合、カラム名に`is`をつけたら解決した

## 実際の例

boolean型のカラムを追加しようとして以下を実行

```bash
mysql> alter table foo_table_name modify is_bar boolean not null default false;
```

出力されたエラ〜メッセージが以下

```bash
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'read boolean' at line 1
```

頭にisをつけないといけないらしい…

`read`というbooleanカラムを追加しようとして上記ようなエラーで時間溶かしてた。今回は`is_read`として解決。  
なおboolean型というのはないらしく、

```bash
mysql> desc notifications;
+------------+------------------+------+-----+---------+----------------+
| Field      | Type             | Null | Key | Default | Extra          |
+------------+------------------+------+-----+---------+----------------+
| id         | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| message_id | int(10) unsigned | NO   |     | NULL    |                |
| like_id    | int(10) unsigned | NO   |     | NULL    |                |
| is_read    | tinyint(1)       | YES  |     | NULL    |                |
+------------+------------------+------+-----+---------+----------------+
```

booleanと指定してカラムを追加した場合、`tinyint(1)`という型になっている。
この`1`は`1bit`を示していて、この型のデータは0か1のみが入る。

正直あまり深くは知らない。。。0か1のみが入るというのはそれ以外の型のデータをinsertしようとしたらどうなるんだろう。  

## ということで雑に試した結果

```bash
mysql> insert into notifications values (1, 1, 1, 1);
mysql> insert into notifications values (2, 2, 2, '1');
mysql> insert into notifications values (3, 2, 2, 'hoge');
mysql> insert into notifications values (4, 2, 2, '0');
mysql> insert into notifications values (5, 2, 2, 0);
mysql> insert into notifications values (6, 2, 2, "1");
mysql> insert into notifications values (7, 2, 2, true);
mysql> insert into notifications values (8, 2, 2, false);
mysql> insert into notifications values (9, 2, 2, 'true');
mysql> insert into notifications values (10, 2, 2, 'false');
mysql> select * from notifications;
+----+------------+---------+---------+
| id | message_id | like_id | is_read |
+----+------------+---------+---------+
|  1 |          1 |       1 |       1 |
|  2 |          2 |       2 |       1 |
|  3 |          2 |       2 |       0 |
|  4 |          2 |       2 |       0 |
|  5 |          2 |       2 |       0 |
|  6 |          2 |       2 |       1 |
|  7 |          2 |       2 |       1 |
|  8 |          2 |       2 |       0 |
|  9 |          2 |       2 |       0 |
| 10 |          2 |       2 |       0 |
+----+------------+---------+---------+
10 rows in set (0.21 sec)
```

`1`,`0`,`true`,`false`,`'1'`,`"1"`を入れた場合は直感的。それ以外を入れた場合`0`に変換されてる。(例えば`"hoge"`など)  
boolean型を扱う場合、大人しく0か1を入れるのがよさそう。

## 参考文献

[https://dev.mysql.com/doc/refman/5.6/ja/boolean-literals.html](https://dev.mysql.com/doc/refman/5.6/ja/boolean-literals.html)