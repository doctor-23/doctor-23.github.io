import React from "react";
import styles from "./productInf.module.scss";
import cn from "classnames";

const ProductInfElement = ({ content, isDarken, isStretch}) => (
    <div key={content.title} className={cn(styles.wrap, isDarken && styles.darken)}>
        <div className={cn(styles.wrapContent, styles.left)}>
            <img className={isStretch && styles.stretch} src={content.image} alt=""/>
        </div>

        <div className={cn(styles.wrapContent, styles.right)}>
            <span className={styles.title}>
                {content.title["en"]}
            </span>

            <ul className={styles.list}>
                {content.list.map((item) => (
                    <li key={item.text} className={styles.listItem}>
                        {item.text["en"]}
                    </li>
                ))}
            </ul>
        </div>
    </div>
)

export default ProductInfElement;