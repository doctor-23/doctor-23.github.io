import React from "react";
import TextTruncate from 'react-text-truncate';
import styles from "./bigNews.module.scss"
import cn from "classnames";

const BigNewsElement = ({item, className, imgClassName, line}) => (
    <li key={item.cover} className={cn(styles.item, className)}>
        <span className={styles.date}>
            {item.date["en"]}
        </span>
        <h3 className={styles.title}>
            <TextTruncate line={line} text={item.title["en"]}/>
        </h3>
        <div className={cn(styles.image, imgClassName)}>
            <div className={styles.imageWrap}>
                <img src={item.cover} alt=""/>
            </div>
        </div>
        <a href="#"/>
    </li>
)

export default BigNewsElement;