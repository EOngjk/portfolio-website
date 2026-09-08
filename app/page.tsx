import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Story } from '@/components/story'
import { Timeline } from '@/components/timeline'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { education, work } from '@/lib/portfolio-data'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Story />
        <Timeline
          id="work"
          index="02"
          title="Work"
          intro="Roles, teams, and the problems I was trusted to solve. Expand any entry for the details."
          items={work}
        />
        <Timeline
          id="education"
          index="03"
          title="Education"
          intro="The foundations. Where I learned how to learn, and picked up the habits I still lean on today."
          items={education}
        />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
