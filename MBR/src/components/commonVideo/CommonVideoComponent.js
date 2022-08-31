import React from "react";
import styles from "./commonVideo.module.scss";
import cn from "classnames";
import {useRouter} from "next/router";

const CommonVideoComponent = ({ title, description, poster, video }) => {
    const router = useRouter();
    const isAboutPage = router.asPath === "/about";

    return(
        <section className={styles.production}>
            <div className={cn(styles.wrapper, isAboutPage && styles.aboutWrapper)}>
                {title && (
                    <h2 className={cn(
                        styles.title,
                        isAboutPage && styles.titleAbout
                    )}>
                        {title["en"]}
                    </h2>
                )}
                {description && (
                    <p className={styles.description}>
                        {description["en"]}
                    </p>
                )}
                <span className={cn(styles.play, isAboutPage && styles.aboutPlay)} />
            </div>
            <video
                className={styles.video}
                poster={poster}
                autoPlay
                muted
                loop
            >
                <source src={require("../../../public/videos/moscowCityNuar.mp4")} type="video/mp4"/>
            </video>
        </section>
    )
}

export default CommonVideoComponent;
