---
title: '独自ドメイン取得してサブドメインを設定'
excerpt: 'はい'
coverImage: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
date: '2021-03-02T08:47:07.322+09:00'
author:
  name: ろい
  picture: 'https://pbs.twimg.com/profile_images/1360265464488710150/9tFz-ycm_400x400.jpg'
ogImage:
  url: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
---

[先日独自ドメインを取得すると宣言した](/posts/hello-world)通り、てきとうなドメインを取って真面目にサイトを運用していこうという感じになりました。当サイトではblog.roiroi.devをサブドメインとして切り出してます。なおドメインのセンスは皆無でした。申し訳…

大昔(3年以上前)に独自ドメイン(今は消滅済み)を取ってはてなブログをやってた時代がありましたが、今回はドメインはお名前.comではなくGoogle Domainsで取得したりはてなブログProではなくNext.js+GitHub Pagesでやってたり差分は色々あります。

また、GitHub Pagesのcustom domainの設定画面のﾎﾞﾀﾝﾎﾟﾁｰでCNAMEを作成できますが、僕の場合.github/workflows/deploy.ymlの[ここで](https://github.com/rrih/blog.roiroi.dev/blob/master/.github/workflows/deploy.yml#L32)gh-pagesに生成物を配置するために`CNAME`をpublic配下に置いておく必要があります。これでpushする度にgh-pagesブランチの中身が刷新されることによりCNAMEが外れて404返される自体にならずに済みます。Next知ってれば当たり前体操な話でしたね…

あとは暇な時にGoogle AnalyticsやGoogle Adsenseの設定やります…