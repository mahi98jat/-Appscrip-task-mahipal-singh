import React, { FC, ReactNode } from "react";

import styles from "./Flex.module.css";

const Flex: FC<{
  justify?: "center" | "space-between" | 'flex-end' | 'flex-start';
  direction?:'row' | 'column'
  children: ReactNode;
}> = ({ justify, children,direction }) => {
  return (
    <div className={styles.flex} style={{ justifyContent: `${justify}`,flexDirection:`${direction || 'row' }` }}>
      {children}
    </div>
  );
};

export default Flex;
