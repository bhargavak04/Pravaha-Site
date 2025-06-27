import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');

  if (action === 'get-calendly-url') {
    // In a real application, you would dynamically generate a Calendly scheduling link
    // based on user preferences or event types. For this example, we'll use a placeholder.
    const calendlyUrl = process.env.CALENDLY_SCHEDULING_URL;

    if (!calendlyUrl) {
      return new NextResponse(JSON.stringify({ error: 'Calendly scheduling URL not configured.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      });
    }

    return new NextResponse(JSON.stringify({ url: calendlyUrl }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    });
  }

  return new NextResponse(JSON.stringify({ error: 'Invalid action' }), {
    status: 400,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');

  if (action === 'book-slot') {
    // In a real application, you would use the Calendly API to create an event.
    // This typically involves making a POST request to Calendly's API with event details.
    // For this example, we'll simulate a successful booking.
    const body = await request.json();
    console.log('Simulating booking with data:', body);

    // Simulate a successful booking response from Calendly
    return new NextResponse(JSON.stringify({ message: 'Slot booked successfully via Calendly (simulated).' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    });
  }

  return new NextResponse(JSON.stringify({ error: 'Invalid action' }), {
    status: 400,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}