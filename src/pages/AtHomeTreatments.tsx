import styles from "./AtHomeTreatments.module.scss";
import glasses from "../assets/images/glasses.jpg";
import { atHomeTreatments } from "../constants/atHomeTreatmentsInfo";

function AtHomeTreatments() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* <img src={glasses} className={styles["header-picture"]} /> */}
        <h1 className={styles.title}>At-home treatments</h1>
      </div>
      {atHomeTreatments.map((el, i) => {
        return (
          <div className={styles["treatment-container"]} key={i}>
            <div className={"row"}>
              <div className={"col-1-of-3"}>
                <div className={styles["treatment-picture"]}>
                  <img src={glasses} />
                </div>
              </div>
              <div className={"col-2-of-3"}>
                <div className={styles["treatment-text"]}>
                  <h3>{el.title}</h3>
                  <p>{el.desc1}</p>
                  {el.desc2 && <p>{el.desc2}</p>}
                  {el.desc3 && <p>{el.desc3}</p>}
                </div>
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
