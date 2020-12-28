import React from "react"
import SEO from "../components/seo"
import { IndexProfileDiv, ProfileDiv } from ".";

const NotFoundPage: React.FC = () => {
  return (
    <React.Fragment>
      <SEO title="404" />
      <IndexProfileDiv>
        <ProfileDiv>
          <div className="h1">
            404
          </div>
          <p>お探しのページが見つかりませんでした。</p>
        </ProfileDiv>
        <div>
          <a href='/'>トップ</a>へ戻る
        </div>
      </IndexProfileDiv>
    </React.Fragment>
  )
}

export default NotFoundPage