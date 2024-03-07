import React, { FC } from "react";

import Link from "next/link";
import styles from "./Links.module.css";
import { usePathname } from "next/navigation";

const links = [
  { name: "SHOP", path: "/" },
  { name: "SKILLS", path: "/skills" },
  { name: "STORIES", path: "/stories" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT US", path: "/contact-us" },
];
const Links: FC<{ layout: "horizontal" | "vertical" }> = ({ layout }) => {
  const activePathName = usePathname();

  const isActive = (path: string) => activePathName === path;

  const LinkMapper = links.map((val, index) => (
    <li key={index}>
      <Link
        className={isActive(val?.path) ? styles.activeLink : styles.link}
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
