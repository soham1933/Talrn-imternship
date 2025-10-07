import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();

const app = express();
app.use(cors({ origin: "https://talrn-internship-soham.onrender.com" }));
app.use(express.json());

// Temporary in-memory storage for OTPs
let tempUsers = {};

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// ----- API Routes -----

// 1️⃣ Register user and send OTP
app.post("/api/register", async (req, res) => {
  const { userEmail } = req.body;
  if (!userEmail) return res.json({ success: false, message: "Email required" });

  const otp = Math.floor(100000 + Math.random() * 900000);
  tempUsers[userEmail] = { ...req.body, otp };

  const msg = {
    to: userEmail,
    from: process.env.SENDER_EMAIL,
    subject: "Your Talrn OTP",
    html: `
      <div style="font-family:Arial, sans-serif;padding:20px;">
        <h2>Welcome to Talrn!</h2>
        <p>Your OTP is:</p>
        <h1 style="color:#4CAF50;">${otp}</h1>
        <p>This OTP will expire in 5 minutes.</p>
      </div>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log(`✅ OTP sent to ${userEmail}: ${otp}`);
    res.json({ success: true });
  } catch (err) {
    console.error("❌ SendGrid error:", err);
    res.json({ success: false, message: "Failed to send OTP" });
  }
});

// 2️⃣ Verify OTP
app.post("/api/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  if (tempUsers[email] && tempUsers[email].otp == otp) {
    delete tempUsers[email];
    return res.json({ success: true });
  }
  return res.json({ success: false, message: "Invalid OTP" });
});

// ----- Start Server -----
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
