import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Log the contact form submission (for development)
    console.log("📧 New Contact Form Submission:");
    console.log(`Name:    ${name}`);
    console.log(`Email:   ${email}`);
    console.log(`Phone:   ${phone || "Not provided"}`);
    console.log(`Message: ${message}`);

    // ─── Email Integration (Uncomment to enable) ───────────────────────────
    // To enable email sending, install Resend: npm install resend
    // Then add RESEND_API_KEY to your .env.local file
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "portfolio@kaithproperties.com",
    //   to: "mandeep@kaithproperties.com",
    //   subject: `New Contact: ${name}`,
    //   html: `
    //     <h2>New Portfolio Contact</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });
    // ──────────────────────────────────────────────────────────────────────

    return NextResponse.json(
      { success: true, message: "Your message has been received. We will get back to you shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
