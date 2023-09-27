import React from "react";
import Img from "../img/profile.png";

const profile = () => {
  return (
    <div>
      <div className="flex justify-center p-5">
        <div>
          <img className = "mt-10 h-40 rounded-full" src={Img} alt="profile_image" />
          <a className = "p-10" href="https://twitter.com/mg10313273">
            <div className="Twitter" style={{ display: "flex" }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
              <h3 className="px-2">Gm</h3>
              <p>@mg10313273</p>
            </div>
          </a>
        </div>
        <div className="p-10">
          <p className="p-5">2021年3月 私立文系大学卒業　中国語専攻</p>
          <h2 className="text-center">↓</h2>
          <p className="p-5">2021年9月 プログラミングスクール受講</p>
          <h2 className="text-center">↓</h2>
          <p className="p-5">2022年3月 都内IT企業入社（SES企業）</p>
          <h2 className="text-center">↓</h2>
          <p className="p-5">2023年10月 都内IT企業転職（自社開発企業）</p>
        </div>
    </div>
    <div className="flex justify-center">
      <p>私立大学文系卒で、大学時代は１年間中国の浙江省杭州市へ留学しており、そこでフィンテックに興味を持ち、エンジニアを志すようになりました。<br/>
      プログラミングスクール卒業し、都内IT企業でSESとして3つの案件。言語は主にPHPとPythonになります。<br/>
      最近はVue×Laravelで個人開発やReact学習、Flutter学習、FlutterFlow開発などに尽力しています。</p>
    </div>
    </div>
  )
}

export default profile