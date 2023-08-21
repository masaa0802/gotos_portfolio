import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Side from "../components/side.js";
import * as contentful from "contentful";

function Blog() {
  const [items, setItems] = useState([]);
  
  const client = contentful.createClient({
    space: "4n82yceld06j",
    accessToken: "9K3bB5EpwtaiVEWsT4ajRwdnUD8ljhfWo0ONYe773BI",
  });

  useEffect(() => {
    client.getEntries().then((response) => {
      console.log(response.items);
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

  return (
    <div className="contents">
      <div className="items">
        {items.map((item, index) => (
          <Link
            to={{　pathname: `/blog/${item.sys.id}`　}}
            state={{
                title: item.fields.title || "タイトルが表示されておりません",
                body: item.fields.body || "コンテンツが表示されておりません",
                updatedAt: item.sys.updatedAt || "更新日時が表示されておりません",
            }}
            key={index}
          >
            <div className="card card-skin">
              <div className="card__imgframe">
                <div className="card__textbox">
                  <div className="card__titletext">{item.fields.title}</div>
                  <p>{item.sys.updatedAt}</p>
                  <div className="card__overviewtext">
                    {truncateString(item.fields.body, 50)}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Side />
    </div>
  );
}

export default Blog;
