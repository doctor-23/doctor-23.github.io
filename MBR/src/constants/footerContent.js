import youtube from "../../public/images/icons/youtube.svg";
import link_id from "../../public/images/icons/linkid.svg";
import facebook from "../../public/images/icons/facebook.svg";
import twitter from "../../public/images/icons/twitter.svg";
import phone_ico from "../../public/images/icons/phone.svg";
import mail_ico from "../../public/images/icons/mail.svg";


export default {
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
        ru: "Website Privacy Policy"
    },
    policyLink: "",
    copyright: {
        en: "Copyright © 2022 - MBR",
        ru: "Copyright © 2022 - MBR"
    }
}

