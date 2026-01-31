import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import * as contentful from "contentful";
import dayjs from "dayjs";
import profileImg from "../img/profile.png";
import productImg1 from "../img/MY PRODUCT.jpg";
import productImg2 from "../img/MEISHI+.png";

const LP = () => {
  const [blogItems, setBlogItems] = useState([]);
  const [sliderItems, setSliderItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const client = useMemo(() => contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_DELIVERY_API
  }), []);

  useEffect(() => {
    client.getEntries({
      content_type: 'blogPost',
      limit: 5,
      order: '-sys.createdAt'
    }).then((response) => {
      setSliderItems(response.items);
      setBlogItems(response.items.slice(0, 3));
    });
  }, [client]);

  // 自動スライド
  useEffect(() => {
    if (sliderItems.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sliderItems.length]);

  const nextSlide = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
  }, [sliderItems.length]);

  const prevSlide = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + sliderItems.length) % sliderItems.length);
  }, [sliderItems.length]);

  const goToSlide = useCallback((e, index) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide(index);
  }, []);

  const formatDate = (date) => {
    const object = new Date(date);
    return dayjs(object).format('YYYY年MM月DD日');
  };

  const truncateString = (str, maxLength) => {
    if (!str) return "";
    if (str.length <= maxLength) return str;
    return str.substring(0, maxLength) + "...";
  };

  const skills = [
    { name: "PHP", level: 90 },
    { name: "Python", level: 80 },
    { name: "React", level: 75 },
    { name: "JavaScript", level: 85 },
    { name: "SQL", level: 80 },
    { name: "AWS", level: 70 }
  ];

  const products = [
    { id: 1, title: "MY PRODUCT", description: "開発物共有アプリ", image: productImg1 },
    { id: 2, title: "MEISHI+", description: "名刺管理アプリ", image: productImg2 }
  ];

  const timeline = [
    { year: "2020", event: "プログラミング学習開始" },
    { year: "2021", event: "Web開発企業に入社" },
    { year: "2022", event: "自社開発企業へ転職" },
    { year: "現在", event: "エンジニアとして活動中" }
  ];

  return (
    <div className="lp">
      {/* HERO セクション */}
      <section className="lp-hero">
        <div className="lp-hero__content">
          <img className="lp-hero__image" src={profileImg} alt="GOTO" />
          <h1 className="lp-hero__name">GOTO</h1>
          <p className="lp-hero__tagline">Web Developer / Engineer</p>
        </div>
      </section>

      {/* スライドバナー */}
      {sliderItems.length > 0 && (
        <section className="lp-slider">
          <div className="lp-slider__container">
            {sliderItems.map((item, index) => (
              <Link
                key={item.sys.id}
                to={{ pathname: `/blog/${item.sys.id}` }}
                state={{
                  title: item.fields.title,
                  body: item.fields.body,
                  image: item.fields.image,
                  createdAt: item.sys.createdAt
                }}
                className={`lp-slider__slide ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="lp-slider__content">
                  <span className="lp-slider__label">BLOG</span>
                  <h3 className="lp-slider__title">{item.fields.title}</h3>
                  <p className="lp-slider__description">
                    {truncateString(item.fields.description, 80)}
                  </p>
                  <span className="lp-slider__date">{formatDate(item.sys.createdAt)}</span>
                </div>
              </Link>
            ))}
          </div>
          <button className="lp-slider__btn lp-slider__btn--prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="lp-slider__btn lp-slider__btn--next" onClick={nextSlide}>
            &#10095;
          </button>
          <div className="lp-slider__dots">
            {sliderItems.map((_, index) => (
              <button
                key={index}
                className={`lp-slider__dot ${index === currentSlide ? 'active' : ''}`}
                onClick={(e) => goToSlide(e, index)}
              />
            ))}
          </div>
        </section>
      )}

      {/* ABOUT セクション */}
      <section className="lp-section">
        <h2 className="lp-section__title">ABOUT</h2>
        <div className="lp-about">
          <p className="lp-about__text">
            現在は自社開発企業のエンジニアとして従事しております。<br />
            趣味はゲームとサッカーで、日々新しい技術を学びながら成長を続けています。
          </p>
          <div className="lp-timeline">
            {timeline.map((item, index) => (
              <div key={index} className="lp-timeline__item">
                <span className="lp-timeline__year">{item.year}</span>
                <span className="lp-timeline__event">{item.event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS セクション */}
      <section className="lp-section">
        <h2 className="lp-section__title">SKILLS</h2>
        <div className="lp-skills">
          {skills.map((skill, index) => (
            <div key={index} className="lp-skill">
              <div className="lp-skill__header">
                <span className="lp-skill__name">{skill.name}</span>
                <span className="lp-skill__level">{skill.level}%</span>
              </div>
              <div className="lp-skill__bar">
                <div
                  className="lp-skill__progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORKS セクション */}
      <section className="lp-section">
        <h2 className="lp-section__title">WORKS</h2>
        <div className="lp-works">
          {products.map((product) => (
            <Link
              key={product.id}
              to={{ pathname: `/product/${product.id}` }}
              state={{ title: product.title, image: product.image }}
              className="lp-work"
            >
              <img className="lp-work__image" src={product.image} alt={product.title} />
              <div className="lp-work__info">
                <h3 className="lp-work__title">{product.title}</h3>
                <p className="lp-work__description">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="lp-section__more">
          <Link to="/product" className="lp-button">すべてのプロダクトを見る</Link>
        </div>
      </section>

      {/* BLOG セクション */}
      <section className="lp-section">
        <h2 className="lp-section__title">BLOG</h2>
        <div className="lp-blogs">
          {blogItems.map((item, index) => (
            <Link
              key={index}
              to={{ pathname: `/blog/${item.sys.id}` }}
              state={{
                title: item.fields.title,
                body: item.fields.body,
                image: item.fields.image,
                createdAt: item.sys.createdAt
              }}
              className="lp-blog"
            >
              <div className="lp-blog__date">{formatDate(item.sys.createdAt)}</div>
              <h3 className="lp-blog__title">{item.fields.title}</h3>
              <p className="lp-blog__description">
                {truncateString(item.fields.description, 60)}
              </p>
            </Link>
          ))}
        </div>
        <div className="lp-section__more">
          <Link to="/blog" className="lp-button">すべての記事を見る</Link>
        </div>
      </section>

      {/* SNS セクション */}
      <section className="lp-section lp-sns">
        <h2 className="lp-section__title">SNS</h2>
        <div className="lp-sns__links">
          <a href="https://twitter.com/mg10313273" target="_blank" rel="noopener noreferrer" className="lp-sns__link">
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 448 512">
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/>
            </svg>
            <span>Twitter / X</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default LP;
