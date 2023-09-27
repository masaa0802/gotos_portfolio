import React from "react";
import Side from "../components/side.js";
import img1 from "../img/MY PRODUCT.jpg";
import img2 from "../img/MEISHI+.png";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: '【MY PRODUCT | 開発物共有アプリ】', image: img1 },
  { id: 2, title: '【MEISHI+】', image: img2 }
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
                <p className="py-4 font-bold text-center">{post.title}</p>
                <img className="h-64" src={post.image} alt={post.title} />
            </Link>
          </div>
        ))}
      </div>
      <Side />
    </div>
  );
};

export default Product;
