import styles from "./HomeServices.module.scss";
import glasses from "../assets/images/glasses.jpg";
import eyes from "../assets/images/eyes.jpg";

function HomeServices() {
  return (
    <>
      <div className={styles["services-container"]}>
        <div className={styles["text-container"]}>
          <div className={styles["text-container-center"]}>
            <h3>
              Whether your dry eye symptoms are mild or severe, we will
              continuously work with you until we achieve the highest level of
              vision and comfort attainable. Our dry eye services include:
            </h3>
            <ul>
              <li>- Initial evaluations</li>
              <li>- Long-term management</li>
              <li>- Latest treatments in dry eye disease</li>
            </ul>
          </div>
        </div>
        <div className={styles["picture-container"]}>
          <img src={glasses} />
        </div>
      </div>
      <div className={styles["guarantee-container"]}>
        <div className={styles["guarantee-text-container"]}>
          <div className={styles["text-container-center"]}>
            <h3 className={styles.guarantee}>We guarantee:</h3>
          </div>
        </div>

        <ul className={styles["guarantee-list"]}>
          <li className={styles["guarantee-item"]}>
            <img src={glasses} />
            <p>High quality eye exam</p>
          </li>
          <li className={styles["guarantee-item"]}>
            <img src={eyes} />
            <p>Dry eye evaluation with management</p>
          </li>
          <li className={styles["guarantee-item"]}>
            <img src={glasses} />
            <p>Expert contact lens fittings</p>
          </li>
          <li className={styles["guarantee-item"]}>
            <img src={eyes} />
            <p>Eyeglasses</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HomeServices;
