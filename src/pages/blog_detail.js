import React from "react";
import { useLocation } from "react-router-dom";
import markdownit from 'markdown-it';
import Side from "../components/side.js";

const BlogDetail = () => {
  const location = useLocation();
  const title = location.state?.title || "タイトルがありません";
  const image = location.state?.image || "画像がありません";
  const body = location.state?.body || "コンテンツがありません";
  const updatedAt =
    location.state?.updatedAt || "更新日時が表示されておりません";

  return (
    <div className="contents">
      <div className="items">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="image">
          <img src={image.fields.file.url} alt="aaa" height={image.fields.file.details.image.height} width={image.fields.file.details.image.width} />
        </div>
        <p className="pt-2">更新日時: {updatedAt}</p>
        <div dangerouslySetInnerHTML={{ __html: markdownit().render(body) }} />
      </div>
      <Side />
    </div>
  );
};

export default BlogDetail;
