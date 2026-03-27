import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-left">
          <p className="intro">Hello, I'm</p>

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
            <a href="#projects" className="primary">🚀 View Work</a>

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

        <div className="hero-right">
          <div className="image-wrapper">
            <div className="image-glow"></div>

            <div className="image-card">
              <img src="/spoorthi.jpg" alt="Spoorthi profile" />
            </div>
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

            <p className="about-intro">
              I’m an AI student and full-stack developer focused on building
              real-world applications and improving every day.
            </p>

            <p className="about-intro">
              I enjoy solving problems, working with modern tech stacks,
              and turning ideas into working products.
            </p>

            {/* STATS */}
            <div className="about-stats">
              <div>
                <h3>500+</h3>
                <p>DSA Problems</p>
              </div>

              <div>
                <h3>3+</h3>
                <p>Projects</p>
              </div>

              <div>
                <h3>MERN</h3>
                <p>Stack</p>
              </div>
            </div>

            {/* SKILLS */}
            <div className="about-skills">
              <div className="skill-box">
                <h4>Frontend</h4>
                <p>React, HTML, CSS</p>
              </div>

              <div className="skill-box highlight">
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

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="projects">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">

          {/* 🔥 FEATURED PROJECT */}
          <div className="project-card featured">
            <img src="/wanderlust.png" alt="Wanderlust project" />

            <div className="project-content">
              <h3>Wanderlust</h3>
              <p>
                Airbnb-style full-stack platform with authentication, CRUD,
                image uploads, and booking features.
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
          </div>

          {/* 🔥 CONVO AI */}
          <div className="project-card">
            <img src="/convoai.png" alt="ConvoAI project" />

            <div className="project-content">
              <h3>ConvoAI</h3>
              <p>
                AI-powered chat platform with real-time messaging and smart
                responses using modern web technologies.
              </p>

              <div className="project-links">
                <a href="https://github.com/SpoorthiRaj1908/ConvoAI" target="_blank">
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* CHAT APP */}
          <div className="project-card">
            <h3>Chat App</h3>
            <p>
              Real-time chat application using WebSockets with smooth UI and fast
              messaging.
            </p>
          </div>

          {/* PORTFOLIO */}
          <div className="project-card">
            <h3>Portfolio</h3>
            <p>
              Personal portfolio built with React showcasing projects and skills.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="contact">
        <h2 className="section-title">Contact</h2>

        <p>📩 spoorthiraj1908@gmail.com</p>
      </section>

    </div>
  );
}

export default App;