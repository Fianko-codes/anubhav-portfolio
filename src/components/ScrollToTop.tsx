
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Add a small timeout to ensure the DOM is ready
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // This makes the scroll animation smooth
      });
    }, 0);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);
  
  return null;
};

export default ScrollToTop;
