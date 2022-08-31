import Head from 'next/head'
import React, {useState} from "react";
import HeaderComponent from "../src/components/header/HeaderComponent";
import FooterComponent from "../src/components/footer/FooterComponent";
import DetailHeroComponent from "../src/components/detailHeroComponent/DetailHeroComponent"
import DetailNewsComponent from "../src/components/detailNewsComponent/DetailNewsComponent";
import logo from "../public/images/logo.svg";
import background from "../public/images/detail-news-hero.jpg";
import phone_ico from "../public/images/icons/phone.svg";
import mail_ico from "../public/images/icons/mail.svg";
import youtube from "../public/images/icons/youtube.svg";
import link_id from "../public/images/icons/linkid.svg";
import facebook from "../public/images/icons/facebook.svg";
import twitter from "../public/images/icons/twitter.svg";
import img from "../public/images/detail-news.jpg";
import poster from "../public/images/poster-on-detail.jpg";

const NewDetail = () => {
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
        newsDetailHero: {
            linkText: {
                en: "Back",
                ru: "Back"
            },
            link: "#",
            image: background.src
        },
        detail: {
            date: {
                en: "March 19, 2022",
                ru: "March 19, 2022"
            },
            title: {
                en: "We kept the space in front of the machine as free as possible for the operator and placed the robot behind the machine.",
                ru: "We kept the space in front of the machine as free as possible for the operator and placed the robot behind the machine."
            },
            image: img.src,
            description: [
                {
                    text: {
                        en: "By providing you with machinery, technology and expertise so you can truly stand out. We are committed to helping you achieve success in your chosen area of glass processing.",
                        ru: "By providing you with machinery, technology and expertise so you can truly stand out. We are committed to helping you achieve success in your chosen area of glass processing."
                    }
                },
                {
                    text: {
                        en: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass. By providing you with machinery, technology and expertise so you can truly stand out. We are committed to helping you achieve success in your chosen area of glass processing.",
                        ru: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass. By providing you with machinery, technology and expertise so you can truly stand out. We are committed to helping you achieve success in your chosen area of glass processing."
                    }
                },
                {
                    text: {
                        en: "By providing you with machinery, technology and expertise so you can truly stand out. We are committed to helping you achieve success in your chosen area of glass processing.",
                        ru: "By providing you with machinery, technology and expertise so you can truly stand out. We are committed to helping you achieve success in your chosen area of glass processing."
                    }
                },
                {
                    text: {
                        en: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass. By providing you with machinery, technology and expertise so you can truly stand out. We are committed to helping you achieve success in your chosen area of glass processing.",
                        ru: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass. By providing you with machinery, technology and expertise so you can truly stand out. We are committed to helping you achieve success in your chosen area of glass processing."
                    }
                },
                {
                    text: {
                        en: "By providing you with machinery, technology and expertise so you can truly stand out. We are committed to helping you achieve success in your chosen area of glass processing.",
                        ru: "By providing you with machinery, technology and expertise so you can truly stand out. We are committed to helping you achieve success in your chosen area of glass processing."
                    }
                },
                {
                    text: {
                        en: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass. By providing you with machinery, technology and expertise so you can truly stand out. We are committed to helping you achieve success in your chosen area of glass processing.",
                        ru: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass. By providing you with machinery, technology and expertise so you can truly stand out. We are committed to helping you achieve success in your chosen area of glass processing."
                    }
                },
            ],
            blockquote: {
                en: "We kept the space in front of the machine as free as possible for the operator and placed the robot behind the machine.",
                ru: "We kept the space in front of the machine as free as possible for the operator and placed the robot behind the machine."
            },
            share: {
                en: "share",
                ru: "share"
            },
            poster: poster.src
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
            {!!content.newsDetailHero &&
                <DetailHeroComponent
                    link={content.newsDetailHero.linkText}
                    image={content.newsDetailHero.image}
                />
            }

            {!!content.detail &&
                <DetailNewsComponent
                    date={content.detail.date}
                    title={content.detail.title}
                    image={content.detail.image}
                    description={content.detail.description}
                    blockquote={content.detail.blockquote}
                    share={content.detail.share}
                    poster={content.detail.poster}
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

export default NewDetail;