import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const { formType, ...fields } = body;

  console.log("--- New Contact Form Submission ---");
  console.log("Form type:", formType);
  console.log("Fields:", JSON.stringify(fields, null, 2));

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || smtpUser === "your-email@gmail.com" || !smtpPass) {
    console.error("SMTP env vars missing or still set to placeholder");
    return NextResponse.json({
      success: false,
      message: "Form not configured. Please set SMTP_USER and SMTP_PASS in environment variables.",
    }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const fieldRows = Object.entries(fields)
      .filter(([, value]) => value)
      .map(([key, value]) => {
        const label = key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());
        return `<tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:600">${label}</td><td style="padding:8px 12px;border:1px solid #ddd">${value}</td></tr>`;
      })
      .join("");

    const subject =
      formType === "quote"
        ? "New Quote Request - Mohancon Builds"
        : "New Enquiry - Mohancon Builds";

    await transporter.sendMail({
      from: smtpUser,
      to: process.env.CONTACT_EMAIL_TO || "pranjal@mohanconbuilds.co.in",
      subject,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#299191">${subject}</h2>
          <table style="border-collapse:collapse;width:100%">
            ${fieldRows}
          </table>
          <p style="color:#666;margin-top:24px;font-size:12px">Sent from Mohancon Builds website contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Thank you! We will get back to you soon." });
  } catch (error) {
    console.error("Email send failed:", error instanceof Error ? error.message : error);

    return NextResponse.json({
      success: false,
      message: "Failed to send message. Please try again later.",
    }, { status: 500 });
  }
}
