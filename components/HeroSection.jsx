export default function PromoBanner() {
  return (
    <section className="my-8">
      {/* Контейнер баннера с закруглением углов и относительным позиционированием */}
      <div className="relative w-full lg:aspect-[21/9] aspect-[16/7] overflow-hidden group">
        {/* Фоновое изображение */}
        <img
          src="../images/banner.png"
          alt="Winter snowboard sale"
          className="cursor-pointer absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Затемняющий градиент сверху для улучшения читаемости текста при ярком солнце */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

        {/* Черная плашка с текстом (позиционируется в левом нижнем углу) */}
        <div className="absolute bottom-2 left-2 lg:bottom-6 lg:left-6 bg-black text-white lg:py-4 lg:px-8 py-2 px-6 shadow-lg max-w-[90%]">
          <h2 className="text-sm lg:text-4xl font-black tracking-wider uppercase whitespace-nowrap">
            Зимняя распродажа до -70%
          </h2>
        </div>
      </div>
    </section>
  );
}
