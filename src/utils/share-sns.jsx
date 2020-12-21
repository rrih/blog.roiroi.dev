import {
    FacebookShareButton,
    LineShareButton,
    TwitterShareButton,
    FacebookIcon,
    LineIcon,
    TwitterIcon,
    HatenaShareButton,
    HatenaIcon,
} from "react-share";
import React from "react";
import styled from "styled-components";

// あんまりよろしくなさそう
// 密結合になってる
const ShareIconStyle = styled.div`
  button {
    border: solid 3px #f8f9fa !important;
    border-radius: 50%;
    svg {
      circle {
        fill: #212529;
      }
      path {
        fill: #f8f9fa;
      }
      :hover {
        circle {
          fill: #f8f9fa;
        }
        path {
          fill: #212529;
        }
      }
    }
  }
`

export const ShareSns = ({ articleUrl, articleTitle }) => {
    return (
        <div className="d-flex justify-content-around py-3">
            <ShareIconStyle>
                <FacebookShareButton url={articleUrl}>
                    <FacebookIcon size={60} round />
                </FacebookShareButton>
            </ShareIconStyle>

            <ShareIconStyle>
                <LineShareButton url={articleUrl}>
                    <LineIcon size={60} round />
                </LineShareButton>
            </ShareIconStyle>

            <ShareIconStyle>
                <TwitterShareButton title={articleTitle} via="rrih_dev" url={articleUrl}>
                    <TwitterIcon size={60} round />
                </TwitterShareButton>
            </ShareIconStyle>

            <ShareIconStyle>
                <HatenaShareButton title={articleTitle} url={articleUrl}>
                    <HatenaIcon size={60} round />
                </HatenaShareButton>
            </ShareIconStyle>

        </div>
    );
};