import Head from 'next/head'
import React, {useState} from "react";
import HeaderComponent from "../src/components/header/HeaderComponent";
import FooterComponent from "../src/components/footer/FooterComponent";
import CommonHeroComponent from "../src/components/commonHero/CommonHeroComponent";
import heroAbout from "../src/constants/heroAboutContent";
import AboutAttitudeComponent from "../src/components/aboutAttitude/AboutAttitudeComponent";
import AboutKnowledgeComponent from "../src/components/aboutKnowledge/AboutKnowledgeComponent";
import AboutHistoryComponent from "../src/components/aboutHistory/AboutHistoryComponent";
import CommonVideoComponent from "../src/components/commonVideo/CommonVideoComponent";
import aboutUsVideoContent from "../src/constants/aboutUsVideoContent";
import AboutEcologyContent from "../src/components/aboutEcology/AboutEcologyComponent";
import AboutCertificatesComponent from "../src/components/aboutCertificates/AboutCertificatesComponent";
import logo from "../public/images/logo.svg";
import phone_ico from "../public/images/icons/phone.svg";
import mail_ico from "../public/images/icons/mail.svg";
import youtube from "../public/images/icons/youtube.svg";
import link_id from "../public/images/icons/linkid.svg";
import facebook from "../public/images/icons/facebook.svg";
import twitter from "../public/images/icons/twitter.svg";
import background from "../public/images/about-hero.jpg";
import backgroundKnowledge from "../public/images/knowledgeBG.jpg";
import imageContent from "../public/images/history.jpg";
import videoPoster from "../public/images/video-poster2.jpg";
import logoEcology from "../public/images/logo-ecology.png";
import backgroundEcology from "../public/images/ecology-BG.jpg";
import certificate_1 from "../public/images/certificate-1.jpg";
import certificate_2 from "../public/images/certificate-2.jpg";
import certificate_3 from "../public/images/certificate-3.jpg";

const About = ({openModal}) => {
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
        aboutHero: {
            title: {
                en: "About Us",
                ru: "About Us"
            },
            description: {
                en: "maschinen buro radovanovic",
                ru: "maschinen buro radovanovic"
            },
            image: background.src
        },
        attitudeList: [
            {
                title: {
                    en: "Values",
                    ru: "Values"
                },
                list: [
                    {
                        text: {
                            en: "Flexibility and individual approach",
                            ru: "Flexibility and individual approach"
                        }
                    }, {
                        text: {
                            en: "Attention to detail",
                            ru: "Attention to detail"
                        }
                    },
                    {
                        text: {
                            en: "Trusting relationship",
                            ru: "Trusting relationship"
                        }
                    }
                ]
            },
            {
                title: {
                    en: "Strengths",
                    ru: "Strengths"
                },
                list: [
                    {
                        text: {
                            en: "Technological expertise",
                            ru: "Technological expertise"
                        }
                    },
                    {
                        text: {
                            en: "Knowledge of customer needs",
                            ru: "Knowledge of customer needs"
                        }
                    },
                    {
                        text: {
                            en: "Thirst for innovation",
                            ru: "Thirst for innovation"
                        }
                    },
                    {
                        text: {
                            en: "Business Oriented Approach",
                            ru: "Business Oriented Approach"
                        }
                    },
                    {
                        text: {
                            en: "Established relationships with suppliers",
                            ru: "Established relationships with suppliers"
                        }
                    },
                ]
            },
        ],
        knowledge: {
            description: {
                en: "We have enough experience and knowledge of technology and innovation to offer a unique and effective solution.",
                ru: "We have enough experience and knowledge of technology and innovation to offer a unique and effective solution."
            },
            button: {
                en: "Call to action",
                ru: "Call to action"
            },
            image: backgroundKnowledge.src
        },
        history: {
            title: {
                en: "History",
                ru: "History"
            },
            tabs: [
                {
                    name: 1987,
                    content: {
                        title: {
                            en: "Glass processing machines for insulating (1987)",
                            ru: "Glass processing machines for insulating (1987)",
                        },
                        image: imageContent.src,
                        description: [
                            {
                                text: {
                                    en: "By providing you with machinery, technology and expertise so you can truly stand out.",
                                    ru: "By providing you with machinery, technology and expertise so you can truly stand out."
                                }
                            },
                            {
                                text: {
                                    en: "We are committed to helping you achieve success in your chosen area of glass processing.",
                                    ru: "We are committed to helping you achieve success in your chosen area of glass processing."
                                }
                            },
                            {
                                text: {
                                    en: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass.",
                                    ru: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass."
                                }
                            },
                        ]
                    }
                },
                {
                    name: 1988,
                    content: {
                        title: {
                            en: "Glass processing machines for insulating (1988)",
                            ru: "Glass processing machines for insulating (1988)",
                        },
                        image: imageContent.src,
                        description: [
                            {
                                text: {
                                    en: "By providing you with machinery, technology and expertise so you can truly stand out.",
                                    ru: "By providing you with machinery, technology and expertise so you can truly stand out."
                                }
                            },
                            {
                                text: {
                                    en: "We are committed to helping you achieve success in your chosen area of glass processing.",
                                    ru: "We are committed to helping you achieve success in your chosen area of glass processing."
                                }
                            },
                            {
                                text: {
                                    en: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass.",
                                    ru: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass."
                                }
                            },
                        ]
                    }
                },
                {
                    name: 1990,
                    content: {
                        title: {
                            en: "Glass processing machines for insulating (1990)",
                            ru: "Glass processing machines for insulating (1990)",
                        },
                        image: imageContent.src,
                        description: [
                            {
                                text: {
                                    en: "By providing you with machinery, technology and expertise so you can truly stand out.",
                                    ru: "By providing you with machinery, technology and expertise so you can truly stand out."
                                }
                            },
                            {
                                text: {
                                    en: "We are committed to helping you achieve success in your chosen area of glass processing.",
                                    ru: "We are committed to helping you achieve success in your chosen area of glass processing."
                                }
                            },
                            {
                                text: {
                                    en: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass.",
                                    ru: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass."
                                }
                            },
                        ]
                    }
                },
                {
                    name: 1992,
                    content: {
                        title: {
                            en: "Glass processing machines for insulating (1992)",
                            ru: "Glass processing machines for insulating (1992)",
                        },
                        image: imageContent.src,
                        description: [
                            {
                                text: {
                                    en: "By providing you with machinery, technology and expertise so you can truly stand out.",
                                    ru: "By providing you with machinery, technology and expertise so you can truly stand out."
                                }
                            },
                            {
                                text: {
                                    en: "We are committed to helping you achieve success in your chosen area of glass processing.",
                                    ru: "We are committed to helping you achieve success in your chosen area of glass processing."
                                }
                            },
                            {
                                text: {
                                    en: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass.",
                                    ru: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass."
                                }
                            },
                        ]
                    }
                },
                {
                    name: 1995,
                    content: {
                        title: {
                            en: "Glass processing machines for insulating (1995)",
                            ru: "Glass processing machines for insulating (1995)",
                        },
                        image: imageContent.src,
                        description: [
                            {
                                text: {
                                    en: "By providing you with machinery, technology and expertise so you can truly stand out.",
                                    ru: "By providing you with machinery, technology and expertise so you can truly stand out."
                                }
                            },
                            {
                                text: {
                                    en: "We are committed to helping you achieve success in your chosen area of glass processing.",
                                    ru: "We are committed to helping you achieve success in your chosen area of glass processing."
                                }
                            },
                            {
                                text: {
                                    en: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass.",
                                    ru: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass."
                                }
                            },
                        ]
                    }
                },
                {
                    name: 2000,
                    content: {
                        title: {
                            en: "Glass processing machines for insulating (2000)",
                            ru: "Glass processing machines for insulating (2000)",
                        },
                        image: imageContent.src,
                        description: [
                            {
                                text: {
                                    en: "By providing you with machinery, technology and expertise so you can truly stand out.",
                                    ru: "By providing you with machinery, technology and expertise so you can truly stand out."
                                }
                            },
                            {
                                text: {
                                    en: "We are committed to helping you achieve success in your chosen area of glass processing.",
                                    ru: "We are committed to helping you achieve success in your chosen area of glass processing."
                                }
                            },
                            {
                                text: {
                                    en: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass.",
                                    ru: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass."
                                }
                            },
                        ]
                    }
                },
                {
                    name: 2015,
                    content: {
                        title: {
                            en: "Glass processing machines for insulating (2015)",
                            ru: "Glass processing machines for insulating (2015)",
                        },
                        image: imageContent.src,
                        description: [
                            {
                                text: {
                                    en: "By providing you with machinery, technology and expertise so you can truly stand out.",
                                    ru: "By providing you with machinery, technology and expertise so you can truly stand out."
                                }
                            },
                            {
                                text: {
                                    en: "We are committed to helping you achieve success in your chosen area of glass processing.",
                                    ru: "We are committed to helping you achieve success in your chosen area of glass processing."
                                }
                            },
                            {
                                text: {
                                    en: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass.",
                                    ru: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass."
                                }
                            },
                        ]
                    }
                },
                {
                    name: 2022,
                    content: {
                        title: {
                            en: "Glass processing machines for insulating (2022)",
                            ru: "Glass processing machines for insulating (2022)",
                        },
                        image: imageContent.src,
                        description: [
                            {
                                text: {
                                    en: "By providing you with machinery, technology and expertise so you can truly stand out.",
                                    ru: "By providing you with machinery, technology and expertise so you can truly stand out."
                                }
                            },
                            {
                                text: {
                                    en: "We are committed to helping you achieve success in your chosen area of glass processing.",
                                    ru: "We are committed to helping you achieve success in your chosen area of glass processing."
                                }
                            },
                            {
                                text: {
                                    en: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass.",
                                    ru: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass."
                                }
                            },
                        ]
                    }
                },
            ]
        },
        aboutVideo: {
            title: {
                en: "About Us",
                ru: "About Us"
            },
            poster: videoPoster.src,
            videoSrc: ""
        },
        ecology: {
            title: {
                en: "Ecology",
                ru: "Ecology"
            },
            description: [
                {
                    text: {
                        en: "We have enough experience and knowledge of technology and innovation to offer a unique and effective solution.",
                        ru: "We have enough experience and knowledge of technology and innovation to offer a unique and effective solution."
                    }
                },
                {
                    text: {
                        en: "We are committed to helping you achieve success in your chosen area of glass processing.",
                        ru: "We are committed to helping you achieve success in your chosen area of glass processing."
                    }
                },
                {
                    text: {
                        en: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass.",
                        ru: "We’re passionate about innovating the next level in world-class technology, dedicated services and technical support, so you get the highest production energy efficiency and best end glass quality. We offer you our expertise to inspire potential and open up exciting opportunities in glass."
                    }
                },
            ],
            logo: logoEcology.src,
            image: backgroundEcology.src
        },
        certificates: {
            title: {
                en: "Сertificates",
                ru: "Сertificates"
            },
            list: [
                {
                    image: certificate_1.src
                },
                {
                    image: certificate_2.src
                },
                {
                    image: certificate_1.src
                },
                {
                    image: certificate_2.src
                },
                {
                    image: certificate_3.src
                },
                {
                    image: certificate_1.src
                },
                {
                    image: certificate_2.src
                },
                {
                    image: certificate_3.src
                },
            ]
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

            {!!content.aboutHero &&
                <CommonHeroComponent
                    title={content.aboutHero.title}
                    description={content.aboutHero.description}
                    image={content.aboutHero.image}
                />
            }

            {!!content.attitudeList && <AboutAttitudeComponent content={content.attitudeList}/>}

            {!!content.knowledge &&
                <AboutKnowledgeComponent
                    openModal={openModal}
                    description={content.knowledge.description}
                    button={content.knowledge.button}
                    image={content.knowledge.image}
                />
            }

            {!!content.history &&
                <AboutHistoryComponent title={content.history.title} tabs={content.history.tabs}/>
            }

            {!!content.aboutVideo &&
                <CommonVideoComponent
                    title={content.aboutVideo.title}
                    poster={content.aboutVideo.poster}
                    video={content.aboutVideo.videoSrc}
                />
            }

            {!!content.ecology &&
                <AboutEcologyContent
                    title={content.ecology.title}
                    description={content.ecology.description}
                    logo={content.ecology.logo}
                    image={content.ecology.image}
                />
            }
            {!!content.certificates &&
                <AboutCertificatesComponent
                    title={content.certificates.title}
                    list={content.certificates.list}
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

export default About;
