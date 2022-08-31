import React from "react";
import cn from "classnames";
import styles from "./productsScheme.module.scss";

const ProductsSchemeElement = ({className, scheme, schemeList}) => {
    return (
        <div className={cn(className, styles.scheme)}>
            <img src={scheme} alt=""/>
            <ul className={styles.schemeList}>
                {schemeList.map((item, index) => (
                    <li key={item.text} className={cn(styles.schemeText, styles[`schemeText${index + 1}`])}>
                        {item.text["en"]}
                        <span className={styles.arrow} />
                        <a href={item.link} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductsSchemeElement;