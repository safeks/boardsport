import { useState } from "react";
import BrandSlider from "./components/BrandSlider";
import CategorySection from "./components/CategorySection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { products } from "./data/mockData";

export default function BoardSportApp() {
  const categories = ["Сноуборды", "Лыжи", "Коньки"];

  return (
    <div className="text-gray-900 font-sans">
      <div className="max-w-[1360px] mx-auto px-4">
        <Header />
        <main>
          <HeroSection />
          <BrandSlider />
          {categories.map((category) => (
            <CategorySection
              key={category}
              title={category}
              products={products.filter((p) => p.category === category)}
            />
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}
