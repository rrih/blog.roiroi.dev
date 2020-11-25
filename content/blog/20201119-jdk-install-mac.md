---
title: Mac CatalinaにhomebrewでJava環境構築
date: "2020-11-19T20:53:00.284Z"
description: ""
tags: ["mac", "java", "homebrew"]
---

久しぶりにJavaの環境構築をしたのでメモ

環境  
Mac Catalina  
バージョン 10.15.7（19H2）  

#### 結論

これでよい
```bash
% brew tap AdoptOpenJDK/openjdk 
% brew cask install adoptopenjdk14
```

#### バージョン確認
```bash
% javac -version
javac 14.0.2
% java -version
openjdk version "14.0.2" 2020-07-14
OpenJDK Runtime Environment AdoptOpenJDK (build 14.0.2+12)
OpenJDK 64-Bit Server VM AdoptOpenJDK (build 14.0.2+12, mixed mode, sharing)
```

#### 試しに実行
```bash
% mkdir java-sample
% cd java-sample
% touch Sample.java
% vi Sample.java # てきとうにJavaコードを書く
```
```java
// Sample.java
public class Sample {
    public static void main(String[] args) {
        System.out.println("hoge");
    }
}
```
```bash
% javac Sample.java # コンパイル
% java Sample # 実行
hoge
```

#### 参考文献
- [MacにJava開発環境をインストールする - Qiita](https://qiita.com/suke_masa/items/f9af0fb84ad9447ae961)