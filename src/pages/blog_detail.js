import React from "react";
import { useLocation } from "react-router-dom";
import Side from "../components/side.js";

const BlogDetail = () => {
  const location = useLocation();
  const title = location.state?.title || "タイトルがありません";
  const body = location.state?.body || "コンテンツがありません";
  const updatedAt =
    location.state?.updatedAt || "更新日時が表示されておりません";

  return (
    <div className="contents">
      <div className="items">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <p className="updatedAt">更新日時: {updatedAt}</p>
        <h3 className="body p-10">{body}</h3>
      </div>
      <Side />
    </div>
  );
};

export default BlogDetail;
