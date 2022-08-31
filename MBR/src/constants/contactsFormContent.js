import managerPhoto from "../../public/images/manager.png";

export default  {
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
    form: [
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
    ]
}