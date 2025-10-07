import React, { useState } from "react";
import CreateAccount from "./CreateAccount";
import OtpVerification from "./OtpVerification";
import RegistrationSuccess from "./RegistrationSuccess";

export default function JoinFlow() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  const handleNext = (userEmail) => {
    setEmail(userEmail);
    setStep(2);
  };

  const handleSuccess = () => setStep(3);

  return (
    <>
      {step === 1 && <CreateAccount onNext={handleNext} />}
      {step === 2 && <OtpVerification email={email} onSuccess={handleSuccess} />}
      {step === 3 && <RegistrationSuccess />}
    </>
  );
}
