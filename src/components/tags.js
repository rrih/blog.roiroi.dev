import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

// import styles from './tags.module.scss';

const Tag = ({ tag }) => (
  <Link  to={`/tags/${kebabCase(tag)}/`}>
    <li >{tag}</li>
  </Link>
);

const Tags = ({ tags }) => (
  <ul >
    {(tags || []).map(tag => (
      <Tag key={tag} tag={tag} />
    ))}
  </ul>
);

export default Tags