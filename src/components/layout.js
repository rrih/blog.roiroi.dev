import React, { useEffect, useState } from "react"
import axios from "axios";
import styled from "styled-components";

const Layout = ({ location, title, children }) => {
  const TopSquareCard = styled.div`
    border-radius: 40px;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
  `

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
      case `/blog`:
      case `/blog/`: // TODO `/` が末尾に入る場合を考慮していなかったので入れたけど、これはなんとなくいけてない気がするので後で考える
        return `/`;
      // `/posts` へ返す場合
      default:
        return `/posts`;
    }
  }

  const header = (
    <div className="bg-dark text-light text-center py-2 d-flex justify-content-between align-items-center shadow fixed-top">
      <div
        className="mx-3"
      >
        <a href={topLinkPosts()} className="text-decoration-none text-light">
          トップ
        </a>
      </div>
      <div className="mx-3">
        {avatarIcon}
      </div>
    </div>
  )

  return (
    <div
      className="bg-secondary mt-4 pt-4"
    >
      <header>{header}</header>
      <TopSquareCard className="container border mt-3 bg-light px-0">
        {children}
      </TopSquareCard>
      <footer className="text-center bg-dark text-light py-2 mt-3 py-5">
        &copy; {new Date().getFullYear()} rrih
        <div className="text-light"><small>このサイトはGoogle Analyticsを使用しています。<a href="https://policies.google.com/technologies/partner-sites?hl=ja" target="_blank" rel="noopener noreferrer">詳しく見る</a></small></div>
      </footer>
    </div>
  )
}

export default Layout
