import styles from "./HomeHeader.module.scss";
import eyes from "../assets/images/eyes.jpg";

function HomeHeader() {
  return (
    <div className={styles.container}>
      <div className={styles["text-container"]}>
        <p className={styles.name}>
          Dry Eye Center of San Antonio <br />
          at Alamo Eye Care
        </p>
      </div>
      <div className={styles["picture-container"]}>
        <img src={eyes} className={styles.picture} />
      </div>
    </div>
  );
}

export default HomeHeader;
