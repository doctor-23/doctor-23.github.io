import Head from 'next/head'
import React, {useState} from "react";
import HeaderComponent from "../src/components/header/HeaderComponent";
import FooterComponent from "../src/components/footer/FooterComponent";
import CommonHeroComponent from "../src/components/commonHero/CommonHeroComponent";
import ContactsFormComponent from "../src/components/contactsForm/ContactsFormComponent";
import ContactsAdressesComponent from "../src/components/contactsAdresses/ContactsAdressesComponent";
import logo from "../public/images/logo.svg";
import background from "../public/images/contacts-hero.jpg";
import phone_ico from "../public/images/icons/phone.svg";
import mail_ico from "../public/images/icons/mail.svg";
import youtube from "../public/images/icons/youtube.svg";
import link_id from "../public/images/icons/linkid.svg";
import facebook from "../public/images/icons/facebook.svg";
import twitter from "../public/images/icons/twitter.svg";
import managerPhoto from "../public/images/manager.png";
import image from "../public/images/map.jpg";

const Contacts = ({openModal}) => {
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
        contactsHero: {
            title: {
                en: "Contacts",
                ru: "Contacts"
            },
            description: {
                en: "Contact us about anything related to our company or services.",
                ru: "Contact us about anything related to our company or services."
            },
            image: background.src
        },
        contactsManager: {
            leftTitle: {
                en: "Please contact me",
                ru: "Please contact me"
            },
            managerPhoto: managerPhoto.src,
            manager: [
                {
                    text: {
                        en: "Maryy Shum",
                        ru: "Maryy Shum"
                    }
                },
                {
                    text: {
                        en: "Managing Director",
                        ru: "Managing Director"
                    }
                },
                {
                    text: {
                        en: "Accomplished with turnkey installations.",
                        ru: "Accomplished with turnkey installations."
                    }
                },
            ],
            managerCall: {
                en: "your contact person",
                ru: "your contact person"
            },
            rightTitle: {
                en: "Contact us",
                ru: "Contact us"
            },
        },
        contactsForm: [
            {
                label: {
                    en: "Your Name",
                    ru: "Your Name"
                },
                type: "text",
                required: true,
            },
            {
                label: {
                    en: "Phone number",
                    ru: "Phone number"
                },
                type: "tel",
                required: false,
            },
            {
                label: {
                    en: "Email",
                    ru: "Email"
                },
                type: "email",
                required: true,
            },
            {
                label: {
                    en: "Your Company",
                    ru: "Your Company"
                },
                type: "text",
                required: true,
            },
            {
                label: {
                    en: "Your question",
                    ru: "Your question"
                },
                type: "text",
                required: true,
            },
            {
                label: {
                    en: "Send message",
                    ru: "Send message"
                },
                type: "submit",

            },
        ],
        connection: {
            title: {
                en: "Address",
                ru: "Address",
            },
            addresses: [
                {
                    text: {
                        en: "Flat Glass Solutions",
                        ru: "Flat Glass Solutions",
                    },
                },
                {
                    text: {
                        en: "Suite 2, April Cottage",
                        ru: "Suite 2, April Cottage",
                    },
                },
                {
                    text: {
                        en: "Ashfield Road",
                        ru: "Ashfield Road",
                    },
                },
                {
                    text: {
                        en: "Norton",
                        ru: "Norton",
                    },
                },
                {
                    text: {
                        en: "Bury St Edmunds IP31 3NJ",
                        ru: "Bury St Edmunds IP31 3NJ",
                    },
                },
            ],
            contacts: [
                {
                    text: {
                        en: "Tel: ",
                        ru: "Tel: ",
                    },
                    content: "00 44 (0)7887 837508",
                    type: "tel"
                },
                {
                    text: {
                        en: "Office: ",
                        ru: "Office: ",
                    },
                    content: "00 44 (0)1359 256143",
                    type: "tel"
                },
                {
                    text: {
                        en: "email: ",
                        ru: "email: ",
                    },
                    content: "sales@flatglasssolutions.com",
                    type: "email"
                },
            ],
            map: image.src,
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

            {!!content.contactsHero &&
                <CommonHeroComponent
                    title={content.contactsHero.title}
                    description={content.contactsHero.description}
                    image={content.contactsHero.image}
                />
            }

            {!!content.contactsForm && !!content.contactsManager &&
                <ContactsFormComponent
                    leftTitle={content.contactsManager.leftTitle}
                    managerPhoto={content.contactsManager.managerPhoto}
                    manager={content.contactsManager.manager}
                    managerCall={content.contactsManager.managerCall}
                    rightTitle={content.contactsManager.rightTitle}
                    form={content.contactsForm}
                />
            }

            {!!content.connection &&
                <ContactsAdressesComponent
                    title={content.connection.title}
                    addresses={content.connection.addresses}
                    contacts={content.connection.contacts}
                    map={content.connection.map}
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

export default Contacts;
