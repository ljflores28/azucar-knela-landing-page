import { useEffect } from 'react';

const useScrollPercentage = (): void => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const documentHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPercentage = scrollPosition / (documentHeight - windowHeight);
      document.body.style.setProperty('--scroll', scrollPercentage.toString());
    };

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, []);
};

export default useScrollPercentage;
