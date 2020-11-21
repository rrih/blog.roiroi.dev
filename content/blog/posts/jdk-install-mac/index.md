---
title: Mac CatalinaにhomebrewでJava環境構築
date: "2020-11-21T20:53:00.284Z"
description: ""
---

久しぶりにJavaの環境構築をしたのでメモ

環境  
Mac Catalina  
バージョン 10.15.7（19H2）  

#### 結論

これでよい
```bash
$ brew tap AdoptOpenJDK/openjdk 
$ brew cask install adoptopenjdk14
```

#### 試しに実行
```bash
$ mkdir java-sample
$ cd java-sample
$ touch Sample.java
$ vi Sample.java # てきとうにJavaコードを書く
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
$ javac Sample.java # コンパイル
$ java Sample # 実行
hoge
```
参考文献は[こちら](https://qiita.com/suke_masa/items/f9af0fb84ad9447ae961)