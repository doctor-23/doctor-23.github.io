import React from "react";
import ProductsAccordionElement from "../../elements/productsAccordion/ProductsAccordionElement";
import ProductsSchemeElement from "../../elements/productsScheme/ProductsSchemeElement";
import styles from "./mainProduct.module.scss";

const MainProductComponent = ({
                                  title,
                                  scheme,
                                  schemeList,
                                  subtitle,
                                  description,
                                  accordion
                              }) => {
    return (
        <section className={styles.product}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>
                    {title["en"]}
                </h2>

                <ProductsSchemeElement
                    className={styles.productScheme}
                    scheme={scheme}
                    schemeList={schemeList}
                />

                <div className={styles.accrodionWrapper}>
                    <h2 className={styles.secondTitle}>
                        {subtitle["en"]}
                    </h2>
                    <p className={styles.description}>
                        {description["en"]}
                    </p>
                    <ProductsAccordionElement
                        className={styles.productAccrodion}
                        accordion={accordion}
                    />
                </div>
            </div>
        </section>
    )
}

export default MainProductComponent;
