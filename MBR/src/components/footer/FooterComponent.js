import React from "react";
import MenuElement from "../../elements/menu/MenuElement";
import styles from "./footer.module.scss"

const FooterComponent = ({
                             logo,
                             address,
                             contacts,
                             links,
                             social,
                             policy,
                             copyright,
                             menu
                         }) => (
    <footer className={styles.footer}>
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <a href="/" className={styles.logo}>
                        {logo}
                    </a>
                    <ul className={styles.address}>
                        {address.map((item) => (
                            <li key={item.text} className={styles.addressItem}>
                                {item.text["en"]}
                            </li>
                        ))}
                    </ul>
                    <ul className={styles.contacts}>
                        {contacts.map((item) => (
                            <li key={item.contact} className={styles.contact}>
                                {item.type === "phone" && (
                                    <a
                                        href={`tel:${item.contact}`}
                                        style={{backgroundImage: `url(${item.icon})`}}
                                    >
                                        {item.contact}
                                    </a>
                                )}
                                {item.type === "email" && (
                                    <a
                                        href={`mailto:${item.contact}`}
                                        style={{backgroundImage: `url(${item.icon})`}}
                                    >
                                        {item.contact}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.middle}>
                    <nav className={styles.nav}>
                        <MenuElement className={styles.navList}  content={menu}/>
                    </nav>
                </div>
                <div className={styles.right}>
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            {links.map((item) => (
                                <li key={item.text}>
                                    <a href={item.link}>
                                        {item.text["en"]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className={styles.socials}>
                        {social.map((item) => (
                            <a
                                key={item.link}
                                href={item.link}
                                style={{backgroundImage: `url(${item.icon})`}}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <a href={policy.link} className={styles.policy}>
                    {policy["en"]}
                </a>
                <div className={styles.copyright}>
                    {copyright["en"]}
                </div>
            </div>
        </div>
    </footer>
);

export default FooterComponent;