'use client'

type Role = {
  company: string
  title: string
  when: string
  note: string
  inProgress?: boolean
}

const roles: Role[] = [
  {
    company: 'Amazon',
    title: 'Software Engineering Apprentice',
    when: '2021 – 2024',
    note: 'Distributed billing APIs on AWS — event-driven microservices at payment scale.',
  },
  {
    company: 'OuterLabs Studio',
    title: 'Lead Product Manager',
    when: '2023 – 2025',
    note: 'End-to-end client delivery — requirements, roadmaps, cross-functional execution.',
  },
  {
    company: 'Kroll',
    title: 'Software Engineering Intern',
    when: 'Summer 2026',
    note: 'Release engineering & real-time fraud detection pipeline.',
    inProgress: true,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-block">
      <div className="page" data-reveal>
        <p className="section-title">Experience</p>

        <ul>
          {roles.map((role, i) => (
            <li
              key={role.company}
              className="group border-t border-[var(--line)] py-10 md:py-14 grid md:grid-cols-12 gap-4 md:gap-8 items-start"
            >
              <span className="md:col-span-1 text-sm text-[var(--muted)] font-mono">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="md:col-span-4">
                <h3 className="text-xl md:text-2xl text-[var(--fg)] font-medium group-hover:text-[var(--accent)] transition-colors duration-500">
                  {role.company}
                </h3>
                <p className="text-sm text-[var(--muted)] mt-1">{role.title}</p>
                <p className="text-xs text-[var(--muted)]/60 mt-1 tracking-wide">
                  {role.when}
                  {role.inProgress && ' · now'}
                </p>
              </div>
              <p className="md:col-span-7 text-[var(--muted)] leading-relaxed max-w-xl">
                {role.note}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
