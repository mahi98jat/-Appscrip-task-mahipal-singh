import { Footer, Header, ProductList } from "@/components";

import { ProductType } from "@/resources";
import styles from "./page.module.css";

async function getData() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error: any) {
    throw new Error("failed");
  }
}

export default async function Home() {
  // const data: ProductType[] = await getData();

  return (
    <div className={styles.appContainer}>
      <header>
        <Header />
      </header>
      <main>
        <ProductList 
        // data={data}
         />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
