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
                <h3 className={"h3"}>{el.title}</h3>
                <p className={"main-text"}>{el.desc}</p>
                {el.price && <p className={"main-text"}>{el.price}</p>}
                {el.link && (
                  <NavLink
                    to="/contact"
                    className={`${styles["link-container"]} link`}
                  >
                    <RiPhoneFill className={styles.icon} />
                    {el.link}
                  </NavLink>
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
