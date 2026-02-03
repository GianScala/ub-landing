import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const email = typeof body.email === "string" ? body.email.trim() : "";

    // Basic validation (you can upgrade later)
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
    }

    // IMPORTANT:
    // - `from` must be a verified sender in Resend OR the Resend onboarding domain.
    // - For production, use something like: "PreseedMe <noreply@preseedme.com>"
    const from = process.env.RESEND_FROM || "SK Labs <onboarding@resend.dev>";

    // Where YOU receive the notification
    const notifyTo = process.env.WAITLIST_NOTIFY_TO || "team@preseedme.com";

    const { data, error } = await resend.emails.send({
      from,
      to: notifyTo,
      replyTo: email, // lets you hit reply and respond to the signup
      subject: "🎉 New Waitlist Signup!",
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a;">New Waitlist Signup</h2>
          <div style="background: #f1f5f9; padding: 16px; border-radius: 10px; margin: 16px 0;">
            <p style="margin: 0; color: #334155;"><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p style="margin: 10px 0 0 0; color: #64748b;">
              <strong>Date (UTC):</strong> ${new Date().toISOString()}
            </p>
          </div>
          <p style="color: #64748b; font-size: 14px;">This person just joined your waitlist.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to process signup" }, { status: 500 });
    }

    // Optional: log message id if present
    console.log("✅ Waitlist signup:", email, "messageId:", data?.id);

    return NextResponse.json({ success: true, message: "Successfully joined waitlist" });
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json({ error: "Failed to join waitlist" }, { status: 500 });
  }
}

// Tiny helper to avoid HTML injection in email body
function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
