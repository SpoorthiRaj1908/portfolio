import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="hero">

        {/* LEFT */}
        <div className="hero-left">
          <h1>
            Hi, I’m <span className="name">Spoorthi</span>
          </h1>

          <h2 className="gradient-text">Full Stack Developer</h2>

          <p>
            I build clean, scalable web applications and enjoy solving real-world
            problems through code. Currently focused on AI + full-stack development.
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
          <div className="image-card">
            <img src="/spoorthi.jpg" alt="profile" />
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I’m an AI student and full-stack developer passionate about building
          meaningful products. I work with React, Node.js, MongoDB and love solving DSA problems.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3>Wanderlust</h3>
            <p>Full-stack Airbnb-style app with authentication & CRUD features.</p>

            <div className="project-links">
              <a href="https://wanderlust12-one.vercel.app/listings" target="_blank">Live</a>
              <a href="https://github.com/SpoorthiRaj19/wanderlust" target="_blank">Code</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Chat App</h3>
            <p>Real-time messaging app with clean UI and fast updates.</p>
          </div>

          <div className="project-card">
            <h3>Portfolio</h3>
            <p>Personal website showcasing projects and skills.</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>spoorthiraj1908@gmail.com</p>
      </section>

    </div>
  );
}

export default App;