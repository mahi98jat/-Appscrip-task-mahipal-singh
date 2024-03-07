import { FC } from "react";
import { ProductType } from "@/resources";
import styles from "./ProductDetails.module.css";

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
        >
            
        </button>
      </div>
    </div>
  );
};
