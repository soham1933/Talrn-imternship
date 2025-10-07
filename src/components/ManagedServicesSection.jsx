import React from "react";
import "./ManagedServicesSection.css";

const ManagedServicesSection = () => {
  const plans = [
    {
      title: "Premium Plan",
      price: "$160",
      period: "/mo",
      buttonText: "Know More"
    },
    {
      title: "Standard Plan", 
      price: "$0",
      period: "/mo",
      buttonText: "Know More"
    },
    {
      title: "Customized Plan",
      description: "Get in touch with our team",
      buttonText: "Contact Us"
    }
  ];

  return (
    <section className="managed-services-section">
      <div className="services-container">
        <div className="services-content">
          <h2 className="services-title">Experience Talrn's managed services.</h2>
          <p className="services-description">
            Full-scale resource augmentation with a dedicated success manager to manage your team's performance. Book a free call with our team.
          </p>
        </div>
        
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className="plan-card">
              <div className="plan-header">
                <h3 className="plan-title">{plan.title}</h3>
                {plan.price ? (
                  <div className="plan-pricing">
                    <span className="plan-price">{plan.price}</span>
                    <span className="plan-period">{plan.period}</span>
                  </div>
                ) : (
                  <p className="plan-description">{plan.description}</p>
                )}
              </div>
              <button className="plan-button">{plan.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagedServicesSection;
