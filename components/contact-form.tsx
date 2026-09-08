'use client'

import { useActionState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { sendMessage, type ContactState } from '@/app/actions/contact'
import { cn } from '@/lib/utils'

const initialState: ContactState = { status: 'idle' }

const inputClass =
  'w-full rounded-lg border border-border bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 aria-[invalid=true]:border-destructive'

export function ContactForm() {
  const [state, action, pending] = useActionState(sendMessage, initialState)

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-10 text-center text-foreground"
      >
        <CheckCircle2 className="size-8 text-primary" aria-hidden="true" />
        <p className="text-lg font-semibold">Message sent</p>
        <p className="text-muted-foreground">
          {state.message} I&apos;ll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form
      action={action}
      noValidate
      className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 text-foreground md:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">
        Send a message
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" error={state.errors?.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
            aria-invalid={Boolean(state.errors?.name)}
            className={inputClass}
          />
        </Field>
        <Field label="Email" name="email" error={state.errors?.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="your.email@example.com"
            required
            aria-invalid={Boolean(state.errors?.email)}
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Subject" name="subject" error={state.errors?.subject}>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="What's this about?"
          required
          aria-invalid={Boolean(state.errors?.subject)}
          className={inputClass}
        />
      </Field>

      <Field label="Message" name="message" error={state.errors?.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell me about your project or opportunity..."
          required
          aria-invalid={Boolean(state.errors?.message)}
          className={cn(inputClass, 'resize-y leading-relaxed')}
        />
      </Field>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {pending && (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          )}
          {pending ? 'Sending…' : 'Send message'}
        </button>
        {state.status === 'error' && (
          <p role="alert" className="text-sm text-destructive">
            {state.message}
          </p>
        )}
      </div>
    </form>
  )
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string
  name: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}
