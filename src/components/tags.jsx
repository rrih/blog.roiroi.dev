import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false
library.add(fas, far, fab)

const Tag = ({ tag }) => (
    <Link  to={`/tags/${kebabCase(tag)}/`}>
        {tag}
    </Link>
);

const Tags = ({ tags }) => (
    <>
        <FontAwesomeIcon icon={fas.faTags} />
        {(tags || []).map(tag => (
            <Tag key={tag} tag={tag} />
        ))}
    </>
);

export default Tags