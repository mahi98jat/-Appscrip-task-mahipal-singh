"use client";

import { BurgerIcon, useWindowWidth } from "@/resources";
import { Flex, ProductDiscoverySection, SideDrawer } from "..";
import React, { FC, useState } from "react";

import BagIcon from "@/resources/Icons/BagIcon";
import HeartIcon from "@/resources/Icons/HeartIcon";
import Links from "../Links/Links";
import Logo from "@/resources/Icons/Logo";
import ProfileIcon from "@/resources/Icons/ProfileIcon";
import SearchIcon from "@/resources/Icons/SearchIcon";
import styles from "./Header.module.css";

const Header: FC = () => {
  const width = useWindowWidth();

  return (
    <>
      <hgroup className={styles.headerGroup}>
        <Flex justify="space-between">
          <Flex>
            {width !== 0 && width < 1248 && <LinksWrapper />}
            <Logo />
          </Flex>
          <Flex>
            <SearchIcon />
            <HeartIcon />
            <ProfileIcon />
            <BagIcon />
          </Flex>
        </Flex>
        {width !== 0 && width >= 1248 && (
          <Flex justify="center">
            <Links layout="horizontal" />
          </Flex>
        )}
      </hgroup>
      <ProductDiscoverySection />
    </>
  );
};

const LinksWrapper: FC<{}> = ({}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className={styles.filterWrapper}>
      <div onClick={() => setIsVisible(true)}>
        <BurgerIcon />
      </div>
      <SideDrawer show={isVisible} onClose={() => setIsVisible(false)}>
        <Links layout="vertical" />
      </SideDrawer>
    </div>
  );
};

export default Header;
