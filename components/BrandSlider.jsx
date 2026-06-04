import { useState } from "react";
import { imagesBrends } from "../data/mockData";

export default function BrandSlider() {
  return (
    <section>
      {/* ПК */}
      <div className="pt-[50px] hidden lg:block pb-28">
        <ul className="flex items-center justify-between gap-5">
          {imagesBrends.map((img) => (
            <li key={img.id}>
              <picture>
                <img src={img.src} alt={img.alt} />
              </picture>
            </li>
          ))}
        </ul>
      </div>

      {/* Мобилки */}
      <div className="scroll-filter block overflow-x-auto px-4 py-6 lg:hidden lg:py-[50px]">
        <ul className="flex items-center justify-between gap-5">
          {imagesBrends.map((img) => (
            <li
              key={img.id}
              className="h-auto max-w-full shrink-0 grow-0 basis-[14%] lg:basis-full"
            >
              <picture>
                <img src={img.src} alt={img.alt} />
              </picture>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
