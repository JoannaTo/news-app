import React, { useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import NewsArticle from "./NewsArticle";

const News = () => {
  const { data } = useContext(NewsContext);
  console.log(data);
  return (
    <div className="news d-flex flex-wrap justify-content-around">
      {data
        ? data.articles.map((news) => (
            <NewsArticle data={news} key={news.url} />
          ))
        : "Loading"}
    </div>
  );
};

export default News;
