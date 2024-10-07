import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email } = await req.json();  

  // Dodavanje u Mailchimp newsletter listu
  const response = await fetch(
    `${process.env.MAILCHIMP_URL}/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `auth ${process.env.MAILCHIMP_API_KEY}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    }
  );

  if (response.status >= 400) {
    return NextResponse.json(
      {
        error:
          'Beim Abonnieren des Newsletters ist ein Fehler aufgetreten. Versuchen Sie es später noch einmal.',
      },
      { status: 400 }
    );
  }

  return NextResponse.json({ error: '' }, { status: 200 });
}
