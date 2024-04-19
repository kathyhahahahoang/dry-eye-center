import styles from "./HomeServices.module.scss";
import one from "../assets/images/1.jpg";
import two from "../assets/images/2.jpg";
import three from "../assets/images/3.jpg";
import four from "../assets/images/4.jpg";

function HomeServices() {
  return (
    <div className={styles.container}>
      <div className={styles["services-container"]}>
        <h3 className={styles.header}>
          Whether your dry eye symptoms are mild or severe, we will continuously
          work with you until we achieve the highest level of vision and comfort
          attainable. Our dry eye services include:
        </h3>
        <div className={styles["service-container"]}>
          <div className={styles["service-item"]}>
            <img src={one} className={styles.picture} />
            <p>Initial evaluations</p>
          </div>
          <div className={styles["service-item"]}>
            <img src={two} className={styles.picture} />
            <p>Long term management</p>
          </div>
          <div className={styles["service-item"]}>
            <img src={three} className={styles.picture} />
            <p>Latest treatments in dry eye disease</p>
          </div>
        </div>
      </div>
      <div className={styles["guarantee-container"]}>
        <div className={styles["guarantee-flex"]}>
          <div className={styles["guarantee-center"]}>
            <div className={styles["guarantee-text"]}>
              <p>We guarantee:</p>
              <ul>
                <li>- High quality eye exam</li>
                <li>- Dry eye evaluation with management</li>
                <li>- Expert contact lens fittings</li>
                <li>- Eyeglasses</li>
              </ul>
            </div>
          </div>
          <div className={styles["guarantee-picture"]}>
            <img src={four} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeServices;

{
  /* <div className={styles["guarantee-container"]}>
<div className={styles["picture-container"]}>
  <img src={glasses} />
</div>
<div className={styles["text-container"]}>
  <div className={styles["text-container-center"]}>
    <h3>We guarantee:</h3>
    <ul>
      <li>High quality eye exam</li>
      <li>Dry eye evaluation with management</li>
      <li>Expert contact lens fittings</li>
      <li>Eyeglasses</li>
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
    <h3>
      Whether your dry eye symptoms are mild or severe, we will
      continuously work with you until we achieve the highest level of
      vision and comfort attainable. Our dry eye services include:
    </h3>
    <ul>
      <li>Initial evaluations</li>
      <li>Long-term management</li>
      <li>Latest treatments in dry eye disease</li>
    </ul>
  </div>
</div>
</div> */
}
