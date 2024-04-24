import styles from "./HomeCTA.module.scss";

function HomeCTA() {
  return (
    <div className={styles.container}>
      <div className={styles["text-container"]}>
        <h3>
          We also offer education and management options you can perform at
          home.
        </h3>
        <button>Learn more</button>
      </div>
    </div>
  );
}

export default HomeCTA;
