import React from "react";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <main className="about-page">
      <div className="about-page__container">
        <h1 className="about-page__title">About AI Guardians: Adventures in Ethics</h1>
        
        <section className="about-page__section">
          <h2>Welcome to AI Guardians</h2>
          <p>
            AI Guardians: Adventures in Ethics is an engaging educational platform designed to empower children with the knowledge and skills to use and create AI responsibly.
          </p>
        </section>

        <section className="about-page__section">
          <h2>Our Mission</h2>
          <p>
            We empower children to become ethical and informed users and creators of AI through engaging, educational experiences that promote understanding, responsibility, and critical thinking.
          </p>
        </section>

        <section className="about-page__section">
          <h2>Our Vision</h2>
          <p>
            We aim to cultivate a generation that understands the ethical implications of AI and is equipped to shape a future where technology is used responsibly and equitably.
          </p>
        </section>

        <section className="about-page__section">
          <h2>Our Goal</h2>
          <p>
            To provide children with a solid foundation in AI ethics, covering topics such as bias in AI, data privacy, misinformation, and the societal impact of AI technologies.
          </p>
        </section>

        <section className="about-page__section">
          <h2>Target Audience</h2>
          <p>
            AI Guardians is designed for children aged 8-12, but can also be a valuable resource for educators and parents looking to introduce AI ethics to their students and children.
          </p>
        </section>

        <section className="about-page__section">
          <h2>Join Us</h2>
          <p>
            Join us on this exciting journey to educate the next generation about ethical AI! Sign up today to start exploring AI Guardians: The Ethics Adventure.
          </p>
          <button className="about-page__cta">Sign Up Now</button>
        </section>

        <section className="about-page__section">
          <h2>Stay Connected</h2>
          <p>Subscribe to our newsletter for updates and resources on AI ethics education.</p>
          <form className="about-page__form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
