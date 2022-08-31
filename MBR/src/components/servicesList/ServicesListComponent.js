import React, { useEffect, useState } from "react";
import cn from "classnames";
import useWindowResize from "../../hooks/useWindowResize";
import styles from "./servicesList.module.scss"

const
    ServicesListComponent = ({content}) => {
    const isMobile = useWindowResize().width < 992;

    const size = useWindowResize();
    const [showContent, updateShowContent] = useState(size.width <= 768);
    const [showListContent, UpdateShowListContent] = useState(-1);
    const onUpdateShowListContent = (index) => {
        UpdateShowListContent(index === showListContent ? -1 : index);
    };

    useEffect(() => {
        updateShowContent(size.width <= 768);
    }, [size]);

    return (
        <section className={styles.servicesList}>
            <div className={styles.wrapper}>
                <ul className={styles.list}>
                    {content.map((item, index) => (
                        <li
                            key={item.title}
                            className={cn(showContent ? cn(styles.content, styles.show) : cn(styles.content, styles[`content_${index + 1}`]), showListContent === index && styles.flip)}
                        >
                            <div
                                className={styles.back}
                                style={{backgroundImage: `url(${item.image})`}}
                            />
                            <div
                                className={styles.backContent}
                            >
                                {item.title["en"]}
                            </div>
                            <a href={item.link}/>
                        </li>

                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ServicesListComponent;
