import styles from "./HomeHeader.module.scss";
import elderly10 from "../assets/images/elderly10.jpg";
import { Link } from "react-router-dom";

function HomeHeader() {
  return (
    <div className={styles.container}>
      <div className={styles["picture-container"]}>
        <div className={styles.overlay} />
        <img src={elderly10} className={styles.picture} />
      </div>
      <div className={styles["text-container"]}>
        <h1 className={styles.header}>
          Dry Eye Center of San Antonio at Alamo Eye Care
        </h1>
        <h3 className={styles.subheader}>
          Specializing in the assessment and treatment of dry eye disease
        </h3>
        <Link to="/contact" className={"link"}>
          Book an appointment
        </Link>
      </div>
    </div>
  );
}

export default HomeHeader;
