import { Link } from "react-router-dom";
import Banner from "../ui/Banner";
import styles from "./DryEyeDisease.module.scss";
import home from "../assets/images/home.jpg";
import { RiArrowRightSLine } from "@remixicon/react";

import { dryEyeDiseaseSample } from "../constants/dryEyeDiseaseInfo";

function DryEyeDisease() {
  return (
    <div className={styles.container}>
      <Banner title="What is dry eye disease?" />
      <div className={`${styles["dry-eye-intro"]} width-container`}>
        <p className={"main-text"}>
          Dry eye disease is a multi-factorial disease and is generally a
          product of one of two reasons: the tears are evaporating too quickly
          or the eye is not producing enough tears (evaporative vs aqueous
          deficient). Both of these cause damage to the ocular surface and are
          associated with symptoms of discomfort and visual disturbance
        </p>
        <p className={"main-text"}>
          In our current day and age the number of people suffering from Dry Eye
          Syndrome has dramatically increased, especially in the last 10 years.
          Until recently, it was believed that dry eyes were caused by decreased
          production of tears, so artificial tears were prescribed to supplement
          and decrease symptoms of dryness. However, research and clinical
          evidence shows that artificial tears only provide immediate relief. It
          is now thought that the main cause of dry eye is due to poor tear film
          quality rather than decreased production of the tears.
        </p>
        <p className={"main-text"}>
          Dry eye syndrome is commonly caused by Meibomian gland dysfunction,
          demodex, ocular allergies, lid interaction, or systemic disease such
          as Sjogren's syndrome. Also, environmental conditions such as working
          on a computer, in dusty environments, or sleeping with a ceiling fan
          on can also cause symptoms.
        </p>
        <p className={"main-text"}>
          You can take action now buy taking the Ocular Surface Disease Index to
          get a symptomology score to better understand your grade of dry eye
          disease. For more information, review our the tabs or visit us at
          Alamo Eye Care for a proper dry eye evaluation.
        </p>
        <Link
          to="https://eyecalc.org/osdi/"
          target="_blank"
          className={`${styles.button} link`}
        >
          Click here to take the OSDI
        </Link>
      </div>
      <div className={styles["diseases-container"]}>
        {dryEyeDiseaseSample.map((el, i) => {
          return (
            <div className={styles["disease-item"]} key={i}>
              <div className={styles["disease-name"]}>
                <h2 className={"h2"}>{el.name}</h2>
                <p className={"main-text"}>{el.details}</p>
              </div>
              <div
                className={`${styles["disease-info-container"]} width-container`}
              >
                <div className={styles["disease-picture"]}>
                  <img src={home} />
                </div>
                <div className={styles["symptoms-container"]}>
                  <div className={styles["center-container"]}>
                    <h4 className={`${styles["symptom-title"]} h4`}>
                      Common symptoms:
                    </h4>
                    {el.symptoms.map((symptom, i) => {
                      return (
                        <div className={styles["symptoms-list"]} key={i}>
                          <RiArrowRightSLine className={styles.icon} />
                          <p className={"main-text"}>{symptom}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={styles["treatments-container"]}>
                  <div className={styles["center-container"]}>
                    <h4 className={`${styles["treatment-title"]} h4`}>
                      Available treatments:
                    </h4>
                    {el.treatments.map((treatment, i) => {
                      return (
                        <div className={styles["treatments-list"]} key={i}>
                          <RiArrowRightSLine className={styles.icon} />
                          <p className={"main-text"}>{treatment}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DryEyeDisease;

{
  /* <div className={styles["disease-item"]}>
<div className={styles["disease-name"]}>
  <h2 className={"h2"}>name</h2>
  <p className={"main-text"}>desc</p>
</div>
<div className={"width-container"}>
  <div className={styles["disease-picture"]}>
    <img src={home} />
  </div>
  <div className={styles["symptoms-container"]}>symptoms</div>
  <div className={styles["treatments-container"]}>treatments</div>
</div>
</div> */
}

{
  /* <div className={styles["disease-types-container"]}>
<div className={styles["disease-type"]}>
  <h2 className={"h2"}>Sjogren's Syndrome</h2>
  <p className={`${styles["disease-detail"]} main-text`}>
    Sjogren's syndrome is an autoimmune disorder which affects the
    entire body, but initially include typical symptoms of dry eyes and
    dry mouth. Ninety percent of those diagnosed with Sjogren's syndrome
    are female. It sometimes occurs in the presence of Lupus,
    scleroderma, and rheumatoid arthritis.
  </p>
  <div className={"row"}>
    <div className={"col-1-of-3"}>
      <img src={home} className={styles.picture} />
    </div>
    <div className={"col-1-of-3"}>
      <div className={styles["symptoms-container"]}>
        <h4 className={"h4"}>Symptoms include:</h4>
        <div className={styles["symptoms-list"]}>
          <RiArrowRightSLine className={styles.icon} />
          <p className={"main-text"}>Itchiness</p>
        </div>
        <div className={styles["symptoms-list"]}>
          <RiArrowRightSLine className={styles.icon} />
          <p className={"main-text"}>Itchiness</p>
        </div>
        <div className={styles["symptoms-list"]}>
          <RiArrowRightSLine className={styles.icon} />
          <p className={"main-text"}>Itchiness</p>
        </div>
        <div className={styles["symptoms-list"]}>
          <RiArrowRightSLine className={styles.icon} />
          <p className={"main-text"}>Itchiness</p>
        </div>
        <div className={styles["symptoms-list"]}>
          <RiArrowRightSLine className={styles.icon} />
          <p className={"main-text"}>Itchiness</p>
        </div>
      </div>
    </div>
    <div className={"col-1-of-3"}>
      <div className={styles["treatments-container"]}>
        <h4 className={"h4"}>Treatments include:</h4>
        <div className={styles["symptoms-list"]}>
          <RiArrowRightSLine className={styles.icon} />
          <p className={"main-text"}>Itchiness</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className={styles["disease-type"]}>
  <h2 className={"h2"}>Ocular rosacea</h2>
  <p className={`${styles["disease-detail"]} main-text`}>
    Rosacea is a chronic skin condition that causes redness of the face.
    Ocular rosacea causes redness, irritation, and itching of the eyes.
    Sometimes dry or irritated eyes are the first sign of rosacea. The
    inflammation overlaps into blepharitis (inflammation of the eyelids)
    and can cause concurrent meibomian gland dysfunction. Depending on
    the severity, the treatments range from at-home lid scrubs and hot
    compress to in-office therapy with Mibo Thermoflo or the FDA
    approved IPL. See our in office treatments page for more
    information.
  </p>
  <div className={"row"}>
    <div className={"col-1-of-3"}>
      <img src={home} className={styles.picture} />
    </div>
    <div className={"col-1-of-3"}>
      <div className={styles["symptoms-container"]}>
        <h4 className={"h4"}>Symptoms include:</h4>
        <div className={styles["symptoms-list"]}>
          <RiArrowRightSLine className={styles.icon} />
          <p className={"main-text"}>Itchiness</p>
        </div>
        <div className={styles["symptoms-list"]}>
          <RiArrowRightSLine className={styles.icon} />
          <p className={"main-text"}>Itchiness</p>
        </div>
        <div className={styles["symptoms-list"]}>
          <RiArrowRightSLine className={styles.icon} />
          <p className={"main-text"}>Itchiness</p>
        </div>
        <div className={styles["symptoms-list"]}>
          <RiArrowRightSLine className={styles.icon} />
          <p className={"main-text"}>Itchiness</p>
        </div>
        <div className={styles["symptoms-list"]}>
          <RiArrowRightSLine className={styles.icon} />
          <p className={"main-text"}>Itchiness</p>
        </div>
      </div>
    </div>
    <div className={"col-1-of-3"}>
      <div className={styles["treatments-container"]}>
        <h4 className={"h4"}>Treatments include:</h4>
        <div className={styles["symptoms-list"]}>
          <RiArrowRightSLine className={styles.icon} />
          <p className={"main-text"}>Itchiness</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className={styles["disease-type"]}>
  <h2 className={"h2"}>Demodex</h2>
  <p className={`${styles["disease-detail"]} main-text`}>
    Demodex is a small mite, or parasite that can reside in our hair
    follicles and sebaceous glands. Demodex is contracted and spread by
    either direct contact or dust containing eggs. Demodex causes
    symptoms such as: itching, foreign body sensation, redness,
    crusting, blurry vision, and burning. All of these symptoms can
    overlap with dry eye disease.
  </p>
  <div className={"row"}>
    <div className={"col-1-of-3"}>
      <img src={home} className={styles.picture} />
    </div>
    <div className={"col-1-of-3"}>
      <div className={styles["symptoms-container"]}>
        <h4 className={"h4"}>Symptoms include:</h4>
        <div className={styles["symptoms-list"]}>
          <RiArrowRightSLine className={styles.icon} />
          <p className={"main-text"}>Itchiness</p>
        </div>
        <div className={styles["symptoms-list"]}>
          <RiArrowRightSLine className={styles.icon} />
          <p className={"main-text"}>Itchiness</p>
        </div>
        <div className={styles["symptoms-list"]}>
          <RiArrowRightSLine className={styles.icon} />
          <p className={"main-text"}>Itchiness</p>
        </div>
        <div className={styles["symptoms-list"]}>
          <RiArrowRightSLine className={styles.icon} />
          <p className={"main-text"}>Itchiness</p>
        </div>
        <div className={styles["symptoms-list"]}>
          <RiArrowRightSLine className={styles.icon} />
          <p className={"main-text"}>Itchiness</p>
        </div>
      </div>
    </div>
    <div className={"col-1-of-3"}>
      <div className={styles["treatments-container"]}>
        <h4 className={"h4"}>Treatments include:</h4>
        <div className={styles["symptoms-list"]}>
          <RiArrowRightSLine className={styles.icon} />
          <p className={"main-text"}>Itchiness</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */
}
