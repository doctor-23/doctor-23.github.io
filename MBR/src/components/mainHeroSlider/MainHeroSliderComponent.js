import React, { useEffect, useState } from "react";
import { Pagination, EffectCreative, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import mainHeroSliderContent from "../../constants/mainHeroSliderContent";
import styles from "./mainHeroSlider.module.scss";
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/pagination';

const mainHeroSliderComponent = ({slider}) => {
    const pagination = {
        clickable: true,
        modifierClass: styles.bulletWrapper,
        bulletElement: "div",
    };

    return (
        <section className={styles.mainHero}>
            <div className={styles.wrapper}>
                <Swiper
                    modules={[EffectCreative, EffectFade, Pagination]}
                    slidesPerView={1}
                    effect={"fade"}
                    fadeEffect={{
                        crossFade: true
                    }}
                    speed={1e3}
                    pagination={pagination}
                    loop={true}
                    className={styles.slider}
                >
                    {mainHeroSliderContent.slider.map(({image, category, title, linkText, link}) => (
                        <SwiperSlide key={title} className={styles.sliderItem}>
                            <div className={styles.sliderItemWrapper}>
                                <span className={styles.category}>
                                    {category["en"]}
                                </span>

                                <h2 className={styles.title}>
                                    {title["en"]}
                                </h2>

                                <a href={link} className={styles.btn}>
                                    {linkText["en"]}
                                </a>
                            </div>
                            <div className={styles.sliderItemImage} style={{backgroundImage: `url(${image})`}} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default mainHeroSliderComponent;
