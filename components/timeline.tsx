'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { ChevronDown, MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import type { TimelineItem } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

type TimelineProps = {
  id: string
  index: string
  title: string
  intro: string
  items: TimelineItem[]
}

export function Timeline({ id, index, title, intro, items }: TimelineProps) {
  const listRef = useRef<HTMLOListElement>(null)
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 75%', 'end 60%'],
  })
  const lineProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })

  return (
    <section id={id} className="scroll-mt-20 border-t border-border py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-5 md:px-8">
        <SectionHeading index={index} title={title} intro={intro} />

        <ol ref={listRef} className="relative flex flex-col">
          <div
            className="absolute top-2 bottom-2 left-[7px] w-px bg-border md:left-[calc(11rem+7px)]"
            aria-hidden="true"
          />
          <motion.div
            className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-primary md:left-[calc(11rem+7px)]"
            style={{ scaleY: lineProgress }}
            aria-hidden="true"
          />

          {items.map((item, i) => {
            const isOpen = openId === item.id
            const panelId = `${item.id}-details`
            return (
              <Reveal key={item.id} delay={i * 0.05}>
                <li
                  className={cn(
                    'relative grid gap-3 pl-8 md:grid-cols-[11rem_1fr] md:gap-0 md:pl-0',
                    i < items.length - 1 && 'pb-14',
                  )}
                >
                  <span
                    className={cn(
                      'absolute top-2 left-0 size-[15px] rounded-full border-2 bg-background transition-colors duration-500 md:left-[11rem]',
                      isOpen ? 'border-primary bg-primary' : 'border-border',
                    )}
                    aria-hidden="true"
                  />

                  <p className="font-heading text-sm font-medium text-muted-foreground md:pt-1.5 md:pr-8">
                    {item.period}
                  </p>

                  <div className="md:pl-10">
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="group flex w-full items-start justify-between gap-4 text-left"
                    >
                      <div className="flex flex-col gap-1">
                        <h3 className="text-xl font-semibold md:text-2xl">
                          {item.title}
                        </h3>
                        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">
                            {item.organization}
                          </span>
                          {item.location ? (
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="size-3.5" aria-hidden="true" />
                              {item.location}
                            </span>
                          ) : null}
                        </p>
                      </div>
                      <span
                        className={cn(
                          'mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border transition-all group-hover:border-foreground',
                          isOpen && 'rotate-180 border-primary text-primary',
                        )}
                      >
                        <ChevronDown className="size-4" aria-hidden="true" />
                      </span>
                    </button>

                    <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                      {item.summary}
                    </p>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          id={panelId}
                          key="details"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-5 flex max-w-2xl flex-col gap-2.5">
                            {item.highlights.map((highlight) => (
                              <li
                                key={highlight}
                                className="flex gap-3 text-pretty leading-relaxed"
                              >
                                <span
                                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                                  aria-hidden="true"
                                />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                          {item.tags?.length ? (
                            <ul className="mt-5 flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <li
                                  key={tag}
                                  className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                                >
                                  {tag}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </li>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
