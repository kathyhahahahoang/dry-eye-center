import styles from "./NavBar.module.scss";
import logo from "../assets/images/logo.webp";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>
        Dry Eye Center of San Antonio at Alamo Eye Care
      </h1>

      <nav>
        <ul className={styles["nav-links-ul"]}>
          <div className={styles["nav-links-left"]}>
            <NavLink to="/">
              <img src={logo} className={styles.picture} />
            </NavLink>
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
          </div>

          <div className={styles["nav-links-right"]}>
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
    </div>
  );
}

export default NavBar;
