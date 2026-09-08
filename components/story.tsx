import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { story } from '@/lib/portfolio-data'

export function Story() {
  return (
    <section id="story" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 md:px-8">
        <SectionHeading index="01" title="Background" intro={story.heading} />

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-6">
            {story.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground first:text-foreground">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="flex flex-col gap-8">
            <dl className="divide-y divide-border rounded-2xl border border-border bg-card">
              {story.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-4 px-5 py-4"
                >
                  <dt className="text-sm text-muted-foreground">{fact.label}</dt>
                  <dd className="text-right text-sm font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Tools I reach for
              </h3>
              <ul className="flex flex-wrap gap-2">
                {story.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border bg-card px-3 py-1 text-sm transition-colors hover:border-primary hover:text-primary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
