import "./Hero.scss";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">01 / DEVELOPER</span>

          <h1 className="hero__title">
            I BUILD THINGS
            <br />
            <span>FOR THE WEB.</span>
          </h1>

          <p className="hero__description">
            I'm Benjamin, a developer with a background in multimedia design. I
            build digital experiences using modern web technologies.
          </p>
          <div className="hero__actions">
            <a className="hero__primary-link" href="#projects">
              View my work
              <span aria-hidden="true">→</span>
            </a>

            <a
              className="hero__secondary-link"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero__stack" aria-label="Main technologies">
          <span>React</span>
          <span>TypeScript</span>
          <span>Vue</span>
          <span>Firebase</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
