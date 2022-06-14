//Required imports
import React, { useState } from "react";

export const ItemPage = ({ item }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="item-page">
      <section className="item-page-left">
        <div className="item-image">
          <img src={item.src} alt={item.name} />
        </div>

        <div>
          <a href="tel:0111854222">
            <button onClick={() => setClicked(!clicked)} className="call">
              {clicked ? "0733-986-558" : "Call/Text to buy"}
            </button>
          </a>
        </div>
      </section>

      <section className="item-page-right">
        <h3>{item.name} </h3>
        <h4>KSH {item.price}</h4>
        <h5>About the product</h5>
        <p>{item.description}</p>
      </section>
    </div>
  );
};
