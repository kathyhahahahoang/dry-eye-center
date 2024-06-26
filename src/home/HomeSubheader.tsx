import styles from "./HomeSubheader.module.scss";

function HomeSubheader() {
  return (
    <div className={styles.container}>
      <h2 className={"h2"}>
        Alamo Eye Care is proud to be home of the Dry Eye Center of San Antonio.
        We provide top-notch eye care and will curate a personal and specific
        dry eye treatment plan to best fit your needs.
      </h2>
    </div>
  );
}

export default HomeSubheader;
