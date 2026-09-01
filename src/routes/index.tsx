import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Github, Car, Download } from "lucide-react";
import avatar from "@/assets/avatar.jpg.asset.json";
import { profile, experiences, skills, education, interests } from "@/data/cv";
import { GithubProjects } from "@/components/portfolio/GithubProjects";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Miandrivola Randrianarimanana — Développeur logiciel & web" },
      {
        name: "description",
        content:
          "Portfolio de Miandrivola Fanomezantsoa Randrianarimanana, informaticien à Madagascar : expériences, compétences, formations et projets GitHub.",
      },
      { property: "og:title", content: "Miandrivola Randrianarimanana — Développeur" },
      {
        property: "og:description",
        content: "Développeur logiciel & web : Java, C#, Python, Laravel, Flutter. Projets GitHub.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Miandrivola Fanomezantsoa Randrianarimanana",
          jobTitle: "Développeur logiciel",
          email: `mailto:${profile.email}`,
          telephone: profile.phone,
          sameAs: [`https://github.com/${profile.github}`],
        }),
      },
    ],
  }),
});

function SectionTitle({ index, children }: { index: string; children: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-xs text-gold">{index}</span>
      <h2 className="text-3xl tracking-tight sm:text-4xl">{children}</h2>
      <span className="rule-gold h-px flex-1 opacity-40" />
    </div>
  );
}

function Portfolio() {
  const nav = [
    ["Profil", "#profil"],
    ["Parcours", "#parcours"],
    ["Compétences", "#competences"],
    ["Projets", "#projets"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm tracking-widest text-gold">
            M.R
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-gold-soft">
                {label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-gold/50 px-4 py-1.5 text-xs tracking-wide text-gold-soft transition hover:bg-gold hover:text-primary-foreground"
          >
            Me contacter
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* HERO */}
        <section className="grid items-center gap-10 py-20 sm:py-28 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-gold">INFORMATICIEN</p>
            <h1 className="mt-5 text-5xl leading-[1.05] tracking-tight sm:text-7xl">
              <span className="block text-foreground">Miandrivola</span>
              <span className="text-gradient-gold block">Randrianarimanana</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {profile.title}. Basé à Antananarivo, Madagascar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projets"
                className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-gold-soft"
              >
                Voir mes projets
              </a>
              <a
                href={`https://github.com/${profile.github}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition hover:border-gold/60 hover:text-gold-soft"
              >
                <Github className="size-4" /> GitHub
              </a>
            </div>
          </div>
          <div className="relative mx-auto">
            <div className="absolute -inset-3 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_35%,transparent),transparent_70%)] blur-xl" />
            <img
              src={avatar.url}
              alt="Portrait de Miandrivola Randrianarimanana"
              className="relative size-48 rounded-full border border-gold/40 object-cover sm:size-60"
            />
          </div>
        </section>

        {/* PROFIL */}
        <section id="profil" className="scroll-mt-24 border-t border-border/60 py-16">
          <SectionTitle index="01">Profil</SectionTitle>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {profile.summary}
          </p>
        </section>

        {/* PARCOURS */}
        <section id="parcours" className="scroll-mt-24 border-t border-border/60 py-16">
          <SectionTitle index="02">Expériences</SectionTitle>
          <div className="mt-10 space-y-10">
            {experiences.map((exp) => (
              <article key={exp.role + exp.company} className="grid gap-4 sm:grid-cols-[8rem_1fr]">
                <p className="font-mono text-sm text-gold">{exp.period}</p>
                <div>
                  <h3 className="text-2xl tracking-tight">{exp.role}</h3>
                  <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
                    {exp.company}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((p) => (
                      <li
                        key={p}
                        className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2.5 before:size-1.5 before:rounded-full before:bg-gold/70"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <SectionTitle index="03">Formations</SectionTitle>
            <div className="mt-10 space-y-6">
              {education.map((ed) => (
                <div key={ed.degree} className="grid gap-2 sm:grid-cols-[8rem_1fr]">
                  <p className="font-mono text-sm text-gold">{ed.year}</p>
                  <div>
                    <h3 className="text-xl tracking-tight">{ed.degree}</h3>
                    <p className="text-sm text-muted-foreground">
                      {[ed.field, ed.school].filter(Boolean).join(" — ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPETENCES */}
        <section id="competences" className="scroll-mt-24 border-t border-border/60 py-16">
          <SectionTitle index="04">Compétences</SectionTitle>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group} className="card-lux rounded-lg p-6">
                <h3 className="text-lg tracking-tight text-gold-soft">{s.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {interests.map((i) => (
              <span key={i} className="text-xs text-muted-foreground">
                {i} <span className="mx-2 text-gold/50">•</span>
              </span>
            ))}
          </div>
        </section>

        {/* PROJETS */}
        <section id="projets" className="scroll-mt-24 border-t border-border/60 py-16">
          <SectionTitle index="05">Projets GitHub</SectionTitle>
          <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
            Dépôts publics synchronisés en direct depuis{" "}
            <a
              href={`https://github.com/${profile.github}`}
              target="_blank"
              rel="noreferrer"
              className="text-gold underline underline-offset-4"
            >
              github.com/{profile.github}
            </a>
            .
          </p>
          <GithubProjects />
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24 border-t border-border/60 py-20">
          <SectionTitle index="06">Contact</SectionTitle>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-2xl leading-snug tracking-tight">
                Un projet, un poste ou une collaboration ?
              </p>
              <a
                href={`mailto:${profile.email}?subject=Contact%20depuis%20votre%20portfolio`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-gold-soft"
              >
                <Mail className="size-4" /> Écrire un mail
              </a>
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-gold" />
                <a href={`mailto:${profile.email}`} className="hover:text-gold-soft">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-gold" />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-gold-soft">
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-gold" />
                <span className="text-muted-foreground">{profile.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Car className="size-4 text-gold" />
                <span className="text-muted-foreground">{profile.license}</span>
              </li>
              <li className="flex items-center gap-3">
                <Github className="size-4 text-gold" />
                <a
                  href={`https://github.com/${profile.github}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold-soft"
                >
                  github.com/{profile.github}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Download className="size-4 text-gold" />
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="text-muted-foreground hover:text-gold-soft"
                >
                  Imprimer / enregistrer le CV
                </button>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 py-8">
        <p className="mx-auto max-w-5xl px-6 font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.lastName} {profile.firstName}
        </p>
      </footer>
    </div>
  );
}
