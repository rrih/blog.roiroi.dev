import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Tweet, User } from "../../interfaces";
import { api } from "../../utils/url";
import { theme } from "../../utils/theme";
import { ProfileImageInTL, SearchedTweetFrame, SearchTweetInput, TimeText } from "../../styles";
import { Button, MuiThemeProvider } from "@material-ui/core";
import { Layout } from "../../components/Layout";

const Index: FC = () => {
    const [searchedList, setSearchedList] = useState<Array<Tweet>>()
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [searchCountLength, setSearchCountLength] = useState<string>('10')

    useEffect(() => {
        result()
    }, [])

    const result = async () => {
        axios.get(`${api}/api/search`, { params: { q: searchQuery, count: searchCountLength } })
            .then((res) => {
                setSearchedList(res.data.statuses)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <MuiThemeProvider theme={theme}>
            <Layout title="twir">
                <h1>ツイート検索</h1>
                <SearchTweetInput
                    type="text"
                    placeholder="ワードを入力してください 例: `@rrihapp`"
                    onChange={(e: any) => setSearchQuery(e.target.value)}
                />
                <SearchTweetInput
                    type="text"
                    placeholder="検索件数を入力してください 例: 10"
                    onChange={(e: any) => setSearchCountLength(e.target.value)}
                />
                <Button variant="contained" color="secondary" type="submit" onClick={result}>
                検索する
                </Button>
                {searchedList?.map((searchedTweet) => {
                    // 時間の処理
                    const dibt: Array<string> = String(searchedTweet.created_at).split(' ')
                    const convertedDate: Date = new Date(`${dibt[0]} ${dibt[1]} ${dibt[2]} ${dibt[5]} ${dibt[3]} GMT+0900 (日本標準時)`)
                    const year = convertedDate.getFullYear()
                    const month = convertedDate.getMonth() + 1
                    const date = convertedDate.getDate()
                    const hour = convertedDate.getHours() + 9 > 23 ? convertedDate.getHours() + 9 - 24 : convertedDate.getHours() + 9
                    const time = `${hour}時${convertedDate.getMinutes()}分${convertedDate.getSeconds()}秒`
                    const user: User = searchedTweet.user
                    const text: string = searchedTweet.text
                    
                    // ツイート内にリンクが存在する場合
                    let newLink: string
                    let newText: string | JSX.Element = ''
                    // TODO あとで http の方も実装、あるいは https の場合と共通化する
                    // if (text.indexOf('http://') != -1) {
                    //     console.log(text.split('http://')[1].split(' ')[0])
                    //     newLink = `http://${text.split('http://')[1].split(' ')[0]}`
                    // }
                    // https
                    if (text.indexOf('https://') != -1) {
                        // TODO クソコード感…
                        newLink = `https://${text.split('https://')[1].split(' ')[0]}`
                        const text1 = text.split('https://')[0] != null ? text.split('https://')[0] : ''
                        const text2 = <a href={newLink} target="_blank" rel="noopener noreferrer">{newLink}</a>
                        const text3 = text.split('https://')[1].split(' ')[1] != null ? text.split('https://')[1].split(' ')[1] : ''
                        newText = `${text.split('https://')[0] != null ? text.split('https://')[0] : ''}${<a href={newLink}>${newLink}</a>} ${text.split('https://')[1].split(' ')[1] != null ? text.split('https://')[1].split(' ')[1] : ''}`
                        newText = <>{text1}{text2}{text3}</>
                    }
                    else {
                        newText = text
                    }
                    return (
                        <SearchedTweetFrame key={searchedTweet.id}>
                            <div>
                                <ProfileImageInTL src={user.profile_image_url} alt={user.name}/> {user.name} @{user.screen_name}</div>
                            <div>{newText}</div>
                            <TimeText>
                                {year}年{month}月{date}日{time}
                            </TimeText>
                            <div>{searchedTweet.retweet_count}RT {searchedTweet.favorite_count}fav</div>
                        </SearchedTweetFrame>
                    )
                })}
            </Layout>
        </MuiThemeProvider>
    )
}

export default Index