import styles from "./Nav.module.scss";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className={styles.container}>
      <ul className={styles["nav-links-ul"]}>
        <div className={styles["nav-links-left"]}>
          <li>
            <NavLink
              to="/doctors"
              className={({ isActive }) =>
                isActive ? `${styles["link-active"]}` : `${styles.link}`
              }
            >
              Our doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dry-eye-disease"
              className={({ isActive }) =>
                isActive ? `${styles["link-active"]}` : `${styles.link}`
              }
            >
              Dry eye disease
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                isActive ? `${styles["link-active"]}` : `${styles.link}`
              }
            >
              Resources
            </NavLink>
          </li>
        </div>
        <div className={styles["nav-links-center"]}>
          <NavLink to="/">
            <img src={logo} className={styles.picture} />
          </NavLink>
        </div>
        <div className={styles["nav-links-right"]}>
          <li>
            <NavLink
              to="/at-home-treatments"
              className={({ isActive }) =>
                isActive ? `${styles["link-active"]}` : `${styles.link}`
              }
            >
              At-home treatments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/in-office-treatments"
              className={({ isActive }) =>
                isActive ? `${styles["link-active"]}` : `${styles.link}`
              }
            >
              In-office treatments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${styles["link-active"]}` : `${styles.link}`
              }
            >
              Contact us
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
