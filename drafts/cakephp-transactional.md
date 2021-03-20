---
title: 'CakePHP4 transactional めも'
excerpt: ''
coverImage: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
date: '2021-03-20T12:23:07.322+09:00'
author:
  name: ろい
  picture: 'https://github.com/rrih.png'
ogImage:
  url: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
---

CakePHP4 transactional についてめも

## トランザクションについて
一連の DB への操作を一セットとして扱う。途中でエラーが発生したらロールバック(なかったことにする)が行われる。レコードの整合性を保つための機能。

## CakePHP4 の場合

```php
<?php

class ItemCommand extends Command
{
    public function execute(Arguments $args, ConsoleIo $io): void
    {
        // トランザクション処理
        $process = function () use ($user) {
            $item = $this->Items->newEmptyEntity();
            $item->user_id = $user->id;
            $item->name = 'item' . $user->id;
            try {
                // DB への書き込みを行う
                $this->Items->saveOrFail($item);
            } catch(\Cake\ORM\Exception\PersistenceFailedException $e) {
                // 保存時にエラーが発生した場合、ロールバックするために false を返す
                return false;
            }
        }
    }
}
```
