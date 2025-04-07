
import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

export function useElementOnScreen<T extends Element>(
  options: IntersectionObserverOptions = {}
): [RefObject<T>, boolean] {
  const { root = null, rootMargin = '0px', threshold = 0.1, once = true } = options;
  
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (elementRef.current === null) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting) {
          setIsVisible(true);
          
          // If once is true, disconnect after becoming visible
          if (once && isIntersecting) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { root, rootMargin, threshold }
    );
    
    observer.observe(elementRef.current);
    
    return () => {
      if (elementRef.current !== null) {
        observer.disconnect();
      }
    };
  }, [root, rootMargin, threshold, once]);
  
  return [elementRef, isVisible];
}
