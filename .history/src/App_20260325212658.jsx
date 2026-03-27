import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <section className="hero">

        {/* LEFT */}
        <div className="hero-left">
          <h1>Hi, I’m Spoorthi</h1>

          <h2 className="gradient-text">
            Full Stack Developer
          </h2>

          <p>
            I build scalable web applications and solve real-world problems.
            Currently focused on AI and full-stack development.
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
            <img src="/spoorthi.jpg" alt="profile" />
          </div>
        </div>

      </section>
    </div>
  );
}

export default App;