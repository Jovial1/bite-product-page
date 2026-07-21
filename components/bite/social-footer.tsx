'use client'

import { useState } from 'react'
import { InstagramIcon, PinterestIcon, XIcon, YouTubeIcon } from './social-icons'

const SOCIALS = [
  { label: 'Instagram', Icon: InstagramIcon, href: '#' },
  { label: 'YouTube', Icon: YouTubeIcon, href: '#' },
  { label: 'X', Icon: XIcon, href: '#' },
  { label: 'Pinterest', Icon: PinterestIcon, href: '#' },
]

export function SocialFooter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <footer className="bg-navy pt-12 pb-10 text-white">
      <div className="mx-auto max-w-2xl px-5">
        <div className="grid grid-cols-2 gap-3">
          <img
            src="/images/toothbrush-product.png"
            alt="Bite bamboo toothbrush set"
            className="aspect-square w-full rounded-3xl bg-cream object-contain p-3"
          />
          <img
            src="/images/hero-berry-jar.png"
            alt="Bite Berry Twist toothpaste bits jar with berries"
            className="aspect-square w-full rounded-3xl bg-cream object-contain p-3"
          />
        </div>

        <h2 className="mt-7 text-center font-display text-2xl font-extrabold tracking-tight text-balance">
          Follow us for a chance to <span className="text-coral">WIN</span> a free Bamboo Toothbrush Set
        </h2>
        <p className="mx-auto mt-2 max-w-sm text-center text-sm leading-relaxed text-white/85">
          Like us on all our social media and join the giveaway. New winner picked every month!
        </p>

        <div className="mt-6 flex justify-center gap-3">
          {SOCIALS.map(({ label, Icon, href }) => (
            <a key={label} href={href} aria-label={`Follow Bite on ${label}`} className="flex size-12 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-coral hover:bg-coral focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-navy focus-visible:outline-none">
              <Icon className="size-5" />
            </a>
          ))}
        </div>

        <form
          className="mx-auto mt-8 max-w-sm"
          onSubmit={(e) => {
            e.preventDefault()
            if (email.trim()) setSubmitted(true)
          }}
        >
          <label htmlFor="newsletter-email" className="mb-2 block text-sm font-medium text-white/80">
            Get 15% off your first order
          </label>
          {submitted ? (
            <p role="status" className="rounded-full bg-white/10 px-4 py-3 text-center text-sm font-medium text-white">
              Thanks! Check your inbox for your discount.
            </p>
          ) : (
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                autoComplete="email"
                className="min-h-12 flex-1 rounded-full border border-white/25 bg-white/5 px-5 text-base text-white placeholder:text-white/70 focus-visible:border-coral focus-visible:ring-2 focus-visible:ring-coral focus-visible:outline-none"
              />
              <button type="submit" className="min-h-12 rounded-full bg-coral px-6 font-semibold text-white transition-colors hover:brightness-90 focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-navy focus-visible:outline-none">
                Sign Up
              </button>
            </div>
          )}
        </form>

        <div className="mt-10 border-t border-white/15 pt-6 text-center">
          <p className="font-display text-base font-semibold">
            bite<span className="text-coral">.</span>me
