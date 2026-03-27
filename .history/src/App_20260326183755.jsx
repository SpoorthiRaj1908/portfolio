import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="hero">

        {/* animated background */}
        <div className="hero-bg"></div>

        {/* LEFT */}
        <div className="hero-left">
          <p className="intro">Hello, I'm</p>

          <h1 className="fade-in">
            Spoorthi
          </h1>

          <h2 className="gradient-text slide-up">
            Full Stack Developer
          </h2>

          <p className="description fade-in-delay">
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

            {/* animated glow */}
            <div className="image-glow"></div>

            <div className="image-card floating">
              <img src="/spoorthi.jpg" alt="profile" />
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}

export default App;