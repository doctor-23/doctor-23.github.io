import React, { useState } from "react";
import cn from "classnames";
import useWindowResize from "../../hooks/useWindowResize";
import BigNewsElement from "../../elements/bigNews/BigNewsElement";
import SmallNewsElement from "../../elements/smallNews/SmallNewsElement";
import styles from "./newsList.module.scss"

const NewsListComponent = ({content}) =>  {
    const width = useWindowResize().width;

    let seeMoreCount, truncateLines;

    width > 992 ? seeMoreCount = 6 : seeMoreCount = 4;
    width > 992 ? truncateLines = 2 : truncateLines = 4;

    const [seeMore, updateSeeMore] = useState(seeMoreCount);
    const onUpdateSeeMore = (index) => (
        updateSeeMore(index)
    );

    const newsQuant = content.length;

    return (
        <section className={styles.news}>
            <div className={styles.wrapper}>
                {width > 992 && (
                    <ul className={styles.listWrapper}>
                        <li>
                            <ul className={styles.list}>
                                {content.map((item, index) =>(index + 1) % 2 === 1  && (
                                    <>
                                        {index === 0 && (
                                            <BigNewsElement
                                                item={item}
                                                className={styles.mainNews}
                                                imgClassName={styles.imageMain}
                                                line={truncateLines}
                                            />
                                        )}

                                        {index !== 0 && index < seeMore && (
                                            <SmallNewsElement
                                                content={item}
                                                className={styles.newsItem}
                                                imgClassName={styles.image}
                                                wrapperClass={styles.text}
                                                line={truncateLines}
                                            />
                                        )}
                                    </>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <ul className={styles.list}>
                                {content.map((item, index) => (index + 1) % 2 === 0 && (
                                    <>
                                        {index === 1 && (
                                            <BigNewsElement
                                                item={item}
                                                className={styles.mainNews}
                                                imgClassName={styles.imageMain}
                                                line={truncateLines}
                                            />
                                        )}

                                        {index !== 1 && index <= seeMore && (
                                            <SmallNewsElement
                                                content={item}
                                                className={styles.newsItem}
                                                imgClassName={styles.image}
                                                wrapperClass={styles.text}
                                                line={truncateLines}
                                            />
                                        )}
                                    </>
                                ))}
                            </ul>
                        </li>
                    </ul>
                )}

                {width < 992 && (
                    <ul className={styles.list}>
                        {content.map((item, index) =>  (
                            <>
                                {index === 0 && (
                                    <BigNewsElement
                                        item={item}
                                        className={styles.mainNews}
                                        imgClassName={styles.imageMain}
                                    />
                                )}

                                {index !== 0 && index < seeMore && (
                                    <SmallNewsElement
                                        content={item}
                                        className={styles.newsItem}
                                        imgClassName={styles.image}
                                        wrapperClass={styles.text}
                                    />
                                )}
                            </>
                        ))}
                    </ul>
                )}

                {newsQuant > seeMoreCount && (
                    <button
                        className={cn(styles.btn, seeMore !== seeMoreCount && styles.hidden)}
                        onClick={() => onUpdateSeeMore(newsQuant)}
                    >
                        {content["en"]}
                    </button>
                )}
            </div>
        </section>
    )
}

export default NewsListComponent;