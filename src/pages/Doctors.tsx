import styles from "./Doctors.module.scss";
import "../index.css";
import { doctors } from "../constants/doctorsInfo";

function Doctors() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={`${styles.title}`}>Our doctors</h1>
      </div>
      {doctors.map((el, i) => {
        return (
          <div className={styles["doctor-container"]} key={i}>
            <div className={styles["text-container"]}>
              <div className={styles.intro}>
                <h3>{el.name}</h3>
                <h4>{el.position}</h4>
                <h4>{el.school}</h4>
              </div>
              <p>{el.desc1}</p>
              <p>{el.desc2}</p>
              <p>{el.desc3}</p>
              <p>{el.desc4}</p>
              <p>{el.desc5}</p>
            </div>
            <div className={styles["pic-container"]}>
              <img src={el.image} className={styles.picture} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Doctors;

{
  /* <div className={styles["doctor-container"]}>
<div className={styles["text-container"]}>
  <div className={styles.intro}>
    <h3>Dr. Melanie Frogozo OD, FSLS, FAAO, Dipl AAO</h3>
    <h4>Optometrist</h4>
    <h4>University of Houston College of Optometry</h4>
  </div>
  <p>
    Dr. Melanie Frogozo is an optometrist who is residency trained in
    the treatment and management of anterior segment disease through
    medically necessary contact and prosthetic lenses. Originally from
    Houston, she completed college at the University of Texas at Austin
    and optometry school at the University of Houston.
  </p>
</div>
<div className={styles["pic-container"]}>
  <img src={melanie} className={styles.picture} />
</div>
</div> */
}
