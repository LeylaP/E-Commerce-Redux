import React from "react";
import "../css/Product.css";
import { useNavigate } from "react-router-dom";

export default function Product({ product }) {
  const { id, image, price, rating, title, category, description } = product;

  const navigate = useNavigate();

  return (
    <div className="card">
      <img className="image" src={image} alt="" />
      <div>
        <p style={{ textAlign: "center" }}>{title}</p>
        <h3 style={{ textAlign: "center" }}>{price}₺</h3>
      </div>
      <div className="flex-row">
        <button
          onClick={() => navigate("/product-details/" + id)}
          className="detail-button"
        >
          Detayına Git
        </button>
      </div>
    </div>
  );
}
