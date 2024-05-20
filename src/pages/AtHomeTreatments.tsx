import styles from "./AtHomeTreatments.module.scss";
import glasses from "../assets/images/glasses.jpg";
import { atHomeTreatments } from "../constants/atHomeTreatmentsInfo";
import Banner from "../ui/Banner";

function AtHomeTreatments() {
  return (
    <div className={styles.container}>
      <Banner
        title="At-home treatments"
        desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, aliquid. Id nostrum aperiam odio"
        bgColor="var(--color-blue-extra-light"
      />
      {atHomeTreatments.map((el, i) => {
        return (
          <div className={styles["treatment-container"]} key={i}>
            <div className={styles["treatment-picture"]}>
              <img src={glasses} />
            </div>
            <div className={styles["treatment-details"]}>
              <div className={styles["treatment-details-center"]}>
                <h3>{el.title}</h3>
                <p>{el.desc1}</p>
                {el.desc2 && <p>{el.desc2}</p>}
                {el.desc3 && <p>{el.desc3}</p>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AtHomeTreatments;

// {atHomeTreatments.map((el, i) => {
//   return (
//     <div className={styles["treatment-container"]} key={i}>
//       <div className={styles["treatment-picture"]}>
//         <img src={glasses} />
//       </div>
//       <div className={styles["treatment-text"]}>
//         <h3>{el.title}</h3>
//         <p>{el.desc1}</p>
//         {el.desc2 && <p>{el.desc2}</p>}
//         {el.desc3 && <p>{el.desc3}</p>}
//       </div>
//     </div>
//   );
// })}
