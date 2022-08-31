import React from "react";
import BenefitElement from "../../elements/benefit/BenefitElement";
import styles from "./mainBenefit.module.scss";

const MainBenefitComponent = ({
                                  footnote,
                                  title,
                                  description,
                                  experience,
                                  experienceText,
                                  image,
                                  list
                              }) => (
    <section className={styles.benefit}>
        <div className={styles.wrapper}>
            <BenefitElement isDarken={true} className={styles.benefitList} content={list}/>

            <div className={styles.information} style={{backgroundImage: `url(${image})`}}>
                <div className={styles.titleWrapper}>
                    <span className={styles.footnote}>
                        {footnote["en"]}
                    </span>
                    <h2 className={styles.title}>
                        {title["en"]}
                    </h2>
                </div>

                <p className={styles.description}>
                    {description["en"]}
                </p>

                <span className={styles.experience}>
                    <span className={styles.experienceNum}>
                        {experience}
                    </span>
                    <span className={styles.experienceText}>
                        {experienceText["en"]}
                    </span>
                </span>
            </div>

        </div>
    </section>
);

export default MainBenefitComponent;
