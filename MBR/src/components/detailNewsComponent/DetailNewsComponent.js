import React from "react";
import styles from "./detailNews.module.scss";

const DetailNewsComponent = ({
                                 date,
                                 title,
                                 image,
                                 description,
                                 blockquote,
                                 share,
                                 poster
                             }) => (
    <section className={styles.news}>
        <div className={styles.wrapper}>
            <span className={styles.date}>
                {date["en"]}
            </span>

            <h1 className={styles.title}>
                {title["en"]}
            </h1>

            <img src={image} className={styles.image} alt=""/>

            <div className={styles.description}>
                {description.map((item, index) => (
                    index <= 1 && (
                        <p key={item.text}>
                            {item.text["en"]}
                        </p>
                    )
                ))}
            </div>

            <blockquote className={styles.blockquote}>
                <span className={styles.blockquoteTxt}>
                    {blockquote["en"]}
                </span>
            </blockquote>

            <div className={styles.description}>
                {description.map((item, index) => (
                    index > 1 && 3 >= index && (
                        <p key={item.text}>
                            {item.text["en"]}
                        </p>
                    )
                ))}
            </div>

            <div className={styles.videoWrapper}>
                <video
                    className={styles.video}
                    poster={poster}
                    autoPlay
                    muted
                    loop
                >
                    <source src={require("../../../public/videos/moscowCityNuar.mp4")} type="video/mp4"/>
                </video>
                <span className={styles.play}/>
            </div>

            <div className={styles.description}>
                {description.map((item, index) => (
                    index > 3 && 5 >= index && (
                        <p key={item.text}>
                            {item.text["en"]}
                        </p>
                    )
                ))}
            </div>

            <a href="#" className={styles.share}>
                {share["en"]}
            </a>

        </div>
    </section>
)

export default DetailNewsComponent;