'use client';

import { useRef, useState } from 'react';

type ContactFormState = 'idle' | 'ready';

type ContactFormProps = {
  email: string;
};

export function ContactForm({ email }: ContactFormProps) {
  const [state, setState] = useState<ContactFormState>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(formData: FormData) {
    const name = String(formData.get('name') ?? '').trim();
    const senderEmail = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'a visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setState('ready');
  }

  return (
    <form ref={formRef} action={handleSubmit} className="panel relative space-y-5 p-6 sm:p-7">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-[color:var(--text-soft)]">
          Your name
        </label>
        <input id="name" name="name" type="text" required placeholder="How should I address you?" className="field" />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-[color:var(--text-soft)]">
          Email address
        </label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" className="field" />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-[color:var(--text-soft)]">
          Project brief
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell me about the website, redesign, or product you want to build."
          className="field min-h-40 resize-none"
        />
      </div>

      <button type="submit" className="button-primary w-full justify-center sm:w-auto">
        Send message
      </button>

      <p className="text-sm text-[color:var(--text-muted)]">
        {state === 'ready'
          ? 'Your email app should open with the message prefilled.'
          : 'Submitting opens your default email app with the message already prepared.'}
      </p>
    </form>
  );
}
