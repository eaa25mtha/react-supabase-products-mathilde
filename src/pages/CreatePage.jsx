import { useNavigate } from "react-router";
import ProductForm from "../components/ProductForm";

// env-værdier i variabler
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function CreatePage() {
  const navigate = useNavigate();

  async function handleSubmit(productData) {
    //implementering af POST med fetch og data fra productData
    await fetch(URL, {
      method: "POST",
      headers: {
        apikey: APIKEY,
        "content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    navigate("/");
  }

  return (
    <main className="app">
      <h1 className="page-title">Create Product</h1>
      <ProductForm onSubmit={handleSubmit} />
    </main>
  );
}
