const PROJECTS = [
  {
    no: "01",
    meta: "E-commerce · 2026 · Semo-network",
    name: "BetterFlags",
    desc: "An e-commerce platform with built-in sales reporting, analytics and order management. I work across the stack — frontend features, backend services, and the performance tuning that keeps the data flowing.",
    stack: "React · Next.js · Node.js",
    link: "https://betterflags.eu/",
    domain: "betterflags.eu",
    image:
      "https://cdn.prod.website-files.com/69071a748be5e6bc17b6eb12/69071bbe14e095ebae569345_Background.png",
    tagline: "The only planet-friendly polyester flag on earth.",
    features: ["Sales reporting", "Analytics", "Order management"],
    private: true,
  },
  {
    no: "02",
    meta: "Enterprise ERP · 2025 · Myvan Holdings Inc.",
    name: "MHI ERP",
    desc: "ERP modules across procurement, finance, sales, manufacturing and real estate. I built the PRF & SFL approval workflows with fund tracking, and the manufacturing flow that turns sales orders into job orders with live material allocation.",
    stack: "ASP.NET Core · Angular · C# · LINQ",
    kind: "erp",
    modules: [
      { icon: "procurement", label: "Procurement" },
      { icon: "finance", label: "Finance" },
      { icon: "sales", label: "Sales" },
      { icon: "manufacturing", label: "Manufacturing" },
      { icon: "realestate", label: "Real estate" },
    ],
    private: true,
  },
  {
    no: "03",
    meta: "CRM · Web & Mobile · Myvan Holdings Inc.",
    name: "CRM Platform",
    desc: "A web and mobile CRM covering lead acquisition, opportunity management, quotation generation and KPI monitoring — plus broker accreditation and real-estate reservation with payment-terms handling.",
    stack: "React Native · React · TypeScript",
    kind: "crm",
    metrics: [
      { label: "Leads", value: "1,284" },
      { label: "Opps", value: "312" },
      { label: "Quotes", value: "97" },
    ],
    private: true,
  },
];

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="reveal section-head">
        <div className="eyebrow">
          <span className="mark">//</span> selected_work
        </div>
        <h2 className="section-title">Things I&apos;ve shipped</h2>
      </div>

      {PROJECTS.map((p) => (
        <article key={p.no} className="reveal work-item">
          <div className="work-meta">
            <span className="mark">{p.no}</span> — {p.meta}
          </div>
          <h3 className="work-name">{p.name}</h3>
          <p className="work-desc">{p.desc}</p>
          <Figure p={p} />
          <div className="work-stack">{p.stack}</div>
        </article>
      ))}
    </section>
  );
}

function Figure({ p }) {
  if (p.kind === "erp") return <ERPFigure p={p} />;
  if (p.kind === "crm") return <CRMFigure p={p} />;
  if (p.link) return <BrandFigure p={p} />;
  return (
    <div className="fig">
      <div className="fig-ph">{p.placeholder}</div>
    </div>
  );
}

function PrivateBadge({ label = "Internal · not for sharing" }) {
  return (
    <div className="bf-private">
      <span aria-hidden="true">🔒</span>
      {label}
    </div>
  );
}

function ModuleIcon({ name }) {
  const paths = {
    procurement: (
      <>
        <circle cx="9" cy="20" r="1.4" />
        <circle cx="18" cy="20" r="1.4" />
        <path d="M2.5 3h2.2l2.3 11.2a1.6 1.6 0 0 0 1.6 1.3h8.9a1.6 1.6 0 0 0 1.6-1.2L21 7H6" />
      </>
    ),
    finance: (
      <>
        <rect x="2.5" y="6" width="19" height="12" rx="2" />
        <circle cx="12" cy="12" r="2.6" />
        <path d="M6 9.5v5M18 9.5v5" />
      </>
    ),
    sales: (
      <>
        <path d="M3 20V4" />
        <path d="M3 16l5-5 4 3 8-8" />
        <path d="M20 6h-4M20 6v4" />
      </>
    ),
    manufacturing: (
      <>
        <path d="M3 21V10l6 4V10l6 4V6l6 4v11z" />
        <path d="M3 21h18" />
      </>
    ),
    realestate: (
      <>
        <path d="M3 21V9l9-6 9 6v12z" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <path d="M16 5.2a3 3 0 0 1 0 5.6M17.5 20a6 6 0 0 0-3.5-5.5" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    quote: (
      <>
        <path d="M6 2.5h8l4 4V21a.5.5 0 0 1-.5.5h-11A.5.5 0 0 1 6 21z" />
        <path d="M14 2.5V6.5h4" />
        <path d="M9 12h6M9 15.5h6" />
      </>
    ),
  };
  return (
    <svg
      className="ic"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function ERPFigure({ p }) {
  return (
    <div className="fig fig-erp">
      <div className="erp">
        <div className="erp-top">
          <span className="bf-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="erp-title">MHI ERP — Console</span>
          <span className="erp-tag">Enterprise</span>
        </div>

        <div className="erp-body">
          <nav className="erp-side" aria-hidden="true">
            {p.modules.map((m, i) => (
              <span
                key={m.label}
                className={`erp-nav${i === 3 ? " is-active" : ""}`}
              >
                <ModuleIcon name={m.icon} />
                <span className="erp-nav-label">{m.label}</span>
              </span>
            ))}
          </nav>

          <div className="erp-main">
            <div className="erp-flow">
              <span className="erp-step is-done">PRF</span>
              <span className="erp-arrow">→</span>
              <span className="erp-step is-done">Review</span>
              <span className="erp-arrow">→</span>
              <span className="erp-step is-ok">Approved</span>
              <span className="erp-fund">₱ 2.4M tracked</span>
            </div>

            <div className="erp-card">
              <div className="erp-card-head">
                <span>Sales Order → Job Order</span>
                <span className="erp-badge">Manufacturing</span>
              </div>
              <div className="erp-alloc">
                <span className="erp-alloc-label">Material allocation</span>
                <span className="erp-bar">
                  <span className="erp-bar-fill" style={{ width: "78%" }} />
                </span>
                <span className="erp-alloc-val">78%</span>
              </div>
            </div>
          </div>
        </div>

        {p.private && <PrivateBadge />}
      </div>
    </div>
  );
}

function CRMFigure({ p }) {
  return (
    <div className="fig fig-crm">
      <div className="crm">
        <div className="crm-glow" aria-hidden="true" />

        <div className="crm-copy">
          <div className="crm-kicker">Web &amp; Mobile CRM</div>
          <div className="crm-feats">
            <span className="crm-feat">
              <ModuleIcon name="users" /> Lead acquisition
            </span>
            <span className="crm-feat">
              <ModuleIcon name="target" /> Opportunities
            </span>
            <span className="crm-feat">
              <ModuleIcon name="quote" /> Quotations
            </span>
          </div>
        </div>

        <div className="crm-phone" aria-hidden="true">
          <div className="crm-notch" />
          <div className="crm-screen">
            <div className="crm-head">
              <span className="crm-hi">Pipeline</span>
              <span className="crm-avatar" />
            </div>
            <div className="crm-kpis">
              {p.metrics.map((m) => (
                <span key={m.label} className="crm-kpi">
                  <b>{m.value}</b>
                  {m.label}
                </span>
              ))}
            </div>
            <div className="crm-list">
              <span className="crm-row">
                <span className="crm-dot is-hot" />
                <span className="crm-line w1" />
                <span className="crm-amt">₱1.2M</span>
              </span>
              <span className="crm-row">
                <span className="crm-dot is-warm" />
                <span className="crm-line w2" />
                <span className="crm-amt">₱840k</span>
              </span>
              <span className="crm-row">
                <span className="crm-dot is-cool" />
                <span className="crm-line w3" />
                <span className="crm-amt">₱330k</span>
              </span>
            </div>
          </div>
        </div>

        {p.private && <PrivateBadge />}
      </div>
    </div>
  );
}

function BrandFigure({ p }) {
  return (
    <div className="fig fig-brand">
      <a
        className="bf"
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${p.name} live site`}
      >
        {p.image && (
          <img
            className="bf-bg"
            src={p.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        )}
        <div className="bf-veil" />

        <div className="bf-top">
          <span className="bf-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="bf-url">{p.domain}</span>
          <span className="bf-live">
            <i className="bf-live-dot" /> live
          </span>
        </div>

        <div className="bf-body">
          <div className="bf-brandname">
            Better<span className="bf-accent">Flags</span>
          </div>
          {p.tagline && <p className="bf-tag">{p.tagline}</p>}
          {p.features && (
            <div className="bf-chips">
              {p.features.map((f) => (
                <span key={f} className="bf-chip">
                  {f}
                </span>
              ))}
            </div>
          )}
          <span className="bf-cta">
            Visit live site <span aria-hidden="true">↗</span>
          </span>
        </div>

        {p.private && <PrivateBadge label="Private · not for sharing" />}
      </a>
    </div>
  );
}
