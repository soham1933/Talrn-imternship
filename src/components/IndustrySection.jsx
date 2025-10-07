import React from "react";
import "./IndustrySection.css";

const IndustrySection = () => {
  const industries = [
    "Healthcare",
    "Automotive", 
    "Banking",
    "Capital Markets",
    "Travel",
    "Digital Commerce"
  ];

  return (
    <section className="industry-section">
      <div className="industry-container">
        <div className="industry-content">
          <h2 className="industry-title">Scale your team with Talrn's immediately available resources</h2>
          <p className="industry-subtitle">
            Find pre-vetted iOS developers that have previously worked in the same industry instantly.
          </p>
          
          <h3 className="industry-question">What is your industry?</h3>
          
          <div className="industry-tags">
            {industries.map((industry, index) => (
              <span key={index} className="industry-tag">
                {industry}
              </span>
            ))}
          </div>
        </div>
        
        <div className="industry-image">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/ee111d4635ea0f6e3c6e7d26849fc6007ac3345e?width=1006" 
            alt="Team collaboration"
            className="team-image"
          />
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
