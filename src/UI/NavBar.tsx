import styles from "./NavBar.module.scss";
import logo from "../assets/images/logo.webp";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        Dry Eye Center of San Antonio at Alamo Eye Care
      </div>
      <nav>
        <ul className={styles["nav-links-ul"]}>
          <div className={styles["nav-links-left"]}>
            <li>Our doctors</li>
            <li>Dry eye disease</li>
            <li>At-home treatments</li>
            <li>In-office treatements</li>
          </div>
          <div className={styles.logo}>
            <img src={logo} className={styles.picture} />
          </div>
          <div className={styles["nav-links-right"]}>
            <li>Contact us</li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
