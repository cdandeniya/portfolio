'use client'

const RESUME = '/Chanul Dandeniya Resume.pdf'
const EMAIL = 'cdandeniya2@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/cdandeniya/'

export default function Contact() {
  return (
    <section id="contact" className="section-block min-h-[70vh] flex items-end">
      <div className="page w-full pb-8" data-reveal>
        <p className="section-title">Contact</p>

        <h2 className="display text-[var(--fg)] mb-10 md:mb-14 max-w-4xl">
          Let&apos;s build something.
        </h2>

        <p className="text-[var(--muted)] mb-12 max-w-md">
          Open to backend SWE roles for Summer/Fall 2027. I respond quickly.
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="block text-2xl md:text-4xl font-serif text-[var(--fg)] hover:text-[var(--accent)] transition-colors mb-12"
        >
          {EMAIL}
        </a>

        <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm uppercase tracking-[0.2em]">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover"
          >
            LinkedIn
          </a>
          <a
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover"
          >
            Resume
          </a>
        </div>

        <p className="mt-24 pt-8 border-t border-[var(--line)] text-xs text-[var(--muted)] tracking-widest">
          © {new Date().getFullYear()} Chanul Dandeniya
        </p>
      </div>
    </section>
  )
}
