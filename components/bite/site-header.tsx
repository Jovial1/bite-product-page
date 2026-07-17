'use client'

import { useEffect, useState } from 'react'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Toothpaste Bits', href: '#favorites' },
  { label: 'Travel Sets', href: '#travel' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Ingredients', href: '#ingredients' },
  { label: 'Reviews', href: '#reviews' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-2">
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className="flex size-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-cream focus-visible:ring-2 focus-visible:ring-navy focus-visible:outline-none"
        >
          <Menu className="size-5" />
        </button>

        <a
          href="#top"
          className="font-display text-2xl font-extrabold tracking-tight text-navy focus-visible:ring-2 focus-visible:ring-navy focus-visible:outline-none"
        >
          bite<span className="text-coral">.</span>me
        </a>

        <div className="flex items-center">
          <button
            type="button"
            aria-label="Search"
            className="flex size-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-cream focus-visible:ring-2 focus-visible:ring-navy focus-visible:outline-none"
          >
            <Search className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Shopping bag, 0 items"
            className="relative flex size-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-cream focus-visible:ring-2 focus-visible:ring-navy focus-visible:outline-none"
          >
            <ShoppingBag className="size-5" />
            <span className="absolute top-1.5 right-1.5 flex size-4 items-center justify-center rounded-full bg-coral text-[10px] font-bold text-white">
              0
            </span>
          </button>
        </div>
      </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Site menu">
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
          />
          <nav className="absolute inset-y-0 left-0 flex w-[85%] max-w-xs flex-col bg-background shadow-xl">
            <div className="flex h-14 items-center justify-between border-b border-border px-2 pl-4">
              <span className="font-display text-xl font-extrabold text-navy">
                bite<span className="text-coral">.</span>me
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex size-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-cream focus-visible:ring-2 focus-visible:ring-navy focus-visible:outline-none"
              >
                <X className="size-5" />
              </button>
            </div>
            <ul className="flex flex-col p-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex min-h-11 items-center rounded-lg px-4 font-display text-lg font-semibold text-navy transition-colors hover:bg-cream focus-visible:ring-2 focus-visible:ring-navy focus-visible:outline-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
