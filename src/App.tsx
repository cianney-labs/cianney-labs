import './App.css'
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
    <div className="site-shell relative isolate min-h-screen overflow-hidden bg-[#050b18] text-slate-100">
      <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10 lg:py-7">
        <a href="#" className="group inline-flex items-center gap-3 text-lg font-semibold tracking-[0.16em] text-white sm:text-xl">
          <span className="grid size-9 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition group-hover:border-cyan-200/50 group-hover:bg-cyan-300/15">
            <Sparkles size={17} aria-hidden="true" />
          </span>
          <span>Cianney Labs</span>
        </a>
        <nav aria-label="Navigation principale" className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#services" className="nav-link transition-colors hover:text-cyan-200">
            Services
          </a>
          <a href="#about" className="nav-link transition-colors hover:text-cyan-200">
            À propos
          </a>
          <a href="#contact" className="nav-link transition-colors hover:text-cyan-200">
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10 lg:pb-32 lg:pt-24">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 text-xs font-medium tracking-wide text-cyan-100 sm:text-sm">
              <Sparkles size={15} aria-hidden="true" />
              Innovation digitale premium
            </div>
            <h1 className="max-w-[13ch] text-[2.65rem] font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.35rem]">
              Construisons le futur avec la technologie.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
              Cianney Labs conçoit des solutions technologiques sur mesure pour les entreprises ambitieuses qui veulent évoluer avec confiance.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#services"
                className="primary-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-950/30 transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
              >
                Découvrir nos services
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="#about"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 font-medium text-slate-200 transition duration-200 hover:border-cyan-200/50 hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
              >
                En savoir plus
              </a>
            </div>
          </div>

          <div className="vision-card relative mx-auto w-full max-w-xl rounded-[1.75rem] border border-white/10 bg-[#0b1425]/90 p-3 shadow-2xl shadow-blue-950/40 backdrop-blur-xl sm:p-5 lg:ml-auto">
            <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.25rem] border border-white/[0.07] bg-gradient-to-br from-[#101d32] to-[#080f1d] p-5 sm:p-7">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
                  <span className="size-2 rounded-full bg-blue-400/70" />
                  <span className="size-2 rounded-full bg-slate-600" />
                </div>
                <Sparkles size={17} className="text-cyan-200/70" aria-hidden="true" />
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-200">Vision</p>
              <h2 className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-white sm:text-[1.75rem]">
                Des solutions de classe mondiale, pensées pour votre croissance.
              </h2>
              <div className="mt-7 space-y-3 text-sm text-slate-300">
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-colors hover:border-cyan-300/20">
                  <p className="font-medium text-white">Stratégie digitale</p>
                  <p className="mt-1">Mise en place d’outils performants et évolutifs.</p>
                </div>
                <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-colors hover:border-cyan-300/20">
                  <p className="font-medium text-white">Exécution rapide</p>
                  <p className="mt-1">Livraison agile avec un suivi qualité permanent.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="relative mx-auto max-w-7xl scroll-mt-8 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-200">Services</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Des expertises complètes pour donner vie à vos ambitions.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article
                  key={service.title}
                  className="service-card group rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0d1728] to-[#09111f] p-5 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:shadow-xl hover:shadow-cyan-950/20 sm:p-6"
                >
                  <div className="mb-5 inline-flex rounded-xl border border-cyan-200/10 bg-cyan-300/[0.08] p-3 text-cyan-200 transition duration-300 group-hover:border-cyan-200/20 group-hover:bg-cyan-300/[0.13]">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl scroll-mt-8 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-gradient-to-br from-[#0d192b] via-[#0b1424] to-[#09111e] p-6 shadow-xl shadow-black/20 sm:p-9 lg:p-12">
            <div className="pointer-events-none absolute -right-24 -top-28 size-72 rounded-full bg-blue-500/[0.08] blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-200">À propos</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                  Un partenaire technologique fiable et créatif.
                </h2>
              </div>
              <div className="space-y-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
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

      <footer id="contact" className="scroll-mt-8 border-t border-white/[0.08] bg-[#040914]/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-400 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 cianney Labs. Tous droits réservés.</p>
          <div className="flex gap-4">
            <a href="#" className="transition-colors hover:text-cyan-200">
              LinkedIn
            </a>
            <a
  href="mailto:cianney.dev@gmail.com"
  className="transition-colors hover:text-cyan-200"
>
  Contact
</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
