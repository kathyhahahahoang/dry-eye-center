import styles from "./Doctors.module.scss";
import "../index.css";
import { doctors } from "../constants/doctorsInfo";

function Doctors() {
  return (
    <div className={styles.container}>
      {doctors.map((el, i) => {
        return (
          <div className={"width-container"} key={i}>
            <div className={styles["doctor-details"]}>
              <div className={styles.intro}>
                <h3 className={"h3"}>{el.name}</h3>
              </div>
              <p className={"main-text"}>{el.desc1}</p>
              <p className={"main-text"}>{el.desc2}</p>
              <p className={"main-text"}>{el.desc3}</p>
              <p className={"main-text"}>{el.desc4}</p>
              <p className={"main-text"}>{el.desc5}</p>
            </div>
            <div className={styles["doctor-picture"]}>
              <img src={el.image} className={styles.picture} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Doctors;

// {doctors.map((el, i) => {
//   return (
//     <div className={styles["doctor-container"]} key={i}>
//       <div className={"row"}>
//         <div className={"col-2-of-3"}>
//           <div className={styles["text-container"]}>
//             <div className={styles.intro}>
//               <h3 className={"h3"}>{el.name}</h3>
//             </div>
//             <p className={"main-text"}>{el.desc1}</p>
//             <p className={"main-text"}>{el.desc2}</p>
//             <p className={"main-text"}>{el.desc3}</p>
//             <p className={"main-text"}>{el.desc4}</p>
//             <p className={"main-text"}>{el.desc5}</p>
//           </div>
//         </div>
//         <div className={"col-1-of-3"}>
//           <img src={el.image} className={styles.picture} />
//         </div>
//       </div>
//     </div>
//   );
// })}
