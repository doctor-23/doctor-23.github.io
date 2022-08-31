import Head from 'next/head'
import React, {useState} from "react";
import HeaderComponent from "../src/components/header/HeaderComponent";
import FooterComponent from "../src/components/footer/FooterComponent";
import DetailHeroComponent from "../src/components/detailHeroComponent/DetailHeroComponent";
import ProductMoreComponent from "../src/components/productMore/ProductMoreComponent";
import ProductMoreBenefitComponent from "../src/components/productMoreBenefit/ProductMoreBenefitComponent";
import ProductMoreInformationComponent from "../src/components/productMoreInformation/ProductMoreInformationComponent";
import logo from "../public/images/logo.svg";
import background from "../public/images/product-more-hero.jpg";
import phone_ico from "../public/images/icons/phone.svg";
import mail_ico from "../public/images/icons/mail.svg";
import youtube from "../public/images/icons/youtube.svg";
import link_id from "../public/images/icons/linkid.svg";
import facebook from "../public/images/icons/facebook.svg";
import twitter from "../public/images/icons/twitter.svg";
import image from "../public/images/product-more.jpg";
import image_one from "../public/images/product-more-1.jpg";
import image_two from "../public/images/product-more-2.jpg";

const ProductMore = () => {
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
        productMoreHero: {
            linkText: {
                en: "Back",
                ru: "Back",
                link: "#"
            },
            image: background.src
        },
        product: {
            title: {
                en: "Transport conveyor",
                ru: "Transport conveyor"
            },
            description: [
                {
                    text: {
                        en: "Fully automatic machine for grinding, matting and seaming of cut glass pieces. We go with Industry 4 and use robot tecnology. In order to grind the glass pieces to size, we have used our own spindle for this process. We use different tools to guarantee optimal quality. The machine can be used either for wet or dry operation.",
                        ru: "Fully automatic machine for grinding, matting and seaming of cut glass pieces. We go with Industry 4 and use robot tecnology. In order to grind the glass pieces to size, we have used our own spindle for this process. We use different tools to guarantee optimal quality. The machine can be used either for wet or dry operation."
                    },
                },
                {
                    text: {
                        en: "Of course, the grinding is only done wet. We kept the space in front of the machine as free as possible for the operator and placed the robot behind the machine. of course, this position can be selected optionally and specifically for the customer.",
                        ru: "Of course, the grinding is only done wet. We kept the space in front of the machine as free as possible for the operator and placed the robot behind the machine. of course, this position can be selected optionally and specifically for the customer."
                    },
                },
            ],
            callText: {
                en: "Call to action",
                ru: "Call to action"
            },
            productImage: image.src,
            download: [
                {
                    link: "#",
                    text: {
                        en: "DOWNLOADS",
                        ru: "DOWNLOADS"
                    },
                }
            ]
        },
        productBenefits: {
            title: {
                en: "Highlights the benefits",
                ru: "Highlights the benefits"
            },
            list: [
                {
                    text: {
                        en: "Compact construction",
                        ru: "Compact construction"
                    }
                },
                {
                    text: {
                        en: "Self-cleaning gap-type filter system in the washing zone area",
                        ru: "Self-cleaning gap-type filter system in the washing zone area"
                    }
                },
                {
                    text: {
                        en: "Stainless steel design with integrated sound-insulated drying zone",
                        ru: "Stainless steel design with integrated sound-insulated drying zone"
                    }
                },
                {
                    text: {
                        en: "Infinitely variable glass thickness and washing speed",
                        ru: "Infinitely variable glass thickness and washing speed"
                    }
                },
                {
                    text: {
                        en: "Energy-efficient washing and drying of glass sheets",
                        ru: "Energy-efficient washing and drying of glass sheets"
                    }
                },
                {
                    text: {
                        en: "Freely accessible machine maintenance areas for service activities",
                        ru: "Freely accessible machine maintenance areas for service activities"
                    }
                },
                {
                    text: {
                        en: "Automatic machine warm-up function",
                        ru: "Automatic machine warm-up function"
                    }
                },
                {
                    text: {
                        en: "Further extensive optional function extensions available",
                        ru: "Further extensive optional function extensions available"
                    }
                },
            ]
        },
        productInformation: [
            {
                image: image_one.src,
                title: {
                    en: "Profile",
                    ru: "Profile"
                },
                list: [
                    {
                        text: {
                            en: "Wheels 8",
                            ru: "Wheels 8"
                        },
                    },
                    {
                        text: {
                            en: "Power 21kW",
                            ru: "Power 21kW"
                        },
                    },
                    {
                        text: {
                            en: "Glass Thickness 3-40mm",
                            ru: "Glass Thickness 3-40mm"
                        },
                    },
                    {
                        text: {
                            en: "Speed 0.5 to 5m/min",
                            ru: "Speed 0.5 to 5m/min"
                        },
                    },
                    {
                        text: {
                            en: "Minimum Height 50mm",
                            ru: "Minimum Height 50mm"
                        },
                    },
                    {
                        text: {
                            en: "Glass Weight 250kg/linear metre",
                            ru: "Glass Weight 250kg/linear metre"
                        },
                    },
                    {
                        text: {
                            en: "Machine Dimensions 7150 x 1200 x 2350mm (LxWxH)",
                            ru: "Machine Dimensions 7150 x 1200 x 2350mm (LxWxH)"
                        },
                    },
                    {
                        text: {
                            en: "Machine Weight 3800kg",
                            ru: "Machine Weight 3800kg"
                        },
                    },
                ],
                isDarken: true,
                isStretch: false,
            },
            {
                image: image_two.src,
                title: {
                    en: "Options",
                    ru: "Options"
                },
                list: [
                    {
                        text: {
                            en: "Transport and turn tables for automatic supply of double-glazed",
                            ru: "Transport and turn tables for automatic supply of double-glazed"
                        },
                    },
                    {
                        text: {
                            en: "Stationary demineralizer",
                            ru: "Stationary demineralizer"
                        },
                    },
                    {
                        text: {
                            en: "Fully stainless steel",
                            ru: "Fully stainless steel"
                        },
                    },
                    {
                        text: {
                            en: "200 Fast and effective cleaning with one-piece brushes",
                            ru: "200 Fast and effective cleaning with one-piece brushes"
                        },
                    },
                    {
                        text: {
                            en: "Retreat of the front stiff brush for washing coated glass",
                            ru: "Retreat of the front stiff brush for washing coated glass"
                        },
                    },
                    {
                        text: {
                            en: "Position of front brush and nozzle dryer can be adjusted according",
                            ru: "Position of front brush and nozzle dryer can be adjusted according"
                        },
                    },
                    {
                        text: {
                            en: "Mechanical quartz water filter",
                            ru: "Mechanical quartz water filter"
                        },
                    },
                    {
                        text: {
                            en: "Prewash",
                            ru: "Prewash"
                        },
                    },
                ],
                isDarken: false,
                isStretch: true,
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
            {!!content.productMoreHero &&
                <DetailHeroComponent
                    link={content.productMoreHero.linkText}
                    image={content.productMoreHero.image}
                />
            }

            {!!content.product &&
                <ProductMoreComponent
                    title={content.product.title}
                    description={content.product.description}
                    callText={content.product.callText}
                    productImage={content.product.productImage}
                    download={content.product.download}
                />
            }

            {!!content.productBenefits &&
                <ProductMoreBenefitComponent
                    title={content.productBenefits.title}
                    list={content.productBenefits.list}
                />
            }

            {!!content.productInformation &&
                <ProductMoreInformationComponent content={content.productInformation}/>
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

export default ProductMore;