import React from "react";
import styles from "./aboutCertificates.module.scss"

const AboutCertificatesComponent = ({title, list}) => (
    <section className={styles.certificates}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                {title["en"]}
            </h2>
            <ul className={styles.list}>
                {list.map((item) => (
                    <li key={item.image} className={styles.item}>
                        <img src={item.image} alt=""/>
                    </li>
                ))}
            </ul>
        </div>
    </section>
)

export default AboutCertificatesComponent;