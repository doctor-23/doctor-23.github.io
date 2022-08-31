import React from "react";
import {useRouter} from "next/router";
import styles from "./detailHeroComponent.module.scss";
import cn from "classnames";

const DetailHeroComponent = ({ content, link, image }) => {
    const router = useRouter();
    const isSearchPage = router.pathname === "/search";

    return (
        <section className={styles.hero}>
            <div className={styles.wrapper}>
                {isSearchPage && (
                    <h2 className={styles.title}>
                        {link["en"]}
                    </h2>
                )}

                {!isSearchPage && (
                    <a href={link.link} className={styles.backLink}>
                        {link["en"]}
                    </a>
                )}

            </div>
            <div className={styles.background} style={{backgroundImage:`url(${image})`}}/>
        </section>
    )
}

export default DetailHeroComponent;