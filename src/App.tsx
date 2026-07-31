import { ArrowRight, Bot, Cloud, Code2, Smartphone, Sparkles, type LucideIcon } from 'lucide-react'

type Service = {
  title: string
  description: string
  icon: LucideIcon
}

const services: Service[] = [
  {
    title: 'Développement Web',
    description: 'Sites et applications web modernes, rapides et conçus pour transformer vos idées en expériences digitales impactantes.',
    icon: Code2,
  },
  {
    title: 'Applications Mobiles',
    description: 'Apps iOS et Android élégantes, intuitives et performantes pour connecter vos clients à chaque instant.',
    icon: Smartphone,
  },
  {
    title: 'Intelligence Artificielle',
    description: 'Solutions IA sur mesure pour automatiser vos processus, analyser vos données et accélérer votre croissance.',
    icon: Bot,
  },
  {
    title: 'Cloud',
    description: 'Architecture cloud robuste et sécurisée pour garantir disponibilité, scalabilité et efficacité opérationnelle.',
    icon: Cloud,
  },
]

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_100%)] text-slate-100">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#" className="text-xl font-semibold tracking-[0.2em] text-white">
          Cianney Labs
        </a>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#services" className="transition hover:text-cyan-300">
            Services
          </a>
          <a href="#about" className="transition hover:text-cyan-300">
            À propos
          </a>
          <a href="#contact" className="transition hover:text-cyan-300">
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
              <Sparkles size={16} />
              Innovation digitale premium
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Construisons le futur avec la technologie.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Cianney Labs conçoit des solutions technologiques sur mesure pour les entreprises ambitieuses qui veulent évoluer avec confiance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
              >
                Découvrir nos services
                <ArrowRight size={18} />
              </a>
              <a
                href="#about"
                className="rounded-full border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                En savoir plus
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <div className="rounded-2xl border border-cyan-400/20 bg-slate-950/80 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Vision</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Des solutions de classe mondiale, pensées pour votre croissance.
              </h2>
              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="font-medium text-white">Stratégie digitale</p>
                  <p className="mt-1">Mise en place d’outils performants et évolutifs.</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="font-medium text-white">Exécution rapide</p>
                  <p className="mt-1">Livraison agile avec un suivi qualité permanent.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Services</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Des expertises complètes pour donner vie à vos ambitions.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/30 transition hover:-translate-y-1 hover:border-cyan-400/40"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/40 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">À propos</p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  Un partenaire technologique fiable et créatif.
                </h2>
              </div>
              <div className="space-y-4 text-lg leading-8 text-slate-300">
                <p>
                  Nous accompagnons les entreprises dans la transformation digitale grâce à des solutions modernes, sécurisées et conçues pour durer.
                </p>
                <p>
                  Chez cianney labs, l’innovation, la qualité et l’attention portée à chaque détail sont au cœur de notre méthode de travail.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 cianney Labs. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#" className="transition hover:text-cyan-300">
              LinkedIn
            </a>
            <a href="#" className="transition hover:text-cyan-300">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
