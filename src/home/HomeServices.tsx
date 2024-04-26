import styles from "./HomeServices.module.scss";
import glasses from "../assets/images/glasses.jpg";
import eyes from "../assets/images/eyes.jpg";

function HomeServices() {
  return (
    <div className={styles.container}>
      <div className={styles["services-container"]}>
        <div className={styles["left-container"]}>
          <img src={eyes} />
        </div>
        <div className={styles["right-container"]}>
          <div className={styles["text-container"]}>
            <h2>Struggling with dry eye disease?</h2>
            <h3>
              Whether your dry eye symptoms are mild or severe, we will
              continuously work with you until we achieve the highest level of
              vision and comfort attainable. What you can expect:
            </h3>
          </div>
          <div className={styles["service-container"]}>
            <div className={styles["service-name"]}>
              <p className={styles.service}>Initial evaluation</p>
              <p className={styles.desc}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
                dolorum nemo minus distinctio itaque reiciendis at! Voluptas
                numquam laborum, facilis minus laudantium quas totam ut
                laboriosam, vel in ipsam aliquam?
              </p>
            </div>
            <div className={styles["service-picture"]}>
              <img src={glasses} />
            </div>
          </div>
          <div className={styles["service-container"]}>
            <div className={styles["service-name"]}>
              <p className={styles.service}>Long-term management</p>
              <p className={styles.desc}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
                dolorum nemo minus distinctio itaque reiciendis at! Voluptas
                numquam laborum, facilis minus laudantium quas totam ut
                laboriosam, vel in ipsam aliquam?
              </p>
            </div>
            <div className={styles["service-picture"]}>
              <img src={eyes} />
            </div>
          </div>
          <div className={styles["service-container"]}>
            <div className={styles["service-name"]}>
              <p className={styles.service}>
                Latest advancements in dry eye treatment technology
              </p>
              <p className={styles.desc}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
                dolorum nemo minus distinctio itaque reiciendis at! Voluptas
                numquam laborum, facilis minus laudantium quas totam ut
                laboriosam, vel in ipsam aliquam?
              </p>
            </div>
            <div className={styles["service-picture"]}>
              <img src={glasses} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["guarantee-container"]}>
        <div className={styles["guarantee-text-container"]}>
          <h2>Guarantee</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            nobis ut distinctio nam ducimus sapiente unde? Itaque, vel sapiente
            sint veniam quod consequatur, cumque iusto sed quis fugit ipsam
            deleniti.
          </p>
        </div>
        <div className={styles["guarantee-items-container"]}>
          <div className={styles["guarantee-item"]}>
            <p className={styles["guarantee-title"]}>High quality eye exam</p>
            <p className={styles["guarantee-desc"]}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit
            </p>
          </div>
          <div className={styles["guarantee-item"]}>
            <p className={styles["guarantee-title"]}>
              Prescription therapeutics
            </p>
            <p className={styles["guarantee-desc"]}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit
            </p>
          </div>
          <div className={styles["guarantee-item"]}>
            <p className={styles["guarantee-title"]}>In-office procedures</p>
            <p className={styles["guarantee-desc"]}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit
            </p>
          </div>
          <div className={styles["guarantee-item"]}>
            <p className={styles["guarantee-title"]}> Medical contact lenses</p>
            <p className={styles["guarantee-desc"]}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit
            </p>
          </div>
        </div>
        <button className={styles.button}>Learn more</button>
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
</div> */
}
