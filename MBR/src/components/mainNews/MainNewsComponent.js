import React from "react";
import SmallNewsElement from "../../elements/smallNews/SmallNewsElement";
import BigNewsElement from "../../elements/bigNews/BigNewsElement";
import styles from "./mainNews.module.scss";

const MainNewsComponent = ({
                               title,
                               list,
                               button
                           }) => (
    <section className={styles.news}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                {title["en"]}
            </h2>

            <div className={styles.newsWrapper}>
                <ul className={styles.left}>
                    {list.map((item, index) => (
                        index === 0 && (
                            <BigNewsElement
                                item={item}
                                className={styles.mainNews}
                                imgClassName={styles.imageMain}
                                line={3}
                            />
                        )

                    ))}
                </ul>

                <ul className={styles.right}>
                    {list.map((item, index) => (
                        index < 3 && (
                            <SmallNewsElement
                                content={item}
                                className={styles.newsItem}
                                imgClassName={styles.image}
                                wrapperClass={styles.text}
                                line={2}
                            />
                        )
                    ))}
                </ul>

            </div>

            <a href="news/" className={styles.btn}>
                {button["en"]}
            </a>
        </div>
    </section>
)

export default MainNewsComponent;