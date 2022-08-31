import React from "react";
import styles from "./aboutKnowledge.module.scss"

const AboutKnowledgeComponent = ({openModal, description, button, image}) => (
    <section className={styles.knowledge}>
        <div className={styles.wrapper}>
            <p className={styles.description}>
                {description["en"]}
            </p>
            <button className={styles.btn} onClick={openModal}>
                {button["en"]}
            </button>
        </div>
        <div className={styles.background} style={{backgroundImage: `url(${image})`}}/>
    </section>
)

export default AboutKnowledgeComponent;
