import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProducts } from "../redux/slices/productSlice";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";

export default function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProducts } = useSelector((store) => store.product);

  const { image, price, rating, title, category, description } =
    selectedProducts;

  const [count, setCount] = useState(0);

  // slice içindeki reducer deki fonksionlara laşmamızı sağlar
  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1); //  setCount((prev) => prev + 1)    her ikisi aynı şeyi veriyor
  };
  const decreement = () => {
    setCount(count - 1); //  setCount((prev) => prev - 1)    her ikisi aynı şeyi veriyor
  };
  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      count,
    };
    dispatch(addToBasket(payload));
  };

  useEffect(() => {
    getProductById();
  }, []);
  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          // slice içindeki reducer deki fonksionlara laşmamızı sağlar
          dispatch(setSelectedProducts(product));
        }
      });
  };

  return (
    <div
      className="flex-row"
      style={{ marginTop: "30px", alignItems: "start" }}
    >
      <div style={{ marginRight: "30px" }}>
        <img src={image} width={300} height={500} alt="" />
      </div>
      <div>
        <h1 style={{ fontFamity: "arial" }}>{title}</h1>
        <p style={{ fontFamity: "arial", fontWeight: "bold" }}>{description}</p>
        <h1
          style={{
            fontSize: "50px",
            fontFamity: "arial",
            fontWeight: "bold",
            color: "red",
          }}
        >
          {price}₺
        </h1>
        <div className="flex-row">
          <AiOutlinePlusCircle
            onClick={increment}
            style={{
              fontSize: "40px",
              fontWeight: "bold",
            }}
          />
          <span
            style={{
              fontSize: "35px",
              fontWeight: "bold",
              margin: "10px",
            }}
          >
            {count}
          </span>
          <AiOutlineMinusCircle
            onClick={decreement}
            style={{
              fontSize: "40px",
              fontWeight: "bold",
            }}
          />
        </div>
        <button
          onClick={addBasket}
          style={{
            marginTop: "25px",
            border: "none",
            padding: "10px",
            backgroundColor: "#04AA6D",
            borderRadius: "10px",
          }}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}
