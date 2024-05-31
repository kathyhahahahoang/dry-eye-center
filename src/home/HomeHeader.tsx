import styles from "./HomeHeader.module.scss";
import elderly10 from "../assets/images/elderly10.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function HomeHeader() {
  const [twoLines, setTwoLines] = useState(window.innerWidth < 1500);
  const [threeLines, setThreeLines] = useState(window.innerWidth < 650);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateSmallMedia);
    return () => window.removeEventListener("resize", updateSmallMedia);
  }, []);

  const updateMedia = () => {
    setTwoLines(window.innerWidth < 1500);
  };
  const updateSmallMedia = () => {
    setThreeLines(window.innerWidth < 650);
  };

  const Large = (
    <h1 className={`${styles.header} h1`}>
      Dry Eye Center of San Antonio at Alamo Eye Care
    </h1>
  );

  const Med = (
    <h1 className={`${styles.header} h1`}>
      Dry Eye Center of San Antonio
      <br /> at Alamo Eye Care
    </h1>
  );

  const Small = (
    <h1 className={`${styles.header} h1`}>
      Dry Eye Center
      <br /> of San Antonio
      <br /> at Alamo Eye Care
    </h1>
  );

  return (
    <div className={styles.container}>
      <div className={styles["picture-container"]}>
        <div className={styles.overlay} />
        <img src={elderly10} className={styles.picture} />
      </div>
      <div className={styles["text-container"]}>
        {threeLines && Small}
        {twoLines && !threeLines && Med}
        {!twoLines && !threeLines && Large}
        <h3 className={`${styles.subheader} h3`}>
          Specializing in the assessment and treatment of dry eye disease
        </h3>
        <Link to="/contact" className={"link"}>
          Book an appointment
        </Link>
      </div>
    </div>
  );
}

export default HomeHeader;
