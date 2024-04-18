import styles from "./HomeHeader.module.scss";
import eyes from "../assets/images/eyes.jpg";

function HomeHeader() {
  return (
    <div className={styles.container}>
      <div className={styles["text-container"]}>
        <h1 className={styles.text}>
          Specializing in the assessment and treatment of mild to severe dry eye
          disease
        </h1>
      </div>
      <div className={styles["picture-container"]}>
        <img src={eyes} className={styles.picture} />
      </div>
    </div>
  );
}

export default HomeHeader;
