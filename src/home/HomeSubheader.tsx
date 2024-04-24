import styles from "./HomeSubheader.module.scss";
import glasses from "../assets/images/glasses.jpg";

function HomeSubheader() {
  return (
    <div className={styles.container}>
      <div className={styles["picture-container"]}>
        <img src={glasses} />
      </div>
      <div className={styles["text-container"]}>
        <p className={styles.headline}>
          Specializing in the assessment and treatment of mild to severe dry eye
          disease
        </p>
        <p className={styles.desc}>
          Alamo Eye Care is proud to be home of The Dry Eye Center of San
          Antonio. We provide top-notch eye care and will curate a personal and
          specific dry eye treatment plan to best fit your needs.
        </p>
      </div>
    </div>
  );
}

export default HomeSubheader;
