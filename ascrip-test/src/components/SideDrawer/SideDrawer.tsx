"use client";

import React from "react";
import styles from './SideDrawer.module.css'

interface SideDrawerProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ show, onClose, children }) => {
  return (
    <>
      {show && <div className={styles.backdrop} onClick={onClose} />}
      <div className={`${styles.sideDrawer} ${show ? styles.show : ""}`}>{children}</div>
    </>
  );
};

export default SideDrawer;
