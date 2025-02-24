import React from "react";
import styles from "./Category.module.css";
import { useLocation } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import NewsCard from "../../components/NewsCard/NewsCard";
import useNews from "../../Hooks/useNews";

const Category = () => {
  const { state } = useLocation();
  const { news, loading, filter, setFilter, handleSubmit } = useNews(
    state.category
  );

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="ex:us, tr, jp, mx.."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <button type="submit">Filter Country</button>
        </form>
      </div>
      <div className={styles.right}>
        {loading && <Spinner />}
        {news.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Category;
