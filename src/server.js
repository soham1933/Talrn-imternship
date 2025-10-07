// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();

const app = express();

// ----- Middleware -----
const allowedOrigin = "https://talrn-internship-soham.onrender.com";
app.use(
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// ----- CSP Headers -----
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' blob:; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data:; " +
    "connect-src 'self' https://talrn-internship-soham.onrender.com; " +
    "font-src 'self';"
  );
  next();
});

// ----- Temporary in-memory storage for OTPs -----
let tempUsers = {};

// ----- Configure SendGrid -----
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// ----- API Routes -----

// 1️⃣ Register user and send OTP
app.post("/api/register", async (req, res) => {
  const { workEmail, email } = req.body;
  const userEmail = workEmail || email;

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000);
  tempUsers[userEmail] = { ...req.body, otp };

  const msg = {
    to: userEmail,
    from: process.env.SENDER_EMAIL,
    subject: "Your Talrn OTP",
    html: `
      <div style="font-family:Arial, sans-serif; padding:20px;">
        <h2>Welcome to Talrn!</h2>
        <p>Your one-time password (OTP) is:</p>
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
    console.error("❌ Failed to send OTP:", err);
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

// ----- Serve React Frontend -----
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildPath = path.join(__dirname, "../dist"); // or "build" if CRA
app.use(express.static(buildPath));

// SPA fallback for React Router
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// ----- Start Server -----
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
