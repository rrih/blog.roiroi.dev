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
import { IndexProfileDiv, ProfileTextList, H2Title } from ".";

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
    linkName: 'Blog',
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

export const link = (louat: LinkInterface): JSX.Element => {
  return (
    <li key={louat.linkName}>
      <a
        href={louat.url}
        target='_blank'
        referrer-policy='no-referrer'
        rel='noopener'
      >
        {louat.linkName} <FontAwesomeIcon icon={fas.faExternalLinkAlt} />
      </a>
    </li>
  )
}

export const displayAllLinks = (list: Array<LinkInterface>): JSX.Element => {
  return (
    <ProfileTextList>
      {list.map((urlAndText: LinkInterface, index: number) => {
        return link(urlAndText)
      })}
    </ProfileTextList>
  )
}

const LinksPage: React.FC = () => {
  return (
    <IndexProfileDiv>
      <div>
        <div className='h2'><FontAwesomeIcon icon={fas.faLink} /> External links</div>
        <div className="text-center">
          {displayAllLinks(listOfUrlAndText)}
        </div>
      </div>
    </IndexProfileDiv>
  )
}

export default LinksPage