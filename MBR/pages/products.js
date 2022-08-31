import Head from 'next/head'
import React, {useState} from "react";
import HeaderComponent from "../src/components/header/HeaderComponent";
import FooterComponent from "../src/components/footer/FooterComponent";
import CommonHeroComponent from "../src/components/commonHero/CommonHeroComponent";
import OurProductsListComponent from "../src/components/ourProductsList/OurProductsListComponent";
import logo from "../public/images/logo.svg";
import background from "../public/images/our-products-hero.jpg";
import phone_ico from "../public/images/icons/phone.svg";
import mail_ico from "../public/images/icons/mail.svg";
import youtube from "../public/images/icons/youtube.svg";
import link_id from "../public/images/icons/linkid.svg";
import facebook from "../public/images/icons/facebook.svg";
import twitter from "../public/images/icons/twitter.svg";
import image from "../public/images/productScheme.png";

const Products = () => {
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
        productsHero: {
            title: {
                en: "Our products",
                ru: "Our products"
            },
            description: {
                en: "maschinen buro radovanovic",
                ru: "maschinen buro radovanovic"
            },
            image: background.src
        },
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

            {!!content.productsHero &&
                <CommonHeroComponent
                    title={content.productsHero.title}
                    description={content.productsHero.description}
                    image={content.productsHero.image}
                />
            }

            {!!content.ourProducts &&
                <OurProductsListComponent
                    scheme={content.ourProducts.scheme}
                    schemeList={content.ourProducts.schemeList}
                    subtitle={content.ourProducts.subtitle}
                    description={content.ourProducts.description}
                    accordion={content.ourProducts.accordion}
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

export default Products;