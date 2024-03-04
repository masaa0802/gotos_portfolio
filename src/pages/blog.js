import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as contentful from "contentful";
import dayjs from "dayjs";

function Blog() {
  const [items, setItems] = useState([]);
  const client = contentful.createClient({
    space: "4n82yceld06j",
    accessToken: "9K3bB5EpwtaiVEWsT4ajRwdnUD8ljhfWo0ONYe773BI",
  });

  useEffect(() => {
    client.getEntries({
      content_type: 'blogPost',
      limit: 200,
      order: '-sys.createdAt'
    }).then((response) => {
      setItems(response.items);
    });
  }, [client]);

  const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.substring(0, maxLength) + "...";
    }
  };

  const truncateDate = (date) => {
    const createdAt = date;
    const object = new Date(createdAt);
    const result = dayjs(object).format('YYYY年MM月DD日');
    return result;
  }

  return (
    <div className="contents">
      <div className="items">
        {items.map((item, index) => (
          <Link
            to={{ pathname: `/blog/${item.sys.id}` }}
            state={{
              title: item.fields.title || "タイトルが表示されておりません",
              body: item.fields.body || "コンテンツが表示されておりません",
              image: item.fields.image || "画像が表示されません",
              createdAt: item.sys.createdAt || "更新日時が表示されておりません",
            }}
            key={index}
          >
            <div>
              <div className="w-full" >
                <div className="card__textbox">
                  <div className="card__titletext">{item.fields.title}</div>
                  <p className="card__titletext_createdAt">{truncateDate(item.sys.createdAt)}</p>
                  <div className="card__overviewtext">
                    {truncateString(item.fields.description, 50)}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;