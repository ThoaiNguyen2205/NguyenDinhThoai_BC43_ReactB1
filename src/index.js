import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Component/BaiTapThucHanhLayOut/Body";
import Footer from "./Component/BaiTapThucHanhLayOut/Footer";
import Header from "./Component/BaiTapThucHanhLayOut/Header";
import "./assets/css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
);
