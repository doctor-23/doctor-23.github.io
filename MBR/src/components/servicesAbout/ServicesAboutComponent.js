import React from "react";
import BenefitElement from "../../elements/benefit/BenefitElement";
import styles from "./servicesAbout.module.scss";

const ServicesAboutComponent = ({
                                    openModal,
                                    logo,
                                    background,
                                    description,
                                    footnote,
                                    call,
                                    benefitList
                                }) => (
    <section
        className={styles.servicesAbout}
        style={{backgroundImage: `url(${background})`}}
    >
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <a href="/">
                    <img src={logo} alt=""/>
                </a>
            </div>

            <div className={styles.right}>
                <p className={styles.description}>
                    {description["en"]}
                </p>
                <span className={styles.footnote}>
                    {footnote["en"]}
                </span>
                <button className={styles.btn} onClick={openModal}>
                    {call["en"]}
                </button>
            </div>

            <BenefitElement
                isDarken={false}
                className={styles.benefitList}
                content={benefitList}
            />
        </div>
    </section>
)

export default ServicesAboutComponent;