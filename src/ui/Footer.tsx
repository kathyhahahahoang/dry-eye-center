import styles from "./Footer.module.scss";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <div className={"row"}>
          <div className={"col-1-of-3"}>
            <div className={styles["logo-container"]}>
              <img src={logo} className={styles.logo} />
              <p className={styles.name}>Dry Eye Center of San Antonio</p>
            </div>
          </div>
          <div className={"col-2-of-3"}>
            <div className={styles["links-container"]}>
              <ul className={styles["ul-container"]}>
                <li>Alamo Eye Care</li>
                <li>1742 N. Loop 1604 E., Suite 117</li>
                <li>San Antonio, TX 78232</li>
              </ul>
              <ul className={styles["ul-container"]}>
                <li>Hours</li>
                <li>Monday - Thursday: 9am - 6pm</li>
                <li>Friday: 9am - 3pm</li>
                <li>Saturday: closed</li>
                <li>Sunday: closed</li>
              </ul>
              <ul className={styles["ul-container"]}>
                <li>Contact us</li>
                <li>Phone: (210)-403-9050</li>
                <li>Fax: (210)-403-9939</li>
                <li>alamoeyecare@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>
        &copy; 2024 Dry Eye Center of San Antonio
      </p>
    </div>
  );
}

export default Footer;
