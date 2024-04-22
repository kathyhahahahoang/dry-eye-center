import styles from "./HomeSubheader.module.scss";

function HomeSubheader() {
  return (
    <div className={styles.container}>
      <h2 className={styles.text}>
        Specializing in the assessment and treatment of mild to severe dry eye
        disease
      </h2>
      <p className={styles.description}>
        Alamo Eye Care is proud to be home of The Dry Eye Center of San Antonio.
        We provide top-notch eye care and will curate a personal and specific
        dry eye treatment plan to best fit your needs.
      </p>
    </div>
  );
}

export default HomeSubheader;
