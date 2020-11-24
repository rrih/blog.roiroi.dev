---
title: ClearDBがよく落ちてしまう。なにもわからない
date: "2020-11-10T17:50:00.284Z"
description: ""
---

なんで…？

### 昨日からよく https://feel-prod.herokuapp.com が落ちる件について
全然わからない。ログは以下の通り。誰か教えてほしい。

```bash
roi@roi feel % heroku logs --tail
2020-11-16T08:46:37.058751+00:00 heroku[web.1]: Unidling
2020-11-16T08:46:37.063925+00:00 heroku[web.1]: State changed from down to starting
2020-11-16T08:46:39.337913+00:00 heroku[web.1]: Starting process with command `heroku-php-apache2`
2020-11-16T08:46:43.844802+00:00 app[web.1]: Detected 536870912 Bytes of RAM
2020-11-16T08:46:43.901367+00:00 app[web.1]: PHP memory_limit is 128M Bytes
2020-11-16T08:46:43.928927+00:00 app[web.1]: Starting php-fpm with 4 workers...
2020-11-16T08:46:44.075501+00:00 app[web.1]: Starting httpd...
2020-11-16T08:46:44.685850+00:00 heroku[web.1]: State changed from starting to up
2020-11-16T08:46:50.087286+00:00 app[web.1]: [16-Nov-2020 08:46:50] WARNING: [pool www] child 159, script '/app/webroot/index.php' (request: "GET /webroot/index.php") executing too slow (3.672665 sec), logging
2020-11-16T08:46:50.087622+00:00 app[web.1]: [16-Nov-2020 08:46:50] WARNING: [pool www] child 156, script '/app/webroot/index.php' (request: "GET /webroot/index.php") executing too slow (3.959228 sec), logging
2020-11-16T08:46:50.089474+00:00 app[web.1]: 
2020-11-16T08:46:50.089631+00:00 app[web.1]: [16-Nov-2020 08:46:50]  [pool www] pid 156
2020-11-16T08:46:50.089771+00:00 app[web.1]: script_filename = /app/webroot/index.php
2020-11-16T08:46:50.090087+00:00 app[web.1]: [0x00007f3fa3017da0] __construct() /app/vendor/cakephp/cakephp/src/Database/Driver.php:132
2020-11-16T08:46:50.090531+00:00 app[web.1]: [0x00007f3fa3017c90] Cake\Database\{closure}() /app/vendor/cakephp/cakephp/src/Core/Retry/CommandRetry.php:70
2020-11-16T08:46:50.091033+00:00 app[web.1]: [0x00007f3fa3017bf0] run() /app/vendor/cakephp/cakephp/src/Database/Driver.php:138
2020-11-16T08:46:50.091297+00:00 app[web.1]: [0x00007f3fa3017b10] _connect() /app/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:178
2020-11-16T08:46:50.091571+00:00 app[web.1]: [0x00007f3fa3017a30] connect() /app/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:47
2020-11-16T08:46:50.094873+00:00 app[web.1]: [0x00007f3fa30179d0] __construct() /app/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:230
2020-11-16T08:46:50.095164+00:00 app[web.1]: [0x00007f3fa3017960] schemaDialect() /app/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
2020-11-16T08:46:50.095426+00:00 app[web.1]: [0x00007f3fa30178f0] __construct() /app/vendor/cakephp/cakephp/src/Database/Connection.php:399
2020-11-16T08:46:50.095912+00:00 app[web.1]: [0x00007f3fa30177e0] getSchemaCollection() /app/vendor/cakephp/cakephp/src/ORM/Table.php:508
2020-11-16T08:46:50.096149+00:00 app[web.1]: [0x00007f3fa3017710] getSchema() /app/vendor/cakephp/cakephp/src/ORM/Query.php:277
2020-11-16T08:46:50.096400+00:00 app[web.1]: [0x00007f3fa3017620] addDefaultTypes() /app/vendor/cakephp/cakephp/src/ORM/Query.php:177
2020-11-16T08:46:50.096642+00:00 app[web.1]: [0x00007f3fa3017590] __construct() /app/vendor/cakephp/cakephp/src/ORM/Table.php:1679
2020-11-16T08:46:50.096874+00:00 app[web.1]: [0x00007f3fa3017520] query() /app/vendor/cakephp/cakephp/src/ORM/Table.php:1261
2020-11-16T08:46:50.097077+00:00 app[web.1]: [0x00007f3fa3017490] find() /app/src/View/Helper/PostsHelper.php:15
2020-11-16T08:46:50.097288+00:00 app[web.1]: [0x00007f3fa30173d0] getPostsCount() /app/templates/Pages/home.php:111
2020-11-16T08:46:50.097541+00:00 app[web.1]: [0x00007f3fa3017350] [INCLUDE_OR_EVAL]() /app/vendor/cakephp/cakephp/src/View/View.php:1176
2020-11-16T08:46:50.097781+00:00 app[web.1]: [0x00007f3fa30172a0] _evaluate() /app/vendor/cakephp/cakephp/src/View/View.php:1134
2020-11-16T08:46:50.098011+00:00 app[web.1]: [0x00007f3fa30171c0] _render() /app/vendor/cakephp/cakephp/src/View/View.php:764
2020-11-16T08:46:50.102167+00:00 app[web.1]: [0x00007f3fa3017080] render() /app/vendor/cakephp/cakephp/src/Controller/Controller.php:696
2020-11-16T08:46:50.102412+00:00 app[web.1]: [0x00007f3fa3016fb0] render() /app/src/Controller/PagesController.php:80
2020-11-16T08:46:50.102450+00:00 app[web.1]: 
2020-11-16T08:46:50.102600+00:00 app[web.1]: [16-Nov-2020 08:46:50]  [pool www] pid 159
2020-11-16T08:46:50.102730+00:00 app[web.1]: script_filename = /app/webroot/index.php
2020-11-16T08:46:50.103025+00:00 app[web.1]: [0x00007f3fa3017ce0] execute() /app/vendor/cakephp/cakephp/src/Database/Statement/MysqlStatement.php:39
2020-11-16T08:46:50.103292+00:00 app[web.1]: [0x00007f3fa3017c40] execute() /app/vendor/cakephp/cakephp/src/Database/Connection.php:310
2020-11-16T08:46:50.103602+00:00 app[web.1]: [0x00007f3fa3017ba0] Cake\Database\{closure}() /app/vendor/cakephp/cakephp/src/Core/Retry/CommandRetry.php:70
2020-11-16T08:46:50.103860+00:00 app[web.1]: [0x00007f3fa3017b00] run() /app/vendor/cakephp/cakephp/src/Database/Connection.php:313
2020-11-16T08:46:50.104141+00:00 app[web.1]: [0x00007f3fa3017a70] execute() /app/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:140
2020-11-16T08:46:50.104581+00:00 app[web.1]: [0x00007f3fa3017940] _reflect() /app/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:106
2020-11-16T08:46:50.104878+00:00 app[web.1]: [0x00007f3fa3017890] describe() /app/vendor/cakephp/cakephp/src/Database/Schema/CachedCollection.php:84
2020-11-16T08:46:50.105253+00:00 app[web.1]: [0x00007f3fa30177e0] describe() /app/vendor/cakephp/cakephp/src/ORM/Table.php:509
2020-11-16T08:46:50.105502+00:00 app[web.1]: [0x00007f3fa3017710] getSchema() /app/vendor/cakephp/cakephp/src/ORM/Query.php:277
2020-11-16T08:46:50.105764+00:00 app[web.1]: [0x00007f3fa3017620] addDefaultTypes() /app/vendor/cakephp/cakephp/src/ORM/Query.php:177
2020-11-16T08:46:50.106025+00:00 app[web.1]: [0x00007f3fa3017590] __construct() /app/vendor/cakephp/cakephp/src/ORM/Table.php:1679
2020-11-16T08:46:50.106276+00:00 app[web.1]: [0x00007f3fa3017520] query() /app/vendor/cakephp/cakephp/src/ORM/Table.php:1261
2020-11-16T08:46:50.106497+00:00 app[web.1]: [0x00007f3fa3017490] find() /app/src/View/Helper/PostsHelper.php:15
2020-11-16T08:46:50.106733+00:00 app[web.1]: [0x00007f3fa30173d0] getPostsCount() /app/templates/Pages/home.php:111
2020-11-16T08:46:50.107032+00:00 app[web.1]: [0x00007f3fa3017350] [INCLUDE_OR_EVAL]() /app/vendor/cakephp/cakephp/src/View/View.php:1176
2020-11-16T08:46:50.107279+00:00 app[web.1]: [0x00007f3fa30172a0] _evaluate() /app/vendor/cakephp/cakephp/src/View/View.php:1134
2020-11-16T08:46:50.107519+00:00 app[web.1]: [0x00007f3fa30171c0] _render() /app/vendor/cakephp/cakephp/src/View/View.php:764
2020-11-16T08:46:50.107785+00:00 app[web.1]: [0x00007f3fa3017080] render() /app/vendor/cakephp/cakephp/src/Controller/Controller.php:696
2020-11-16T08:46:50.108012+00:00 app[web.1]: [0x00007f3fa3016fb0] render() /app/src/Controller/PagesController.php:80
2020-11-16T08:46:50.108279+00:00 app[web.1]: [0x00007f3fa3016ef0] display() /app/vendor/cakephp/cakephp/src/Controller/Controller.php:529
2020-11-16T08:47:16.122613+00:00 heroku[router]: at=error code=H12 desc="Request timeout" method=GET path="/" host=feel-prod.herokuapp.com request_id=400967ee-823d-4d6a-b2fc-47328b54a203 fwd="114.166.8.7" dyno=web.1 connect=1ms service=30000ms status=503 bytes=0 protocol=https
2020-11-16T08:47:16.134129+00:00 app[web.1]: [16-Nov-2020 08:47:16] WARNING: [pool www] child 156, script '/app/webroot/index.php' (request: "GET /webroot/index.php") execution timed out (30.004317 sec), terminating
2020-11-16T08:47:16.134600+00:00 app[web.1]: [16-Nov-2020 08:47:16] WARNING: [pool www] child 156 exited on signal 15 (SIGTERM) after 32.060544 seconds from start
2020-11-16T08:47:16.135123+00:00 app[web.1]: [Mon Nov 16 08:47:16.133392 2020] [proxy_fcgi:error] [pid 164:tid 140137686042368] [client 10.33.206.158:27451] AH01067: Failed to read FastCGI header
2020-11-16T08:47:16.136733+00:00 app[web.1]: [Mon Nov 16 08:47:16.133532 2020] [proxy_fcgi:error] [pid 164:tid 140137686042368] (104)Connection reset by peer: [client 10.33.206.158:27451] AH01075: Error dispatching request to :
2020-11-16T08:47:16.137411+00:00 app[web.1]: 10.33.206.158 - - [16/Nov/2020:08:46:46 +0000] "GET / HTTP/1.1" 503 299 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36
2020-11-16T08:47:16.413756+00:00 heroku[router]: at=error code=H12 desc="Request timeout" method=GET path="/" host=feel-prod.herokuapp.com request_id=656686f1-b63d-476d-bb85-a5e9b0fdd8b0 fwd="114.166.8.7" dyno=web.1 connect=1ms service=30000ms status=503 bytes=0 protocol=https
2020-11-16T08:47:17.133981+00:00 app[web.1]: [16-Nov-2020 08:47:17] WARNING: [pool www] child 159, script '/app/webroot/index.php' (request: "GET /webroot/index.php") execution timed out (30.719420 sec), terminating
2020-11-16T08:47:17.139111+00:00 app[web.1]: [Mon Nov 16 08:47:17.136179 2020] [proxy_fcgi:error] [pid 247:tid 140137853855488] [client 10.109.140.73:31644] AH01067: Failed to read FastCGI header
2020-11-16T08:47:17.139544+00:00 app[web.1]: [Mon Nov 16 08:47:17.136251 2020] [proxy_fcgi:error] [pid 247:tid 140137853855488] (104)Connection reset by peer: [client 10.109.140.73:31644] AH01075: Error dispatching request to :
2020-11-16T08:47:17.140023+00:00 app[web.1]: 10.109.140.73 - - [16/Nov/2020:08:46:46 +0000] "GET / HTTP/1.1" 503 299 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36
2020-11-16T08:47:17.140309+00:00 app[web.1]: [16-Nov-2020 08:47:17] WARNING: [pool www] child 159 exited on signal 15 (SIGTERM) after 33.062141 seconds from start
2020-11-16T08:48:46.367137+00:00 app[web.1]: [16-Nov-2020 08:48:46] WARNING: [pool www] child 157, script '/app/webroot/index.php' (request: "GET /webroot/index.php") executing too slow (3.912590 sec), logging
2020-11-16T08:48:46.367193+00:00 app[web.1]: 
2020-11-16T08:48:46.367301+00:00 app[web.1]: [16-Nov-2020 08:48:46]  [pool www] pid 157
2020-11-16T08:48:46.367404+00:00 app[web.1]: script_filename = /app/webroot/index.php
2020-11-16T08:48:46.367635+00:00 app[web.1]: [0x00007f3fa3017ce0] execute() /app/vendor/cakephp/cakephp/src/Database/Statement/MysqlStatement.php:39
2020-11-16T08:48:46.367845+00:00 app[web.1]: [0x00007f3fa3017c40] execute() /app/vendor/cakephp/cakephp/src/Database/Connection.php:310
2020-11-16T08:48:46.368096+00:00 app[web.1]: [0x00007f3fa3017ba0] Cake\Database\{closure}() /app/vendor/cakephp/cakephp/src/Core/Retry/CommandRetry.php:70
2020-11-16T08:48:46.368301+00:00 app[web.1]: [0x00007f3fa3017b00] run() /app/vendor/cakephp/cakephp/src/Database/Connection.php:313
2020-11-16T08:48:46.368525+00:00 app[web.1]: [0x00007f3fa3017a70] execute() /app/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:140
2020-11-16T08:48:46.368747+00:00 app[web.1]: [0x00007f3fa3017940] _reflect() /app/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:106
2020-11-16T08:48:46.368977+00:00 app[web.1]: [0x00007f3fa3017890] describe() /app/vendor/cakephp/cakephp/src/Database/Schema/CachedCollection.php:84
2020-11-16T08:48:46.374946+00:00 app[web.1]: [0x00007f3fa30177e0] describe() /app/vendor/cakephp/cakephp/src/ORM/Table.php:509
2020-11-16T08:48:46.375140+00:00 app[web.1]: [0x00007f3fa3017710] getSchema() /app/vendor/cakephp/cakephp/src/ORM/Query.php:277
2020-11-16T08:48:46.375354+00:00 app[web.1]: [0x00007f3fa3017620] addDefaultTypes() /app/vendor/cakephp/cakephp/src/ORM/Query.php:177
2020-11-16T08:48:46.375552+00:00 app[web.1]: [0x00007f3fa3017590] __construct() /app/vendor/cakephp/cakephp/src/ORM/Table.php:1679
2020-11-16T08:48:46.375738+00:00 app[web.1]: [0x00007f3fa3017520] query() /app/vendor/cakephp/cakephp/src/ORM/Table.php:1261
2020-11-16T08:48:46.375896+00:00 app[web.1]: [0x00007f3fa3017490] find() /app/src/View/Helper/PostsHelper.php:15
2020-11-16T08:48:46.376058+00:00 app[web.1]: [0x00007f3fa30173d0] getPostsCount() /app/templates/Pages/home.php:111
2020-11-16T08:48:46.376271+00:00 app[web.1]: [0x00007f3fa3017350] [INCLUDE_OR_EVAL]() /app/vendor/cakephp/cakephp/src/View/View.php:1176
2020-11-16T08:48:46.376479+00:00 app[web.1]: [0x00007f3fa30172a0] _evaluate() /app/vendor/cakephp/cakephp/src/View/View.php:1134
2020-11-16T08:48:46.376662+00:00 app[web.1]: [0x00007f3fa30171c0] _render() /app/vendor/cakephp/cakephp/src/View/View.php:764
2020-11-16T08:48:46.376885+00:00 app[web.1]: [0x00007f3fa3017080] render() /app/vendor/cakephp/cakephp/src/Controller/Controller.php:696
2020-11-16T08:48:46.377067+00:00 app[web.1]: [0x00007f3fa3016fb0] render() /app/src/Controller/PagesController.php:80
2020-11-16T08:48:46.377288+00:00 app[web.1]: [0x00007f3fa3016ef0] display() /app/vendor/cakephp/cakephp/src/Controller/Controller.php:529
2020-11-16T08:49:12.449863+00:00 heroku[router]: at=error code=H12 desc="Request timeout" method=GET path="/" host=feel-prod.herokuapp.com request_id=2744d91b-6adf-4fb7-9616-8ba80ee05e77 fwd="114.166.8.7" dyno=web.1 connect=1ms service=30001ms status=503 bytes=0 protocol=https
2020-11-16T08:49:12.893283+00:00 heroku[router]: at=info method=GET path="/favicon.ico" host=feel-prod.herokuapp.com request_id=7922d0b3-0279-4420-abc2-fdf9a6602f0a fwd="114.166.8.7" dyno=web.1 connect=0ms service=2ms status=200 bytes=17196 protocol=https
2020-11-16T08:49:12.899281+00:00 app[web.1]: 10.63.54.150 - - [16/Nov/2020:08:49:12 +0000] "GET /favicon.ico HTTP/1.1" 200 16958 "https://feel-prod.herokuapp.com/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36
2020-11-16T08:49:13.451569+00:00 app[web.1]: [16-Nov-2020 08:49:13] WARNING: [pool www] child 157, script '/app/webroot/index.php' (request: "GET /webroot/index.php") execution timed out (31.000600 sec), terminating
2020-11-16T08:49:13.454155+00:00 app[web.1]: [Mon Nov 16 08:49:13.453054 2020] [proxy_fcgi:error] [pid 247:tid 140137870636800] [client 10.159.227.245:22758] AH01067: Failed to read FastCGI header
2020-11-16T08:49:13.454855+00:00 app[web.1]: [Mon Nov 16 08:49:13.453111 2020] [proxy_fcgi:error] [pid 247:tid 140137870636800] (104)Connection reset by peer: [client 10.159.227.245:22758] AH01075: Error dispatching request to :
2020-11-16T08:49:13.456040+00:00 app[web.1]: 10.159.227.245 - - [16/Nov/2020:08:48:42 +0000] "GET / HTTP/1.1" 503 299 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.193 Safari/537.36
2020-11-16T08:49:13.457283+00:00 app[web.1]: [16-Nov-2020 08:49:13] WARNING: [pool www] child 157 exited on signal 15 (SIGTERM) after 149.380141 seconds from start
```

正直なにもわからないです😢  


#### 予想というかわかっていることと見解
多分ClearDB(DBサーバー)の問題なんだろうなぁ。手元で本番DBにアクセスしようとすると問い合わせに死ぬほど時間がかかる上、接続できない。アプリ側は問題なさそう。  

たまーに https://feel-prod.herokuapp.com/posts にアクセスできる。たまにできるのがまたよくわからないになっている。  
呼び出しているクエリが重いとか？これまでそんなことはなかったのだけれど。

結果、全然わからない😢

