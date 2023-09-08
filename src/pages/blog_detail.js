import React from "react";
import { useLocation } from "react-router-dom";

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
          <h1>{title}</h1>
        </div>
        <p className="pt-2">更新日時: {updatedAt}</p>
        <h3 className="body p-10">{body}</h3>
      </div>
    </div>
  );
};

export default BlogDetail;
