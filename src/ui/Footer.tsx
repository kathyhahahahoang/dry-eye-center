import styles from "./Footer.module.scss";
import logo from "../assets/images/logo.webp";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles["logo-container"]}>
        <img src={logo} className={styles.logo} />
        <h3>
          Dry Eye Center
          <br />
          of San Antonio <br />
          at Alamo Eye Care
        </h3>
      </div>
      <div className={styles["links-container"]}>
        <ul className={styles["ul-container"]}>
          <li>Alamo Eye Care</li>
          <li>1742 N. Loop 1604 E., Suite 117</li>
          <li>San Antonio, TX 78232</li>
          <li>Phone: (210)-403-9050</li>
          <li>Fax: (210)-403-9939</li>
        </ul>
        <ul className={styles["ul-container"]}>
          <li>Hours</li>
          <li>Monday: closed</li>
          <li>Tuesday-Friday: 9a-1p and 2p-6p</li>
          <li>Saturday: 8a-2p</li>
        </ul>
        <ul className={styles["ul-container"]}>
          <li>Contact us</li>
          <li>Phone: (210)-403-9050</li>
          <li>Fax: (210)-403-9939</li>
          <li>alamoeyecare@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
