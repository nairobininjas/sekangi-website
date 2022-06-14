//Required imports
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import data from "../data/products";
import Products from "./Products";

export const Hero = () => {
  const [prod, setProd] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = prod.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, prod]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="hero">
      <section className="hero-left">
        <h2>Dealers in all ICT equipment</h2>
        <p>Your reliable and affordable computer and electronics supplier</p>
        <Link to="/shop">
          <button>Shop Now</button>
        </Link>
      </section>
      <section>
        <p style={{ color: "crimson", fontSize: "18px", marginTop: "10px" }}>
          This website is under maintenance.
        </p>
      </section>
      {/* <section className="hero-right">
        <div className="section-center">
          {prod.map((person, personIndex) => {
            return (
              <Products
                key={person.id}
                {...person}
                personIndex={personIndex}
                index={index}
              />
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              size="2x"
              style={{ color: "white" }}
              className="prev"
            />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FontAwesomeIcon
              icon={faChevronCircleRight}
              size="2x"
              style={{ color: "white" }}
              className="next"
            />
          </button>
        </div>
      </section> */}
    </div>
  );
};
