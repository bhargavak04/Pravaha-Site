import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate the input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure nodemailer transporter
    // Note: In production, you should use environment variables for these credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'contact.pravaha@gmail.com', // This should be set as an environment variable
        pass: process.env.EMAIL_PASSWORD, // This should be set as an environment variable
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: 'contact.pravaha@gmail.com',
      subject: `Contact Form: ${subject}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff5722;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #ff5722;">
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
    };

    // In development, log the email instead of sending it
    if (process.env.NODE_ENV === 'development') {
      console.log('Email would be sent in production:', mailOptions);
      return NextResponse.json({ success: true });
    }

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}