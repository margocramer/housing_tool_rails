import React from 'react';

const NavBar = (props) => {

  return(
    <div>
      <nav className="top-bar" data-topbar role="navigation">
        <ul className="title-area">
          <li className="name">
            <h1><a href="#">Housing Tool</a></h1>
          </li>
          <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
        </ul>

        <section className="top-bar-section">
          <ul className="right">
            <li className="active"><a href="#">Return to Boston.gov</a></li>
            <li className="has-dropdown">
              <a href="#">Explore</a>
              <ul className="dropdown">
                <li><a href="#">First link in dropdown</a></li>
                <li className="active"><a href="#">Active link in dropdown</a></li>
              </ul>
            </li>
          </ul>

          <ul className="left">
            <li><a href="#">My Resources</a></li>
          </ul>
        </section>
      </nav>
    </div>
  )
}

export default NavBar;
