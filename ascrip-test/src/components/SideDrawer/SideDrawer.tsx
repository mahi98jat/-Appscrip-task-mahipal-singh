"use client";

import React from "react";

interface SideDrawerProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ show, onClose, children }) => {
  return (
    <>
      {show && <div className="backdrop" onClick={onClose} />}
      <div className={`sideDrawer ${show ? "show" : ""}`}>{children}</div>

      <style jsx>{`
        .backdrop {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          z-index: 100;
        }

        .sideDrawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 300px;
          height: 100%;
          background: white;
          box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
          transition: right 0.3s ease-out;
          z-index: 200;
        }

        .sideDrawer.show {
          right: 0;
        }
      `}</style>
    </>
  );
};

export default SideDrawer;
