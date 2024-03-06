import { Flex, ProductDiscoverySection } from "..";
import React, { FC } from "react";

import BagIcon from "@/resources/Icons/BagIcon";
import HeartIcon from "@/resources/Icons/HeartIcon";
import Links from "../Links/Links";
import Logo from "@/resources/Icons/Logo";
import ProfileIcon from "@/resources/Icons/ProfileIcon";
import SearchIcon from "@/resources/Icons/SearchIcon";
import styles from './Header.module.css';

const Header:FC = () => {
  return (
    <>
      <hgroup className={styles.headerGroup}>
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
      </hgroup>
      <ProductDiscoverySection />
    </>
  );
};

export default Header;
