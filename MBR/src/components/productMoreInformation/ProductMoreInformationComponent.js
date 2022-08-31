import React from "react";
import ProductInfElement from "../../elements/productInf/ProductInfElement";
import styles from "./productMoreInformation.module.scss";

const ProductMoreInformationComponent = ({content}) => (
    <section className={styles.productInf}>
        <div className={styles.wrapper}>
            {content.map((item) => (
                <ProductInfElement
                    content={item}
                    isDarken={item.isDarken}
                    isStretch={item.isStretch}
                />
            ))}
        </div>
    </section>
)

export default ProductMoreInformationComponent;

