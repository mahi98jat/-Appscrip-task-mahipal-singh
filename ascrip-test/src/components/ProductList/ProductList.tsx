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

interface ProductStateType {
  products: ProductType[];
  wishListed: number[];
  filters: string[];
  filteredProducts: ProductType[];
  sorts: SORTS;
}

type SORTS = "LOW TO HIGH" | "HIGH TO LOW";

const initialState: ProductStateType = {
  products: [],
  wishListed: [],
  filters: [],
  filteredProducts: [],
  sorts: "LOW TO HIGH",
};

const ProductList: FC = () => {
  const width = useWindowWidth();

  const [productValues, setProductValues] =
    useState<ProductStateType>(initialState);

  async function getProducts() {
    const data = await fetchProducts();
    setProductValues((prev) => ({
      ...prev,
      products: data,
      filteredProducts: data,
    }));
  }

  function handleAddWishList(val: number) {
    const isPresent = productValues.wishListed.includes(val);
    if (isPresent) {
      setProductValues((prev) => ({
        ...prev,
        wishListed: [...prev.wishListed.filter((id) => id !== val)],
      }));
    } else {
      setProductValues((prev) => ({
        ...prev,
        wishListed: [...prev.wishListed, val],
      }));
    }
  }

  function sortProducts(val: string | SORTS, products: ProductType[]) {
    if (val === "") {
      return products;
    }

    if (val === "HIGH TO LOW") {
      return products.sort((a, b) => b.price - a.price);
    }

    return products.sort((a, b) => a.price - b.price);
  }

  function handleSorting(val: SORTS | string) {
    setProductValues((prev) => ({
      ...prev,
      products: sortProducts(val, prev.products),
    }));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className={styles.productSection}>
      <Flex
        justify={`${
          width !== 0 && width < 1248 ? "space-between" : "flex-end"
        }`}
      >
        {width !== 0 && width < 1248 && <FilterWrapper filters={data} />}
        <Dropdown
          sorts={["LOW TO HIGH", "HIGH TO LOW"]}
          onSelect={(val) => handleSorting(val)}
        />
      </Flex>
      <section className={styles.productBody}>
        {width !== 0 && width >= 1248 && <FilterColumns filters={data} />}

        <div style={{ flex: 1 }}>
          <div className={styles.productList}>
            {productValues.products.map((product) => (
              <Product
                key={product.id}
                product={product}
                isWishlisted={productValues.wishListed.includes(product.id)}
                onAddWishList={handleAddWishList}
              />
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
      <div className={styles.showFilters} onClick={() => setIsVisible(true)}>
        <span>Show filters</span>
      </div>
      <SideDrawer show={isVisible} onClose={() => setIsVisible(false)}>
        <FilterColumns filters={filters} />
      </SideDrawer>
    </div>
  );
};

export default ProductList;
