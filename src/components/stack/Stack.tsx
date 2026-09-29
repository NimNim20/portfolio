import "./Stack.scss";

const technologies = [
  {
    name: "React",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    category: "Language",
  },
  {
    name: "Vue",
    category: "Frontend",
  },
  {
    name: "Firebase",
    category: "Backend / Services",
  },
];

const otherTools = [
  "SCSS",
  " Git",
  " Vite",
  " Cypress",
  " Node.js",
  " Figma",
  " GitHub Actions",
];

function Stack() {
  return (
    <section className="stack" id="stack">
      <div className="stack__container">
        <div className="stack__header">
          <span className="stack__eyebrow">02 / STACK</span>

          <div className="stack__intro">
            <h2 className="stack__title">
              TOOLS I USE
              <br />
              <span>TO BUILD.</span>
            </h2>

            <p className="stack__description">
              A selection of technologies and tools I use to design, build and
              develop modern web experiences.
            </p>
          </div>
        </div>

        <div className="stack__featured">
          {technologies.map((technology, index) => (
            <article className="stack-card" key={technology.name}>
              <span className="stack.card__number">0{index + 1}</span>

              <div className="stack-card__content">
                <span className="stack-card__category">
                  {technology.category}
                </span>

                <h3 className="stack-card__name">{technology.name}</h3>
              </div>

              <span className="stack-card__status">
                <span />
                ACTIVE
              </span>
            </article>
          ))}
        </div>

        <div className="stack__other">
          <div className="stack__other-header">
            <span>OTHER TOOLS</span>
          </div>

          <div className="stack__other-list">
            {otherTools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;
