import { Flex, ProductDiscoverySection } from "..";

import BagIcon from "@/resources/Icons/BagIcon";
import HeartIcon from "@/resources/Icons/HeartIcon";
import Links from "../Links/Links";
import Logo from "@/resources/Icons/Logo";
import ProfileIcon from "@/resources/Icons/ProfileIcon";
import React from "react";
import SearchIcon from "@/resources/Icons/SearchIcon";

const Header = () => {
  return (
    <div>
      <Flex justify="space-between">
        <span>
          <Logo />
        </span>
        <Flex>
          <SearchIcon />
          <HeartIcon />
          <ProfileIcon />
          <BagIcon />
        </Flex>
      </Flex>
      <Flex justify="center">
        <Links />
      </Flex>

      <ProductDiscoverySection />
    </div>
  );
};

export default Header;
