import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">
        <h1>
          Hey, I’m <span>Spoorthi</span> 👋
        </h1>

        <p>
          AI Student & Full Stack Developer passionate about building real-world
          projects and growing every day.
        </p>

        <div className="buttons">
          <a href="#projects" className="primary">View Projects</a>

          <a href="#contact" className="secondary">Contact Me</a>

          <a 
            href="/SPOORTHI_RESUME.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resume-btn"
          >
            Resume
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I’m an AI student who enjoys building full-stack applications and solving
          real-world problems using technology.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">

          {/* WANDERLUST */}
          <div className="project-card">
            <h3>Wanderlust</h3>
            <p>
              Airbnb-inspired full-stack web app with authentication, listings,
              and CRUD features.
            </p>

            <div className="project-links">
              <a 
                href="https://wanderlust12-one.vercel.app/listings" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Live
              </a>

              <a 
                href="https://github.com/SpoorthiRaj19/wanderlust" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* LINKEDIN PROJECT 1 */}
          <div className="project-card">
            <h3>Project Showcase 1</h3>
            <p>Shared project on LinkedIn demonstrating development work.</p>

            <div className="project-links">
              <a 
                href="https://lnkd.in/gNzCSVuA" 
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </div>
          </div>

          {/* LINKEDIN PROJECT 2 */}
          <div className="project-card">
            <h3>Project Showcase 2</h3>
            <p>Another project post highlighting features and implementation.</p>

            <div className="project-links">
              <a 
                href="https://lnkd.in/gabKS6wQ" 
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: spoorthiraj1908@gmail.com</p>

        <div className="project-links">
          <a 
            href="https://github.com/SpoorthiRaj19" 
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a 
            href="https://linkedin.com/in/spoorthi-907708349" 
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;