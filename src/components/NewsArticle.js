import React from "react";

const NewsArticle = ({ data }) => {
  const { author, title, urlToImage, publishedAt, content } = data;
  return (
    <div className="single-news-article card mb-4">
      <img src={urlToImage} className="card-img-top h-25" alt="img" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
      </div>
      <div className="card-footer text-muted">
        {author} <br />
        {publishedAt}
      </div>
    </div>
  );
};
export default NewsArticle;
