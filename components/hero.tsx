'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length)
    }, 2600)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-28"
    >
      <div className="grid-paper absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.4fr_1fr] md:px-8">
        <div className="flex flex-col gap-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {profile.location}
          </motion.p>

          <h1 className="text-5xl leading-[1.02] font-semibold text-balance md:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="block"
            >
              Hi, I&apos;m {profile.firstName}.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="block text-muted-foreground"
            >
              I&apos;m{' '}
              <span className="relative inline-grid overflow-hidden align-top text-primary">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={profile.roles[roleIndex]}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.5, ease }}
                    className="whitespace-nowrap"
                  >
                    {profile.roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              See my work
              <ArrowDown className="size-4" />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-foreground"
            >
              Download résumé
              <ArrowUpRight className="size-4" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="relative mx-auto w-full max-w-xs md:max-w-sm"
        >
          <div
            className="absolute -inset-3 translate-x-3 translate-y-3 rounded-2xl bg-accent"
            aria-hidden="true"
          />
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src={profile.portrait}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(min-width: 768px) 384px, 320px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card px-4 py-2.5 shadow-sm">
            <p className="text-xs text-muted-foreground">Currently</p>
            <p className="text-sm font-medium">{profile.currently}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
