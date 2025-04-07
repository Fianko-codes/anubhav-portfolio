
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Using requestAnimationFrame to ensure the DOM has updated
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
    
    // Ensure this runs after any DOM updates
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(scrollToTop);
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);
  
  return null;
};

export default ScrollToTop;
