import React, { useEffect, useState } from "react"
import axios from "axios";
import styled from "styled-components";
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from "react-tooltip";
import { config } from '@fortawesome/fontawesome-svg-core'
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false

const Layout = ({ location, title, children }) => {
  const TopSquareCard = styled.div`
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
    background-color: #212529;
    color: #f8f9fa;
    h1, h2, h3, h4, h5, a {
      color: #f8f9fa;
    }
  `

  const TopScrollHelper = styled.div`
    border-radius: 50px;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
    background-color: #212529;
    color: white;
    text-align: center;
    left: 85vw;
    top: 90vh;
    width: 50px;
    height: 50px;
  `

  const TopHeaderLink = styled.a`
    font-family: system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,
    sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,
    Segoe UI Symbol,Noto Color Emoji;
  `

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  const [avatarIcon, setAvatarIcon] = useState();
  const getUserWithGitHub = async () => {
    await axios.get('https://api.github.com/users/rrih')
      .then((res) => {
        const au = <img className="mb-0 rounded-pill" src={res.data.avatar_url} alt="rrih-avatar-url" width={30}/>
        setAvatarIcon(au);
      });
  };
  useEffect(() => {
    getUserWithGitHub();
  }, []);

  // トップのリンクは`/posts`かを判別し、動的に返す
  const topLinkPosts = () => {
    switch (location.pathname) {
      // origin へ返す場合
      case `/`:
      // トップの場合のみトップへ返す。それ以外は posts へ返す
      // case `/privacy-policy`:
      // case `/privacy-policy/`: 
        return `/`;
      // `/posts` へ返す場合
      default:
        return `/posts/`;
    }
  }

  const header = (
    <div className="bg-dark text-light text-center py-2 d-flex justify-content-between align-items-center shadow fixed-top">
      <div
        className="mx-3"
      >
        <TopHeaderLink
          href={topLinkPosts()}
          className="text-decoration-none text-light"
          data-tip="トップへ戻る"
        >
          {location.host}
          <ReactTooltip effect="float" type="dark" place="bottom" />
        </TopHeaderLink>
      </div>
      <div className="mx-3">
        {avatarIcon}
      </div>
    </div>
  )

  return (
    <div
      className="bg-secondary mt-4 pt-2"
    >
      <header>{header}</header>
      <TopSquareCard className="container mt-3 px-0">
        {children}
      </TopSquareCard>
      <footer className="text-center bg-dark text-light py-2 mt-3 py-5">
        <a href="/privacy-policy" className="text-decoration-none text-light">プライバシーポリシー</a>
        <br />
        &copy; {new Date().getFullYear()} rrih All Rights Reserved
      </footer>
      <TopScrollHelper
        className="fixed-bottom border d-flex align-items-center justify-content-center"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </TopScrollHelper>
    </div>
  )
}

export default Layout
