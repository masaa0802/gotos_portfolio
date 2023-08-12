import React, { Component } from "react";
import { Link } from "react-router-dom";
import Side from "../components/side.js";
import * as contentful from "contentful";

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.client = contentful.createClient({
      space: "4n82yceld06j",
      accessToken: "9K3bB5EpwtaiVEWsT4ajRwdnUD8ljhfWo0ONYe773BI",
    });
  }

  componentDidMount() {
    this.client.getEntries().then((response) => {
      console.log(response.items);
      this.setState({
        items: response.items,
      });
    });
  }

  truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.substring(0, maxLength) + "...";
    }
  };

  render() {
    return (
      <div className="contents">
        <div className="items">
                {this.state.items.map((item, index) => (
              console.log(item),
            <Link to={{ pathname: `/blog/${item.sys.id}` }}>
              <div key={index} className="card card-skin">
                <div className="card__imgframe">
                  <div className="card__textbox">
                    <div className="card__titletext">{item.fields.title}</div>
                    <p>{item.sys.updatedAt}</p>
                    <div className="card__overviewtext">
                      {this.truncateString(item.fields.body, 50)}
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
}

export default Blog;
