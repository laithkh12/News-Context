import React, { useEffect } from "react";
import styles from "./Home.module.css";
import Slider from "../../components/Slider/Slider";
import Spinner from "../../components/Spinner/Spinner";
import NewsCard from "../../components/NewsCard/NewsCard";
import Theme from "../../components/Theme/Theme";
import useNews from "../../Hooks/useNews";

const Home = () => {
  const { news, loading, theme } = useNews("", "us");
  const darkMode = theme.state.darkMode;
  const sliderNews = news?.splice(0, 3);

  useEffect(() => {}, [darkMode]);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: darkMode ? "gray" : "white" }}
    >
      <Theme />
      <div className={styles.slider}>
        <Slider sliderNews={sliderNews} />
      </div>
      <div className={styles.news}>
        {loading && <Spinner />}
        {news?.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
