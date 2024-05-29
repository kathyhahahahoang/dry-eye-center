import styles from "./Banner.module.scss";

type BannerProps = {
  title: string;
  desc?: string;
  bgColor?: string;
  fontColor?: string;
};

function Banner({ title, desc, bgColor, fontColor }: BannerProps) {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: `${bgColor}`, color: `${fontColor}` }}
    >
      <div className={`${styles["banner-container"]} width-container`}>
        <h1 className={`${styles.title} h1`}>{title}</h1>
        <p className={`${styles.desc} main-text`}>{desc}</p>
      </div>
    </div>
  );
}

export default Banner;
