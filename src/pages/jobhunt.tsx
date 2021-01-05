import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false
library.add(fas, far, fab)
import { Link } from "gatsby";
import React, { useState } from "react";
import { IndexProfileDiv, LinkDOM, NewLinkCircle } from ".";
import SEO from "../components/seo";
import { displayAllLinks } from "./links";
import styled from "styled-components";

export interface Question {
    id: number,
    questionText: string,
}

// const inferResultsOfJobHuntByQuestions = (ans: boolean) => {
//     let result = ''
//     if (ans) {
//         result = '「就活は成功する」と予測された'
//     }
//     else {
//         result = '「就活は失敗する」と予測された'
//     }
//     return (
//         <>{result}</>
//     )
// }

/**
 * 半分(50)以下なら 50 足す
 * @param num 
 */
const addHalfOrLess = (num: number): number => {
    return (num > 50 ? num : num + 50)
}

const JobHunt = () => {
    const questionList: Array<Question> = [
        {
            id: 1,
            questionText: '現在、就職活動をしてみる',
        },
        {
            id: 2,
            questionText: '現在、カジュアル面談まで受けたことがある',
        },
        {
            id: 3,
            questionText: '現在、一次選考まで進んだことがある',
        },
        {
            id: 4,
            questionText: '現在、二次先行まで進んだことがある',
        },
        {
            id: 5,
            questionText: '現在、三次先行まで進んだことがある',
        },
        {
            id: 6,
            questionText: '現在、最終選考まで進んだことがある',
        },
        // {
        //     id: ,
        //     questionText: '',
        // },
        // {
        //     id: ,
        //     questionText: '',
        // },
    ]
    // const [ans, setAns] = useState<Boolean>();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const [result, setResult] = useState('');
    const randomResult = Math.floor(Math.random() * 100);


    return (
        <React.Fragment>
            <SEO title="就活シミュレーター" lang="ja" description="大学生の就職活動のためのシミュレーター" />
            <IndexProfileDiv>
            <div>
                <div className="h2 mb-5">質問の回答から、就活結果を予測します</div>
                <div>
                    <div className="mb-5 text-center">
                        {`
                            Q
                        `}
                        {currentYear}年{currentMonth}月{questionList[0].questionText}
                    </div>
                    <div className="d-flex justify-content-around">
                        <NewLinkCircle onClick={() => setResult(`あなたの就活は${addHalfOrLess(randomResult)}%の確率で成功すると予測されました。`)}>
                            <LinkDOM>
                                <FontAwesomeIcon icon={far.faCircle} />
                            </LinkDOM>
                        </NewLinkCircle>
                        <NewLinkCircle onClick={() => setResult(`あなたの就活は${addHalfOrLess(randomResult)}%の確率で失敗すると予測されました。`)}>
                            <LinkDOM>
                                <FontAwesomeIcon icon={fas.faTimes} />
                            </LinkDOM>
                        </NewLinkCircle>
                    </div>
                    <div className="mt-5 text-center">
                        {result}
                    </div>
                </div>
            </div>
            <div className="fixed-bottom">
            <footer className="text-center">当サイトはジョークサイトです</footer>
            </div>
            </IndexProfileDiv>
      </React.Fragment>
    )
}

export default JobHunt
