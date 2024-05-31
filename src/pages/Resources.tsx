import styles from "./Resources.module.scss";
import { videos, articles } from "../constants/resourcesInfo";

function Resources() {
  return (
    <div className={styles.container}>
      <div className={styles["video-section"]}>
        <div className={styles["video-header"]}>
          <h1 className={`${styles.title} h1`}>Videos</h1>
        </div>
        <div className={"width-container"}>
          <div className={styles["videos-container"]}>
            {videos.map((el, i) => (
              <div className={styles["video-item"]} key={i}>
                <div className={styles["video-picture"]}>
                  <img src={el.picture} />
                </div>
                <div className={styles["video-details"]}>
                  <p>{el.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles["article-section"]}>
        <div className={styles["article-header"]}>
          <h1 className={`${styles.title} h1`}>Articles</h1>
        </div>
        <div className={"width-container"}>
          <div className={styles["articles-container"]}>
            {articles.map((el, i) => (
              <div className={styles["article-item"]} key={i}>
                <div className={styles["article-details"]}>
                  <p>{el.title}</p>
                </div>
                <div className={styles["article-picture"]}>
                  <img src={el.picture} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;

{
  /* <div className={styles["articles-container"]}>
<div className={styles["article-item"]}>
  <h4 className={"h4"}>How to prevent dry eye disease</h4>
  <div className={styles["article-picture"]}>
    <img src={eyes} />
  </div>
</div>
<div className={styles["article-item"]}>
  <h4 className={"h4"}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
    veniam, tenetur
  </h4>
  <div className={styles["article-picture"]}>
    <img src={eyes} />
  </div>
</div>
<div className={styles["article-item"]}>
  <h4 className={"h4"}>How to prevent dry eye disease</h4>
  <div className={styles["article-picture"]}>
    <img src={eyes} />
  </div>
</div>
<div className={styles["article-item"]}>
  <h4 className={"h4"}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
    veniam, tenetur
  </h4>
  <div className={styles["article-picture"]}>
    <img src={eyes} />
  </div>
</div>
</div> */
}

{
  /* <div className={styles["articles-container"]}>
  <div className={"row"}>
    <div className={"col-2-of-4"}>
      <div className={styles["article-title"]}>
        <h4 className={"h4"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam veniam,
          tenetur
        </h4>
      </div>
    </div>
    <div className={"col-2-of-4"}>
      <div className={styles["article-picture"]}>
        <img src={eyes} />
      </div>
    </div>
  </div>
  <div className={"row"}>
    <div className={"col-2-of-4"}>
      <div className={styles["article-title"]}>
        <h4 className={"h4"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          rerum? Quis vel doloribus nostrum corrupti
        </h4>
      </div>
    </div>
    <div className={"col-2-of-4"}>
      <div className={styles["article-picture"]}>
        <img src={eyes} />
      </div>
    </div>
  </div>
  <div className={"row"}>
    <div className={"col-2-of-4"}>
      <div className={styles["article-title"]}>
        <h4 className={"h4"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h4>
      </div>
    </div>
    <div className={"col-2-of-4"}>
      <div className={styles["article-picture"]}>
        <img src={eyes} />
      </div>
    </div>
  </div>
  <div className={"row"}>
    <div className={"col-2-of-4"}>
      <div className={styles["article-title"]}>
        <h4 className={"h4"}>
          Reprehenderit cum dignissimos praesentium repellat, ab corrupti iure
          obcaecati odio suscipit na
        </h4>
      </div>
    </div>
    <div className={"col-2-of-4"}>
      <div className={styles["article-picture"]}>
        <img src={eyes} />
      </div>
    </div>
  </div>
  <div className={"row"}>
    <div className={"col-2-of-4"}>
      <div className={styles["article-title"]}>
        <h4 className={"h4"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam veniam,
          tenetur
        </h4>
      </div>
    </div>
    <div className={"col-2-of-4"}>
      <div className={styles["article-picture"]}>
        <img src={eyes} />
      </div>
    </div>
  </div>
</div>; */
}
