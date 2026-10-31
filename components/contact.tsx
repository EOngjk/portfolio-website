import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { profile } from '@/lib/portfolio-data'

export function Contact() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="scroll-mt-20 border-t border-border bg-foreground text-background"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mx-auto w-full max-w-3xl">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <p className="text-sm font-medium uppercase tracking-widest text-background/60">
                05 — Contact
              </p>
              <h2 className="text-4xl leading-[1.05] font-semibold text-balance md:text-6xl">
                Let&apos;s connect!
              </h2>
              <p className="max-w-lg text-pretty text-lg leading-relaxed text-background/70">
                Whether you have a job opportunity, a question about my work or projects, or simply want to connect,
                feel free to reach out through any of the channels below!
              </p>
            </div>

            <ul className="flex flex-col divide-y divide-background/15">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between py-4 transition-colors hover:text-accent"
                  >
                    <span className="text-base font-medium">{social.label}</span>
                    <span className="flex items-center gap-2 text-sm text-background/60 group-hover:text-accent">
                      {social.handle}
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="flex flex-col gap-2 border-t border-background/15 pt-6 text-sm text-background/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>Designed and built with Next.js, deployed on Vercel.</p>
        </div>
      </div>
    </footer>
  )
}
