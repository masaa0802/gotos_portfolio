import React from "react";
import { useLocation } from "react-router-dom";
import markdownit from 'markdown-it';

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
        <div dangerouslySetInnerHTML={{ __html: markdownit().render(body) }} />
      </div>
    </div>
  );
};

export default BlogDetail;
