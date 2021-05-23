---
title: 'brew install *** したら `code .` で `No such file or directory`'
excerpt: ''
coverImage: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
date: '2021-03-07T12:47:07.322+09:00'
author:
  name: ろい
  picture: 'https://github.com/rrih.png'
ogImage:
  url: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
---

```bash
brew install ***
```
をしたあとに
```
code .
```
でVS Code立ち上げようとしたら
```bash
/usr/local/var/pyenv/shims/python: line 21: /usr/local/Cellar/pyenv/1.2.21/libexec/pyenv: No such file or directory
/usr/local/bin/code: line 10: ./MacOS/Electron: No such file or directory
```
というエラーが出た。

https://e-tec-memo.herokuapp.com/article/233/

こちらを参考に以下のコマンドで解決。

```bash
$ pyenv rehash
```

なぜpyenvのバージョン変わってしまうんだろう