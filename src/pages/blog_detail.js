import React from "react";
import { useLocation } from "react-router-dom";
import { marked } from 'marked';
import dayjs from "dayjs";

const BlogDetail = () => {
  const location = useLocation();
  const title = location.state?.title || "タイトルがありません";
  const image = location.state?.image || "画像がありません";
  const body = location.state?.body || "コンテンツがありません";
  const createdAt = location.state?.createdAt || "更新日時が表示されておりません";
  const object = new Date(createdAt);
  const date = dayjs(object).format('YYYY年MM月DD日');

  const source = body.replace(/\n/g, '\n\n'); 
  const parsedSource = marked(source);

  marked.setOptions({
    gfm: true,
    breaks: true,
  });

  return (
    <div className="contents">
      <div className="blog_items">
      <p className="pt-2">{date}</p>
        <div>
          <h1 className="title">{title}</h1>
        </div>
        <div className="image">
          <img className="blog_img" src={image.fields.file.url} alt="blog" height={image.fields.file.details.image.height} width={image.fields.file.details.image.width} />
        </div>
        <div className="text-body" dangerouslySetInnerHTML={{ __html: parsedSource }} />
      </div>
    </div>
  );
};

export default BlogDetail;
