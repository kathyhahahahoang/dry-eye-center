import styles from "./Resources.module.scss";
import eyes from "../assets/images/eyes.jpg";

function Resources() {
  return (
    <div className={styles.container}>
      <div className={styles["video-header"]}>
        <h1 className={`${styles.title} h1`}>Videos</h1>
      </div>
      <div className={styles["video-container"]}>
        <div className={styles["video-item"]}>
          <div className={styles["video-picture"]}>
            <img src={eyes} />
          </div>
          <div className={styles["video-details"]}>
            <p>How to use a hot compress at home</p>
          </div>
        </div>
        <div className={styles["video-item"]}>
          <div className={styles["video-picture"]}>
            <img src={eyes} />
          </div>
          <div className={styles["video-details"]}>
            <p>How to use a hot compress at home</p>
          </div>
        </div>
        <div className={styles["video-item"]}>
          <div className={styles["video-picture"]}>
            <img src={eyes} />
          </div>
          <div className={styles["video-details"]}>
            <p>How to use a hot compress at home</p>
          </div>
        </div>
        <div className={styles["video-item"]}>
          <div className={styles["video-picture"]}>
            <img src={eyes} />
          </div>
          <div className={styles["video-details"]}>
            <p>How to use a hot compress at home</p>
          </div>
        </div>
        <div className={styles["video-item"]}>
          <div className={styles["video-picture"]}>
            <img src={eyes} />
          </div>
          <div className={styles["video-details"]}>
            <p>How to use a hot compress at home</p>
          </div>
        </div>
      </div>
      <div className={styles["article-header"]}>
        <h1 className={`${styles.title} h1`}>Articles</h1>
      </div>
      <div className={styles["articles-container"]}>
        <div className={"row"}>
          <div className={"col-2-of-4"}>
            <div className={styles["article-title"]}>
              <h4 className={"h4"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                veniam, tenetur
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
                Eligendi, rerum? Quis vel doloribus nostrum corrupti
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
                Reprehenderit cum dignissimos praesentium repellat, ab corrupti
                iure obcaecati odio suscipit na
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                veniam, tenetur
              </h4>
            </div>
          </div>
          <div className={"col-2-of-4"}>
            <div className={styles["article-picture"]}>
              <img src={eyes} />
            </div>
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
