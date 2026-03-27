import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero">

        {/* LEFT */}
        <div className="hero-left">
          <h1>
            Hello, I’m <br />
            <span className="gradient-text">Full Stack Developer</span>
          </h1>

          <p>
            Full-Stack Developer and competitive programmer with strong DSA
            fundamentals, experienced in building scalable web applications
            and real-world projects.
          </p>

          <div className="buttons">
            <a href="#contact" className="primary">Hire Me</a>

            <a
              href="/SPOORTHI_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <img src="/profile.jpg" alt="profile" />
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I’m an AI student who enjoys building full-stack applications and solving
          real-world problems using technology.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3>Wanderlust</h3>
            <p>Airbnb-inspired full-stack web app with authentication and CRUD features.</p>

            <div className="project-links">
              <a href="https://wanderlust12-one.vercel.app/listings" target="_blank">Live</a>
              <a href="https://github.com/SpoorthiRaj19/wanderlust" target="_blank">GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Project Showcase 1</h3>
            <p>Shared project on LinkedIn.</p>

            <div className="project-links">
              <a href="https://lnkd.in/gNzCSVuA" target="_blank">View</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Project Showcase 2</h3>
            <p>Another project highlight.</p>

            <div className="project-links">
              <a href="https://lnkd.in/gabKS6wQ" target="_blank">View</a>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: spoorthiraj1908@gmail.com</p>

        <div className="project-links">
          <a href="https://github.com/SpoorthiRaj19" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/spoorthi-907708349" target="_blank">LinkedIn</a>
        </div>
      </section>

    </div>
  );
}

export default App;