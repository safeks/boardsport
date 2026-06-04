import { useState } from "react";

export default function Footer() {
  // Состояние для раскрытых секций в мобильной версии
  const [openSections, setOpenSections] = useState({
    Контакты: false,
    Помощь: false,
    Компания: false,
  });

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // Данные для колонок "Помощь" и "Компания"
  const helpLinks = [
    { label: "Доставка", href: "#" },
    { label: "Оплата", href: "#" },
    { label: "Возврат", href: "#" },
    { label: "Отзывы (2290)", href: "#" },
    { label: "Акции и скидки", href: "#" },
  ];

  const companyLinks = [
    { label: "Контакты", href: "#" },
    { label: "О компании", href: "#" },
    { label: "Вакансии", href: "#" },
    { label: "Публичная оферта", href: "#" },
  ];

  return (
    <footer
      style={{
        backgroundSize: "cover",
        backgroundImage: "url(../images/footer.png)",
      }}
      className="lg:pb-9 lg:pt-44 pt-40 pb-5 lg:mt-14"
    >
      {/* Декоративная ломаная линия сверху */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-12">
        {/* === ДЕСКТОПНАЯ ВЕРСИЯ (md и выше) === */}
        <div className="hidden md:grid grid-cols-3 gap-8 pt-8 border-t border-neutral-800">
          {/* Контакты */}
          <div>
            <h3 className="text-lg text-white font-semibold mb-6">Контакты</h3>
            <div className="space-y-6">
              {/* Телефон */}
              <div className="flex items-start gap-4">
                <svg
                  className="w-6 h-6 mt-1 text-white shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <a
                    href="tel:88005117468"
                    className="text-lg text-white font-bold hover:underline block"
                  >
                    8 (800) 511-74-68
                  </a>
                  <p className="text-xs text-neutral-400 mt-1">
                    Бесплатная горячая линия
                  </p>
                  <p className="text-xs text-neutral-400">
                    Ежедневно с 9 до 21
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <svg
                  className="w-6 h-6 mt-1 text-white shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h4 className="text-lg text-white font-bold">
                    Контактный Email
                  </h4>
                  <a
                    href="mailto:info@brd.ru"
                    className="text-sm text-neutral-400 hover:text-white underline block mt-1"
                  >
                    info@brd.ru
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Помощь */}
          <div>
            <h3 className="text-lg text-white font-semibold mb-6">Помощь</h3>
            <ul className="space-y-4">
              {helpLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Компания */}
          <div>
            <h3 className="text-lg text-white font-semibold mb-6">Компания</h3>
            <ul className="space-y-4">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* === МОБИЛЬНАЯ ВЕРСИЯ (Аккордеон, до md) === */}
        <div className="md:hidden space-y-1 pt-4 border-neutral-800">
          {/* Секция Контакты */}
          <div className="border-b border-neutral-900">
            <button
              onClick={() => toggleSection("Контакты")}
              className="w-full flex justify-between items-center py-4 text-left font-medium text-base focus:outline-none"
            >
              <p className="text-white">Контакты</p>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${openSections["Контакты"] ? "rotate-180" : ""}`}
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${openSections["Контакты"] ? "max-h-60 pb-6" : "max-h-0"}`}
            >
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3">
                  <a
                    href="tel:88005117468"
                    className="text-base text-white font-bold"
                  >
                    8 (800) 511-74-68
                  </a>
                </div>
                <div className="text-xs text-neutral-400">
                  <p>Бесплатная горячая линия</p>
                  <p>Ежедневно с 9 до 21</p>
                </div>
                <div className="pt-2">
                  <p className="text-sm font-bold text-neutral-400">Контактный Email</p>
                  <a
                    href="mailto:info@brd.ru"
                    className="text-sm text-neutral-400 underline"
                  >
                    info@brd.ru
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Секция Помощь */}
          <div className="border-b border-neutral-900">
            <button
              onClick={() => toggleSection("Помощь")}
              className="w-full flex justify-between items-center py-4 text-left font-medium text-base focus:outline-none"
            >
              <p className="text-white">Помощь</p>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${openSections["Помощь"] ? "rotate-180" : ""}`}
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${openSections["Помощь"] ? "max-h-60 pb-6" : "max-h-0"}`}
            >
              <ul className="space-y-3 pt-2">
                {helpLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-400 block py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Секция Компания */}
          <div className="border-b border-neutral-900">
            <button
              onClick={() => toggleSection("Компания")}
              className="w-full flex justify-between items-center py-4 text-left font-medium text-base focus:outline-none"
            >
              <p className="text-white">Компания</p>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${openSections["Компания"] ? "rotate-180" : ""}`}
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${openSections["Компания"] ? "max-h-60 pb-6" : "max-h-0"}`}
            >
              <ul className="space-y-3 pt-2">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-400 block py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex justify-center md:justify-start">
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="VK"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M15.012 24c-8.994 0-14.124-6.156-14.336-16.42h4.48c.15 7.53 3.473 10.723 6.103 11.38V7.58H15.5v6.49c2.42-.26 5.056-3.21 5.914-6.49h4.2c-.67 4.09-3.684 7.04-5.783 8.27C22.015 17.02 25.4 19.53 26 24h-4.63c-.47-3.21-3.033-5.7-5.856-5.98v5.98z" />
              </svg>
            </a>

            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Telegram"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.24-5.52 3.65-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.03-.75 4.04-1.76 6.74-2.92 8.1-3.48 3.84-1.6 4.64-1.88 5.16-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.15-.03.22z" />
              </svg>
            </a>

            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Music Brand"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5c0 .83-.67 1.5-1.5 1.5S8 17.33 8 16.5s.67-1.5 1.5-1.5H11v-5h4v2h-3v4.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
