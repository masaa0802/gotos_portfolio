import React from "react";
import Side from "../components/side.js";
import img from "../img/MY PRODUCT.jpg";
const product = () => {
  return (
    <div className="contents">
      <div className="items">
        <div>
          <p className="py-4">【MY PRODUCT | 開発物共有アプリ】</p>
          <img className="h-64" src={img} alt="MYPRODUCT"></img>
        </div>
      </div>
      <Side />
    </div>
  );
};

export default product;
