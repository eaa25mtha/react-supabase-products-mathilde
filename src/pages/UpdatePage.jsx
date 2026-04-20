import { useParams, useNavigate } from "react-router";
import ProductForm from "../components/ProductForm";

// env-værdier i variabler
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

//skal den blive ved med at være der den her funktion?
export default function UpdatePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = {
    id,
    title: "Starter Product",
    price: 0,
    image: "",
  };

  async function handleSubmit(productData) {
    // implementering af PATCH
    await fetch(`${URL}?id=eq.${id}`, {
      method: "PATCH",
      headers: {
        apikey: APIKEY,
        "content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    navigate(`/products/${id}`);
  }

  return (
    <main className="app">
      <h1 className="page-title">Update Product</h1>
      <p className="status-msg">
        TODO (Trin 4): Implementer GET til prefill af form data.
      </p>
      <ProductForm onSubmit={handleSubmit} productToUpdate={product} />
    </main>
  );
}
