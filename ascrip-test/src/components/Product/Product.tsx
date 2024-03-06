"use-client";

import React, { FC } from "react";

import { ProductType } from "@/resources";
import styles from "./Product.module.css";

const Product: FC<{ product: ProductType }> = ({ product }) => {
  const { title, price, category, image, description } = product;

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} height={"100%"} width={"100%"}  />

      </div>
      <div className="info">
        <p style={{fontWeight:500}}>{title}</p>
        {/* <p title={description} className="description">{description.substring(0,30)}</p> */}
        <button
          className="wishlistButton"
          //  onClick={onToggleWishlist}
        >
          {/* {isWishlisted ? <AiOutlineHeart color="red" /> : <AiOutlineHeart />} */}
        </button>
      </div>
    </div>
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "flex-start",
    //     flexDirection: "column",
    //     gap:'10px',border:'1px solid grey',
    //     alignItems:'center'
    //   }}
    // >
    //   <img src={image} alt={title} height={"70%"} width={"90%"} />

    //   <p>{title}</p>
    // </div>
  );
};

const ProductDetails: FC<{ product: ProductType }> = ({ product }) => {
  const { title, price, category, image, description } = product;

  return (
    <div className={styles.productDetail}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} height={"70%"} width={"90%"} />
      </div>
      <div className={styles.info}>
        <p title={description} className={styles.description}>
          {description.substring(0, 30)}
        </p>
        <button
          className={styles.wishlistButton}
          //  onClick={()=>{}}
        >
          {/* {isWishlisted ? <AiOutlineHeart color="red" /> : <AiOutlineHeart />} */}
        </button>
      </div>
    </div>
  );
};
export default Product;
