import image from "../../public/images/map.jpg";

export default {
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
}