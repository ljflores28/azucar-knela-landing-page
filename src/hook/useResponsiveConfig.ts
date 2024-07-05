import { useState, useEffect } from 'react';

interface Config {
  [key: string]: string | number;
}

interface UseResponsiveConfigProps {
  minWidth: number;
  specificConfig: Config;
}

const useResponsiveConfig = ({ minWidth, specificConfig }: UseResponsiveConfigProps) => {
  const [config, setConfig] = useState<Config>({'hola': 'mundo','papa':2});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= minWidth) {
        setConfig(specificConfig);
      } else {
        setConfig({});
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check the width on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [minWidth, specificConfig]);

  return config;
};

export default useResponsiveConfig;
  