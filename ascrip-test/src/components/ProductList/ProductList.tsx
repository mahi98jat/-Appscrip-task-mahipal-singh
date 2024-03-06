"use client";

import { Dropdown, FilterColumns, Flex, Product } from "..";
import React, { FC, useEffect, useState } from "react";

import { ProductType } from "@/resources";
import {data} from './data';
import styles from "./ProductList.module.css";

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

  

const ProductList: FC<{
  // data: ProductType[]
}> = ({}) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  async function getProducts() {
    const data = await fetchProducts();
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section>
      <Flex justify="flex-end">
        <Dropdown sorts={["a", "b"]} onSelect={() => {}} />
      </Flex>
      <section className={styles.productBody}>
        <FilterColumns filters={data} />
        <div style={{ flex: 1 }}>
          <div className={styles.productList}>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductList;
