import React, { useState } from "react";
import styles from "./OtpVerification.module.css";

export default function OtpVerification({ email, onSuccess }) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!otp) return alert("Enter OTP");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:1234/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();
      if (data.success) onSuccess();
      else alert("Invalid OTP");
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <h2>Enter OTP sent to {email}</h2>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerify} disabled={loading}>
        {loading ? "Verifying..." : "Verify OTP"}
      </button>
    </div>
  );
}
