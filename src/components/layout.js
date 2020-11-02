import React from "react"
import { Link } from "gatsby"
import "./blog.css"

// import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  // プロフィール画像
  const blogerImage = `https://cdn.image.st-hatena.com/image/square/86adf29367242dfb1234b4168178df4fcee8a95b/backend=imagemagick;height=128;version=1;width=128/https%3A%2F%2Fcdn.user.blog.st-hatena.com%2Fblog_custom_icon%2F146334169%2F1590983507412455`;
  const header = (
    <div className="bg-dark text-light text-center py-3 shadow">
      <div
        className="h2"
      >
        <Link
          to={`/`}
          className="text-light text-decoration-none"
        >
          {title}
        </Link>
      </div>
      <div>なにもわかってない</div>
    </div>
  )

  return (
    <div
      className="bg-secondary"
    >
      <header className="">{header}</header>
      <main className="container border mt-3 bg-light shadow d-md-flex">
        {children}
      </main>
      <footer className="text-center bg-dark text-light py-2 mt-3">
        © {new Date().getFullYear()} ろ
      </footer>
    </div>
  )
}

export default Layout
