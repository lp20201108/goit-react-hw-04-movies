import React from "react";
import routes from "../../routes";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to={routes.home}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.movies}>Movies</NavLink>
        </li>

        {/* <li>
          <NavLink
            to="/genres"
            className={styles.NavLinkBase}
            activeClassName={styles.NavLinkActive}
          >
            Genres
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
