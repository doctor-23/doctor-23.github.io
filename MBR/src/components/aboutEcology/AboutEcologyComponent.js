import React from "react";
import styles from "./aboutEcology.module.scss"

const AboutEcologyContent = ({title, description, logo, image}) => (
    <section className={styles.ecology}>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <h2 className={styles.title}>
                    {title["en"]}
                </h2>

                <div className={styles.descriptionWrapper}>
                    {description.map((item) => (
                        <p key={item.text}>
                            {item.text["en"]}
                        </p>
                    ))}
                </div>

                <div className={styles.logoEcology} style={{backgroundImage: `url(${logo})`}} />
            </div>

            <div className={styles.right}>
                <img src={image} alt=""/>
            </div>
        </div>
    </section>
)

export default AboutEcologyContent;