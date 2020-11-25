import React from "react";
import { Link } from "gatsby"
import kebabCase from 'lodash/kebabCase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fas, far, fab)

const FooterTags = (tags) => {
    return (
        <>
            <div className="h3 mx-4 mx-md-0 text-center my-3 pt-4"><FontAwesomeIcon icon={fas.faTags} /> タグ</div>
            <div className="my-2">
                {tags.map(tag => {
                    return (
                        <Link
                            to={`/tags/${kebabCase(tag.fieldValue)}/`}
                            className="m-1 text-decoration-none
                            text-dark bg-light rounded px-1 text-nowrap"
                            key={tag.fieldValue}
                        >
                            {tag.fieldValue}                  
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default FooterTags