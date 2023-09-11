import React from "react";
import Side from "../components/side.js";
import img from "../img/MY PRODUCT.jpg";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: '【MY PRODUCT | 開発物共有アプリ】', image: img },
];

const Product = () => {
  return (
    <div className="contents">
      <div className="items">
        {posts.map(post => (
          <div key={post.id}>
            <Link to={{ pathname: `/product/${post.id}` }}
              state={{
                title: post.title || "タイトルが表示されておりません",
                image: post.image
            }}>
              <p className="py-4">{post.title}</p>
              <img className="h-64" src={post.image} alt="MYPRODUCT" />
            </Link>
          </div>
        ))}
      </div>
      <Side />
    </div>
  );
};

export default Product;
