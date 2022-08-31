import React from "react";
import styles from "./contactsAdresses.module.scss"

const ContactsAdressesComponent = ({title, addresses, contacts, map}) => (
    <section className={styles.addresses}>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <span className={styles.title}>
                    {title["en"]}
                </span>

                <ul className={styles.addressesWrapper}>
                    {addresses.map((item) => (
                        <li key={item.text}>
                            {item.text["en"]}
                        </li>
                    ))}
                </ul>

                <ul className={styles.contacts}>
                    {contacts.map((item) => (
                        <li key={item.text}>
                            {item.text["en"]}
                            <a href={item.type + item.content}>
                                {item.content}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.right}>
                <img src={map} alt=""/>
            </div>
        </div>
    </section>
)

export default ContactsAdressesComponent;