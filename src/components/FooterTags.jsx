import React from "react";
import { Link } from "gatsby"
import kebabCase from 'lodash/kebabCase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false
library.add(fas, far, fab)

/**
 * tags はArray型
 * 
 * @param {*} param0 
 */
const FooterTags = ({tags}) => {
    return (
        <>
            <div className="h3 mx-4 mx-md-0 text-center my-3 pt-4"><FontAwesomeIcon icon={fas.faTags} /> タグ</div>
            <div className="my-2 d-flex flex-wrap">
                {tags != null && tags.map(tag => {
                    return (
                        <div key={tag}>
                            <Link
                                to={`/tags/${kebabCase(tag)}/`}
                                className="m-1 text-decoration-none
                                text-dark bg-light rounded px-1 text-nowrap"
                            >
                                {tag}                  
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default FooterTags