import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend('re_2H3H9ndg_5U1kAyQqDWcpoin8JcEpEpab');

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    console.log('Attempting to send email with data:', {
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['mohddishk@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Message from ${firstName} ${lastName}`
    });

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['mohddishk@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Message from ${firstName} ${lastName}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message}
      `,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: `Failed to send email: ${error.message}` },
        { status: 500 }
      );
    }

    console.log('Email sent successfully. Response:', data);
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Detailed error:', error.message);
    return NextResponse.json(
      { error: `Server error: ${error.message}` },
      { status: 500 }
    );
  }
} 