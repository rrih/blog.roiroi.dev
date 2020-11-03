---
title: GitHub Pagesで公開するGatsbyのSPAにおいて.gitignoreで無視するべきファイル
date: "2020-11-04T15:24:00.284Z"
description: ""
---

こんにちは。ろいです  
このサイトはGatsbyでてきとうに書いてGitHubで管理しているのですが、.gitignoreでどのファイルを無視するべきなのかメモっておきます。

### 使わないor秘匿なもの
- `/.cache`  
  ビルド時に生成されます。こいつはローカルの開発が(速く)便利になるだけでリモートロポジトリに保存しておく必要ないです。
<br><br>
- `/node_modules`  
  いわずもがな。
<br><br>
- `/public`  
  github pagesで公開する際のjobでbuild時に生成されますが、公開時は不要です。

以上