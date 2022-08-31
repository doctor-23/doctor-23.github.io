import React, {useState} from "react";
import styles from "./aboutHistory.module.scss"
import cn from "classnames";

const AboutHistoryComponent = ({title, tabs}) => {
    const [activeTab, updateActiveTab] = useState(0);
    const onUpdateTab = (index) => {
        updateActiveTab(index);
    };
    return (
        <section className={styles.history}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>
                    {title["en"]}
                </h2>

                <div className={styles.tabsContent}>
                    <div className={styles.left}>
                        <img src={tabs[activeTab].content.image} alt=""/>
                    </div>
                    <div className={styles.tabsWrap}>
                        <ul className={cn(styles.tabs, styles.middle)}>
                            {tabs.map((item, index) => (
                                <li
                                    key={item.name}
                                    className={cn(styles.tabItem, activeTab === index && styles.active)}
                                    onClick={() => onUpdateTab(index)}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <h3 className={styles.tabsContentTitle}>
                            {tabs[activeTab].content.title["en"]}
                        </h3>

                        <div className={styles.tabsContentDescription}>
                            {tabs[activeTab].content.description.map((item) => (
                                <>
                                    <p key={item.text}>
                                        {item.text["en"]}
                                    </p>
                                </>
                            ))}
                        </div>
                    </div>
                </div>

                <ul className={styles.tabs}>
                    {tabs.map((item, index) => (
                        <li
                            key={item.name}
                            className={cn(styles.tabItem, activeTab === index && styles.active)}
                            onClick={() => onUpdateTab(index)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default AboutHistoryComponent;