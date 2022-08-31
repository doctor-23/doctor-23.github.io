import React from "react";
import cn from "classnames";
import styles from "./contactsForm.module.scss";

const ContactsFormComponent = ({
                                   leftTitle,
                                   managerPhoto,
                                   manager,
                                   managerCall,
                                   rightTitle,
                                   form
                               }) => (
    <section className={styles.contacts}>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <span className={styles.leftTitle}>
                    {leftTitle["en"]}
                </span>

                <img src={managerPhoto} className={styles.managerPhoto} alt=""/>

                <div className={styles.managerInf}>
                    {manager.map((item, index) => (
                        <p key={item.text} className={index === 0 && styles.managerName}>
                            {item.text["en"]}
                        </p>
                    ))}
                </div>
                <button className={styles.btn}>
                    {managerCall["en"]}
                </button>
            </div>

            <div className={styles.right}>
                <span className={styles.rightTitle}>
                    {rightTitle["en"]}
                </span>

                <form action="#" className={styles.form}>
                    {form.map((item) => {
                        const lowerCase = item.label["en"].toLowerCase();
                        const joinName = lowerCase.replace(" ", "_");
                        return (
                            <div className={styles.row} key={item.label}>
                                <label className={cn(styles.label, item.required && styles.labelRequired)}>
                                    {item.type !== "submit" && item.label["en"]}
                                </label>
                                <input
                                    type={item.type}
                                    required={item.required && "required"}
                                    name={joinName}
                                    value={item.type === "submit" ? item.label["en"] : ""}
                                    className={cn(styles.input, item.type === "submit" && styles.submit)}
                                />
                            </div>
                        )
                    })}
                </form>
            </div>
        </div>
    </section>
)

export default ContactsFormComponent;