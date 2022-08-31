import React from "react";
import styles from "./smallNews.module.scss";
import TextTruncate from 'react-text-truncate';
import cn from "classnames";

const SmallNewsElement = ({ content, className, wrapperClass, imgClassName, line }) => {
    return (
        <li key={content.date} className={cn(styles.item, className)}>
            <div className={cn(styles.text, wrapperClass)}>
                <span className={styles.date}>
                    {content.date["en"]}
                </span>
                <h3 className={styles.title}>
                    <TextTruncate line={line} text={content.title["en"]} />
                </h3>
                <p className={styles.description}>
                    <TextTruncate line={2} text={content.description["en"]} />
                </p>
            </div>
            <div className={cn(styles.image,imgClassName)}>
                <img src={content.cover} alt=""/>
            </div>
            <a href="#" />
        </li>
    )
}

export default SmallNewsElement;