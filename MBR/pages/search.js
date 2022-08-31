import Head from 'next/head'
import React, {useState} from "react";
import HeaderComponent from "../src/components/header/HeaderComponent";
import DetailHeroComponent from "../src/components/detailHeroComponent/DetailHeroComponent";
import SearchComponent from "../src/components/search/SearchComponent";
import FooterComponent from "../src/components/footer/FooterComponent";
import logo from "../public/images/logo.svg";
import background from "../public/images/search-hero.jpg";
import phone_ico from "../public/images/icons/phone.svg";
import mail_ico from "../public/images/icons/mail.svg";
import youtube from "../public/images/icons/youtube.svg";
import link_id from "../public/images/icons/linkid.svg";
import facebook from "../public/images/icons/facebook.svg";
import twitter from "../public/images/icons/twitter.svg";

const Search = ({openModal}) => {
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
        searchHero: {
            linkText: {
                en: "Search",
                ru: "Search",
                link: ""
            },
            image: background.src
        },
        search: {
            title: {
                en: "We’re sorry, we couldn’t find results for your search: 32fff",
                ru: "We’re sorry, we couldn’t find results for your search: 32fff"
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
            {!!content.searchHero &&
                <DetailHeroComponent
                    link={content.searchHero.linkText}
                    image={content.searchHero.image}
                />
            }

            {!!content.search &&
                <SearchComponent title={content.search.title}/>
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

export default Search;
