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
          <p>The page you are looking for could not be found.</p>
        </ProfileDiv>
        <div>
          <a href='/'>Back to Top</a>
        </div>
      </IndexProfileDiv>
    </React.Fragment>
  )
}

export default NotFoundPage