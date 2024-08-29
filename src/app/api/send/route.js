// Import necessary modules
import { NextResponse } from "next/server";
import EmailTemplate from "../../../components/emailTemplate";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Parse the request body
    const { firstName, lastName, email, subject, message } =
      await request.json();

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: "SM2Trust Leads <leads@sm2trust.com>",
      to: "info@sm2trust.com",
      subject: `New Lead: ${firstName} ${lastName}`,
      react: EmailTemplate({ firstName, lastName, email, subject, message }),
      replyTo: email,
    });

    // Check if there was an error
    if (error) {
      console.error("Email sending error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Return success response
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error occurred:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
