import React from "react";
import * as contentful from "contentful";
import Side from "../components/side.js";
class Home extends React.Component {
  client = contentful.createClient({
    space: "4n82yceld06j",
    accessToken: "9K3bB5EpwtaiVEWsT4ajRwdnUD8ljhfWo0ONYe773BI",
  });

  state = {
    items: [],
  };

  componentDidMount = () => {
    this.client.getEntries().then((response) => {
      console.log(response.items);
      this.setState({
        items: response.items,
      });
    });
  };

  render() {
    return (
      <>
        <div className="items">
          {this.state.items.map((item, index) => (
            <div key={index} className="card card-skin">
              <div className="card__imgframe">
                <div className="card__textbox">
                  <div className="card__titletext">{item.fields.title}</div>
                  <p>{item.sys.updatedAt}</p>
                  <div className="card__overviewtext">{item.fields.body}</div>
                </div>
              </div>
            </div>
          ))}
          <Side />
        </div>
      </>
    );
  }
}

export default Home;
