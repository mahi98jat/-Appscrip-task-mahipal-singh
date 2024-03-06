"use client";

import { Dropdown, FilterColumns, Flex, Product, SideDrawer } from "..";
import { FilterTypes, ProductType, useWindowWidth } from "@/resources";
import React, { FC, useEffect, useState } from "react";

import { data } from "./data";
import styles from "./ProductList.module.css";

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

const ProductList: FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  async function getProducts() {
    const data = await fetchProducts();
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const width = useWindowWidth();

  return (
    <section className={styles.productSection}>
      <Flex
        justify={`${
          width !== 0 && width < 1248 ? "space-between" : "flex-end"
        }`}
      >
        {width !== 0 && width < 1248 && <FilterWrapper filters={data} />}
        <Dropdown sorts={["a", "b"]} onSelect={() => {}} />
      </Flex>
      <section className={styles.productBody}>
      {width !== 0 && width >= 1248 && <FilterColumns filters={data} />}

        
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

const FilterWrapper: FC<{ filters: FilterTypes[] }> = ({ filters }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className={styles.filterWrapper}>
      <div onClick={() => setIsVisible(true)}>show filters</div>
      <SideDrawer show={isVisible}  onClose={()=>setIsVisible(false)}>
        <FilterColumns filters={filters} />
      </SideDrawer>
    </div>
  );
};

export default ProductList;
