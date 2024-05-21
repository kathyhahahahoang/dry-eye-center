import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import styles from "./HomeNavBar.module.scss";
import { NavLink } from "react-router-dom";

function HomeNavBar() {
  const [isScrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 650);
  };

  const scrolledNav =
    isScrolled && !isMobile
      ? `${styles.container} ${styles["container-scrolled"]}`
      : `${styles.container}`;

  const scrolledLink =
    isScrolled && !isMobile
      ? `${styles.link} ${styles["link-scrolled"]}`
      : `${styles.link}`;

  return (
    <nav className={scrolledNav}>
      <ul className={styles["nav-links-ul"]}>
        <div className={styles["nav-links-left"]}>
          <li>
            <NavLink
              to="/doctors"
              className={({ isActive }) =>
                isActive ? `${styles["link-active"]}` : `${scrolledLink}`
              }
            >
              Our doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dry-eye-disease"
              className={({ isActive }) =>
                isActive ? `${styles["link-active"]}` : `${scrolledLink}`
              }
            >
              Dry eye disease
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                isActive ? `${styles["link-active"]}` : `${scrolledLink}`
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
                isActive ? `${styles["link-active"]}` : `${scrolledLink}`
              }
            >
              At-home treatments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/in-office-treatments"
              className={({ isActive }) =>
                isActive ? `${styles["link-active"]}` : `${scrolledLink}`
              }
            >
              In-office treatments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${styles["link-active"]}` : `${scrolledLink}`
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

export default HomeNavBar;
