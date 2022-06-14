import React from "react";
import products from "../data/products";

const Products = ({ id, image, name, title, quote, personIndex, index }) => {
  let position = "nextSlide";
  if (personIndex === index) {
    position = "activeSlide";
  }
  if (
    personIndex === index - 1 ||
    (index === 0 && personIndex === products.length - 1)
  ) {
    position = "lastSlide";
  }
  return (
    <article className={position} key={id}>
      <img src={image} alt={name} className="person-img" />
      <h4>{name}</h4>
      <p className="title">{title}</p>
    </article>
  );
};

export default Products;
