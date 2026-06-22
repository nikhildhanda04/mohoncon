import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function maskEmail(email: string): string {
  const [name, domain] = email.split("@");
  if (!domain) return "***";
  const [domainName, ...tldParts] = domain.split(".");
  const tld = tldParts.join(".");
  const maskedName = name.length > 2
    ? name.slice(0, 2) + "***" + name.slice(-1)
    : name[0] + "***";
  const maskedDomain = domainName.length > 2
    ? domainName.slice(0, 2) + "***" + domainName.slice(-1)
    : domainName + "***";
  return `${maskedName}@${maskedDomain}.${tld}`;
}

function classifySMTPError(error: unknown): { type: string; message: string } {
  if (!(error instanceof Error)) {
    return { type: "unknown", message: "Unknown error occurred" };
  }
  const msg = error.message || "";

  const code = (error as unknown as Record<string, string>).code;

  if (code === "EAUTH") {
    if (msg.includes("535")) {
      return {
        type: "bad_credentials",
        message: "Gmail rejected credentials. Check SMTP_USER and SMTP_PASS are correct. Also check the Gmail inbox for a 'Sign-in attempt blocked' email and approve it.",
      };
    }
    if (msg.includes("534")) {
      return {
        type: "less_secure_blocked",
        message: "Gmail blocked login. The account owner must enable 'App Passwords' at myaccount.google.com/apppasswords (requires 2FA enabled).",
      };
    }
    return { type: "auth_failed", message: msg };
  }

  if (code === "ESOCKET" || code === "ECONNECTION") {
    return {
      type: "connection_failed",
      message: "Cannot reach Gmail SMTP. Gmail may be blocking Vercel's server IP. Try approving the sign-in from the Gmail inbox, or use a different email provider.",
    };
  }

  if (code === "EENVELOPE") {
    return {
      type: "invalid_address",
      message: "Invalid sender or recipient email address. Check SMTP_USER and CONTACT_EMAIL_TO.",
    };
  }

  return { type: "unknown", message: msg };
}

export async function POST(request: Request) {
  const body = await request.json();
  const { formType, ...fields } = body;

  console.log("--- New Contact Form Submission ---");
  console.log("Form type:", formType);
  console.log("Fields:", JSON.stringify(fields, null, 2));

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  console.log("[SMTP Config] Host:", process.env.SMTP_HOST || "smtp.gmail.com");
  console.log("[SMTP Config] Port:", process.env.SMTP_PORT || "587");
  console.log("[SMTP Config] User (masked):", smtpUser ? maskEmail(smtpUser) : "NOT SET");
  console.log("[SMTP Config] Pass:", smtpPass ? "SET (length " + smtpPass.length + ")" : "NOT SET");
  console.log("[SMTP Config] Contact To:", process.env.CONTACT_EMAIL_TO || "pranjal@mohanconbuilds.co.in");

  if (!smtpUser || smtpUser === "your-email@gmail.com" || !smtpPass) {
    console.error("[SMTP] Env vars missing or still set to placeholder");
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

    console.log("[SMTP] Email sent successfully");
    return NextResponse.json({ success: true, message: "Thank you! We will get back to you soon." });
  } catch (error) {
    const classification = classifySMTPError(error);
    console.error(`[SMTP] Send failed [${classification.type}]:`, classification.message);

    return NextResponse.json({
      success: false,
      message: "Failed to send message. Please try again later.",
      errorType: classification.type,
    }, { status: 500 });
  }
}
