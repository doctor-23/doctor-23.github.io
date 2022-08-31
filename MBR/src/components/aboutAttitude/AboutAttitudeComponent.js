import React from "react";
import cn from "classnames";
import styles from "./aboutAttitude.module.scss"

const AboutAttitudeComponent = ({content}) => (
    <section className={styles.attitude}>
        {content.map((item, index) => (
            <div className={styles.wrapper}>
                <div key={item.title} className={cn(
                    styles.listWrapper,
                    styles[`listWrapper${index + 1}`])}>
                <h3 className={styles.title}>
                    {item.title["en"]}
                </h3>

                    <ul className={styles.list}>
                        {item.list.map((listItem) => (
                            <li key={listItem.text} className={styles.item}>
                                {listItem.text["en"]}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}

    </section>
)

export default AboutAttitudeComponent;