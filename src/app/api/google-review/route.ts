import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = 'ChIJwWuDv0AHbUcRiDe0VS-lzZI'; // Replace with your actual place ID

  try {  
    const response = await fetch(
      `https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/${placeId}/reviews`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
  }
}
