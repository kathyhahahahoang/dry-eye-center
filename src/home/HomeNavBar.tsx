import styles from "./HomeNavBar.module.scss";
import logo from "../assets/images/logo.png";
import logoBlack from "../assets/images/logoBlack.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiCloseFill, RiMenuFill } from "@remixicon/react";

function HomeNavBar() {
  const [isScrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

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
    setIsMobile(window.innerWidth < 1000);
  };

  const scrolledNav =
    isScrolled && !isMobile
      ? `${styles.container} ${styles["container-scrolled"]}`
      : `${styles.container}`;

  const scrolledLink =
    isScrolled && !isMobile
      ? `${styles.link} ${styles["link-scrolled"]}`
      : `${styles.link}`;

  const HamburgerNavBar = (
    <nav className={styles["hamburger-container"]}>
      <div className={styles["hamburger-nav"]}>
        <div>
          <NavLink to="/">
            <img src={logoBlack} className={styles.picture} />
          </NavLink>
        </div>
        <div>
          <NavLink to="/">
            <p className={styles.name}>
              Dry Eye Center of San Antonio at Alamo Eye Care
            </p>
          </NavLink>
        </div>
        <button
          className={styles.hamburger}
          onClick={() => {
            setHamburgerOpen((cur) => !cur);
          }}
        >
          {!hamburgerOpen && <RiMenuFill className={styles.icon} />}
          {hamburgerOpen && <RiCloseFill className={styles.icon} />}
        </button>
      </div>
      <ul
        className={styles["hamburger-ul-container"]}
        style={
          hamburgerOpen
            ? {
                opacity: "1",
                transform: "translateX(0%)",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <li>
          <NavLink
            to="/doctors"
            className={({ isActive }) =>
              isActive ? `${styles["link-active"]}` : `${scrolledLink}`
            }
            onClick={() => setHamburgerOpen(false)}
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
            onClick={() => setHamburgerOpen(false)}
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
            onClick={() => setHamburgerOpen(false)}
          >
            Resources
          </NavLink>
          s
        </li>

        <li>
          <NavLink
            to="/treatments"
            className={({ isActive }) =>
              isActive ? `${styles["link-active"]}` : `${scrolledLink}`
            }
            onClick={() => setHamburgerOpen(false)}
          >
            Treatments
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${styles["link-active"]}` : `${scrolledLink}`
            }
            onClick={() => setHamburgerOpen(false)}
          >
            Contact us
          </NavLink>
        </li>
      </ul>
    </nav>
  );

  const NavBar = (
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
              to="/treatments"
              className={({ isActive }) =>
                isActive ? `${styles["link-active"]}` : `${scrolledLink}`
              }
            >
              Treatments
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

  return (
    <>
      {isMobile && HamburgerNavBar}
      {!isMobile && NavBar}
    </>
  );
}

export default HomeNavBar;
