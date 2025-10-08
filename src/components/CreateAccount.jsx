import React, { useState } from "react";
import styles from "./CreateAccount.module.css";

export default function CreateAccount({ onNext }) {
  const [accountType, setAccountType] = useState("organization");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    organization: "",
    website: "",
    workEmail: "",
    email: "",
    phone: "",
    city: "",
    registrationNumber: "",
    referralCode: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userEmail = accountType === "organization" ? formData.workEmail : formData.email;

    try {
      const res = await fetch("http://localhost:1234/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, accountType }),
      });
      const data = await res.json();
      if (data.success) {
        onNext(userEmail); // move to OTP verification
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error, try again later.");
    }
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <h2>Create your Talrn Account</h2>
      <p className={styles.subtitle}>
        Talrn is an exclusive network of the world’s top talent.
        <br></br>
        We provide access to top companies and resources that can help accelerate your growth.
      </p>

      <div className={styles.radioGroup}>
        <label>
          <input
            type="radio"
            name="accountType"
            value="organization"
            checked={accountType === "organization"}
            onChange={(e) => setAccountType(e.target.value)}
          />
          Organization
          
        </label>
        <label>
          <input
            type="radio"
            name="accountType"
            value="individual"
            checked={accountType === "individual"}
            onChange={(e) => setAccountType(e.target.value)}
          />
          Individual
        </label>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            name="firstName"
            placeholder="First Name *"
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            placeholder="Last Name *"
            onChange={handleChange}
            required
          />
        </div>

        {accountType === "organization" && (
          <>
            <div className={styles.inputGroup}>
              <input
                name="jobTitle"
                placeholder="Job title *"
                onChange={handleChange}
                required
              />
              <input
                name="organization"
                placeholder="Organization *"
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                name="website"
                placeholder="Website *"
                onChange={handleChange}
                required
              />
              <input
                name="workEmail"
                type="email"
                placeholder="Work email *"
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                name="phone"
                placeholder="Phone number *"
                onChange={handleChange}
                required
              />
              <input
                name="city"
                placeholder="City *"
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                name="registrationNumber"
                placeholder="Corporate Registration Number *"
                onChange={handleChange}
                required
              />
              <input
                name="referralCode"
                placeholder="Referral code"
                onChange={handleChange}
              />
            </div>
          </>
        )}

        {accountType === "individual" && (
          <>
            <div className={styles.inputGroup}>
              <input
                name="email"
                type="email"
                placeholder="Email *"
                onChange={handleChange}
                required
              />
              <input
                name="phone"
                placeholder="Phone number *"
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                name="city"
                placeholder="City *"
                onChange={handleChange}
                required
              />
              <input
                name="referralCode"
                placeholder="Referral code"
                onChange={handleChange}
              />
            </div>
          </>
        )}

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? "Sending OTP..." : "Register"}
        </button>
      </form>
    </div>
  );
}
