import React from "react";
import { useLocation } from "react-router-dom";
import { marked } from 'marked';
import dayjs from "dayjs";

const BlogDetail = () => {
  const location = useLocation();
  const title = location.state?.title || "タイトルがありません";
  const image = location.state?.image || "画像がありません";
  const body = location.state?.body || "コンテンツがありません";
  const updatedAt = location.state?.updatedAt || "更新日時が表示されておりません";
  const object = new Date(updatedAt)
  const date = dayjs(object).format('YYYY年MM月DD日')

  const source = body.replace(/\n/gi, '\nreplaced_text ');

  marked.setOptions({
    gfm: true,
    breaks: true,
  });
  const parsedSource = marked(source).replace(/replaced_text/g, '');

  return (
    <div className="contents">
      <div className="blog_items">
      <p className="pt-2">{date}</p>
        <div>
          <p className="title">{title}</p>
        </div>
        <div className="image">
          <img className="blog_img" src={image.fields.file.url} alt="blog" height={image.fields.file.details.image.height} width={image.fields.file.details.image.width} />
        </div>
        <div className="text-body" dangerouslySetInnerHTML={{ __html: marked(parsedSource) }} />
      </div>
    </div>
  );
};

export default BlogDetail;
