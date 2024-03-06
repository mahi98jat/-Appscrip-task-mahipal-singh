"use client";

import { Dropdown, FilterColumns, Flex, Product } from "..";
import React, { FC, useEffect, useState } from "react";

import { ProductType } from "@/resources";
import styles from "./ProductList.module.css";

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

const filtersData = [
  {
    category: "Brand",
    options: [
      { value: "brand1", label: "Brand 1" },
      { value: "brand2", label: "Brand 2" },
    ],
  },
  {
    category: "Color",
    options: [
      { value: "red", label: "Red" },
      { value: "blue", label: "Blue" },
    ],
  },
];

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
    <section >
      <Flex justify="flex-end">
        <Dropdown sorts={["a", "b"]} onSelect={() => {}} />
      </Flex>
      <Flex justify="flex-start" >
        <FilterColumns filters={filtersData} />
        <div className={styles.productList}>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </Flex>
    </section>
  );
};

export default ProductList;
