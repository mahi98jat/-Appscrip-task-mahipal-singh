"use client";

import React, { FC, useState } from "react";

import { FilterTypes } from "@/resources";
import styles from "./FilterColumns.module.css";

const FilterColumn: FC<{
  filters: { category: string; options: { label: string; value: string }[] }[];
}> = ({ filters }) => {
  const handleCheckboxChange = (section: string, val: string) => {};

  return (
    <div className={styles.filterColumn}>
      {filters.map((filter) => (
        <FilterSection filter={filter} onFilterSelect={handleCheckboxChange} />
      ))}
    </div>
  );
};



const FilterSection: FC<{
  filter: FilterTypes;
  onFilterSelect: (category: string, val: string) => void;
}> = ({ filter, onFilterSelect }) => {
  const [isExpand, setIsExpand] = useState<boolean>(false);

  return (
    <div key={filter.category} className={styles.filterSection}>
      <div
        className={styles.filterTitle}
        onClick={() => setIsExpand(!isExpand)}
      >
        {filter.category}
      </div>
      {isExpand && (
        <div className={styles.filterOptions}>
          {filter.options.map((option) => (
            <label key={option.value}>
              <input
                type="checkbox"
                value={option.value}
                onChange={() => onFilterSelect(filter.category, option.value)}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterColumn;
