// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import cn from "classnames";
import {useOnClickOutside} from "../../hooks/useOnClickOutside";
import styles from "./select.module.scss";

const ArrowElement = ({ isOpen }) => (
  <div className={cn(styles.arrow, isOpen && styles.arrowOpen)} />
);

const SelectElement = ({
  className,
  value,
  placeholder,
  options,
  onChange,
  dropdownClassName,
  filterButtonClassName,
}) => {
  const ref = useRef();
  const [isOpen, updateOpen] = useState(false);
  const onChangeElement = (val) => {
    onChange(val);
    updateOpen(false);
  };

  useOnClickOutside(ref, () => updateOpen(false));
  return (
    <div
      ref={ref}
      className={cn(styles.filter, className, isOpen && styles.open)}
    >
      <div className={styles.header} onClick={() => updateOpen(!isOpen)}>
        {!!value && (
          <span className={cn(styles.filterButtonText, filterButtonClassName)}>{value.label}</span>
        )}
        {!value && (
          <span className={cn(styles.placeholder)}>{placeholder}</span>
        )}
        <ArrowElement isOpen={isOpen} />
      </div>
      <div className={cn(styles.dropdown, dropdownClassName)}>
        {/* eslint-disable-next-line react/prop-types */}
        {options.map((item) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
          <div
            className={cn(styles.itemText)}
            onClick={() => onChangeElement(item)}
            key={item.label || item.id}
          >
            {item.label["en"]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectElement;
