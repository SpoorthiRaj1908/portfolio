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
        <h2>Projects</h2>
        <p>Coming soon...</p>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Let’s connect!</p>
      </section>
    </div>
  );
}

export default App;