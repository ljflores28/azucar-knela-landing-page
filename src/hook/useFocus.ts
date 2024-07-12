import { useState, useRef, useEffect } from 'react';

// Hook personalizado para detectar si un botón está enfocado
const useFocus = <T extends HTMLElement>(): [React.RefObject<T>, boolean] => {
  const [isFocused, setIsFocused] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;

    const handleFocus = () => setIsFocused(true);
    const handleFocusOut = () => setTimeout( () => setIsFocused(false), 200);

    if (element) {
      element.addEventListener('focusin', handleFocus);
      element.addEventListener('focusout', handleFocusOut);
    }

    return () => {
      if (element) {
        element.removeEventListener('focusin', handleFocus);
        element.removeEventListener('focusout', handleFocusOut);
      }
    };
  }, []);

  return [elementRef, isFocused];
};

export default useFocus;
