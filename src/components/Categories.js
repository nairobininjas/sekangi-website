//Required imports
import React from "react";
import BoseHeadPhones from "../assets/bose head.png";
import X1carbon from "../assets/x1.png";
import Tower from "../assets/tower.png";
import Printer from "../assets/printer.png";
import Monitor from "../assets/monitor-bg.png";
import Harddrive from "../assets/harddrive-bg.png";
import { HashLink } from "react-router-hash-link";

//Offer card

export const CategoryCard = ({ catname, catImg, catstyle, catlink }) => {
  return (
    <div style={catstyle} className="catcard">
      <HashLink
        to={catlink}
        scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
      >
        <img src={catImg} alt="category" />
        <h3>{catname}</h3>
      </HashLink>
    </div>
  );
};

export const Categories = () => {
  return (
    <div className="general-section">
      <div>
        <h2>Categories</h2>
      </div>
      <div className="catcards">
        <CategoryCard
          catImg={Tower}
          catname="Computers"
          catlink="/shop#computers"
        />
        <CategoryCard
          catImg={X1carbon}
          catname="Laptops"
          catlink="/shop#laptops"
        />
        <CategoryCard
          catImg={Printer}
          catname="Printers"
          catlink="/shop#printers"
        />
        <CategoryCard
          catImg={BoseHeadPhones}
          catname="Accessories"
          catlink="/shop#accessories"
        />
        <CategoryCard
          catImg={Monitor}
          catname="Monitors"
          catlink="/shop#monitors"
        />
        <CategoryCard
          catImg={Harddrive}
          catname="Parts"
          catlink="/shop#parts"
        />
      </div>
    </div>
  );
};
