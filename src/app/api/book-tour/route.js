import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {
      firstName,
      lastName,
      country,
      email,
      phone,
      pax,
      fromDate,
      toDate,
      message,
    } = await req.json();

    if (!email || !firstName || !phone) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"TourLanka Booking" <${process.env.EMAIL_USER}>`,
      to: "janodhjeewantha@gmail.com",
      replyTo: email,
      subject: "New Tour Booking Request",
      html: `
        <h2>New Booking Request</h2>
        <table cellpadding="6">
          <tr><td><strong>Name</strong></td><td>${firstName} ${lastName}</td></tr>
          <tr><td><strong>Country</strong></td><td>${country || "-"}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Pax Size</strong></td><td>${pax}</td></tr>
          <tr><td><strong>From</strong></td><td>${fromDate}</td></tr>
          <tr><td><strong>To</strong></td><td>${toDate}</td></tr>
        </table>
        <p><strong>Message:</strong></p>
        <p>${message || "—"}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Booking email error:", error);
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
