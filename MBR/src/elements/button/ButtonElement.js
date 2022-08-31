import React from "react";
import cn from "classnames";
import styles from "./button.module.scss";

// eslint-disable-next-line react/prop-types
const ButtonElement = ({ className, onClick, children, ...props }) => (
    // eslint-disable-next-line react/button-has-type
    <button {...props} className={cn(className, styles.btn)} onClick={onClick}>
        {children}
    </button>
);

export default ButtonElement;
