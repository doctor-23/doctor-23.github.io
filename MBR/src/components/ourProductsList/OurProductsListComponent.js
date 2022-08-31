import React from "react";
import ProductsAccordionElement from "../../elements/productsAccordion/ProductsAccordionElement";
import ProductsSchemeElement from "../../elements/productsScheme/ProductsSchemeElement";
import styles from "./ourProductsList.module.scss";
import productsInformationContent from "../../constants/productsInformationContent";

const OurProductsListComponent = ({
                                      scheme,
                                      schemeList,
                                      subtitle,
                                      description,
                                      accordion
                                  }) => (
    <section className={styles.ourProducts}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                {subtitle["en"]}
            </h2>

            <p className={styles.description}>
                {description["en"]}
            </p>

            <ProductsAccordionElement
                className={styles.productAccordion}
                accordion={accordion}
            />

            <ProductsSchemeElement
                className={styles.productScheme}
                scheme={scheme}
                schemeList={schemeList}
            />
        </div>
    </section>
)

export default OurProductsListComponent;