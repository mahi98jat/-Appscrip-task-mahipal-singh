import React, { FC } from "react";

import styles from "./Dropdown.module.css";

type SORTS = "LOW TO HIGH" | "HIGH TO LOW";

const Dropdown: FC<{
  sorts: string[];
  onSelect: (val: SORTS | string) => void;
}> = ({ sorts, onSelect }) => {
  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className={styles.sortsDropdown}
    >
      <option className={styles.option} value="">
        RECOMANDED
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
