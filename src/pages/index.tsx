import React, { useEffect, useState }from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
import axios from "axios";
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

export type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
          tags: Array<string>
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const H2Title = styled.div`
  color: #f8f9fa;
  font-size: 120px;
  font-family: ヒラギノ角ゴ Std W8;

// 横回転からのホバー時に素早く縦回転
  animation:rotate-y 2s infinite;
  -webkit-animation:rotate-y 2s infinite;
  @keyframes rotate-y{
    0%{transform:rotateY(0deg);}
    100%{transform:rotateY(360deg);}
  }
  @-webkit-keyframes rotate-x{
    0%{-webkit-transform:rotateY(0deg);}
    100%{-webkit-transform:rotateY(360deg);}
  }

  &:hover {
    animation: rollkAnime 0.1s linear infinite;
    @keyframes rollkAnime{
      50% {
        color: #f8f9fa;
        transform: rotateX(180deg);
      }
      100% {
        color: #f8f9fa;
        transform: rotateX(360deg);
      }
    }
  }
`

const LinkIcon = styled.a`
  color: #f8f9fa;
  // font-size: 70px;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: #f8f9fa;
  }
`

const TechIcon = styled.div`
  font-size: 70px;
`

const TechFont = styled.div`
  font-size: 10px;
`

const Email = styled.div`
  font-size: 70px;
`

const IndexProfileDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #C0C0C0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProfileDiv = styled.div`
  top: 30%;
  font-weight: bold;
  text-align: center;
  position: absolute;
  
  font-size: 20px;
  svg {
    height: 30px;
    width: 30px;
  }
`

const LinkDOM = styled.a`
  :hover {
    color: white;
    background-color: #212529;
  }
  svg {
    margin-right: .25rem;
    margin-left: .25rem;
    margin-bottom: .8rem;
  }
  font-size: 60px;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  border: solid 3px black;
  border-radius: 50%;
  color: #212529;
`

const LinkIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProfileTextList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const ProfileText = styled.li`
  margin: 0;
`

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const birthday = moment('1997/09/11', 'YYYY/MM/DD') // 誕生日
  const today = moment()
  const age = today.diff(birthday, 'years')
  // TODO あとで github のプロフィールの型定義する
  const [avatarIcon, setAvatarIcon] = useState();
  const [myGitHubName, setMyGitHubName] = useState();
  const [bio, setBio] = useState();
  const [company, setCompany] = useState()
  const githubScreenName = 'rrih'

  const getUserWithGitHub = async () => {
    await axios.get('https://api.github.com/users/rrih')
      .then((res) => {
        const au = <img className="mb-0 rounded-pill" src={res.data.avatar_url} alt="rrih-avatar-url" width={90}/>
        console.log(res.data)
        setBio(res.data.bio);
        setMyGitHubName(res.data.name);
        setCompany(res.data.company)
        setAvatarIcon(au);
      });
  };
  useEffect(() => {
    getUserWithGitHub();
    console.log('I am looking for a side job (๑╹ω╹๑ )\nI can write a little JavaScript and PHP, SQL (๑╹ω╹๑ )')
  }, []);

  return (
    <>
      <IndexProfileDiv>
        <ProfileDiv>
          <div className='pb-4'>
            {avatarIcon}
          </div>
          <ProfileTextList>
            <ProfileText>
              {githubScreenName} - {myGitHubName}
            </ProfileText>
            <ProfileText>
              {bio}
            </ProfileText>
            {/* <ProfileText>
              <FontAwesomeIcon icon={far.faBuilding} /> {company}
            </ProfileText> */}
          </ProfileTextList>
            {/* icons for link */}
          <LinkIcons>
            <div className='mx-2'>
              <LinkDOM
                href='https://twitter.com/rrih_dev'
                target='_blank'
                referrer-policy='no-referrer'
                rel='noopener'
              >
                <FontAwesomeIcon icon={fab.faTwitter} />
              </LinkDOM>
            </div>
            <div className='mx-2'>
              <LinkDOM
                href='https://github.com/rrih'
                target='_blank'
                referrer-policy='no-referrer'
                rel='noopener'
              >
                <FontAwesomeIcon icon={fab.faGithub} />
              </LinkDOM>
            </div>
            <div className='mx-2'>
              <LinkDOM
                href='https://rrih.github.io/posts'
                target='_blank'
                referrer-policy='no-referrer'
                rel='noopener'
              >
                <FontAwesomeIcon icon={fas.faPenFancy} />
              </LinkDOM>
            </div>
          </LinkIcons>
        </ProfileDiv>
      </IndexProfileDiv>
      {/* <footer>
        &copy; {new Date().getFullYear()} Ryohei Kawahara.
      </footer> */}
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY年MM月DD日")
            title
            description
          }
        }
      }
    }
  }
`
