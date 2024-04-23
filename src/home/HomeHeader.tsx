import styles from "./HomeHeader.module.scss";
import glasses from "../assets/images/glasses.jpg";

function HomeHeader() {
  return (
    <div className={styles.container}>
      <div className={styles["picture-container"]}>
        <img src={glasses} className={styles.picture} />
      </div>
      <div className={styles["text-container"]}>
        <h1 className={styles.header}>
          Dry Eye Center of San Antonio at Alamo Eye Care
        </h1>
        <h3 className={styles.subheader}>
          Specializing in the assessment and treatment of mild to severe dry eye
          disease
        </h3>
      </div>
    </div>
  );
}

export default HomeHeader;
