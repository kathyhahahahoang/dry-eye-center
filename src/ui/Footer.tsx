import styles from "./Footer.module.scss";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles["logo-container"]}>
        <img src={logo} className={styles.logo} />
        <h3>
          Dry Eye Center
          <br />
          of San Antonio
        </h3>
      </div>
      <div className={styles["links-container"]}>
        <ul className={styles["ul-container"]}>
          <li>Alamo Eye Care</li>
          <li>1742 N. Loop 1604 E., Suite 117</li>
          <li>San Antonio, TX 78232</li>
          <li>Phone: (210)-403-9050</li>
          <li>Fax: (210)-403-9939</li>
          <li>alamoeyecare@gmail.com</li>
        </ul>
        <ul className={styles["ul-container"]}>
          <li>Hours</li>
          <li>Monday - Thursday: 9am - 6pm</li>
          <li>Friday: 9am - 3pm</li>
          <li>Saturday: closed</li>
          <li>Sunday: closed</li>
        </ul>
        <ul className={styles["ul-container"]}>
          <li>Connect with us:</li>
          {/* <li>Phone: (210)-403-9050</li>
          <li>Fax: (210)-403-9939</li>
          <li>alamoeyecare@gmail.com</li> */}
          <div className={styles["social-media-container"]}>
            <div>
              <RiInstagramLine className={styles.icon} />
            </div>
            <div>
              <RiTwitterLine className={styles.icon} />
            </div>
            <div>
              <RiTwitterXLine className={styles.icon} />
            </div>
            <div>
              <RiFacebookBoxLine className={styles.icon} />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
