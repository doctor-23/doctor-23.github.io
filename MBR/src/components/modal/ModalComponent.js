import React, {useState} from "react";
import modalContent from "../../constants/modalContent";
import SelectElement from "../../elements/select/SelectElement";
import styles from "./modal.module.scss"
import cn from "classnames";

const ModalComponent = ({ isOpen, onClose }) => {
    const [currentOption, updateCurrentOption] = useState({
        label: "Decoating",
        id: 1,
    });

    const onUpdateCurrentOption = (value) => {
        updateCurrentOption(value);
    };

    return (
        <div
            className={cn(styles.modal, isOpen && styles.modalOpen)}
            onClick={onClose}
        >
            <form className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.close} onClick={onClose}/>

                {modalContent.form.map((item) => (
                    <div className={styles.row} key={item.type}>
                        {item.type !== "submit" && (
                            <label className={styles.label}>
                                {item.label["en"]}
                            </label>
                        )}

                        {item.type === "select" && (
                            <SelectElement
                                type="select"
                                options={modalContent.requests}
                                // placeholder={mainRatingContent.selectPlaceholder}
                                value={currentOption}
                                className={styles.select}
                                onChange={(value) => onUpdateCurrentOption(value)}
                                dropdownClassName={styles.selectDropdown}
                                filterButtonClassName={styles.selectFilterButton}
                            />
                        )}

                        {item.type !== "select" && (
                            <input
                                type={item.type}
                                className={cn(styles.input, item.type === "submit" && styles.submit)}
                                name={item.type}
                                value={item.type === "submit" ? item.label["en"]: ""}
                            />
                        )}
                    </div>
                ))}
            </form>
        </div>
    )
}

export default ModalComponent;
