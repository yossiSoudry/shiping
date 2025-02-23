// app/api/regions/route.ts
import { google } from 'googleapis';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // בדיקת משתני הסביבה
    console.log('Environment variables:', {
      SHEET_ID: process.env.GOOGLE_SHEET_ID,
      API_KEY: process.env.GOOGLE_SHEETS_API_KEY?.slice(0, 5) + '...' // מציג רק חלק מהמפתח
    });

    const sheets = google.sheets('v4');
    const range = 'גיליון1!A:B';

    console.log('Making API call with params:', {
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: range
    });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: range,
      key: process.env.GOOGLE_SHEETS_API_KEY
    });

    console.log('Raw response:', response);

    return Response.json({ 
      success: true, 
      data: response.data
    });

  } catch (error: any) {
    console.error('Error type:', typeof error);
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    if (error.response) {
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
    }

    return Response.json({ 
      error: 'API Error',
      message: error.message,
      details: error.response?.data
    }, { 
      status: error.response?.status || 500 
    });
  }
}