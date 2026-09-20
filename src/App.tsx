import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <h1>Benjamin.dev</h1>
        </section>

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
