import styles from "./InOfficeTreatments.module.scss";
import glasses from "../assets/images/glasses.jpg";
import { inOfficeTreatments } from "../constants/inOfficeTreatmentsInfo";
import { NavLink } from "react-router-dom";
import Banner from "../ui/Banner";
import { RiPhoneFill } from "@remixicon/react";

function InOfficeTreatments() {
  return (
    <div className={styles.container}>
      <Banner
        title="In-office treatments"
        desc="At Alamo Eye Care, we offer a variety of in-office dry eye procedures
          and treatments. From prescribed pharmaceutical therapeutic treatments
          to FDA approved procedures, we are happy to curate a treatment plan to
          best fit your needs."
        bgColor="var(--color-orange-extra-light)"
      />
      {inOfficeTreatments.map((el, i) => {
        return (
          <div className={styles["treatment-container"]} key={i}>
            <div className={styles["treatment-picture"]}>
              <img src={glasses} />
            </div>
            <div className={styles["treatment-details"]}>
              <div className={styles["treatment-details-center"]}>
                <h3>{el.title}</h3>
                <p>{el.desc}</p>
                {el.price && <p>{el.price}</p>}
                {el.link && (
                  <div className={styles["link-container"]}>
                    <RiPhoneFill className={styles.icon} />
                    <NavLink to="/contact" className={styles.link}>
                      {el.link}
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default InOfficeTreatments;

// <div className={"row"}>
// <div className={"col-1-of-3"}>
//   <div className={styles["treatment-picture"]}>
//     <img src={glasses} />
//   </div>
// </div>
// <div className={"col-2-of-3"}>
//   <div className={styles["treatment-text"]}>
//     <h3>{el.title}</h3>
//     <p>{el.desc}</p>
//     {el.price && <p>{el.price}</p>}
//     {el.link && (
//       <NavLink to="/contact" className={styles.link}>
//         {el.link}
//         <span> &rarr;</span>
//       </NavLink>
//     )}
//   </div>
// </div>
// </div>
