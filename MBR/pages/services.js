import Head from 'next/head'
import React, {useState} from "react";
import HeaderComponent from "../src/components/header/HeaderComponent";
import CommonHeroComponent from "../src/components/commonHero/CommonHeroComponent";
import heroServicesContent from "../src/constants/heroServicesContent";
import ServicesListComponent from "../src/components/servicesList/ServicesListComponent";
import ServicesAboutComponent from "../src/components/servicesAbout/ServicesAboutComponent";
import FooterComponent from "../src/components/footer/FooterComponent";
import logo from "../public/images/logo.svg";
import background from "../public/images/services-hero.jpg";
import phone_ico from "../public/images/icons/phone.svg";
import mail_ico from "../public/images/icons/mail.svg";
import youtube from "../public/images/icons/youtube.svg";
import link_id from "../public/images/icons/linkid.svg";
import facebook from "../public/images/icons/facebook.svg";
import twitter from "../public/images/icons/twitter.svg";
import image_1 from "../public/images/services-list.jpg";
import image_2 from "../public/images/services-list-2.jpg";
import image_3 from "../public/images/services-list-3.jpg";
import image_4 from "../public/images/services-list-4.jpg";
import image_5 from "../public/images/services-list-5.jpg";
import image_6 from "../public/images/services-list-6.jpg";
import aboutLogo from "../public/images/icons/big_logo.svg";
import aboutBackground from "../public/images/services-about-bg.jpg";
import benefit_dark_1 from "../public/images/icons/benefit-dark-1.svg";
import benefit_light_1 from "../public/images/icons/benefit-light-1.svg";
import benefit_dark_2 from "../public/images/icons/benefit-dark-2.svg";
import benefit_light_2 from "../public/images/icons/benefit-light-2.svg";
import benefit_dark_3 from "../public/images/icons/benefit-dark-3.svg";
import benefit_light_3 from "../public/images/icons/benefit-light-3.svg";

const Services = ({openModal}) => {
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
        servicesHero: {
            title: {
                en: "Services",
                ru: "Services"
            },
            description: {
                en: "we care about your problem!",
                ru: "we care about your problem!"
            },
            image: background.src
        },
        list: [
            {
                title: {
                    en: "Main services",
                    ru: "Main services"
                },
                link: "#",
                image: image_1.src,
            },
            {
                title: {
                    en: "SPARE PARTS",
                    ru: "SPARE PARTS"
                },
                link: "#",
                image: image_2.src,
            },
            {
                title: {
                    en: "TECHNICAL ASSISTANCE AND MAINTENANCE INTERVENTION",
                    ru: "TECHNICAL ASSISTANCE AND MAINTENANCE INTERVENTION"
                },
                link: "#",
                image: image_3.src,
            },
            {
                title: {
                    en: "TECHNICAL ON-LINE SUPPORT",
                    ru: "TECHNICAL ON-LINE SUPPORT"
                },
                link: "#",
                image: image_4.src,
            },
            {
                title: {
                    en: "CUSTOMERS/AGENTS TRAINING",
                    ru: "CUSTOMERS/AGENTS TRAINING"
                },
                link: "#",
                image: image_5.src,
            },
            {
                title: {
                    en: "CUSTOMERS/AGENTS TRAINING",
                    ru: "CUSTOMERS/AGENTS TRAINING"
                },
                link: "#",
                image: image_6.src,
            },
        ],
        servicesAbout: {
            logo: aboutLogo.src,
            background: aboutBackground.src,
            description: {
                en: "MBR Service was expressly conceived for our customer’s needs and we use the most advanced technologies making an interface connection directly on-line so that we drive all the operations and the modifications from our headquarters to the operating panel of the machine.",
                ru: "MBR Service was expressly conceived for our customer’s needs and we use the most advanced technologies making an interface connection directly on-line so that we drive all the operations and the modifications from our headquarters to the operating panel of the machine."
            },
            footnote: {
                en: "The service department was expressly conceived for our customer's needs and we use the most advanced technologies making an interface connection directly on-line.",
                ru: "The service department was expressly conceived for our customer's needs and we use the most advanced technologies making an interface connection directly on-line."
            },
            call: {
                en: "Call to action",
                ru: "Call to action"
            },
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

            {!!content.servicesHero &&
                <CommonHeroComponent
                    title={content.servicesHero.title}
                    description={content.servicesHero.description}
                    image={content.servicesHero.image}
                />
            }

            {!!content.list &&
                <ServicesListComponent content={content.list}/>
            }

            {!!content.servicesAbout && !!content.benefitList &&
                <ServicesAboutComponent
                    openModal={openModal}
                    logo={content.servicesAbout.logo}
                    background={content.servicesAbout.background}
                    description={content.servicesAbout.description}
                    footnote={content.servicesAbout.footnote}
                    call={content.servicesAbout.call}
                    benefitList={content.benefitList}
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

export default Services;
