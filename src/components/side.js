import React from "react";
import Img from "../img/profile.png";
import TwitterImg from "../img/Twitter.png";

const side = () => {
  return (
    <div className="side">
      <h2>About</h2>
      <a href="https://twitter.com/mg10313273">
        <img className="about_img" src={Img} alt="profile_image" />
        <div className="Twitter" style={{ display: "flex" }}>
          <img className="TwitterImg" src={TwitterImg} alt="Twitter" />
          <h3 className="TwitterName">Gm</h3>
          <p className="TwitterAccount">@mg10313273</p>
        </div>
      </a>
    </div>
  );
};

export default side;
