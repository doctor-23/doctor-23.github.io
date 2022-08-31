import React, {useState} from "react";
import cn from "classnames";
import productsInformationContent from "../../constants/productsInformationContent";
import styles from "./productsAccordion.module.scss";

const ProductsAccordionElement = ({className, accordion}) => {
    const [active, updateActive] = useState(2);
    const onUpdateActive = (index) => {
        updateActive(index);
    };

    return (
        <div className={cn(className, styles.accordion)}>
            {accordion.map((item, index) => (
                <div key={item.heading} className={cn(
                    styles.accordionItem,
                    active === index && styles.active
                )}>
                    <div
                        className={styles.accordionHeading}
                        onClick={() =>
                            onUpdateActive(
                                index === active ? -1 : index
                            )
                        }
                    >
                        {item.heading["en"]}
                    </div>
                    <ul className={styles.accordionContent}>
                        {item.content.map((contentItem) => (
                            <li key={contentItem.text} className={styles.accordionContentItem}>
                                <a href={contentItem.link}>
                                    {contentItem.text["en"]}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default ProductsAccordionElement;