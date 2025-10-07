// server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ----- Temporary in-memory storage for OTPs -----
let tempUsers = {};

// ----- Configure nodemailer -----
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.VITE_EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ----- API Routes -----
// 1️⃣ Register user and send OTP
app.post("https://talrn-internship-soham.onrender.com/api/register", (req, res) => {
  const { workEmail, email } = req.body;
  const userEmail = workEmail || email;

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000);
  tempUsers[userEmail] = { ...req.body, otp };

  // Send OTP via email
  transporter.sendMail({
    from: process.env.VITE_EMAIL_USER,
    to: userEmail,
    subject: "Your Talrn OTP",
    text: `Your OTP is ${otp}`,
  }, (err, info) => {
    if (err) {
      console.error(err);
      return res.json({ success: false, message: "Failed to send OTP" });
    }
    console.log(`OTP sent to ${userEmail}: ${otp}`);
    res.json({ success: true });
  });
});

// 2️⃣ Verify OTP
app.post("https://talrn-internship-soham.onrender.com/api/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  if (tempUsers[email] && tempUsers[email].otp == otp) {
    // TODO: Save user permanently to DB here if needed
    delete tempUsers[email];
    return res.json({ success: true });
  }
  return res.json({ success: false, message: "Invalid OTP" });
});

// ----- Serve React Frontend -----
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildPath = path.join(__dirname, "../dist"); // change to "build" if using CRA
app.use(express.static(buildPath));

// All other routes serve index.html
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// ----- Start Server -----
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
