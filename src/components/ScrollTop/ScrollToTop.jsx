import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Отримуємо поточний шлях

  useEffect(() => {
    document.documentElement.scrollTop = 0; // Прокручуємо документ на початок
  }, [pathname]); // Викликається при зміні маршруту

  return null;
};

export default ScrollToTop;
