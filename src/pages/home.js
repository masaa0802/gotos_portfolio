import React from "react";
import Side from "../components/side.js";
import Blog from "./blog.js";

const home = () => {
  return (
    <div className="contents">
      <div style={{ flexBasis: '80%' }} >
          <Blog />
      </div>
      <Side />
    </div>
  );
};

export default home;
