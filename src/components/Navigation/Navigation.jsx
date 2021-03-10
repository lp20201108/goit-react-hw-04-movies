import React from "react";
import routes from "../../routes";
import { NavLink } from "react-router-dom";
import styles from "./NavigationStyled.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navigationList}>
        <li className={styles.navigationListItem}>
          <NavLink
            exact
            to={routes.home}
            className={styles.NavLink}
            activeClassName={styles.activeNavLink}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.activeNavLink}
            to={routes.movies}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
