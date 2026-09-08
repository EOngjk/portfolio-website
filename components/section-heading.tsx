import { Reveal } from '@/components/reveal'

type SectionHeadingProps = {
  index: string
  title: string
  intro?: string
}

export function SectionHeading({ index, title, intro }: SectionHeadingProps) {
  return (
    <Reveal className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="font-heading text-sm font-medium text-primary">
          {index}
        </span>
        <span className="h-px w-10 bg-primary" aria-hidden="true" />
        <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {title}
        </span>
      </div>
      {intro ? (
        <p className="max-w-2xl text-pretty text-2xl leading-snug font-heading font-medium md:text-3xl">
          {intro}
        </p>
      ) : null}
    </Reveal>
  )
}
