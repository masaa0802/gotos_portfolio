import React from "react";
import { useLocation } from "react-router-dom";
import markdownit from 'markdown-it';
import Side from "../components/side.js";
import dayjs from "dayjs";

const BlogDetail = () => {
  const location = useLocation();
  const title = location.state?.title || "タイトルがありません";
  const image = location.state?.image || "画像がありません";
  const body = location.state?.body || "コンテンツがありません";
  const updatedAt = location.state?.updatedAt || "更新日時が表示されておりません";
  const object = new Date(updatedAt)
  const date = dayjs(object).format('YYYY年MM月DD日')

  return (
    <div className="contents">
      <div className="blog_items">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="image">
          <img src={image.fields.file.url} alt="aaa" height={image.fields.file.details.image.height} width={image.fields.file.details.image.width} />
        </div>
        <p className="pt-2">更新日時: {date}</p>
        <div dangerouslySetInnerHTML={{ __html: markdownit().render(body) }} />
      </div>
      <Side />
    </div>
  );
};

export default BlogDetail;
