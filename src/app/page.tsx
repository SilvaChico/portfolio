import Navbar from "@/components/Navbar";

type ProjectDetail = {
  label: string;
  value: string;
};

type Project = {
  id: string;
  title: string;
  period: string;
  kind: string;
  summary: string;
  details: ProjectDetail[];
  signal: string;
  href?: string;
  linkLabel?: string;
};

type CareerEntry = {
  period: string;
  company: string;
  role: string;
  note: string;
};

const HERO_NOTES = [
  {
    label: "Current work",
    value: "Volkswagen factory logistics plus Fruitball.",
  },
  {
    label: "Best fit",
    value: "Senior product engineering roles in smaller teams.",
  },
  {
    label: "Strengths",
    value: "Complex domains, pragmatic architecture, interface sensitivity.",
  },
  {
    label: "Working style",
    value: "Hands-on, calm, direct, and comfortable across the stack.",
  },
];

const QUICK_FACTS = [
  {
    label: "What I do",
    value:
      "Build reliable software with enough product taste to make it clear and usable.",
  },
  {
    label: "Background",
    value:
      "Most of my career was spent inside large organizations with real operational constraints.",
  },
  {
    label: "What I want next",
    value: "Smaller companies where engineering judgment sits closer to the product.",
  },
  {
    label: "Location",
    value: "Lisbon, Portugal.",
  },
];

const FEATURED_WORK: Project[] = [
  {
    id: "01",
    title: "Fruitball",
    period: "Now",
    kind: "Independent product",
    summary:
      "A football product I am building to sharpen product instinct, interaction judgment, and shipping speed outside corporate cycles.",
    details: [
      {
        label: "What it is",
        value:
          "A place to test ideas quickly, make sharper product calls, and stay close to the craft of building something people might actually want.",
      },
      {
        label: "My role",
        value:
          "Direction, interface decisions, implementation, and the unglamorous product tradeoffs that come with doing the whole thing end to end.",
      },
      {
        label: "Why it matters",
        value:
          "It shows the kind of work I want more of: tighter feedback loops, stronger point of view, and product decisions that do not disappear into layers.",
      },
    ],
    signal: "Independent product work, UI craft, and founder-style iteration.",
    href: "https://www.fruitball.app/",
    linkLabel: "Visit Fruitball",
  },
  {
    id: "02",
    title: "Volkswagen Group Digital Solutions",
    period: "2025 - present",
    kind: "Factory logistics platform",
    summary:
      "Building software for factory logistics: systems that calculate which parts each car needs and help get the right components to the right vehicle across more than 100 factories in 27 countries.",
    details: [
      {
        label: "What shipped",
        value:
          "Production software in a domain where operational correctness matters more than visual theatre and where small mistakes create expensive downstream problems.",
      },
      {
        label: "My role",
        value:
          "Hands-on engineering across a mixed stack, translating complex manufacturing workflows into software that teams can trust.",
      },
      {
        label: "What it proves",
        value:
          "I am comfortable with scale, ugly edge cases, and business domains that are too real to be solved by surface-level polish.",
      },
    ],
    signal: "Java, Kotlin, Python, AWS, Angular, and high-stakes domain complexity.",
  },
  {
    id: "03",
    title: "iCapital",
    period: "2021 - 2025",
    kind: "Advisor-facing fintech product",
    summary:
      "Built and improved investment dashboards used by financial advisors to manage client portfolios in a regulated environment where clarity and correctness mattered every day.",
    details: [
      {
        label: "What shipped",
        value:
          "New features, quality improvements, and day-to-day product work on a mature platform with real users and meaningful financial context.",
      },
      {
        label: "My role",
        value:
          "Full-stack engineer working across frontend and backend, turning product requirements into maintainable features rather than one-off hero builds.",
      },
      {
        label: "Why it matters",
        value:
          "It sharpened my judgment around data-heavy interfaces, collaboration with product and design, and shipping inside a serious domain without overcomplicating the solution.",
      },
    ],
    signal: "React, Redux, Ruby on Rails, PostgreSQL, AWS, Node.js.",
  },
];

const POSITIONING_POINTS = [
  {
    title: "Complex domains do not scare me.",
    description:
      "Factory logistics, fintech, payments, telecom, internal tools. I know how to turn messy operations into usable software without pretending the domain is simpler than it is.",
  },
  {
    title: "I care how systems feel in use.",
    description:
      "Not just architecture, not just code quality. I care about whether a product is understandable, navigable, and worth trusting after the first five minutes.",
  },
  {
    title: "I bring structure without corporate drag.",
    description:
      "Large companies taught me rigor. What I want next is an environment where that rigor can move faster and sit closer to decisions that shape the product.",
  },
];

const CAREER_PATH: CareerEntry[] = [
  {
    period: "2025 - present",
    company: "Volkswagen Group Digital Solutions",
    role: "Software Engineer",
    note: "Factory logistics for large-scale manufacturing operations.",
  },
  {
    period: "2021 - 2025",
    company: "iCapital",
    role: "Full Stack Engineer",
    note: "Advisor-facing fintech dashboard and product work.",
  },
  {
    period: "2023",
    company: "The Strategy Group",
    role: "Product engineer, side project",
    note: "AI document-context MVP built with a fellow engineer.",
  },
  {
    period: "2021",
    company: "SIBS",
    role: "Backend Engineer",
    note: "Core software for Portuguese ATM and banking transactions.",
  },
  {
    period: "2018 - 2020",
    company: "Mobileum",
    role: "Software Engineer",
    note: "Revenue assurance products for telecom operators.",
  },
  {
    period: "2016 - 2018",
    company: "UNINOVA",
    role: "Researcher / Developer",
    note: "Sentiment analysis web app using social data and IBM Watson.",
  },
  {
    period: "2014",
    company: "Siemens",
    role: "Summer intern",
    note: "Traffic light maintenance software and SQL performance work.",
  },
];

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "franciscocrosilva@gmail.com",
    href: "mailto:franciscocrosilva@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/silvachicodev",
    href: "https://linkedin.com/in/silvachicodev",
  },
  {
    label: "GitHub",
    value: "github.com/SilvaChico",
    href: "https://github.com/SilvaChico",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="top">
        <section
          id="hero"
          className="border-b border-[color:var(--line)]"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto grid max-w-6xl gap-16 px-6 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.15fr)_360px] lg:gap-12 lg:px-8">
            <div className="space-y-10">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.32em] text-[color:var(--ink-soft)]">
                <span className="text-[color:var(--accent)]">Francisco Silva</span>
                <span>Software engineer</span>
                <span>Lisbon</span>
                <span>10 years building software</span>
              </div>

              <div className="space-y-6">
                <p className="type-mono text-[11px] text-[color:var(--accent)]">
                  Technical / creative / sharp
                </p>
                <h1
                  id="hero-heading"
                  className="type-display max-w-4xl text-[clamp(3.6rem,10vw,7.8rem)] leading-[0.9] text-[color:var(--ink)]"
                >
                  Software engineer with product taste and systems discipline.
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-[color:var(--ink-soft)] sm:text-xl">
                  I have spent most of the last decade building software inside
                  large organizations. What I want next is smaller teams where
                  technical judgment sits closer to the product and better ideas
                  can move faster.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="focus-ring inline-flex items-center gap-2 border border-[color:var(--ink)] bg-[color:var(--ink)] px-5 py-3 text-sm font-medium text-[color:var(--paper)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  See selected work
                  <span aria-hidden="true">-&gt;</span>
                </a>
                <a
                  href="mailto:franciscocrosilva@gmail.com"
                  className="focus-ring inline-flex items-center gap-2 border border-[color:var(--line-strong)] px-5 py-3 text-sm font-medium text-[color:var(--ink)] transition-colors duration-200 hover:border-[color:var(--ink)]"
                >
                  Email me
                </a>
              </div>

              <div className="grid gap-4 border-t border-[color:var(--line)] pt-6 sm:grid-cols-2">
                {HERO_NOTES.map((note) => (
                  <div key={note.label} className="space-y-2">
                    <p className="type-mono text-[11px] text-[color:var(--accent)]">
                      {note.label}
                    </p>
                    <p className="text-sm leading-relaxed text-[color:var(--ink-soft)]">
                      {note.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:pt-6">
              <div className="border border-[color:var(--line-strong)] bg-[color:var(--paper-strong)] p-6">
                <p className="type-mono text-[11px] text-[color:var(--accent)]">
                  Quick read for recruiters
                </p>

                <dl className="mt-6 space-y-4">
                  {QUICK_FACTS.map((fact) => (
                    <div
                      key={fact.label}
                      className="border-t border-[color:var(--line)] pt-4 first:border-t-0 first:pt-0"
                    >
                      <dt className="type-mono text-[11px] text-[color:var(--ink-soft)]">
                        {fact.label}
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-[color:var(--ink)]">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 border-t border-[color:var(--line)] pt-4">
                  <p className="type-mono text-[11px] text-[color:var(--accent)]">
                    Recruiter shortcut
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    {CONTACT_LINKS.map((link) => (
                      <SimpleLink
                        key={link.label}
                        href={link.href}
                        label={link.label}
                        value={link.value}
                        inverted={false}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section
          id="work"
          className="bg-[color:var(--panel)] text-[color:var(--panel-text)]"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
            <SectionIntro
              label="Selected work"
              title="Projects that show range without pretending every serious system can become a glossy case study."
              description="Three examples are enough here: one independent product, one large operational platform, and one product team inside fintech."
              inverted
            />

            <div className="mt-14">
              {FEATURED_WORK.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id="fit" className="border-t border-[color:var(--line)]">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="space-y-6">
                <p className="type-mono text-[11px] text-[color:var(--accent)]">
                  Positioning
                </p>
                <h2 className="type-display max-w-3xl text-4xl leading-tight text-[color:var(--ink)] sm:text-5xl lg:text-6xl">
                  Large-company rigor. Smaller-team instincts.
                </h2>
                <p className="max-w-xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
                  I am not trying to move away from hard problems. I want a
                  setting where good engineering is closer to product decisions,
                  the feedback loop is tighter, and taste has room to matter.
                </p>
              </div>

              <div className="space-y-6">
                {POSITIONING_POINTS.map((point) => (
                  <div
                    key={point.title}
                    className="border-t border-[color:var(--line)] pt-4"
                  >
                    <h3 className="text-lg font-medium text-[color:var(--ink)]">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 grid gap-8 border-t border-[color:var(--line)] pt-8 md:grid-cols-2">
              <div>
                <p className="type-mono text-[11px] text-[color:var(--accent)]">
                  Role fit
                </p>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-[color:var(--ink-soft)]">
                  Senior software engineer, product engineer, or full-stack
                  roles where interface quality matters as much as backend
                  correctness.
                </p>
              </div>
              <div>
                <p className="type-mono text-[11px] text-[color:var(--accent)]">
                  Working stack
                </p>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-[color:var(--ink-soft)]">
                  React, TypeScript, Ruby on Rails, Java, Kotlin, Python,
                  PostgreSQL, AWS, and Angular when the problem calls for it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-[color:var(--line)]">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
            <div className="grid gap-14 xl:grid-cols-[minmax(0,1.2fr)_300px]">
              <div>
                <SectionIntro
                  label="Career path"
                  title="A mostly corporate career, with enough side projects to stay close to the product."
                  description="The recruiter version is the shorter one: where I worked, what the role was, and what kind of problem space it put me in."
                />

                <div className="mt-10">
                  {CAREER_PATH.map((entry) => (
                    <CareerRow
                      key={`${entry.company}-${entry.period}`}
                      entry={entry}
                    />
                  ))}
                </div>
              </div>

              <aside className="space-y-10">
                <div className="border-t border-[color:var(--line)] pt-4">
                  <p className="type-mono text-[11px] text-[color:var(--accent)]">
                    Education
                  </p>
                  <div className="mt-4 space-y-5">
                    <div>
                      <h3 className="text-base font-medium text-[color:var(--ink)]">
                        NOVA School of Science and Technology
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                        Electrical and Computer Engineering, 2011 - 2017.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-[color:var(--ink)]">
                        TU Delft
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                        Exchange program in Electrical and Computer Engineering,
                        2015 - 2016.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[color:var(--line)] pt-4">
                  <p className="type-mono text-[11px] text-[color:var(--accent)]">
                    Current focus
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                    Smaller product teams, sharper ownership, and work that
                    rewards both engineering depth and a strong point of view.
                  </p>
                </div>

                <div className="border-t border-[color:var(--line)] pt-4">
                  <p className="type-mono text-[11px] text-[color:var(--accent)]">
                    What tends to follow me
                  </p>
                  <ul className="mt-3 space-y-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                    <li>Clear interfaces for messy data and domain logic.</li>
                    <li>Calm execution in ambiguous environments.</li>
                    <li>Better questions before bigger solutions.</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[color:var(--ink)] text-[color:var(--paper)]">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:px-8">
            <div className="space-y-6">
              <p className="type-mono text-[11px] text-[color:rgba(244,239,230,0.68)]">
                Contact
              </p>
              <h2 className="type-display max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
                If you are hiring for a product-minded engineering role, send me
                the brief.
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-[color:rgba(244,239,230,0.72)]">
                Recruiters should be able to understand me quickly. Product
                teams should feel the same.
              </p>
            </div>

            <div className="space-y-3">
              {CONTACT_LINKS.map((link) => (
                <SimpleLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  value={link.value}
                  inverted
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[color:var(--line)] bg-[color:var(--paper-strong)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-[color:var(--ink-soft)] sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>Francisco Silva</p>
          <p>{new Date().getFullYear()} / Portfolio built with restraint.</p>
        </div>
      </footer>
    </>
  );
}

function SectionIntro({
  label,
  title,
  description,
  inverted = false,
}: {
  label: string;
  title: string;
  description: string;
  inverted?: boolean;
}) {
  const mutedClass = inverted
    ? "text-[color:var(--panel-muted)]"
    : "text-[color:var(--ink-soft)]";

  return (
    <div className="space-y-4">
      <p className="type-mono text-[11px] text-[color:var(--accent)]">{label}</p>
      <h2 className="type-display max-w-4xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className={`max-w-2xl text-base leading-relaxed sm:text-lg ${mutedClass}`}>
        {description}
      </p>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid gap-8 border-t border-white/12 py-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-10">
      <div className="space-y-4 text-sm text-[color:var(--panel-muted)]">
        <p className="type-mono text-[11px] text-[color:var(--accent)]">
          {project.id}
        </p>
        <div className="space-y-1">
          <p>{project.period}</p>
          <p>{project.kind}</p>
        </div>
        {project.href && project.linkLabel ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-link focus-ring text-sm text-[color:var(--panel-text)]"
          >
            {project.linkLabel}
          </a>
        ) : null}
      </div>

      <div className="space-y-6">
        <div className="max-w-3xl space-y-3">
          <h3 className="type-display text-3xl leading-tight sm:text-4xl">
            {project.title}
          </h3>
          <p className="text-lg leading-relaxed text-[color:var(--panel-muted)]">
            {project.summary}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {project.details.map((detail) => (
            <div key={detail.label} className="border-t border-white/12 pt-4">
              <p className="type-mono text-[11px] text-[color:var(--accent)]">
                {detail.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--panel-muted)]">
                {detail.value}
              </p>
            </div>
          ))}
        </div>

        <p className="border-t border-white/12 pt-4 text-sm leading-relaxed text-[color:var(--panel-muted)]">
          <span className="type-mono mr-3 text-[11px] text-[color:var(--accent)]">
            Signals
          </span>
          {project.signal}
        </p>
      </div>
    </article>
  );
}

function CareerRow({ entry }: { entry: CareerEntry }) {
  return (
    <article className="grid gap-3 border-t border-[color:var(--line)] py-5 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-6">
      <p className="type-mono text-[11px] text-[color:var(--accent)]">
        {entry.period}
      </p>
      <div className="space-y-2">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-lg font-medium text-[color:var(--ink)]">
            {entry.company}
          </h3>
          <p className="text-sm text-[color:var(--ink-soft)]">{entry.role}</p>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-[color:var(--ink-soft)]">
          {entry.note}
        </p>
      </div>
    </article>
  );
}

function SimpleLink({
  href,
  label,
  value,
  inverted,
}: {
  href: string;
  label: string;
  value: string;
  inverted: boolean;
}) {
  const borderClass = inverted ? "border-white/12" : "border-[color:var(--line)]";
  const mutedClass = inverted
    ? "text-[color:rgba(244,239,230,0.68)]"
    : "text-[color:var(--ink-soft)]";
  const valueClass = inverted
    ? "text-[color:var(--paper)]"
    : "text-[color:var(--ink)]";

  const external =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={external && !href.startsWith("mailto:") ? "_blank" : undefined}
      rel={external && !href.startsWith("mailto:") ? "noreferrer" : undefined}
      className={`focus-ring flex items-center gap-4 border px-4 py-4 transition-transform duration-200 hover:-translate-y-0.5 ${borderClass}`}
    >
      <div className="min-w-0">
        <p className={`type-mono text-[11px] ${mutedClass}`}>{label}</p>
        <p className={`mt-1 break-all text-sm font-medium ${valueClass}`}>{value}</p>
      </div>
      <span className={`ml-auto text-sm ${mutedClass}`} aria-hidden="true">
        -&gt;
      </span>
    </a>
  );
}
