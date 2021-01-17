import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { toast } from 'react-toastify';
import ReactTooltip from "react-tooltip";
import moment from "moment";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false
library.add(fas, far, fab)
import { IndexProfileDiv, ProfileTextList, H2Title, NewLinkCircle } from ".";
import SEO from "../components/seo";
import { Link } from "gatsby";
import styled from "styled-components";

export interface LinkInterface {
  url: string,
  linkName: string,
}

// リンクはここに追加していく
const listOfUrlAndText: Array<LinkInterface> = [
  {
    url: 'https://qiita.com/rrih',
    linkName: 'Qiita',
  },
  {
    url: 'https://zenn.dev/ro',
    linkName: 'Zenn',
  },
  {
    url: 'https://www.npmjs.com/~rrih',
    linkName: 'npm',
  },
  {
    url: 'https://facebook.com/rsklv',
    linkName: 'Facebook'
  },
  {
    url: 'https://instagram.com/roi_web',
    linkName: 'Instagram'
  },
  {
    url: 'https://www.linkedin.com/in/ryohei-kawahara-426925164/',
    linkName: 'LinkedIn'
  },
  {
    url: 'https://www.youtube.com/channel/UCO9hyHYE_09Yo-ouQh2tUlg',
    linkName: 'YouTube'
  },
  {
    url: 'https://rrih.github.io/posts',
    linkName: 'Posts',
  },
  {
    url: 'https://wantedly.com/id/rrih',
    linkName: 'Wantedly',
  },
  {
    url: 'mailto:rsklv@icloud.com',
    linkName: 'Mail',
  },
]

const PNewLinkCircle = styled.div`
  position: relative;
  width: 120%;
  padding: 10px 0px;
  text-align: center;

  border-radius: 108px;
  background: #C0C0C0;
  box-shadow:  13px 13px 26px #a3a3a3,
              -13px -13px 26px #dddddd;
  :hover {
    border-radius: 108px;
    background: #C0C0C0;
    box-shadow: inset 13px 13px 26px #a3a3a3,
                inset -13px -13px 26px #dddddd;
  }
`

const InnerLink = styled.a`
  text-decoration: none;
  color: #212529;
  // padding: 10px 100%;
  width: 100%
  :hover {
    color: #212529;
  }
`

export const link = (louat: LinkInterface): JSX.Element => {
  return (
    <li key={louat.linkName}>
      {/* <PNewLinkCircle className="mx-2"> */}
        <InnerLink
          href={louat.url}
          target='_blank'
          referrer-policy='no-referrer'
          rel='noopener'
        >
          {louat.linkName} {/* <FontAwesomeIcon icon={fas.faExternalLinkAlt} /> */}
        </InnerLink>
      {/* </PNewLinkCircle> */}
    </li>
  )
}

export const displayAllLinks = (list: Array<LinkInterface>): JSX.Element => {
  return (
    // <ProfileTextList>
    <>
      {list.map((urlAndText: LinkInterface, index: number) => {
        return link(urlAndText)
      })}
    </>
    // </ProfileTextList>
  )
}

const LinksPage: React.FC = () => {
  return (
    <React.Fragment>
      <SEO title="links" lang="ja" description="External links" />
      {/* <IndexProfileDiv> */}
        <div className="ml-4 mt-3">
          <div className='h2'><FontAwesomeIcon icon={fas.faLink} /> Links</div>
          <div>
            {displayAllLinks(listOfUrlAndText)}
          </div>
          <div>
            <Link to='/'>
              <FontAwesomeIcon icon={fas.faArrowLeft} /> Back to Top
            </Link>
          </div>
        </div>
      {/* </IndexProfileDiv> */}
    </React.Fragment>
  )
}

export default LinksPage