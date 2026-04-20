import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

// env-værdier i variabler
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function HomePage() {
  // state til products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await fetch(URL, {
        headers: {
          apikey: APIKEY,
          "content-Type": "application/json",
        },
      });
      const data = await response.json();
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <main className="app">
      <h1 className="page-title">All Products</h1>
      <section className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
