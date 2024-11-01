import { useState, useEffect } from 'react';

interface RowData {
  id: string;
  titulo: string;
  descripcion: string;
  pathImg: string;

}

const useGoogleSheetData = (spreadsheetId: string, sheetName: string, apiKey: string) => {
  const [data, setData] = useState<RowData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Error al obtener datos de Google Sheets');
        }

        const json = await response.json();

        // Convertimos las filas en objetos RowData
        const rows: RowData[] = json.values.slice(1).map((row: string[]) => ({
          id: row[0],
          titulo: row[1],
          descripcion: row[2],
          pathImg: row[3]
        }));

        setData(rows);
      } catch (error) {
        console.error('Error al obtener datos:', error);
        setError('Error al obtener datos de Google Sheets');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [spreadsheetId, sheetName, apiKey]);

  return { data, error, loading };
};

export default useGoogleSheetData;
