---
title: CakePHP、実装についてめも
date: "2020-11-15T13:19:00.284Z"
description: ""
---

PHPのメモ、というか業務(CakePHP4)についてのメモ
### 現在タスクで学んだこと
- 旧実装のクエリのログを見ながら再現していくイメージ
- Model周りのutil的メソッドはTraitやBehaviorの利用を検討
- バリデーションは二度動く(patchEntity生成時、save時)  
patchEntity時に入力されたデータとしての整合性をチェック、save時はデータベース周りの整合性チェックをするべき。  
patchEntity生成時に動くものは`validationDefault`に書く  
saveに動くものは`buildRules`に書く  
- 単一責務の原則  
別メソッドに切り出すべきシーンでそうせずにデカい関数を書くと怒られたりする。

そもそも現在やってるタスクまだゴールしていない件…