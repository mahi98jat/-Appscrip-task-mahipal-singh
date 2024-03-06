import React, { FC } from "react";

import Link from "next/link";
import styles from "./Links.module.css";
import { usePathname } from "next/navigation";

const links = [
  { name: "SHOP", path: "/" },
  { name: "SKILLS", path: "/product-details" },
  { name: "STORIES", path: "/product-details" },
  { name: "ABOUT", path: "/product-details" },
  { name: "CONTACT US", path: "/product-details" },
];
const Links: FC<{ layout: "horizontal" | "vertical" }> = ({ layout }) => {
  const activePathName = usePathname();

  const isActive = (path: string) => activePathName === path;

  const LinkMapper = links.map((val, index) => (
    <li>
      <Link
        className={isActive(val?.path) ? styles.link : styles.activeLink}
        key={index}
        href={val?.path}
      >
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
