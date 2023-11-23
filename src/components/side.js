import React from "react";
import Img from "../img/profile.png";

const side = () => {
  return (
    <div className="side">
      <div className="about">
        <h2 className="pl-4">プロフィール</h2>
        <div className="profile_image"><img className="h-24 rounded-full" src={Img} alt="profile_image" /></div>
        <p className="text-center pt-5"><strong>GOTO</strong><br /></p>
        <a href="https://twitter.com/mg10313273">
          <div className="pl-10" style={{ display: "flex" }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
          </div>
        </a>
        <p className="p-5 text-center">
          現在は自社開発企業のエンジニアとして従事しております。<br />
          趣味はゲームとサッカーで、ブログは主にエンジニアや興味のあることを綴っていきます！
        </p>
      </div>
    </div>
  );
};

export default side;
