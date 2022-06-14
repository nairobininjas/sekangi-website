//Required components
import React from "react";
import { useParams } from "react-router-dom";
import { Items } from "../data/ItemsData";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ItemPage } from "./ItemPage";

//Bookpage components

export const Item = () => {
  const { id } = useParams();
  const item = Items.find((it) => it.id == id);

  return (
    <div>
      <Header />
      {item ? (
        <ItemPage item={item} key={item.id} />
      ) : (
        <p>
          Oops! Book not found. But we have <a href="/">more</a>
        </p>
      )}
      <Footer />
    </div>
  );
};
