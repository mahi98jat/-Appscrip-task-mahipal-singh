import React, { FC } from "react";

import styles from "./Dropdown.module.css";

const Dropdown: FC<{ sorts: string[]; onSelect: (val: string) => void }> = ({
  sorts,
  onSelect,
}) => {
  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className={styles.sortsDropdown}
    >
      <option className={styles.option} value="">
        Select a Category
      </option>
      {sorts.map((sort, index) => (
        <option className={styles.option} key={index} value={sort}>
          {sort}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
