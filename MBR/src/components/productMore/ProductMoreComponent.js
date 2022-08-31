import React from "react";
import styles from "./productMore.module.scss";

const ProductMoreComponent = ({
                                  title,
                                  description,
                                  callText,
                                  productImage,
                                  download
                              }) => (
    <section className={styles.productMore}>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <h1 className={styles.title}>
                    {title["en"]}
                </h1>

                <div className={styles.description}>
                    {description.map((item) => (
                        <p key={item.text}>
                            {item.text["en"]}
                        </p>
                    ))}
                </div>

                <button className={styles.btn}>
                    {callText["en"]}
                </button>
            </div>

            <div className={styles.right}>
                <img src={productImage} alt=""/>
            </div>

            <div className={styles.downloadWrap}>
                {download.map((item) => (
                    <a key={item.link} href={item.link} className={styles.download} download>
                        {item.text["en"]}
                    </a>
                ))}
            </div>
        </div>
    </section>
)

export default ProductMoreComponent;