import styles from "./Contact.module.scss";

function Contact() {
  return (
    <div className={styles.container}>
      <div>
        <div className={"row"}>
          <div className={"col-1-of-3"}>
            <div className={styles["text-container"]}>
              <h1>Visit us</h1>
              <div className={styles["info-container"]}>
                <h4>
                  Dry Eye Center of San Antonio <br /> at Alamo Eye Care
                </h4>
                <p>
                  1742 N. Loop 1604 E., Suite 117 <br />
                  San Antonio, TX 78232
                </p>
              </div>
              <div className={styles["info-container"]}>
                <h4>Contact us</h4>
                <p>Telephone: (210)-403-9050</p>
                <p>Fax: (210)-403-9939</p>
                <p>alamoeyecare@gmail.com</p>
              </div>
              <div className={styles["info-container"]}>
                <h4>Business hours</h4>
                <p>Monday - Thursday: 9am - 6pm</p>
                <p>Friday: 9am - 3pm</p>
                <p>Saturday: closed</p>
                <p>Sunday: closed</p>
              </div>
            </div>
          </div>
          <div className={"col-2-of-3"}>
            <div className={styles["map-container"]}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.9123637601992!2d-98.46680558822771!3d29.606233739095064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c8a1f252fa9db%3A0x77b76ffd84fc9434!2sAlamo%20Eye%20Care!5e0!3m2!1sen!2sus!4v1714420545038!5m2!1sen!2sus"
                className={styles["map"]}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Responsive Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

{
  /* <div className={styles["text-container"]}>
<h1>Visit us</h1>
<div className={styles["info-container"]}>
  <h4>
    Dry Eye Center of San Antonio <br /> at Alamo Eye Care
  </h4>
  <p>
    1742 N. Loop 1604 E., Suite 117 <br />
    San Antonio, TX 78232
  </p>
</div>
<div className={styles["info-container"]}>
  <h4>Contact us</h4>
  <p>Telephone: (210)-403-9050</p>
  <p>Fax: (210)-403-9939</p>
  <p>alamoeyecare@gmail.com</p>
</div>
<div className={styles["info-container"]}>
  <h4>Business hours</h4>
  <p>Monday - Thursday: 9am - 6pm</p>
  <p>Friday: 9am - 3pm</p>
  <p>Saturday: closed</p>
  <p>Sunday: closed</p>
</div>
</div>
<div className={styles["map-container"]}>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.9123637601992!2d-98.46680558822771!3d29.606233739095064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c8a1f252fa9db%3A0x77b76ffd84fc9434!2sAlamo%20Eye%20Care!5e0!3m2!1sen!2sus!4v1714420545038!5m2!1sen!2sus"
  className={styles["map"]}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Responsive Google Map"
></iframe>
</div> */
}
