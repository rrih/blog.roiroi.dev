import React, { useEffect, useState } from "react"
// import { Link } from "gatsby"
import axios from "axios";

// import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  const [avatarIcon, setAvatarIcon] = useState();
  // プロフィール画像
  // const blogerImage = `https://github.com/rrih.png`;
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
  console.log(location.pathname)
  // トップのリンクは`/articles`かを判別し、動的に返す
  const topLinkArticles = () => {
    switch (location.pathname) {
      // origin へ返す場合
      case `/`:
      case `/blog`:
        return `/`;
        break;
      // `/article` へ返す場合
      default:
        return `/articles`;
        break;
    }
  }

  const header = (
    <div className="bg-dark text-light text-center py-2 d-flex justify-content-between align-items-center shadow fixed-top">
      <div
        className="mx-3"
      >
        <a href={topLinkArticles()} className="text-decoration-none text-light">
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
      <header className="">{header}</header>
      <main className="container border mt-3 bg-light shadow px-0 rounded">
        {children}
      </main>
      <footer className="text-center bg-dark text-light py-2 mt-3">
        &copy; {new Date().getFullYear()} rrih
        <div className="text-light"><small>このサイトはGoogle Analyticsを使用しています。<a href="https://policies.google.com/technologies/partner-sites?hl=ja" target="_blank" rel="external noopener">詳しく見る</a></small></div>
      </footer>
    </div>
  )
}

export default Layout
