//Required imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import HeroLaptop from "../assets/hero-laptop.png";
import { Items } from "../data/ItemsData";

export const ItemCard = ({ item, itemcardstyle }) => {
  return (
    <Link to={`item/${item.id}`} className="item-card" style={itemcardstyle}>
      <div>
        <img src={item.src} alt={item.name} />
      </div>
      <div>
        <h3>{item.name}</h3>
        <p>{`KSH ${item.price}`}</p>
      </div>
    </Link>
  );
};

export const SearchShop = () => {
  const [searchquery, setSearchQuery] = useState("");
  const [prod, setProd] = useState([]);
  const [message, setMessage] = useState("");

  //Handle search

  const handleOnchange = (e) => {
    let value = e.target.value;
    setSearchQuery(value.toLowerCase().replace(/\s+/g, ""));
  };

  //search product

  const SearchProduct = (e) => {
    e.preventDefault();
    if (!searchquery) {
      setMessage("Please enter something to search!");
      return;
    } else {
      let searchedProd = Items.filter(
        (item) =>
          item.name.toLowerCase().replace(/\s+/g, "").includes(searchquery) ||
          item.description
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(searchquery)
      );

      searchedProd.length > 0
        ? setProd([...searchedProd])
        : setProd([]) ||
          setMessage("Sorry, we do not have that item at the moment.");
    }
  };

  return (
    <div className="search-main">
      <section className="search">
        <div>
          <section>
            <h2>What are you shopping for?</h2>
          </section>
          <section>
            <form onSubmit={SearchProduct}>
              <input
                onChange={handleOnchange}
                type="text"
                placeholder="What are you looking for?"
              ></input>
              <button type="submit">Search</button>
            </form>
          </section>
        </div>
        <div className="search-img-div">
          <img src={HeroLaptop} alt="laptop" />
        </div>
      </section>

      <div className="results">
        {prod.length > 0 ? (
          prod.map((it) => (
            <ItemCard
              item={it}
              key={it.id}
              itemcardstyle={{
                backgroundColor: "#EBF3F6",
                borderRadius: ".5rem",
              }}
            />
          ))
        ) : (
          <p className="error-msg">{message}</p>
        )}
      </div>
    </div>
  );
};

const Shop = () => {
  return (
    <div className="shop">
      <Header />
      <SearchShop />
      <div className="laptops" id="laptops">
        <section>
          <h3>Laptops</h3>
        </section>
        <section className="shop-items">
          {Items.filter((thisitem) => thisitem.category === "Laptops").map(
            (laptop) => (
              <ItemCard
                item={laptop}
                key={laptop.id}
                itemcardstyle={{ backgroundColor: "#EBF3F6" }}
              />
            )
          )}
        </section>
      </div>

      <div className="laptops" id="computers">
        <section>
          <h3>Computers</h3>
        </section>
        <section className="shop-items">
          {Items.filter((thisitem) => thisitem.category === "Computers").map(
            (computer) => (
              <ItemCard
                item={computer}
                key={computer.id}
                itemcardstyle={{ backgroundColor: "#F8EBEB" }}
              />
            )
          )}
        </section>
      </div>

      <div className="laptops" id="accessories">
        <section>
          <h3>Accessories</h3>
        </section>
        <section className="shop-items">
          {Items.filter((thisitem) => thisitem.category === "Accessories").map(
            (accessory) => (
              <ItemCard
                item={accessory}
                key={accessory.id}
                itemcardstyle={{ backgroundColor: "#EBF3F6" }}
              />
            )
          )}
        </section>
      </div>

      <div className="laptops" id="monitors">
        <section>
          <h3>Monitors</h3>
        </section>
        <section className="shop-items">
          {Items.filter((thisitem) => thisitem.category === "Monitors").map(
            (printer) => (
              <ItemCard
                item={printer}
                key={printer.id}
                itemcardstyle={{ backgroundColor: "#F8EBEB" }}
              />
            )
          )}
        </section>
      </div>

      <div className="laptops" id="printers">
        <section>
          <h3>Printers</h3>
        </section>
        <section className="shop-items">
          {Items.filter((thisitem) => thisitem.category === "Printers").map(
            (printer) => (
              <ItemCard
                item={printer}
                key={printer.id}
                itemcardstyle={{ backgroundColor: "#EBF3F6" }}
              />
            )
          )}
        </section>
      </div>

      <div className="laptops" id="parts">
        <section>
          <h3>Parts</h3>
        </section>
        <section className="shop-items">
          {Items.filter((thisitem) => thisitem.category === "Parts").map(
            (printer) => (
              <ItemCard
                item={printer}
                key={printer.id}
                itemcardstyle={{ backgroundColor: "#F8EBEB" }}
              />
            )
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
