import React from "react";
import Side from "../components/side.js";
import Marquee from "react-fast-marquee";

const home = () => {
  return (
    <div className="contents">
      <div className="h-100" style={{ flexBasis: '80%' }} >
        <Marquee pauseOnHover={true}
          speed={50}>
            <h1 className="pt-28 text-center">現在ブログ開設準備中です！もう少々お待ちください！</h1>
        </Marquee>
      </div>
      <Side />
    </div>
  );
};

export default home;
