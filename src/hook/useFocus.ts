import { useState, useRef, useEffect } from 'react';

// Hook personalizado para detectar si un botón está enfocado
const useFocus = <T extends HTMLElement>(): [React.RefObject<T>, boolean] => {
  const [isFocused, setIsFocused] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    if (element) {
      element.addEventListener('focus', handleFocus);
      element.addEventListener('blur', handleBlur);
    }

    return () => {
      if (element) {
        element.removeEventListener('focus', handleFocus);
        element.removeEventListener('blur', handleBlur);
      }
    };
  }, []);

  return [elementRef, isFocused];
};

export default useFocus;
