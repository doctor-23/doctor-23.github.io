import React from "react";
import styles from "./serviceMore.module.scss";

const ServiceMoreComponent = ({title, topDescription, call, image, bottomDescription}) => (
    <section className={styles.serviceMore}>
        <div className={styles.wrapper}>
            <div className={styles.topWrapper}>
                <div className={styles.left}>
                    <h1 className={styles.title}>
                        {title["en"]}
                    </h1>

                    <div className={styles.description}>
                        {topDescription.map((item) => (
                            <p key={item.text}>
                                {item.text["en"]}
                            </p>
                        ))}
                    </div>

                    <button className={styles.btn}>
                        {call["en"]}
                    </button>
                </div>

                <div className={styles.right}>
                    <img src={image} alt=""/>
                </div>
            </div>

            <div className={styles.bottomWrapper}>
                <div className={styles.left}>
                    <div className={styles.description}>
                        {bottomDescription.left.map((item) => (
                            <p key={item.text}>
                                {item.text["en"]}
                            </p>
                        ))}
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.description}>
                        {bottomDescription.right.map((item) => (
                            <p key={item.text}>
                                {item.text["en"]}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default ServiceMoreComponent