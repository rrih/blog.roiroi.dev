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
        const au = <img className="mb-0" src={res.data.avatar_url} alt="rrih-avatar-url" width={30}/>
        setAvatarIcon(au);
      });
  };
  useEffect(() => {
    getUserWithGitHub();
  }, []);

  const header = (
    <div className="bg-dark text-light text-center py-2 d-flex justify-content-between align-items-center shadow">
      <div
        className="mx-3"
      >
        <a href="/" className="text-decoration-none text-light">
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
      className="bg-secondary"
    >
      <header className="">{header}</header>
      <main className="container border mt-3 bg-light shadow px-0">
        {children}
      </main>
      <footer className="text-center bg-dark text-light py-2 mt-3">
      &copy; {new Date().getFullYear()} rrih
      </footer>
    </div>
  )
}

export default Layout
