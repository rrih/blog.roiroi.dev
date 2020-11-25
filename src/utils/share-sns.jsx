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

export const ShareSns = ({ articleUrl, articleTitle }) => {
    return (
        <div className="d-flex justify-content-around py-3">
            <div>
                <FacebookShareButton url={articleUrl}>
                    <FacebookIcon size={60} round />
                </FacebookShareButton>
            </div>

            <div>
                <LineShareButton url={articleUrl}>
                    <LineIcon size={60} round />
                </LineShareButton>
            </div>

            <div>
                <TwitterShareButton title={articleTitle} via="rrih_dev" url={articleUrl}>
                    <TwitterIcon size={60} round />
                </TwitterShareButton>
            </div>

            <div>
                <HatenaShareButton title={articleTitle} url={articleUrl}>
                    <HatenaIcon size={60} round />
                </HatenaShareButton>
            </div>

        </div>
    );
};