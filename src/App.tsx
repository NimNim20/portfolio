import Hero from "./components/hero/Hero/Hero";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section id="projects">
          <h2>Projects</h2>
        </section>

        <section id="stack">
          <h2>Stack</h2>
        </section>

        <section id="journey">
          <h2>Journey</h2>
        </section>

        <section id="about">
          <h2>About</h2>
        </section>

        <section id="contact">
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}

export default App;
