import { useParams, useNavigate, Link } from "react-router";

// env-værdier i variabler
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = {
    id,
    title: "Starter Product",
    price: 0,
    image: "",
  };

  async function handleDelete() {
    const confirmed = window.confirm("Delete this product?");
    if (!confirmed) return;
    //implementering af DELETE
    await fetch(`${URL}?id=eq.${id}`, {
      method: "DELETE",
      headers: {
        apikey: APIKEY,
        "content-Type": "application/json",
      },
    });

    navigate("/");
  }

  return (
    <main className="app">
      <h1 className="page-title">Product Details</h1>

      <article className="product-detail">
        {product.image ? (
          <img src={product.image} alt={product.title} />
        ) : (
          <div className="image-placeholder large">?</div>
        )}
        <div className="product-detail-body">
          <h2 className="product-detail-title">{product.title}</h2>
          <p className="product-detail-price">DKK {product.price}</p>
          <div className="product-detail-actions">
            <Link to={`/products/${id}/update`} className="btn btn-primary">
              ✏️ Edit
            </Link>
            <button className="btn btn-danger" onClick={handleDelete}>
              🗑️ Delete
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
