import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="/img/loading.gif" alt="loading" width={50} height={50} />
    </div>
  );
};

const NewsCard = ({ article }) => {
  return (
    <div
      style={{
        display: "flex",
        boxShadow: "1px 1px 15px #ddd",
        margin: "20px",
        fontFamily: "Consolas",
        color: "green",
      }}
    >
      <img width={400} src={article.urlToImage} alt="url image" />
      <div style={{ padding: "20px" }}>
        <h1>{article.title}</h1>
        <h3>{article.author}</h3>
        <h4>{article.publishedAt}</h4>
        <p>{article.description}</p>
        <a href={article.url}>Read More</a>
      </div>
    </div>
  );
};

const BbcNews = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1aa7459599d94efa8ee09f5c2d282fac"
      )
      .then((data) => {
        setData(data.data.articles);
      });
  }, []);

  return (
    <div>
      {data === null ? (
        <Loading />
      ) : (
        <div>
          {data.map((article) => {
            return <NewsCard article={article} />;
          })}
        </div>
      )}
    </div>
  );
};

export default BbcNews;
