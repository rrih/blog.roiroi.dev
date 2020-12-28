import React from "react"
import SEO from "../components/seo"
import { IndexProfileDiv } from ".";
import { displayAllLinks, LinkInterface } from "./links";
// use fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false
library.add(fas, far, fab)

// 開発したものの情報の一覧化
const AllApps: Array<LinkInterface>  = [
    {
        url: 'https://feel-prod.herokuapp.com',
        linkName: 'お気持ち.com',
    },
    {
        url: 'https://rrih.github.io/cakephp-baked-code-formatter/',
        linkName: 'コードフォーマッタ',
    },
    // {
    //     url: 'https://rrih.github.io/kyugyo',
    //     linkName: '休業.com',
    // },
    // {
    //     url: 'https://rrih.github.io/sparkle-of-life/',
    //     linkName: 'いのちのかがやき',
    // },
    // {
    //     url: 'https://rrih.github.io/fibonacci-sequence/',
    //     linkName: '一定法則でうさぎが増やそう'
    // }
]

const Apps: React.FC = () => {
  return (
    <React.Fragment>
      <SEO title="Apps" lang="ja" description="開発したアプリケーション一覧" />
      <IndexProfileDiv>
        <div>
          <div className="h2 text-center"><FontAwesomeIcon icon={fas.faGhost} /> Apps <FontAwesomeIcon icon={fas.faGhost} /></div>
          <div>
            <ul className="list-unstyled m-0">
                {displayAllLinks(AllApps)}
            </ul>
        </div>
        </div>
      </IndexProfileDiv>
    </React.Fragment>
  )
}

export default Apps