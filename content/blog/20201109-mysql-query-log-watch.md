---
title: ターミナルでMySQLのクエリを見る
date: "2020-11-09T13:20:00.284Z"
description: ""
tags: ["test"]
---

#### 準備
ターミナルでMySQLコンテナに入り、接続。
##### 設定
以下の通りにコマンド叩く。
```zsh
SET GLOBAL general_log = 'ON';
```
#### 別窓開いて
別窓開いてMySQLコンテナに入り、
```zsh
tail -f /var/mysql/mysql.log
```
これでログの流れをみれるようになる。

また、
```zsh
tail -f /var/lib/mysql/general.log | grep "UPDATE"
```
UPDATE部分のみ抽出して監視することもできる

以上