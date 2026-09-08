'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, Code2 } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { projects, type Project } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

const categories = ['All', 'Web', 'Mobile', 'Tools'] as const
type Category = (typeof categories)[number]

export function Projects() {
  const [filter, setFilter] = useState<Category>('All')
  const visible =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="04"
            title="Projects"
            intro="Selected things I have built — some for work, some because I could not stop thinking about them."
          />
          <Reveal delay={0.1}>
            <div
              role="tablist"
              aria-label="Filter projects"
              className="flex w-fit gap-1 rounded-full border border-border bg-card p-1"
            >
              {categories.map((category) => {
                const isActive = filter === category
                return (
                  <button
                    key={category}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setFilter(category)}
                    className={cn(
                      'relative rounded-full px-4 py-1.5 text-sm transition-colors',
                      isActive
                        ? 'text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="project-filter"
                        className="absolute inset-0 rounded-full bg-primary"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    ) : null}
                    <span className="relative">{category}</span>
                  </button>
                )
              })}
            </div>
          </Reveal>
        </div>

        <motion.ul layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.li
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={cn(project.featured && filter === 'All' && 'md:col-span-2')}
              >
                <ProjectCard
                  project={project}
                  wide={Boolean(project.featured && filter === 'All')}
                />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  )
}

function ProjectCard({ project, wide }: { project: Project; wide: boolean }) {
  const primaryHref = project.liveUrl ?? project.repoUrl ?? '#'

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-lg',
        wide && 'md:grid md:grid-cols-2',
      )}
    >
      <a
        href={primaryHref}
        aria-label={`Open ${project.title}`}
        className={cn(
          'relative block overflow-hidden bg-muted',
          wide ? 'aspect-[16/10] md:aspect-auto md:min-h-80' : 'aspect-[16/10]',
        )}
      >
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute top-3 left-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium backdrop-blur">
          {project.category}
        </span>
      </a>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.year}</p>
          </div>
          <a
            href={primaryHref}
            aria-label={`Visit ${project.title}`}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <p className="text-pretty leading-relaxed text-muted-foreground">
          {wide ? project.longDescription : project.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Code2 className="size-4" aria-hidden="true" />
              Source
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
