import Header from "@/components/Header";
import React from "react";
import Hero from "../components/home/Hero";
import HeroContact from "@components/home/HeroContact";
import Products from "@components/home/Products";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HeroContact />
      <Products />
    </div>
  );
};

export default Home;
