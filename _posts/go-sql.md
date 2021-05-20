---
title: '[Go]構造体の配列からJSONにパース'
excerpt: ''
coverImage: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
date: '2021-05-04T15:17:07.322+09:00'
author:
  name: ろい
  picture: 'https://github.com/rrih.png'
ogImage:
  url: 'https://pbs.twimg.com/profile_banners/636879657/1606257712/1500x500'
---

GoでMySQLと接続

```go
func dbConn() (db *sql.DB) {
	err := godotenv.Load(fmt.Sprintf("./%s.env", os.Getenv("GO_ENV")))
	if err != nil {
		fmt.Println("env err")
	}
	dbDriver := "mysql"
	dbUser := os.Getenv("DB_USER")
	dbPass := os.Getenv("DB_PASSWORD")
	dbName := "gosrc"
	db, openErr := sql.Open(dbDriver, dbUser+":"+dbPass+"@/"+dbName)
	if openErr != nil {
		log.Fatal(openErr.Error())
	}
	return db
}
```

こんな雰囲気で  
dbConn()の返り値を各db読み書きの処理の前に変数`db`に入れればよい？  
ディレクトリどう切ってくかとかわかってない

## 参考文献
- https://blog.p1ass.com/posts/go-database-sql-wrapper