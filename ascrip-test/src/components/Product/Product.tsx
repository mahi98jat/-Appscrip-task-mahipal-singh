"use-client";

import { HeartIcon, ProductType } from "@/resources";
import React, { FC } from "react";

import styles from "./Product.module.css";

const Product: FC<{
  product: ProductType;
  isWishlisted?: boolean;
  onAddWishList: (val: number) => void;
}> = ({ product, isWishlisted, onAddWishList }) => {
  const { title, image, id } = product;
console.log(isWishlisted,'is wish',id)
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} height={"100%"} width={"100%"} />
      </div>
      <div className="info">
        <p style={{ fontWeight: 500 }}>{title}</p>
        <button className={styles.wishlistButton} onClick={() => onAddWishList(id)}>
          {isWishlisted ? <HeartIcon fill="red" color="red" /> : <HeartIcon />}
        </button>
      </div>
    </div>
  );
};

export default Product;
