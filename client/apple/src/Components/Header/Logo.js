import React from 'react'
import { Link } from 'react-router-dom';

function Logo(props) {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link js-scroll-trigger" to={props.linkUrl}>
          <img src={linkImage} />
        </Link>
      </li>
    </>
  );
}

export default Logo