import { useState, useEffect } from 'react';

function useCurrentDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Actualiza la fecha cada segundo

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar
  }, []);

  return currentDate;
}

export default useCurrentDate;
