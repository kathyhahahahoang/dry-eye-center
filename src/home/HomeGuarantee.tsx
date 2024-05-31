import { Link } from "react-router-dom";
import styles from "./HomeGuarantee.module.scss";

function HomeGuarantee() {
  return (
    <div className={styles.container}>
      <div className={styles["title-container"]}>
        <h2 className={"h2"}>Guarantee</h2>
        <p className={"main-text"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          nobis ut distinctio nam ducimus sapiente unde? Itaque, vel sapiente
          sint veniam quod consequatur, cumque iusto sed quis fugit ipsam
          deleniti.
        </p>
      </div>
      <div className={styles["guarantee-container"]}>
        <div className={"width-container"}>
          <div className={styles["guarantee-items"]}>
            <div className={styles["guarantee-item"]}>
              <h4 className={`${styles["guarantee-title"]} h4`}>
                High quality eye exam
              </h4>

              <p className={`${styles["guarantee-desc"]} main-text`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </p>
            </div>
            <div className={styles["guarantee-item"]}>
              <h4 className={`${styles["guarantee-title"]} h4`}>
                Prescription therapeutics
              </h4>
              <p className={`${styles["guarantee-desc"]} main-text`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </p>
            </div>
            <div className={styles["guarantee-item"]}>
              <h4 className={`${styles["guarantee-title"]} h4`}>
                In-office procedures
              </h4>
              <p className={`${styles["guarantee-desc"]} main-text`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </p>
            </div>
            <div className={styles["guarantee-item"]}>
              <h4 className={`${styles["guarantee-title"]} h4`}>
                Medical contact lenses
              </h4>
              <p className={`${styles["guarantee-desc"]} main-text`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/contact" className={`${styles.button} link`}>
        Book an appointment
      </Link>
    </div>
  );
}

export default HomeGuarantee;

{
  /* <div className={styles["guarantee-items-container"]}>
  <div className={"row"}>
    <div className={"col-1-of-4"}>
      <div className={styles["guarantee-item"]}>
        <h4 className={`${styles["guarantee-title"]} h4`}>
          High quality eye exam
        </h4>

        <p className={`${styles["guarantee-desc"]} main-text`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit
        </p>
      </div>
    </div>
    <div className={"col-1-of-4"}>
      <div className={styles["guarantee-item"]}>
        <h4 className={`${styles["guarantee-title"]} h4`}>
          Prescription therapeutics
        </h4>
        <p className={`${styles["guarantee-desc"]} main-text`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit
        </p>
      </div>
    </div>
    <div className={"col-1-of-4"}>
      <div className={styles["guarantee-item"]}>
        <h4 className={`${styles["guarantee-title"]} h4`}>
          In-office procedures
        </h4>
        <p className={`${styles["guarantee-desc"]} main-text`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit
        </p>
      </div>
    </div>
    <div className={"col-1-of-4"}>
      <div className={styles["guarantee-item"]}>
        <h4 className={`${styles["guarantee-title"]} h4`}>
          Medical contact lenses
        </h4>
        <p className={`${styles["guarantee-desc"]} main-text`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit
        </p>
      </div>
    </div>
  </div>
</div>; */
}
