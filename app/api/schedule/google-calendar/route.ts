import { google } from 'googleapis';

const SCOPES = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/userinfo.email',
];

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || '';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

export async function GET() {
  if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
    console.error('Missing Google API environment variables');
    return new Response(JSON.stringify({ error: 'Server configuration error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });
  }

  try {
    const url = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
      prompt: 'consent',
    });
    return new Response(JSON.stringify({ url }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Error generating OAuth URL:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate OAuth URL' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });
  }
}

export async function POST(request: Request) {
  if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
    console.error('Missing Google API environment variables');
    return new Response(JSON.stringify({ error: 'Server configuration error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });
  }

  try {
    const body = await request.json();
    const { code, action, eventDetails } = body;

    if (!code) {
      return new Response(JSON.stringify({ error: 'Missing OAuth code' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store'
        }
      });
    }

    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

    if (action === 'fetch-slots') {
      // Fetch available slots logic here
      const events = await calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
      });

      return new Response(JSON.stringify({ events: events.data.items }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store'
        }
      });
    } else if (action === 'book-slot' && eventDetails) {
      // Book slot logic here
      const event = await calendar.events.insert({
        calendarId: 'primary',
        requestBody: eventDetails,
      });

      return new Response(JSON.stringify({ event: event.data }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store'
        }
      });
    }

    return new Response(JSON.stringify({ error: 'Invalid action' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ error: 'Failed to process request' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });
  }
}