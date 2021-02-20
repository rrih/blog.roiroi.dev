---
title: CakePHP4にてrest api
date: "2020-12-06T01:18:00.284Z"
description: ""
tags: ["cakephp4"]
---

CakePHP4でREST(ful) APIを生やす方法について、完全に自分用メモです。

公式を見ればわかることですが、まずルーティングの設定から。

```php
use Cake\Routing\Route\DashedRoute;
use Cake\Routing\RouteBuilder;

$routes->setRouteClass(DashedRoute::class);

$routes->scope('/api', function (RouteBuilder $routes) {
    $routes->setExtensions(['json']);
    $routes->resources('Posts');
    $routes->fallbacks();
});
```

最低限の役割を持つもののみ記述すると`config/routes.php`はこのような感じになります。この場合、PostsControllerのindex()関数が返すjsonデータを取得するのに、`http://domain/api/posts/index(.json)/`をgetする必要があります。

そしてControllerですが、

```php
<?php

namespace App\Controller;

use App\Controller\AppController;
use Cake\Cache\Cache;

class PostsController extends AppController
{
    public function initialize(): void
    {
        parent::initialize();
        $this->loadComponent('RequestHandler'); // 必須
    }

    public function index()
    {
        $topics = $this->Posts->find('all');

        $this->viewBuilder()->setClassName('Json'); // jsonを指定
        $this->set('posts', $topics);
        $this->set('_serialize', 'posts'); // シリアライズ
        // シリアライズする必要がある変数が二つ以上の場合は以下のような感じ
        // $this->set(compact('posts', 'comments'));
        // $this->set('_serialize', ['posts', 'comments']);
    }
}
```

このようになります。なおModelは省略します。これでtemplateはなくともブラウザで`http://domain/api/posts/index`にアクセスした時に

```json
[
    {
        "id": 1,
        "text": "description"
    },
    {
        "id": 2,
        "text": "description2"
    },
    {
        "id": 3,
        "text": "desc3"
    }
]
```

こんな感じでjsonが表示されてますね。

のちのちデプロイまでしときます。

### まとめ

routingとControllerをそれぞれurl、viewなし、jsonで返す、みたいな設定をしてあげればよい  
