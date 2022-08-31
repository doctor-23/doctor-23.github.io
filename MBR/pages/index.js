import Head from 'next/head'
import React, {useState} from "react";
import HeaderComponent from "../src/components/header/HeaderComponent";
import MainHeroSliderComponent from "../src/components/mainHeroSlider/MainHeroSliderComponent";
import MainBenefitComponent from "../src/components/mainBenefit/MainBenefitComponent";
import MainProductComponent from "../src/components/mainProduct/MainProductComponent";
import CommonVideoComponent from "../src/components/commonVideo/CommonVideoComponent";
import MainNewsComponent from "../src/components/mainNews/MainNewsComponent";
import FooterComponent from "../src/components/footer/FooterComponent";
import logo from "../public/images/logo.svg";
import sliderImage from "../public/images/slider_bg.png";
import mainProductionContent from "../src/constants/mainProductionContent";
import picture from "../public/images/picture-1.png";
import benefit_dark_1 from "../public/images/icons/benefit-dark-1.svg";
import benefit_light_1 from "../public/images/icons/benefit-light-1.svg";
import benefit_dark_2 from "../public/images/icons/benefit-dark-2.svg";
import benefit_light_2 from "../public/images/icons/benefit-light-2.svg";
import benefit_dark_3 from "../public/images/icons/benefit-dark-3.svg";
import benefit_light_3 from "../public/images/icons/benefit-light-3.svg";
import image from "../public/images/productScheme.png";
import video from "../public/videos/moscowCityNuar.mp4";
import videoPoster from "../public/images/video-poster.png";
import news_cover_1 from "../public/images/news-cover.jpg";
import news_cover_3 from "../public/images/news-cover-4.jpg";
import news_cover_2 from "../public/images/news-cover-1.jpg";
import news_cover_4 from "../public/images/news-cover-5.jpg";
import news_cover_5 from "../public/images/news-cover-6.jpg";
import news_cover_6 from "../public/images/news-cover-7.jpg";
import phone_ico from "../public/images/icons/phone.svg";
import mail_ico from "../public/images/icons/mail.svg";
import youtube from "../public/images/icons/youtube.svg";
import link_id from "../public/images/icons/linkid.svg";
import facebook from "../public/images/icons/facebook.svg";
import twitter from "../public/images/icons/twitter.svg";

const Index = () => {
    const [content] = useState({
        header: {
            logo: logo.src,
            switchLang: {
                ru: "RU",
                en: "EN"
            },
            title: {
                en: "Search",
                ru: "Search"
            }
        },
        navMenu: [
            {
                text: {
                    ru: "About Us",
                    en: "About Us"
                },
                link: '/about'
            },
            {
                text: {
                    ru: "Our Products",
                    en: "Our Products"
                },
                link: '/products'
            },
            {
                text: {
                    ru: "Services",
                    en: "Services"
                },
                link: '/services'
            },
            {
                text: {
                    ru: "News",
                    en: "News"
                },
                link: '/news'
            },
            {
                text: {
                    ru: "Contacts",
                    en: "Contacts"
                },
                link: '/contacts'
            },
        ],
        mainSlider: [
            {
                image: sliderImage.src,
                category: {
                    en: 'Glass Solutions',
                    ru: 'Glass Solutions'
                },
                title: {
                    en: "Glass processing machines for insulating glass",
                    ru: "Glass processing machines for insulating glass"
                },
                linkText: {
                    en: "Learn more",
                    ru: "Learn more"
                },
                link: '#'
            },
            {
                image: sliderImage.src,
                category: {
                    en: 'Glass Solutions 2',
                    ru: 'Glass Solutions 2'
                },
                title: {
                    en: "Glass processing machines for insulating glass",
                    ru: "Glass processing machines for insulating glass"
                },
                linkText: {
                    en: "Learn more",
                    ru: "Learn more"
                },
                link: '#'
            },
            {
                image: sliderImage.src,
                category: {
                    en: 'Glass Solutions 3',
                    ru: 'Glass Solutions 3'
                },
                title: {
                    en: "Glass processing machines for insulating glass",
                    ru: "Glass processing machines for insulating glass"
                },
                linkText: {
                    en: "Learn more",
                    ru: "Learn more"
                },
                link: '#'
            },
            {
                image: sliderImage.src,
                category: {
                    en: 'Glass Solutions 4',
                    ru: 'Glass Solutions 4'
                },
                title: {
                    en: "Glass processing machines for insulating glass",
                    ru: "Glass processing machines for insulating glass"
                },
                linkText: {
                    en: "Learn more",
                    ru: "Learn more"
                },
                link: '#'
            },
        ],
        benefit: {
            footnote: {
                en: "Founder and Owner:",
                ru: "Founder and Owner:"
            },
            title: {
                en: "Dragan Radovanovic",
                ru: "Dragan Radovanovic",
            },
            description: {
                en: "We use different tools to guarantee optimal quality. The machine can be used either for wet or dry operation. Of course, the grinding is only done wet. We kept the space in front of the machine as free as possible for the operator and placed the robot behind the machine.",
                ru: "We use different tools to guarantee optimal quality. The machine can be used either for wet or dry operation. Of course, the grinding is only done wet. We kept the space in front of the machine as free as possible for the operator and placed the robot behind the machine.",
            },
            experience: 35,
            experienceText: {
                en: "years of work",
                ru: "years of work"
            },
            image: picture.src
        },
        benefitList: [
            {
                item: {
                    en: "Quality Assurance",
                    ru: "Quality Assurance",
                },
                icon: {
                    dark: benefit_dark_1.src,
                    light: benefit_light_1.src
                }
            },
            {
                item: {
                    en: "Convenient Delivery",
                    ru: "Convenient Delivery",
                },
                icon: {
                    dark: benefit_dark_2.src,
                    light: benefit_light_2.src
                }
            },
            {
                item: {
                    en: "Quality Assurance",
                    ru: "Quality Assurance",
                },
                icon: {
                    dark: benefit_dark_3.src,
                    light: benefit_light_3.src
                }
            },
            {
                item: {
                    en: "Convenient Delivery",
                    ru: "Convenient Delivery",
                },
                icon: {
                    dark: benefit_dark_1.src,
                    light: benefit_light_1.src
                }
            },
        ],
        ourProducts: {
            title: {
                en: "Our Products",
                ru: "Our Products"
            },
            scheme: image.src,
            schemeList: [
                {
                    text: {
                        en: "transport conveyor",
                        ru: "transport conveyor"
                    },
                    link: "#"
                },
                {
                    text: {
                        en: "transport conveyor",
                        ru: "transport conveyor"
                    },
                    link: "#"
                },
                {
                    text: {
                        en: "Secondary Sealing Robot",
                        ru: "Secondary Sealing Robot"
                    },
                    link: "#"
                },
                {
                    text: {
                        en: "Washer dryer",
                        ru: "Washer dryer"
                    },
                    link: "#"
                },
                {
                    text: {
                        en: "Tilting station",
                        ru: "Tilting station"
                    },
                    link: "#"
                },
                {
                    text: {
                        en: "Press with gas filling",
                        ru: "Press with gas filling"
                    },
                    link: "#"
                },
                {
                    text: {
                        en: "Horizontal transport station",
                        ru: "Horizontal transport station"
                    },
                    link: "#"
                },
            ],
            subtitle: {
                en: "Insulating Glass Production",
                ru: "Insulating Glass Production"
            },
            description: {
                en: "Plants for the entire production process, from compact and robust up to the fully automatic high-end plant network",
                ru: "Plants for the entire production process, from compact and robust up to the fully automatic high-end plant network"
            },
            accordion: [
                {
                    heading: {
                        en: "Decoating",
                        ru: "Decoating"
                    },
                    content: [
                        {
                            text: {
                                en: "tilt station",
                                ru: "tilt station"
                            },
                            link: "#"
                        },
                        {
                            text: {
                                en: "transport conveyor",
                                ru: "transport conveyor"
                            },
                            link: "#"
                        },
                        {
                            text: {
                                en: "Press with gas filling",
                                ru: "Press with gas filling"
                            },
                            link: "#"
                        },
                        {
                            text: {
                                en: "Secondary Sealing Robot",
                                ru: "Secondary Sealing Robot"
                            },
                            link: "#"
                        },
                        {
                            text: {
                                en: "Horizontal transport station",
                                ru: "Horizontal transport station"
                            },
                            link: "#"
                        },
                        {
                            text: {
                                en: "Washer-dryer",
                                ru: "Washer-dryer"
                            },
                            link: "#"
                        },
                    ]
                },
                {
                    heading: {
                        en: "Wash",
                        ru: "Wash"
                    },
                    content: [
                        {
                            text: {
                                en: "tilt station",
                                ru: "tilt station"
                            },
                            link: "#"
                        },
                        {
                            text: {
                                en: "transport conveyor",
                                ru: "transport conveyor"
                            },
                            link: "#"
                        },
                        {
                            text: {
                                en: "Press with gas filling",
                                ru: "Press with gas filling"
                            },
                            link: "#"
                        },
                        {
                            text: {
                                en: "Secondary Sealing Robot",
                                ru: "Secondary Sealing Robot"
                            },
                            link: "#"
                        },
                        {
                            text: {
                                en: "Horizontal transport station",
                                ru: "Horizontal transport station"
                            },
                            link: "#"
                        },
                        {
                            text: {
                                en: "Washer-dryer",
                                ru: "Washer-dryer"
                            },
                            link: "#"
                        },
                    ]
                },
            ]
        },
        production: {
            title: {
                en: "Production",
                ru: "Production",
            },
            description: {
                en: "For over 60 years, MBR has been producing glass processing machines",
                ru: "For over 60 years, MBR has been producing glass processing machines",
            },
            videoSrc: video,
            poster: videoPoster.src
        },
        newsList: {
            title: {
                en: "News",
                ru: "News"
            },
            list: [
                {
                    date: {
                        en: "March 19, 2022",
                        ru: "March 19, 2022"
                    },
                    title: {
                        en: "We kept the space in front of the machine as free as possible for the operator and placed the robot behind the machine.",
                        ru: "We kept the space in front of the machine as free as possible for the operator and placed the robot behind the machine."
                    },
                    description: {
                        en: "By providing you with machinery, technology and expertise so you can truly stand out.",
                        ru: "By providing you with machinery, technology and expertise so you can truly stand out."
                    },
                    cover: news_cover_1.src
                },
                {
                    date: {
                        en: "March 19, 2022",
                        ru: "March 19, 2022"
                    },
                    title: {
                        en: "We kept the space in front of the machine as free as possible for the operator and placed the robot behind the machine.",
                        ru: "We kept the space in front of the machine as free as possible for the operator and placed the robot behind the machine."
                    },
                    description: {
                        en: "By providing you with machinery, technology and expertise so you can truly stand out.",
                        ru: "By providing you with machinery, technology and expertise so you can truly stand out."
                    },
                    cover: news_cover_3.src
                },
                {
                    date: {
                        en: "March 19, 2022",
                        ru: "March 19, 2022"
                    },
                    title: {
                        en: "The glass processing machines are manufactured in Austria. ",
                        ru: "The glass processing machines are manufactured in Austria. "
                    },
                    description: {
                        en: "By providing you with machinery, technology and expertise so you can truly stand out.",
                        ru: "By providing you with machinery, technology and expertise so you can truly stand out."
                    },
                    cover: news_cover_2.src
                },
                {
                    date: {
                        en: "March 19, 2022",
                        ru: "March 19, 2022"
                    },
                    title: {
                        en: "The glass processing machines are manufactured in Austria. ",
                        ru: "The glass processing machines are manufactured in Austria. "
                    },
                    description: {
                        en: "By providing you with machinery, technology and expertise so you can truly stand out.",
                        ru: "By providing you with machinery, technology and expertise so you can truly stand out."
                    },
                    cover: news_cover_4.src
                },
                {
                    date: {
                        en: "March 19, 2022",
                        ru: "March 19, 2022"
                    },
                    title: {
                        en: "The glass processing machines are manufactured in Austria. ",
                        ru: "The glass processing machines are manufactured in Austria. "
                    },
                    description: {
                        en: "By providing you with machinery, technology and expertise so you can truly stand out.",
                        ru: "By providing you with machinery, technology and expertise so you can truly stand out."
                    },
                    cover: news_cover_5.src
                },
                {
                    date: {
                        en: "March 19, 2022",
                        ru: "March 19, 2022"
                    },
                    title: {
                        en: "The glass processing machines are manufactured in Austria. ",
                        ru: "The glass processing machines are manufactured in Austria. "
                    },
                    description: {
                        en: "By providing you with machinery, technology and expertise so you can truly stand out.",
                        ru: "By providing you with machinery, technology and expertise so you can truly stand out."
                    },
                    cover: news_cover_5.src
                },
                {
                    date: {
                        en: "March 19, 2022",
                        ru: "March 19, 2022"
                    },
                    title: {
                        en: "The glass processing machines are manufactured in Austria. ",
                        ru: "The glass processing machines are manufactured in Austria. "
                    },
                    description: {
                        en: "By providing you with machinery, technology and expertise so you can truly stand out.",
                        ru: "By providing you with machinery, technology and expertise so you can truly stand out."
                    },
                    cover: news_cover_6.src
                },
                {
                    date: {
                        en: "March 19, 2022",
                        ru: "March 19, 2022"
                    },
                    title: {
                        en: "The glass processing machines are manufactured in Austria. ",
                        ru: "The glass processing machines are manufactured in Austria. "
                    },
                    description: {
                        en: "By providing you with machinery, technology and expertise so you can truly stand out.",
                        ru: "By providing you with machinery, technology and expertise so you can truly stand out."
                    },
                    cover: news_cover_6.src
                },
            ],
            button: {
                en: "See more",
                ru: "See more"
            }
        },
        footer: {
            logo: "MBR_GLASS CZ s.r.o.",
            address: [
                {
                    text: {
                        en: "Husova 1847/5",
                        ru: "Husova 1847/5"
                    }
                },
                {
                    text: {
                        en: "370 01 Ceske Budejovice",
                        ru: "370 01 Ceske Budejovice"
                    }
                },
                {
                    text: {
                        en: "Czech Republic",
                        ru: "Czech Republic"
                    }
                },
            ],
            contacts: [
                {
                    icon: phone_ico.src,
                    contact: "+420 602 726 998",
                    type: "phone"
                },
                {
                    icon: mail_ico.src,
                    contact: "office@mbr-glass.com",
                    type: "email"
                },
            ],
            links: [
                {
                    text: {
                        en: "Insulating Glass line",
                        ru: "Insulating Glass line"
                    },
                    link: "#"
                },
                {
                    text: {
                        en: "Float Glass Cutting Line",
                        ru: "Float Glass Cutting Line"
                    },
                    link: "#"
                },
                {
                    text: {
                        en: "Stand Alone Machines",
                        ru: "Stand Alone Machines"
                    },
                    link: "#"
                },
                {
                    text: {
                        en: "Glass Processing Line",
                        ru: "Glass Processing Line "
                    },
                    link: "#"
                },
            ],
            social: [
                {
                    icon: youtube.src,
                    link: "#"
                },
                {
                    icon: link_id.src,
                    link: "#"
                },
                {
                    icon: facebook.src,
                    link: "#"
                },
                {
                    icon: twitter.src,
                    link: "#"
                },
            ],
            policy: {
                en: "Website Privacy Policy",
                ru: "Website Privacy Policy",
                link: "#"
            },
            copyright: {
                en: "Copyright © 2022 - MBR",
                ru: "Copyright © 2022 - MBR"
            }
        }
    });


    return (
        <div className="container">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>MBR</title>
                <meta
                    name="description"
                    content="MBR"
                />
                {/*<link rel="icon" href="/favicon.ico" />*/}
                {/*<meta property="og:image" content={shareImage.src} />*/}
                {/*<meta property="og:image:type" content="image/jpeg" />*/}
                {/*<meta property="og:image:width" content="1920" />*/}
                {/*<meta property="og:image:height" content="1080" />*/}
            </Head>

            {!!content.header && !!content.navMenu &&
                <HeaderComponent
                    logo={content.header.logo}
                    switchLang={content.header.switchLang}
                    title={content.header.title}
                    menu={content.navMenu}
                />
            }

            {!!content.mainSlider && <MainHeroSliderComponent slider={content.mainSlider}/>}

            {!!content.benefit && !!content.benefitList &&
                <MainBenefitComponent
                    footnote={content.benefit.footnote}
                    title={content.benefit.title}
                    description={content.benefit.description}
                    experience={content.benefit.experience}
                    experienceText={content.benefit.experienceText}
                    image={content.benefit.image}
                    list={content.benefitList}
                />
            }
            {!!content.ourProducts &&
                <MainProductComponent
                    title={content.ourProducts.title}
                    scheme={content.ourProducts.scheme}
                    schemeList={content.ourProducts.schemeList}
                    subtitle={content.ourProducts.subtitle}
                    description={content.ourProducts.description}
                    accordion={content.ourProducts.accordion}
                />
            }

            {!!content.production &&
                <CommonVideoComponent
                    title={content.production.title}
                    description={content.production.description}
                    poster={content.production.poster}
                    video={content.production.videoSrc}
                />
            }

            {!!content.newsList &&
                <MainNewsComponent
                    title={content.newsList.title}
                    list={content.newsList.list}
                    button={content.newsList.button}
                />
            }

            {!!content.footer &&
                <FooterComponent
                    logo={content.footer.logo}
                    address={content.footer.address}
                    contacts={content.footer.contacts}
                    links={content.footer.links}
                    social={content.footer.social}
                    policy={content.footer.policy}
                    copyright={content.footer.copyright}
                    menu={content.navMenu}
                />
            }
        </div>
    )
}

export default Index;