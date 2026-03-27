import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {
  const text = "modern web experiences";
  const [typed, setTyped] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setTyped((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-left">
          <p className="intro">— Hello, I'm</p>

          <h1 className="hero-title">Spoorthi</h1>

          <h2 className="hero-role">
            I build{" "}
            <span className="typing">
              {typed}
              <span className="cursor">|</span>
            </span>
          </h2>

          <p className="description">
            AI student & full-stack developer focused on building real-world
            products, solving problems, and improving every single day.
          </p>

          <div className="buttons">
            <a href="#projects" className="primary">View Work</a>

            <a
              href="/SPOORTHI_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-card">
            <img src="/spoorthi.jpg" alt="profile" />
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="about">
        <div className="about-container">

          <div className="about-image">
            <img src="/setup.jpg" alt="workspace" />
          </div>

          <div className="about-content">
            <h2>About Me</h2>

            <p>
              I’m a developer who enjoys turning ideas into real products.
              I focus on building clean, scalable applications and continuously
              improving my problem-solving skills.
            </p>

            <div className="about-stats">
              <div>
                <h3>500+</h3>
                <span>DSA</span>
              </div>

              <div>
                <h3>2</h3>
                <span>Projects</span>
              </div>

              <div>
                <h3>MERN</h3>
                <span>Stack</span>
              </div>
            </div>

            <div className="about-skills">
              <div className="skill-box">React</div>
              <div className="skill-box">Node</div>
              <div className="skill-box">MongoDB</div>
              <div className="skill-box">DSA</div>
              <div className="skill-box">Java</div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="projects">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <img src="/wanderlust.png" alt="Wanderlust" />

            <div className="project-content">
              <h3>Wanderlust</h3>
              <p>
                Full-stack Airbnb-style platform with authentication,
                CRUD operations, and booking features.
              </p>

              <div className="project-links">
                <a href="https://wanderlust12-one.vercel.app/listings" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/SpoorthiRaj19/wanderlust" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src="/convoai.png" alt="ConvoAI" />

            <div className="project-content">
              <h3>ConvoAI</h3>
              <p>
                AI-powered chat platform with real-time messaging and smart responses.
              </p>

              <div className="project-links">
                <a href="https://convo-ai-owbu.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/SpoorthiRaj1908/ConvoAI" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact">
        <div className="contact-card">
          <h2>Let’s Connect</h2>

          <p className="contact-subtext">
            Got an idea, opportunity, or just want to say hi? I’d love to hear from you.
          </p>

          <a href="mailto:spoorthiraj1908@gmail.com" className="contact-email">
            spoorthiraj1908@gmail.com
          </a>

          <div className="contact-links">
            <a href="https://github.com/SpoorthiRaj1908" target="_blank">GitHub</a>
            <a href="https://linkedin.com" target="_blank">LinkedIn</a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;