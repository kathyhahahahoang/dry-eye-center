import styles from "./HomeServices.module.scss";
import glasses from "../assets/images/glasses.jpg";
import eyes from "../assets/images/eyes.jpg";

function HomeServices() {
  return (
    <div className={styles.container}>
      <div className={styles["services-container"]}>
        <div className={styles["services-text-container"]}>
          <h3>
            Whether your dry eye symptoms are mild or severe, we will
            continuously work with you until we achieve the highest level of
            vision and comfort attainable. <br />
            Our dry eye services include:
          </h3>
        </div>
        <div className={styles["pictures-container"]}>
          <div className={styles["picture-item"]}>
            <img src={glasses} />
            <p className={styles.text}>Initial evaluation</p>
          </div>
          <div className={styles["picture-item"]}>
            <img src={eyes} />
            <p className={styles.text}>Long-term management</p>
          </div>
          <div className={styles["picture-item"]}>
            <img src={glasses} />
            <p className={styles.text}>Latest treatments in dry eye disease</p>
          </div>
        </div>
      </div>
      <div className={styles["guarantee-container"]}>
        <div className={styles["guarantee-picture-container"]}>
          <img src={glasses} />
        </div>
        <div className={styles["guarantee-text-container"]}>
          <div className={styles["text-center"]}>
            <h3>We can guarantee:</h3>
            <ul className={styles["ul-container"]}>
              <li>- High quality eye exam</li>
              <li>- Dry eye evaluation with management</li>
              <li>- Expert contact lens fittings</li>
              <li>- Eyeglasses</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeServices;
