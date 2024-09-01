import "./App.css";
import React, { useEffect } from "react";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer, calculateBasket } from "./redux/slices/basketSlice";

function App() {
  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basket
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateBasket());
  });

  return (
    <div>
      <PageContainer>
        <Header />
        <Loading />
        <Drawer
          className="drawer"
          style={{ width: 500 }}
          anchor="right"
          open={drawer}
          onClose={() => {
            dispatch(setDrawer());
          }}
        >
          {products &&
            products.map((product) => {
              return (
                <div key={product.id}>
                  <div className="flex-row" style={{ padding: "10px" }}>
                    <img
                      style={{ marginRight: "10px" }}
                      src={product.image}
                      width={50}
                      height={50}
                    />
                    <p style={{ width: "300px" }}>
                      {product.title}
                      {product.count}
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        marginRight: "10px",
                        width: "60px",
                      }}
                    >
                      {product.price} ₺
                    </p>
                    <button
                      style={{
                        fontWeight: "bold",
                        padding: "5px",
                        backgroundColor: "red",
                        borderRadius: "10px",
                        border: "none",
                        color: "white",
                        width: "50px",
                      }}
                    >
                      Sil
                    </button>
                  </div>
                </div>
              );
            })}
          <p style={{ textAlign: "center" }}>Toplam tutar:{totalAmount}</p>
        </Drawer>

        <RouterConfig />
      </PageContainer>
    </div>
  );
}

export default App;
