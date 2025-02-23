import { google } from "googleapis";

export async function fetchCities() {
    try {
      const sheets = google.sheets('v4');
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'גיליון1!A:B', // שינינו מ-Sheet1 ל-גיליון1
        key: process.env.GOOGLE_SHEETS_API_KEY
      });

      const rows = response.data.values;
      if (!rows) return [];

      return rows.slice(1).map(row => ({
        name: row[0],
        isExceptional: row[1] === 'חריג'
      }));
    } catch (error) {
      console.error('Failed to fetch cities:', error);
      throw new Error('Failed to load cities data');
    }
}