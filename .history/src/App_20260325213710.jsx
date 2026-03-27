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
          <p className="intro">👋 Hello, I'm</p>

          <h1>
            <span className="name">Spoorthi</span>
          </h1>

          <h2 className="gradient-text">
            Full Stack Developer
          </h2>

          <p className="description">
            I build scalable web apps, solve real-world problems, and constantly
            improve my skills in AI and full-stack development.
          </p>

          <div className="buttons">
            <a href="#projects" className="primary">
              🚀 View Work
            </a>

            <a
              href="/SPOORTHI_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary"
            >
              📄 Resume
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="image-wrapper">
            <div className="image-glow"></div>

            <div className="image-card">
              <img src="/spoorthi.jpg" alt="Spoorthi profile" />
            </div>
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>

        <p className="section-text">
          I'm an AI student and full-stack developer who loves building real-world
          products. I enjoy working with React, Node.js, and MongoDB, and I
          constantly practice DSA to strengthen problem-solving skills.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">

          {/* PROJECT 1 */}
          <div className="project-card">
            <h3>Wanderlust</h3>
            <p>
              Airbnb-inspired full-stack app with authentication, CRUD features,
              and responsive UI.
            </p>

            <div className="project-links">
              <a href="https://wanderlust12-one.vercel.app/listings" target="_blank">
                Live
              </a>
              <a href="https://github.com/SpoorthiRaj19/wanderlust" target="_blank">
                Code
              </a>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="project-card">
            <h3>Chat App</h3>
            <p>
              Real-time chat application using WebSockets with smooth UI and fast
              messaging.
            </p>
          </div>

          {/* PROJECT 3 */}
          <div className="project-card">
            <h3>Portfolio</h3>
            <p>
              Personal portfolio built with React showcasing projects and skills.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2 className="section-title">Contact</h2>

        <p className="section-text">
          📩 spoorthiraj1908@gmail.com
        </p>
      </section>

    </div>
  );
}

export default App;