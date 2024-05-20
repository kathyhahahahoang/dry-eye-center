import styles from "./HomeHeader.module.scss";
import elderly6 from "../assets/images/elderly6.jpg";
import elderly7 from "../assets/images/elderly7.jpg";

function HomeHeader() {
  return (
    <div className={styles.container}>
      <div className={styles["picture-container"]}>
        <img src={elderly7} />
      </div>
      <div className={styles["picture-2-container"]}>
        <img src={elderly6} />
      </div>
    </div>
  );
}

export default HomeHeader;

{
  /* <div className={styles["picture-container"]}>
<div className={styles.overlay} />
<img src={elderly7} className={styles.picture} />
</div>
<div className={styles["text-container"]}>
<h1 className={styles.header}>
  Dry Eye Center of San Antonio at Alamo Eye Care
</h1>
<h3 className={styles.subheader}>
  Specializing in the assessment and treatment of dry eye disease
</h3>
</div> */
}
