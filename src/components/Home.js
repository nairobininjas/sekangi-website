import React from "react";
import { Categories } from "./Categories";
import { Commitment } from "./Commitment";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { OffersSection } from "./OffersSection";

export const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <OffersSection />
      <Categories />
      <Commitment />
      <Footer />
    </div>
  );
};
