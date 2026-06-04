import ProductCard from "./ProductCard";

export default function CategorySection({ title, products }) {
  if (!products || products.length === 0) {
    return null;
  }

  const sectionId = title.toLowerCase();

  return (
    <section
      id={sectionId}
      className="lg:py-12 py-6 bg-white lg:scroll-mt-10 scroll-mt-24"
    >
      <div className="">
        {/* Category Title */}
        <h2 className="lg:text-3xl text-xl font-black lg:mb-8 mb-5 tracking-tight">
          {title}
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
