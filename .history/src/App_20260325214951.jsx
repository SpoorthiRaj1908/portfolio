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

    <section id="about" className="about">

  <div className="about-container">

    {/* LEFT IMAGE */}
    <div className="about-image">
      <img src="/setup.jpg" alt="workspace" />
    </div>

    {/* RIGHT CONTENT */}
    <div className="about-content">

      <h2>About Me</h2>

      <p className="about-intro">
        I’m an AI student and full-stack developer focused on building
        real-world applications and improving every day.
      </p>

      <p className="about-intro">
        I enjoy solving problems, working with modern tech stacks,
        and turning ideas into working products.
      </p>

      {/* HIGHLIGHT STATS */}
      <div className="about-stats">
        <div>
          <h3>500</h3>
          <p>Problems Solved</p>
        </div>

        <div>
          <h3>2</h3>
          <p>Projects Built</p>
        </div>

        <div>
          <h3>2+</h3>
          <p>Tech Stacks</p>
        </div>
      </div>

      {/* SKILLS */}
      <div className="about-skills">

        <div className="skill-box">
          <h4>Frontend</h4>
          <p>React, HTML, CSS</p>
        </div>

        <div className="skill-box">
          <h4>Backend</h4>
          <p>Node.js, Express</p>
        </div>

        <div className="skill-box">
          <h4>Database</h4>
          <p>MongoDB</p>
        </div>

        <div className="skill-box">
          <h4>Core</h4>
          <p>DSA, Java</p>
        </div>

      </div>

    </div>

  </div>

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