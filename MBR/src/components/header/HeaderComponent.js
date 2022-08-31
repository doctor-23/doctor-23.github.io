import React, {useState} from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import MenuElement from "../../elements/menu/MenuElement";
import styles from "./header.module.scss";

const ModalSearchElement = ({ isOpen, onClose, title }) => (
    <div
        className={cn(styles.modal, isOpen && styles.modalOpen)}
        onClick={onClose}
    >
        <div
            className={styles.modalContent} onClick={(e) => e.stopPropagation()}
        >
            <div className={styles.close} onClick={onClose}/>

            <h2 className={styles.title}>
                {title["en"]}
            </h2>

            <form action="search" method="GET" className={styles.searchForm}>
                <div className={styles.row}>
                    <input type="text" name="search" className={styles.input}/>
                    <span className={styles.searchIcon}/>
                </div>

                <input type="submit" value="find" className={styles.submit}/>
            </form>
        </div>
    </div>
)

const HeaderComponent = ({ logo, switchLang, title, menu}) => {
    const router = useRouter();
    const isMainPage = router.asPath === "/";
    const [isOpen, updateIsOpen] = useState(false);
    const [open, updateOpen] = useState(false);

    return (
        <header className={cn(
            styles.header,
            isMainPage ? styles.headerOnMain : styles.headerNotOnMain)}
        >
            <div className={styles.wrapper}>
                <a href="/" className={styles.logo}>
                    <img src={logo} alt={""}/>
                </a>
                <nav
                    className={cn(styles.nav, isOpen && styles.open)}
                    onClick={() => updateIsOpen(!isOpen)}
                >

                    <MenuElement
                        className={styles.navList}
                        listItemClass={styles.active}
                        content={menu}
                        onClick={(e) => e.stopPropagation()}
                    />
                </nav>

                <div className={styles.searchIcon} onClick={() => updateOpen(!open)}/>

                <a href="#" className={styles.langSwitch}>
                    {switchLang["en"]}
                </a>
                <div
                    className={cn(styles.hamburger, isOpen && styles.close)}
                    onClick={() => updateIsOpen(!isOpen)}
                >
                    <div className={styles.hamburgerIcon}/>
                </div>
            </div>
            <ModalSearchElement
                isOpen={open}
                onClose={() => updateOpen(false)}
                title={title}
            />
        </header>
    )
}

export default HeaderComponent;