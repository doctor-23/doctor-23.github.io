import Head from 'next/head'
import React, {useState} from "react";
import HeaderComponent from "../src/components/header/HeaderComponent";
import FooterComponent from "../src/components/footer/FooterComponent";
import CommonHeroComponent from "../src/components/commonHero/CommonHeroComponent";
import NewsListComponent from "../src/components/newsList/NewsListComponent"
import logo from "../public/images/logo.svg";
import background from "../public/images/news-hero.jpg";
import phone_ico from "../public/images/icons/phone.svg";
import mail_ico from "../public/images/icons/mail.svg";
import youtube from "../public/images/icons/youtube.svg";
import link_id from "../public/images/icons/linkid.svg";
import facebook from "../public/images/icons/facebook.svg";
import twitter from "../public/images/icons/twitter.svg";
import news_cover_1 from "../public/images/news-cover.jpg";
import news_cover_3 from "../public/images/news-cover-4.jpg";
import news_cover_2 from "../public/images/news-cover-1.jpg";
import news_cover_4 from "../public/images/news-cover-5.jpg";
import news_cover_5 from "../public/images/news-cover-6.jpg";
import news_cover_6 from "../public/images/news-cover-7.jpg";

const News = () => {
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
        newsHero: {
            title: {
                en: "News",
                ru: "News"
            },
            description: {
                en: "Our mission is to make your glass outstanding",
                ru: "Our mission is to make your glass outstanding"
            },
            image: background.src
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
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

            {!!content.newsHero &&
                <CommonHeroComponent
                    title={content.newsHero.title}
                    description={content.newsHero.description}
                    image={content.newsHero.image}
                />
            }

            {!!content.newsList &&
                <NewsListComponent content={content.newsList}/>
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

export default News;