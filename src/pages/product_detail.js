import React from 'react';
import { useLocation } from "react-router-dom";
import Side from "../components/side.js";

const ProductDetail = () => {
  const location = useLocation();
  const title = location.state?.title || "タイトルがありません";
  const image = location.state?.image;

  return (
    <div className="contents">
      <div className="items">
        <div className="title">
          <h2>{title}</h2>
          <img src={image} alt = '画像が表示されていません' />
        </div>
      </div>
      <Side />
    </div>
  );
}

export default ProductDetail