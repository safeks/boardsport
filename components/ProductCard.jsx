import clsx from "clsx";

export default function ProductCard({ product, key }) {
  const discountPercent = Math.round((product.price * product.sale) / 100);

  return (
    <div className="cursor-pointer lg:p-4 p-2 duration-500 hover:shadow-lg hover:-translate-y-2">
      <div className="flex items-center justify-center relative bg-[#f9f9f9] px-6 py-11">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {product.sale && (
          <div className="absolute bottom-0 left-0 bg-red-500 text-white lg:px-3 py-1 px-2 text-xs">
            -{product.sale}%
          </div>
        )}
      </div>

      <div className="mt-2">
        <p className="text-sm font-medium uppercase mb-1">{product.brand}</p>

        <h3 className="text-sm font-medium text-[#828b8d] mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-baseline space-x-2">
          <span
            className={clsx(
              product.sale
                ? "line-through lg:text-lg text-sm font-bold text-gray-900"
                : "lg:text-lg text-sm font-bold text-gray-900",
            )}
          >
            {product.price} ₽
          </span>
          {product.sale && (
            <span className="lg:text-lg text-sm font-medium text-red-500">
              {product.price - discountPercent} ₽
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
