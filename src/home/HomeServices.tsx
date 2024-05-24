import styles from "./HomeServices.module.scss";
import glasses from "../assets/images/glasses.jpg";
import eyes from "../assets/images/eyes.jpg";

function HomeServices() {
  return (
    <div className={styles.container}>
      <div className={"width-container"}>
        <div className={styles["services-picture"]}>
          <img src={eyes} />
        </div>
        <div className={styles["services-details"]}>
          <h2 className={"h2"}>Struggling with dry eye disease?</h2>
          <p className={"main-text"}>
            Whether your dry eye symptoms are mild or severe, we will
            continuously work with you until we achieve the highest level of
            vision and comfort attainable. What you can expect:
          </p>
          <div className={styles["service-items"]}>
            <div className={styles["service-item"]}>
              <div className={styles["service-name"]}>
                <h4 className={"h4"}>Initial evaluation</h4>
                <p className={"main-text"}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam dolorum nemo minus distinctio itaque reiciendis at!
                  Voluptas numquam laborum, facilis minus laudantium quas totam
                  ut laboriosam, vel in ipsam aliquam?
                </p>
              </div>
              <div className={styles["service-picture"]}>
                <img src={glasses} />
              </div>
            </div>
            <div className={styles["service-item"]}>
              <div className={styles["service-name"]}>
                <h4 className={"h4"}>Long-term management</h4>
                <p className={"main-text"}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam dolorum nemo minus distinctio itaque reiciendis at!
                  Voluptas numquam laborum, facilis minus laudantium quas totam
                  ut laboriosam, vel in ipsam aliquam?
                </p>
              </div>
              <div className={styles["service-picture"]}>
                <img src={eyes} />
              </div>
            </div>
            <div className={styles["service-item"]}>
              <div className={styles["service-name"]}>
                <h4 className={"h4"}>
                  Latest advancements in dry eye treatment technology
                </h4>
                <p className={"main-text"}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam dolorum nemo minus distinctio itaque reiciendis at!
                  Voluptas numquam laborum, facilis minus laudantium quas totam
                  ut laboriosam, vel in ipsam aliquam?
                </p>
              </div>
              <div className={styles["service-picture"]}>
                <img src={glasses} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeServices;

<div className={styles["services-container"]}>
  <div className={"row"}>
    <div className={"col-1-of-3"}>
      <div className={styles["left-container"]}>
        <img src={eyes} />
      </div>
    </div>
    <div className={"col-2-of-3"}>
      <div className={styles["right-container"]}>
        <div className={styles["text-container"]}>
          <h2 className={"h2"}>Struggling with dry eye disease?</h2>
          <p className={"main-text"}>
            Whether your dry eye symptoms are mild or severe, we will
            continuously work with you until we achieve the highest level of
            vision and comfort attainable. What you can expect:
          </p>
        </div>
        <div className={styles["service-container"]}>
          <div className={styles["service-name"]}>
            <h4 className={"h4"}>Initial evaluation</h4>
            <p className={"main-text"}>
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
            <h4 className={"h4"}>Long-term management</h4>
            <p className={"main-text"}>
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
            <h4 className={"h4"}>
              Latest advancements in dry eye treatment technology
            </h4>
            <p className={"main-text"}>
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
  </div>
</div>;
