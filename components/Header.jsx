export default function Header() {
  return (
    <header className="mx-auto sticky top-0 z-50 bg-white border-b border-gray-200 w-full">
      <div className="">
        {/* ВЕРХНЯЯ СТРОКА: Логотип, Десктопное меню, Поиск */}
        <div className="flex justify-between items-center h-16 w-full">
          {/* 1. Логотип (слева на мобильных, по центру на десктопе за счет flex-окружения) */}
          <div className="flex-1 md:flex-initial">
            <h1 className="text-lg lg:text-2xl font-black tracking-widest text-gray-900">
              <a href="/">BOARDSPORT</a>
            </h1>
          </div>

          {/* 2. Десктопное меню (на мобильных устройствах гарантированно скрыто с помощью display: none) */}
          <nav className="hidden md:flex space-x-8 order-[-1]">
            <a href="#сноуборды" className="animated-underline">
              Сноуборды
            </a>
            <a href="#лыжи" className="animated-underline">
              Лыжи
            </a>
            <a href="#коньки" className="animated-underline">
              Коньки
            </a>
          </nav>

          {/* 3. Поиск (справа) */}
          <div className="ml-2 flex items-center justify-end">
            <input
              type="text"
              placeholder="Поиск..."
              className="w-32 sm:w-48 lg:w-64 lg:px-3 lg:py-2 px-2.5 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
        </div>

        {/* НИЖНЯЯ СТРОКА: Мобильная навигация */}
        {/* Класс "md:hidden" принудительно скрывает этот блок на экранах шире 768px (планшеты/десктопы) */}
        <div className="block md:hidden py-2.5">
          <nav className="flex justify-between items-center">
            <a
              href="#сноуборды"
              className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-600 active:text-black hover:text-black transition-colors"
            >
              Сноуборды
            </a>

            <a
              href="#лыжи"
              className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-600 active:text-black hover:text-black transition-colors"
            >
              Лыжи
            </a>

            <a
              href="#коньки"
              className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-600 active:text-black hover:text-black transition-colors"
            >
              Коньки
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
