import React from "react";
import cn from "classnames";
import benefitContent from "../../constants/benefitContent";
import styles from "./benefit.module.scss";

const BenefitElement = ({isDarken, className, content}) => (
    <ul className={cn(styles.benefitList, isDarken ? styles.dark : styles.light, className)}>
        {content.map(({item, icon}) => (
            <li key={item} className={styles.benefitItem}>
                <span className={styles.image} style={{backgroundImage: `url(${isDarken ? icon.dark : icon.light}`}}/>
                <span className={styles.text}>
                    {item["en"]}
                </span>
            </li>
        ))}
    </ul>
);

export default BenefitElement;
