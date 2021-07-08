---
title: 'cakephp-queue 事始め'
excerpt: ''
coverImage: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
date: '2021-06-13T12:47:07.322+09:00'
author:
  name: ろい
  picture: 'https://github.com/rrih.png'
ogImage:
  url: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
---

CakePHP製のキューイング管理ライブラリ  
こちらを試してみる  
https://github.com/dereuromark/cakephp-queue  

リポジトリは以下  
https://github.com/rrih/quick-queue

とりあえず触ってみるという感じなので[document通り](https://github.com/dereuromark/cakephp-queue/tree/master/docs)にいじってみる

プラグインインストール
```bash
$ composer require dereuromark/cakephp-queue
```

バージョン
```php
"php": ">=7.2",
"cakephp/cakephp": "4.2.*",
"dereuromark/cakephp-queue": "^5.4",
```

src/Application.phpのbootstrap()内に設定記述
```php
$this->addPlugin('Queue');
```

キューイング用のテーブルを作成するコマンド実行
```bash
$ bin/cake migrations migrate -p Queue
```
こちらを実行すると、接続先のdbに`queue_phinxlog`、`queue_processes`、`queued_jobs`といったテーブルとそのレコードが生成されます。

それぞれ中身をみてみると以下

```bash
mysql> select * from queue_processes;
Empty set (0.01 sec)

mysql> select * from queued_jobs;
Empty set (0.01 sec)

mysql> select * from queue_phinxlog;
+----------------+------------------------------+---------------------+---------------------+------------+
| version        | migration_name               | start_time          | end_time            | breakpoint |
+----------------+------------------------------+---------------------+---------------------+------------+
| 20150425180802 | Init                         | 2021-06-13 06:51:01 | 2021-06-13 06:51:01 |          0 |
| 20150511062806 | Fixmissing                   | 2021-06-13 06:51:01 | 2021-06-13 06:51:01 |          0 |
| 20150911132343 | ImprovementsForMysql         | 2021-06-13 06:51:01 | 2021-06-13 06:51:01 |          0 |
| 20161319000000 | IncreaseDataSize             | 2021-06-13 06:51:01 | 2021-06-13 06:51:01 |          0 |
| 20161319000001 | Priority                     | 2021-06-13 06:51:01 | 2021-06-13 06:51:01 |          0 |
| 20161319000002 | Rename                       | 2021-06-13 06:51:01 | 2021-06-13 06:51:01 |          0 |
| 20161319000003 | Processes                    | 2021-06-13 06:51:01 | 2021-06-13 06:51:01 |          0 |
| 20171013131845 | AlterQueuedJobs              | 2021-06-13 06:51:01 | 2021-06-13 06:51:01 |          0 |
| 20171013133145 | Utf8mb4Fix                   | 2021-06-13 06:51:01 | 2021-06-13 06:51:01 |          0 |
| 20171019083500 | ColumnLength                 | 2021-06-13 06:51:01 | 2021-06-13 06:51:01 |          0 |
| 20171019083501 | MigrationQueueNull           | 2021-06-13 06:51:01 | 2021-06-13 06:51:01 |          0 |
| 20171019083502 | MigrationQueueStatus         | 2021-06-13 06:51:01 | 2021-06-13 06:51:01 |          0 |
| 20171019083503 | MigrationQueueProcesses      | 2021-06-13 06:51:01 | 2021-06-13 06:51:01 |          0 |
| 20171019083505 | MigrationQueueProcessesIndex | 2021-06-13 06:51:01 | 2021-06-13 06:51:01 |          0 |
| 20171019083506 | MigrationQueueProcessesKey   | 2021-06-13 06:51:02 | 2021-06-13 06:51:02 |          0 |
+----------------+------------------------------+---------------------+---------------------+------------+
15 rows in set (0.00 sec)
```

