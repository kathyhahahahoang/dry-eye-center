import styles from "./HomeCTA.module.scss";
import glasses from "../assets/images/glasses.jpg";

function HomeCTA() {
  return (
    <div className={styles.container}>
      <div className={styles["picture-container"]}>
        <img src={glasses} className={styles.picture} />
        <div className={styles["text-container"]}>
          <h3>
            We also offer education and management options you can perform at
            home.
          </h3>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default HomeCTA;
