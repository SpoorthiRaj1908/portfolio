import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="hero">

        {/* LEFT */}
        <div className="hero-left">
          <h1>
            Hi, I’m <span className="name">Spoorthi</span> <br />
            <span className="gradient-text">Building with Code</span>
          </h1>

          <p>
            AI student & full-stack developer focused on building scalable web apps,
            solving real-world problems, and improving every single day.
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

        {/* RIGHT */}
        <div className="hero-right">
          <img src="/profile.jpg" alt="profile" />
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I enjoy building full-stack applications using modern technologies like
          React, Node.js, and MongoDB. I’m also passionate about DSA and solving
          complex problems efficiently.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3>Wanderlust</h3>
            <p>Airbnb-style full-stack app with authentication & listings.</p>

            <div className="project-links">
              <a href="https://wanderlust12-one.vercel.app/listings" target="_blank">Live</a>
              <a href="https://github.com/SpoorthiRaj19/wanderlust" target="_blank">Code</a>
            </div>
          </div>

          <div className="project-card">
            <h3>AI Chat App</h3>
            <p>Real-time conversational app with structured messaging.</p>
          </div>

          <div className="project-card">
            <h3>Portfolio</h3>
            <p>Personal website built using React with modern UI design.</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>spoorthiraj1908@gmail.com</p>

        <div className="project-links">
          <a href="https://github.com/SpoorthiRaj19" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/spoorthi-907708349" target="_blank">LinkedIn</a>
        </div>
      </section>

    </div>
  );
}

export default App;