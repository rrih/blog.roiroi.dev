---
title: 'CakePHP[2.8/4] インタラクティブ・コンソール (REPL) 使い方'
excerpt: ''
coverImage: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
date: '2021-04-28T01:02:07.322+09:00'
author:
  name: ろい
  picture: 'https://github.com/rrih.png'
ogImage:
  url: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
---

### cakephp2系の場合
起動、メソッド等の実行について
```bash
$ ./Console/cake console
>>>
>>> $hoge = Cake\Lib\SomeDomain\Repository\HogeRepository::getInstance()->get(1);
>>> Cake\Lib\SomeDomain\Service\HogeFugaService::createHogeUser($hoge);
```

### cakephp4 の場合
起動、メソッド等の実行について
```bash
$ bin/cake console
You can exit with `CTRL-C` or `exit`

>>>
>>> $a = Carbon\Carbon::now();
=> Carbon\Carbon @1619531645 {#2618
     date: 2021-04-27 22:54:05.862774 Asia/Tokyo (+09:00),
   }
>>> Cake\ORM\TableRegistry::get('Users');
=> App\Model\Table\UsersTable {#2648
     registryAlias: "Users",
     table: "users",
     alias: "Users",
     entityClass: "App\Model\Entity\User",
     associations: [
         ...
```

雰囲気こんな感じ  
また、privateなのとかは呼び出せません

### 参考文献
- https://book.cakephp.org/2/ja/console-and-shells/repl.html
- https://book.cakephp.org/4/ja/console-and-shells/repl.html