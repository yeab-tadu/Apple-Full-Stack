import React from 'react'
import HeaderLink from './HeaderLink'
import logo from "../../CommonResources/images/icons/logo-sm.png"
import searchIcon from "../../CommonResources/images/icons/search-icon-sm.png"
import cart from "../../CommonResources/images/icons/cart-sm.png";
import { Link } from 'react-router-dom';
function Nav() {

  
  return (

      <>
        <div className="nav-wrapper fixed-top">
          <div className="container">
            <nav className="navbar navbar-toggleable-sm navbar-expand-md">
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                ☰
              </button>
              <Link className="navbar-brand mx-auto" to="/">
                <img src={logo} />
              </Link>

              <div className="navbar-collapse collapse">
                <ul className="navbar-nav nav-justified w-100 nav-fill">
                  <HeaderLink linkUrl="/mac" linkName="Mac" />
                  <HeaderLink linkUrl="/iphone" linkName="iphone" />
                  <HeaderLink linkUrl="/ipad" linkName="ipad" />
                  <HeaderLink linkUrl="/watch" linkName="watch" />
                  <HeaderLink linkUrl="/tv" linkName="tv" />
                  <HeaderLink linkUrl="/music" linkName="Music" />
                  <HeaderLink linkUrl="/support" linkName="Support" />
                  <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger" to="/search/">
                      <img src={searchIcon} />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger" to="/cart/">
                      <img src={cart} />
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </>
  );
}

export default Nav