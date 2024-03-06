'use client'

import './FilterColumns.module.css';

import React, { FC, useState } from "react";

const FilterColumn: FC<{
  filters: { category: string; options: { label: string; value: string }[] }[];
}> = ({ filters }) => {
  const [expandedSections, setExpandedSections] = useState<Record<string,boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: Boolean(prevState[section]),
    }));
  };

  const handleCheckboxChange = (section:string,val:string) => {
    // console.log(`Filter selected: ${section} - ${option}`);
    // Here you would manage the selection state or directly apply the filter
  };

  return (
    <div className="filterColumn" >
      {filters.map((filter) => (
        <div key={filter.category} className="filterSection">
          <div
            className="filterTitle"
            onClick={() => toggleSection(filter.category)}
          >
            {filter.category}
          </div>
          {expandedSections[filter.category] && (
            <div className="filterOptions">
              {filter.options.map((option) => (
                <label key={option.value}>
                  <input
                    type="checkbox"
                    value={option.value}
                    onChange={() =>
                      handleCheckboxChange(filter.category, option.value)
                    }
                  />
                  {option.label}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterColumn;
