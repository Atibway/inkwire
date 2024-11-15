import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({
  region: "us-east-1", // Replace with your SES region if necessary
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_KEY_ID!,
  },
});

export async function POST(req: NextRequest) {
  const { userEmail, subject, content } = await req.json();

  // Prepare the email parameters for SES
  const params = {
    Destination: {
      ToAddresses: userEmail,
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: content, // HTML content of the email
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject, // Email subject
      },
    },
    Source: "ainebyoonaatiidu@gmail.com", // Your verified sender email
  };

  try {
    // Send email using SES
    const command = new SendEmailCommand(params);
    const response = await ses.send(command);

    return NextResponse.json({ message: "Email sent successfully", response });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email", error }, { status: 500 });
  }
}
