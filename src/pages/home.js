import React from "react";
import Side from "../components/side.js";

const home = () => {
  return (
    <div className="contents">
      <div className="pt-20" style={{ flexBasis: '80%' }} >
            <h1 className="pt-28 text-center">エンジニアの部屋へようこそ！</h1>
      </div>
      <Side />
    </div>
  );
};

export default home;
