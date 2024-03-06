import "./Heading.css";

import React, { FC } from "react";

const Heading: FC<{ type: "primary" | "secondary"; label: string }> = ({
  type,
  label,
}) => {
  const tags = {
    primary: <h1>{label}</h1>,
    secondary: <h2>{label}</h2>,
  };
  return tags[type];
};

export default Heading;
