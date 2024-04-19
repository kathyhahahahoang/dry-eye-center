import styles from "./HomeServices.module.scss";
import glasses from "../assets/images/glasses.jpg";
import eyes from "../assets/images/eyes.jpg";

function HomeServices() {
  return (
    <div className={styles.container}>
      <div className={styles["guarantee-container"]}>
        <div className={styles["picture-container"]}>
          <img src={glasses} />
        </div>
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
      </div>
      <div className={styles["guarantee-container"]}>
        <div className={styles["picture-container"]}>
          <img src={eyes} />
        </div>
        <div className={styles["text-container"]}>
          <div className={styles["text-container-center"]}>
            <h3>We guarantee:</h3>
            <ul>
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
