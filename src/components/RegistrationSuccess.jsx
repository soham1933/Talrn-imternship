import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegistrationSuccess.module.css";

export default function RegistrationSuccess() {
  const navigate = useNavigate();

  // Redirect to home after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000); // 3000ms = 3 seconds

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);

  return (
    <div className={styles.container}>
      <h2>Registration Successful!</h2>
      <p>Welcome to Talrn. Redirecting to home page...</p>
    </div>
  );
}
