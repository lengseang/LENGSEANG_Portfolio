'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { EmojiSticker } from './stickers/Sticker';

type ContactFormState = 'idle' | 'ready';

type ContactFormProps = {
  email: string;
};

const TOP_OFS = [75, 160, 270, 270];

export function ContactForm({ email }: ContactFormProps) {
  const [state, setState] = useState<ContactFormState>('idle');
  const [focusedField, setFocusedField] = useState<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const targetY = focusedField !== null ? TOP_OFS[focusedField] : 320;

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
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="How should I address you?"
          className="field"
          onFocus={() => setFocusedField(0)}
          onBlur={() => setFocusedField(null)}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-[color:var(--text-soft)]">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="field"
          onFocus={() => setFocusedField(1)}
          onBlur={() => setFocusedField(null)}
        />
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
          onFocus={() => setFocusedField(2)}
          onBlur={() => setFocusedField(null)}
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

      <motion.div
        aria-hidden="true"
        className="absolute right-1 pointer-events-none"
        animate={{
          top: targetY,
          x: focusedField !== null ? [0, -4, 3, -2, 4, -3, 0] : [0, 6, -4, 8, -5, 3, -6, 0],
          opacity: 1,
        }}
        transition={{
          top: { type: 'spring', stiffness: 180, damping: 14 },
          x: { duration: focusedField !== null ? 0.5 : 0.8, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <EmojiSticker src="/vid/mouse-squeak.mp4" size={48} mobileSize={36} />
      </motion.div>
    </form>
  );
}
