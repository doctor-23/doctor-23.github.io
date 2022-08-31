import React from "react";
import styles from "./search.module.scss";

const SearchComponent = ({title}) => (
    <section className={styles.search}>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                {title["en"]}
            </h1>
        </div>
    </section>
)

export default SearchComponent;