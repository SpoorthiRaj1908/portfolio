import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-left">
          <p className="intro">— Hello, I'm</p>

          <h1 className="hero-title">
            Spoorthi
          </h1>

          <h2 className="hero-role">
            I build <span>modern web experiences</span>
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

        {/* RIGHT */}
        <div className="hero-right">
          <div className="image-wrapper">
            <div className="image-card">
              <img src="/spoorthi.jpg" alt="profile" />
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
                <h3>2+</h3>
                <span>Projects</span>
              </div>

              <div>
                <h3>MERN</h3>
                <span>Stack</span>
              </div>
            </div>

            <div className="about-tags">
              <span>React</span>
              <span>Node</span>
              <span>MongoDB</span>
              <span>DSA</span>
              <span>Java</span>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="projects">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">

          {/* WANDERLUST */}
          <div className="project-card">
            <img src="/wanderlust.png" alt="Wanderlust" />

            <div className="project-content">
              <h3>Wanderlust</h3>
              <p>
                Full-stack Airbnb-style platform with authentication,
                CRUD operations, and booking features.
              </p>

              <div className="project-links">
                <a href="https://wanderlust12-one.vercel.app/listings" target="_blank">Live</a>
                <a href="https://github.com/SpoorthiRaj19/wanderlust" target="_blank">Code</a>
              </div>
            </div>
          </div>

          {/* CONVO AI */}
          <div className="project-card">
            <img src="/convoai.png" alt="ConvoAI" />

            <div className="project-content">
              <h3>ConvoAI</h3>
              <p>
                AI-powered chat platform with real-time messaging and smart responses.
              </p>

              <div className="project-links">
                <a href="https://convo-ai-owbu.vercel.app" target="_blank">Live</a>
                <a href="https://github.com/SpoorthiRaj1908/ConvoAI" target="_blank">Code</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="contact">
        <h2>Contact</h2>
        <p>spoorthiraj1908@gmail.com</p>
      </section>

    </div>
  );
}

export default App;