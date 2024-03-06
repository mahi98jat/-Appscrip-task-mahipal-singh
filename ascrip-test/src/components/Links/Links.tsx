import React, { FC } from "react";

import Link from "next/link";
import styles from "./Links.module.css";

const links = [
  { name: "SHOP", path: "/" },
  { name: "SKILLS", path: "/skills" },
  { name: "STORIES", path: "/stories" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT US", path: "/contact" },
];
const Links: FC<{ layout: "horizontal" | "vertical" }> = ({ layout }) => {
  const LinkMapper = links.map((val, index) => (
    <li>
      <Link key={index} href={val?.path}>
        {val?.name}
      </Link>
    </li>
  ));

  return (
    <nav>
      <ul
        className={styles.links}
        style={{ flexDirection: `${layout === "vertical" ? "column" : "row"}` }}
      >
        {LinkMapper}
      </ul>
    </nav>
  );
};

export default Links;
