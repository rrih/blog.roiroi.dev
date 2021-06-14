---
title: '[PHPUnit]使うassert系メソッド'
excerpt: ''
coverImage: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
date: '2021-06-03T15:17:07.322+09:00'
author:
  name: ろい
  picture: 'https://github.com/rrih.png'
ogImage:
  url: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
---

## 個人的に使うassert系メソッド一覧
とりあえずこれだけで十分じゃないの？って思ってる

- assertSame  
思考停止で使いがち。一度他で代用できないか考えた方がいい。

- assertCount  
arrayの長さを検証する。

- assertInstanceOf  
第二引数を第一引数で指定したクラスのインスタンスかを検証してくれる

- assertNull  
nullであるか

- assertTrue  
真であるか

- assertFalse  
偽であるか

- assertEmpty  
空であるか

## 参考文献
https://phpunit.readthedocs.io/ja/latest/assertions.html

