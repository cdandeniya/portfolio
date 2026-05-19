'use client'

export default function About() {
  return (
    <section id="about" className="section-block">
      <div className="page" data-reveal>
        <p className="section-title">About</p>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <p className="md:col-span-5 display text-[var(--fg)] text-[clamp(2rem,5vw,3.5rem)]">
            Backend engineer with a product mindset.
          </p>
          <div className="md:col-span-7 space-y-6 text-[var(--muted)] text-base md:text-lg leading-relaxed">
            <p>
              Three years shipping distributed billing systems at Amazon — event-driven
              microservices on AWS, payments at scale.
            </p>
            <p>
              Two years as Lead PM at OuterLabs, owning specs, roadmaps, and delivery across
              engineering and design. I think about why something ships, not just how.
            </p>
            <p className="text-sm text-[var(--muted)]/80">
              CS + Applied Math at Stony Brook · graduating 2027 · targeting backend SWE roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
