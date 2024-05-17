import styles from "./DryEyeDisease.module.scss";

function DryEyeDisease() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Dry eye disease</h1>
      </div>
      <div className={"row"}>
        <div className={"col-1-of-4"}>1/4</div>
        <div className={"col-2-of-4"}>1/4</div>
        <div className={"col-1-of-4"}>1/4</div>
      </div>
    </div>
  );
}

export default DryEyeDisease;
