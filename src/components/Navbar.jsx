import { useState } from 'react'
import useDarkMode from '../hooks/useDarkMode.js'

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#booking', label: 'Booking' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isDark, toggleDark] = useDarkMode()
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="font-display text-2xl tracking-wide">
            <span className="text-brand-primary">Catering</span>
            <span className="text-gray-900 dark:text-white">Pro</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-gray-700 transition-colors hover:text-brand-primary dark:text-gray-300">
                {n.label}
              </a>
            ))}
            <a href="#booking" className="ml-2 rounded-md bg-brand-primary px-4 py-2 text-white hover:opacity-90">Book Now</a>
            <button
              onClick={toggleDark}
              className="ml-2 inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-2 text-gray-800 shadow-sm transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle Dark Mode"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                // Sun icon
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 18a6 6 0 100-12 6 6 0 000 12z"/><path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V3A.75.75 0 0112 2.25zm0 16.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V19.5a.75.75 0 01.75-.75zM4.72 4.72a.75.75 0 011.06 0l1.06 1.06a.75.75 0 01-1.06 1.06L4.72 5.78a.75.75 0 010-1.06zm12.44 12.44a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM2.25 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm16.5 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM4.72 19.28a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06L5.78 19.28a.75.75 0 01-1.06 0zm12.44-12.44a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0z" clipRule="evenodd"/>
                </svg>
              ) : (
                // Moon icon
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M21.752 15.002A9.718 9.718 0 0112 21.75C6.07 21.75 1.5 17.18 1.5 11.25A9.718 9.718 0 018.998 2.248a.75.75 0 01.9.964A8.218 8.218 0 009 5.25c0 4.556 3.694 8.25 8.25 8.25 1.036 0 2.02-.189 2.938-.549a.75.75 0 01.964.9z"/>
                </svg>
              )}
            </button>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800" aria-label="Toggle Menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              {open ? (
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-2">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-2 text-gray-700 hover:text-brand-primary dark:text-gray-300">
                {n.label}
              </a>
            ))}
            <div className="flex items-center gap-2">
              <a href="#booking" onClick={() => setOpen(false)} className="flex-1 rounded-md bg-brand-primary px-4 py-2 text-center text-white">Book Now</a>
              <button onClick={() => { toggleDark(); setOpen(false); }} className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-2 text-gray-800 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200" aria-label="Toggle Dark Mode">
                {isDark ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
