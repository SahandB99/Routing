import React from "react";
import { Link } from "react-router-dom";

import "./ArticleCard.styles.css";

const ArticleCard = ({ id, title, desc, category, imgUrl }) => {
  return (
    <article className="card">
      <figure>
        <img src={imgUrl} alt="image" />
      </figure>
      <div className="content">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className="read-more">
        <Link to={"/articles/" + id}>Read more</Link>
      </div>
    </article>
  );
};

export default ArticleCard;
