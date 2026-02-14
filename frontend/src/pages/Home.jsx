import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Product_list from "../components/Product_list";
import GuideShop from "../components/GuideShop";
import OurPartner from "../components/OurPartner";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <GuideShop />
      <Product_list />
      <OurPartner />
    </div>
  );
};

export default Home;
