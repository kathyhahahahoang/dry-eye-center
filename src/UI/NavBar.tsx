import styles from "./NavBar.module.scss";
import logo from "../assets/images/logo.webp";

function NavBar() {
  return (
    <nav className={styles.container}>
      <ul className={styles["nav-links-ul"]}>
        <div className={styles["nav-links-left"]}>
          <img src={logo} className={styles.picture} />
        </div>

        <div className={styles["nav-links-right"]}>
          <li>Our doctors</li>
          <li>Dry eye disease</li>
          <li>At-home treatments</li>
          <li>In-office treatments</li>
          <li>Contact us</li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
