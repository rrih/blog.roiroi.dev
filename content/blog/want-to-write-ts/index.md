---
title: TypeScriptでフロント、バック両方書いてみた！
date: "2020-11-03T05:04:00.284Z"
description: ""
---

フロントエンドはReact(TypeScript)でバックエンドはNest.js(TypeScript)です。
DBはMySQL(ClearDB)みにいって、Herokuでデプロイ。

TBD

ちなみに、昔書いたアプリでhttps://rrih.github.io/kyugyo というのがあって、これはReact、Nest.js、MongoDB、Herokuの構成となってます。しかしMongoDBのHerokuサポートが終わったらしいので次はMySQLで書きたいと思ったのでこの記事を書くことで今後この構成のアプリを書くことを未来の自分に課したいというお気持ちです。

あともう少しテーブル設計まともにしたものを作りたい…
あとサーバーサイドをTSで書き、SQL使用する際にTypeORMというライブラリがTSの恩恵受けられそうで、良さそうな感じらしい。TS+MySQL+TypeORMでやってみたいですね