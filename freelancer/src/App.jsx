import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">

      {/* Header */}
      <header className="header">

        <div className="logo">FreeCollab</div>

        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/">Projects</a>
          <a href="/">Freelancers</a>
          <a href="/">Services</a>
          <a href="/">Contact</a>
        </nav>

        <button className="login-btn">Login</button>

      </header>

      {/* Hero Section */}
      <section className="hero-section">

        <div className="hero-content">

          <h3 className="small-title">
            FREELANCER PROJECT COLLABORATION PORTAL
          </h3>

          <h1>
            Connect With Skilled Freelancers
            <br />
            And Build Successful Projects
          </h1>

          <p>
            A smart collaboration platform where freelancers and clients
            work together to manage projects, share files,
            communicate instantly, and complete tasks efficiently.
          </p>

          <div className="hero-buttons">

            <button
              className="start-btn"
              onClick={() => alert("Welcome to FreeCollab")}
            >
              Get Started
            </button>

            <a href="/" className="learn-btn">
              Explore Projects
            </a>

          </div>

        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Freelancer Team"
          />
        </div>

      </section>

      {/* Features Section */}
      <section className="features-section">

        <h2>Our Features</h2>

        <div className="card-container">

          <div className="card">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Collaboration"
              className="icon"
            />

            <h3>Team Collaboration</h3>

            <p>
              Work together with freelancers and clients using
              real-time communication tools.
            </p>

          </div>

          <div className="card">

            <img
              src="https://cdn-icons-png.flaticon.com/512/906/906175.png"
              alt="Tracking"
              className="icon"
            />

            <h3>Project Tracking</h3>

            <p>
              Monitor tasks, deadlines, and workflow progress
              easily and efficiently.
            </p>

          </div>

          <div className="card">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2489/2489756.png"
              alt="Payments"
              className="icon"
            />

            <h3>Secure Payments</h3>

            <p>
              Safe and secure payment system for both
              freelancers and project owners.
            </p>

          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="stats-section">

        <div className="stat-box">
          <h2>10K+</h2>
          <p>Freelancers</p>
        </div>

        <div className="stat-box">
          <h2>5K+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="stat-box">
          <h2>99%</h2>
          <p>Client Satisfaction</p>
        </div>

      </section>

      {/* Benefits */}
      <section className="benefits-section">

        <h2>Why Choose Us?</h2>

        <ul>
          <li>✔ Easy project management system</li>
          <li>✔ Secure file sharing platform</li>
          <li>✔ Real-time communication support</li>
          <li>✔ Professional freelancer network</li>
        </ul>

      </section>

      {/* Contact Section */}
      <section className="contact-section">

        <h2>Contact Us</h2>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Enter Your Name"
          />

          <input
            type="email"
            placeholder="Enter Your Email"
          />

          <textarea
            placeholder="Enter Your Message"
          ></textarea>

          <button className="submit-btn">
            Send Message
          </button>

        </form>

      </section>

      {/* Footer */}
      <footer className="footer">

        <p>
          © 2026 FreeCollab Portal | All Rights Reserved
        </p>

      </footer>

    </div>
  );
}

export default App;
