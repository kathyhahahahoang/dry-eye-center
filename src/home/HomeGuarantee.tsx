import styles from "./HomeGuarantee.module.scss";

function HomeGuarantee() {
  return (
    <div className={styles.container}>
      <div className={styles["title-container"]}>
        <h2>Guarantee</h2>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          nobis ut distinctio nam ducimus sapiente unde? Itaque, vel sapiente
          sint veniam quod consequatur, cumque iusto sed quis fugit ipsam
          deleniti.
        </h4>
      </div>
      <div className={styles["guarantee-items-container"]}>
        <div className={"row"}>
          <div className={"col-1-of-4"}>
            <div className={styles["guarantee-item"]}>
              <h4 className={styles["guarantee-title"]}>
                High quality eye exam
              </h4>
              <p className={styles["guarantee-desc"]}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
          <div className={"col-1-of-4"}>
            <div className={styles["guarantee-item"]}>
              <h4 className={styles["guarantee-title"]}>
                Prescription therapeutics
              </h4>
              <p className={styles["guarantee-desc"]}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
          <div className={"col-1-of-4"}>
            <div className={styles["guarantee-item"]}>
              <h4 className={styles["guarantee-title"]}>
                In-office procedures
              </h4>
              <p className={styles["guarantee-desc"]}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
          <div className={"col-1-of-4"}>
            <div className={styles["guarantee-item"]}>
              <h4 className={styles["guarantee-title"]}>
                Medical contact lenses
              </h4>
              <p className={styles["guarantee-desc"]}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.button}>Click me</button>
    </div>
  );
}

export default HomeGuarantee;