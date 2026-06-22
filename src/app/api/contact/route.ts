import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { formType, ...fields } = body;

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

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL_TO || "sales@mohanconbuilds.co.in",
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
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
