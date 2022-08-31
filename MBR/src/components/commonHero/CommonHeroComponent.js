import React from "react";
import styles from "./commonHero.module.scss"

const CommonHeroComponent = ({ title, description, image }) => (
    <section className={styles.commonHero}>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                {title["en"]}
            </h1>
            <p className={styles.description}>
                {description["en"]}
            </p>
        </div>
        <div className={styles.background} style={{backgroundImage: `url(${image})`}} />
    </section>
)

export default CommonHeroComponent;