import React from "react";
import "../css/Header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";

export default function Header() {
  const [theme, setTheme] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //store'den basketSlice içindeki veriyi çekmek
  const { products } = useSelector((store) => store.basket);

  const changeTheme = () => {
    const root = document.getElementById("root");

    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "black";
    }
    setTheme(!theme);
  };

  return (
    <div className="flex-row" style={{ justifyContent: "space-between" }}>
      <div className="flex-row" onClick={() => navigate("/")}>
        <img className="logo" src="./src/images/logo2.png" />
        <p className="logo-text">BEAUTY LTD</p>
      </div>
      <div className="flex-row">
        <input
          style={{ borderRadius: "10px" }}
          className="search-input"
          type="text"
          placeholder="Search ... ?"
        ></input>
        <div>
          {theme ? (
            <FaMoon className="icon" onClick={changeTheme} />
          ) : (
            <CiLight className="icon" onClick={changeTheme} />
          )}
          <Badge
            onClick={() => dispatch(setDrawer())}
            badgeContent={products.length}
            color="success"
          >
            <CiShoppingBasket className="icon" />
          </Badge>
        </div>
      </div>
    </div>
  );
}
