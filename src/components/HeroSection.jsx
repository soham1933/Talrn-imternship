import React, { useEffect, useRef } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const developers = [
    {
      name: "Thummar B",
      role: "iOS Development",
      company: "Worked at Capgemini",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d99c9d0d5a208fe2f6e6f7f9f63574826773043c?width=421"
    },
    {
      name: "Garg R",
      role: "Senior iOS Developer",
      company: "Worked on PayTM",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/f73402e9841d120ce516a6da14b1c724007293bd?width=421"
    },
    {
      name: "Pradhan R",
      role: "Lead iOS Developer",
      company: "Worked on Standard Chartered",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b054852c2ee9361feb2e1e59e2cff84289f22476?width=421"
    },
    {
      name: "Fawaz A",
      role: "Senior Software Engineer",
      company: "Worked at Share",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e8a20d7033ead2f23b61532b39cf7bf7e6bdc1bd?width=421"
    },
    {
      name: "Diouf O",
      role: "Senior iOS Developer",
      company: "Worked at Apple",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b39d4f3d77a40aec69b61356c3914f5c5b109e82?width=421"
    }
  ];

  const trackRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    let animationFrame;
    let x = 0;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      x -= speed;
      track.style.transform = `translateX(${x}px)`;

      // Check first card for fade-up effect
      const firstCard = track.children[0];
      if (firstCard) {
        const cardRect = firstCard.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        if (cardRect.right < containerRect.left) {
          firstCard.style.transition = "transform 0.8s ease, opacity 0.8s ease";
          firstCard.style.transform = "translateY(-50px)";
          firstCard.style.opacity = "0";
          // After animation, move card to end
          setTimeout(() => {
            track.appendChild(firstCard);
            firstCard.style.transition = "none";
            firstCard.style.transform = "translateY(0)";
            firstCard.style.opacity = "1";
            x += cardRect.width + 15; // reset position
          }, 800);
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Partition */}
        <div className="hero-content">
          <h1 className="hero-title">Find & Hire iOS Developers with Ease</h1>
          <p className="hero-subtitle">Bring the right talent to your team effortlessly with Talrn</p>
          <p className="hero-description">
            Hire pre-vetted remote iOS developers with strong technical & communication skills within 48 hours.
          </p>

          <div className="email-signup-form">
            <input type="email" placeholder="Your work email" className="email-input"/>
            <button className="hire-button">Hire iOS Dev</button>
          </div>

          <div className="apply-link">
            <span>Looking for remote iOS dev jobs </span>
            <a href="#" className="apply-here-link">Apply here</a>
          </div>
        </div>

        {/* Right Partition - Carousel */}
        <div className="developers-carousel" ref={containerRef}>
          <div className="developers-track" ref={trackRef}>
            {developers.concat(developers).map((dev, index) => (
              <div key={index} className="developer-card">
                <div className="card-background">
                  <img src={dev.image} alt={dev.name} className="developer-image"/>
                  <div className="developer-info">
                    <h3 className="developer-name">{dev.name}</h3>
                    <p className="developer-role">{dev.role}</p>
                    <p className="developer-company">{dev.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <p className="stats-text">
          <span className="bold">Explore</span> <span className="number">411+</span> 
          <span className="bold"> iOS developers from</span> <span className="number">71+</span> 
          <span> countries, delivering </span><span className="number">2520+</span><span> projects.</span>
        </p>
        <p className="stats-text-secondary">
          <span>Discover </span><span className="number">102+</span><span> industry expert in Ecommerce, Health and Fitness</span>
          <span> & more with, </span><span className="number">326+</span><span> technology specialists in Swift, ObjectiveC & more</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
