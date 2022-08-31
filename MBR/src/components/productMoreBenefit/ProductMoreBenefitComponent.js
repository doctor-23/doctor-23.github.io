import React from "react";
import styles from "./productMoreBenefit.module.scss";

const ProductMoreBenefitComponent = ({title, list}) => (
    <section className={styles.productBenefits}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                {title["en"]}
            </h2>

            <ul className={styles.list}>
                {list.map((item) => (
                    <li key={item.text} className={styles.listItem}>
                        {item.text["en"]}
                    </li>
                ))}
            </ul>
        </div>
    </section>
)

export default ProductMoreBenefitComponent;