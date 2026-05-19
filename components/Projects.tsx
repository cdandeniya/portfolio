'use client'

import { ArrowUpRight } from 'lucide-react'

type Project = {
  num: string
  name: string
  stack: string
  note: string
  github?: string
  live?: string
  inProgress?: boolean
}

const projects: Project[] = [
  {
    num: '01',
    name: 'Fraud Detection Pipeline',
    stack: 'Kafka · Redis · PostgreSQL',
    note: 'Real-time transaction scoring — sub-50ms per event.',
    inProgress: true,
  },
  {
    num: '02',
    name: 'Chiral Network',
    stack: 'Rust · TypeScript · P2P · DHT',
    note: 'Decentralized file-sharing with DHT peer discovery and parallel downloads.',
    github: 'https://github.com/cdandeniya/chiral-network',
    live: 'https://deploy-preview-1--chiral-network.netlify.app/',
  },
  {
    num: '03',
    name: 'NovaTrade',
    stack: 'Java · MySQL',
    note: 'Stock trading platform with RBAC and secure APIs.',
    github: 'https://github.com/cdandeniya/stock-trader',
    live: 'https://stock-trader-production-835b.up.railway.app/index.jsp',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-block">
      <div className="page" data-reveal>
        <p className="section-title">Projects</p>

        <ul>
          {projects.map((p) => (
            <li
              key={p.name}
              className="group border-t border-[var(--line)] py-10 md:py-14"
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
                <span className="md:col-span-1 text-sm text-[var(--muted)] font-mono">
                  {p.num}
                </span>

                <div className="md:col-span-11 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                  <div>
                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                      <h3 className="text-2xl md:text-4xl font-serif text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors duration-500">
                        {p.name}
                      </h3>
                      {p.inProgress && (
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                          building
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[var(--muted)]/70 tracking-wide mb-3">
                      {p.stack}
                    </p>
                    <p className="text-[var(--muted)] max-w-lg leading-relaxed">{p.note}</p>
                  </div>

                  {(p.github || p.live) && (
                    <div className="flex gap-6 shrink-0">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm link-hover uppercase tracking-[0.15em]"
                        >
                          GitHub
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm link-hover uppercase tracking-[0.15em]"
                        >
                          Live
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
