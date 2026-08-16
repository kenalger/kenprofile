const PROJECTS = [
  {
    no: "01",
    meta: "Property listings · iOS & Android · 2026",
    name: "Lupa",
    desc: "A mobile property-listing app for the Philippine market. Seekers browse a feed and a clustered map, save favourites and message agents; agents manage their own listings and agency managers oversee their team. Exact addresses stay withheld until an inquiry is sent — the detail screen draws an approximate circle, and the precise coordinates never leave the server for callers who may not see them.",
    stack: "Expo · React Native · TypeScript · Fastify · Postgres/PostGIS",
    seeking: "Looking for an investor to take this to market",
    shots: [
      {
        src: "/projects/lupa-explore.jpg",
        alt: "Lupa explore feed with property cards",
      },
      {
        src: "/projects/lupa-map.jpg",
        alt: "Lupa map search with clustered price pins",
      },
      {
        src: "/projects/lupa-listing.jpg",
        alt: "Lupa listing detail showing the approximate-area map",
      },
    ],
  },
];

export default function Personal() {
  return (
    <section id="personal" className="section">
      <div className="reveal section-head">
        <div className="eyebrow">
          <span className="mark">//</span> personal_projects
        </div>
        <h2 className="section-title">Personal projects</h2>
      </div>

      {PROJECTS.map((p) => (
        <article key={p.no} className="reveal work-item">
          <div className="work-meta">
            <span className="mark">{p.no}</span> — {p.meta}
          </div>
          <h3 className="work-name">{p.name}</h3>
          <p className="work-desc">{p.desc}</p>
          {p.seeking && (
            <a className="seeking" href="#contact">
              <span className="seeking-label">
                <span className="seeking-dot" aria-hidden="true" />
                {p.seeking}
              </span>
              <span className="seeking-cta">Get in touch →</span>
            </a>
          )}
          <MobileFigure p={p} />
          <div className="work-stack">{p.stack}</div>
        </article>
      ))}
    </section>
  );
}

function MobileFigure({ p }) {
  return (
    <div className="fig fig-lupa">
      <div className="lupa">
        <div className="lupa-top">
          <span className="bf-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="lupa-title">{p.name} — iOS Simulator</span>
          <span className="lupa-tag">Personal</span>
        </div>

        <div className="lupa-shots">
          {p.shots.map((s, i) => (
            <div key={s.src} className={`lupa-phone${i === 1 ? " is-mid" : ""}`}>
              <img src={s.src} alt={s.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
