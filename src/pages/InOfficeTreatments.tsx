import styles from "./InOfficeTreatments.module.scss";
import glasses from "../assets/images/glasses.jpg";
import { inOfficeTreatments } from "../constants/inOfficeTreatmentsInfo";
import { NavLink } from "react-router-dom";
function InOfficeTreatments() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>In-office treatments</h1>
        <p className={styles.subtitle}>
          At Alamo Eye Care, we offer a variety of in-office dry eye procedures
          and treatments. From prescribed pharmaceutical therapeutic treatments
          to FDA approved procedures, we are happy to curate a treatment plan to
          best fit your needs.
        </p>
      </div>
      {inOfficeTreatments.map((el, i) => {
        return (
          <div className={styles["treatment-container"]} key={i}>
            <div className={styles["treatment-picture"]}>
              <img src={glasses} />
            </div>
            <div className={styles["treatment-text"]}>
              <h3>{el.title}</h3>
              <p>{el.desc}</p>
              {el.price && <p>{el.price}</p>}
              {el.link && (
                <NavLink to="/contact" className={styles.link}>
                  {el.link}
                  <span> &rarr;</span>
                </NavLink>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default InOfficeTreatments;
