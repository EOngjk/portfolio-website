'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'name' | 'email' | 'subject' | 'message', string>>
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value: FormDataEntryValue | null, max: number) {
  return String(value ?? '')
    .trim()
    .slice(0, max)
}

export async function sendMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot field: real users never fill this in.
  if (clean(formData.get('website'), 100)) {
    return { status: 'success', message: 'Thanks, your message has been sent.' }
  }

  const name = clean(formData.get('name'), 100)
  const email = clean(formData.get('email'), 200)
  const subject = clean(formData.get('subject'), 150)
  const message = clean(formData.get('message'), 4000)

  const errors: ContactState['errors'] = {}
  if (name.length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email.'
  if (subject.length < 3) errors.subject = 'Please add a short subject.'
  if (message.length < 10) errors.message = 'Please write at least a sentence.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please fix the highlighted fields.', errors }
  }

  // Delivery provider not connected yet; messages are recorded in the server log.
  console.log('[contact] New message', { name, email, subject, message })

  return { status: 'success', message: 'Thanks, your message has been sent.' }
}
