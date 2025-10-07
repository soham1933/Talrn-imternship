import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  accountType: String,
  firstName: String,
  lastName: String,
  jobTitle: String,
  organization: String,
  website: String,
  workEmail: String,
  phone: String,
  city: String,
  registrationNumber: String,
  referralCode: String,
  otp: String,
  otpExpires: Date,
  verified: { type: Boolean, default: false },
});

export default mongoose.model("User", userSchema);
