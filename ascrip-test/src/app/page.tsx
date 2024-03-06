import { Footer, Header, ProductList } from "@/components";

import styles from "./page.module.css";

export default async function Home() {
  return (
    <div className={styles.appContainer}>
      <header>
        <Header />
      </header>
      <main>
        <ProductList />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
