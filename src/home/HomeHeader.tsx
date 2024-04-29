import styles from "./HomeHeader.module.scss";
import elderly4 from "../assets/images/elderly4.jpg";

function HomeHeader() {
  return (
    <div className={styles.container}>
      <div className={styles["picture-container"]}>
        <div className={styles.overlay} />
        <img src={elderly4} className={styles.picture} />
      </div>
      <div className={styles["text-container"]}>
        <h1 className={styles.header}>
          Dry Eye Center of San Antonio at Alamo Eye Care
        </h1>
        <h3 className={styles.subheader}>
          Specializing in the assessment and treatment of dry eye disease
        </h3>
      </div>
    </div>
  );
}

export default HomeHeader;
