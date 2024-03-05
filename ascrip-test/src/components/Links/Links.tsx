import Link from "next/link";
import React from "react";

const links = [
  { name: "SHOP", path: "/" },
  { name: "SKILLS", path: "/skills" },
  { name: "STORIES", path: "/stories" },
  { name: "ABOUT", path: "/about" },
  { name: "CONTACT US", path: "/contact" },
];
const Links = () => {
  const LinkMapper = links.map((val, index) => (
    <li>
      <Link href={val?.path}>
        <a>{val?.name}</a>
      </Link>
    </li>
  ));

  return (
    <nav>
      <ul>
       {LinkMapper}
      </ul>
    </nav>
  );
};

export default Links;
