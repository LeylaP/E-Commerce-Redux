import React from "react";
import "../css/Product.css";

export default function Product({ product }) {
  const { id, image, price, rating, title, category, description } = product;

  console.log(image);
  return (
    <div className="card">
      <img className="image" src={image} alt="" />
      <div>
        <p style={{ textAlign: "center" }}>{title}</p>
        <h3 style={{ textAlign: "center" }}>{price}₺</h3>
      </div>
      <div className="flex-row">
        <button className="detail-button">Detayına Git</button>
      </div>
    </div>
  );
}
