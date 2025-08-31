import { useEffect, useRef, useState } from 'react'
import FadeIn from './FadeIn.jsx'

const stats = [
  { label: 'Events Catered', value: '1200+' },
  { label: 'Dishes Served', value: '50k+' },
  { label: 'Happy Clients', value: '10k+' },
  { label: 'Years Experience', value: '12+' },
]

function parseValue(v) {
  // returns { number, suffix }
  const match = String(v).match(/^(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { number: 0, suffix: '' }
  return { number: parseFloat(match[1]), suffix: match[2] ?? '' }
}

function CountUp({ end, duration = 1200, suffix = '' }) {
  const [val, setVal] = useState(0)
  const startTs = useRef(null)
  useEffect(() => {
    let raf
    const start = (ts) => {
      if (!startTs.current) startTs.current = ts
      const p = Math.min(1, (ts - startTs.current) / duration)
      setVal(Math.floor(p * end))
      if (p < 1) raf = requestAnimationFrame(start)
    }
    raf = requestAnimationFrame(start)
    return () => cancelAnimationFrame(raf)
  }, [end, duration])
  return (
    <>
      {val}
      {suffix}
    </>
  )
}

export default function Stats() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => {
            const { number, suffix } = parseValue(s.value)
            return (
              <FadeIn key={s.label} delay={idx * 60}>
                <div className="rounded-xl bg-brand-light p-6 text-center ring-1 ring-gray-200 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md dark:bg-gray-800 dark:ring-gray-700">
                  <div className="font-display text-3xl sm:text-4xl tracking-wide text-brand-primary">
                    <CountUp end={number} suffix={suffix} />
                  </div>
                  <div className="mt-2 text-gray-700 dark:text-gray-300">{s.label}</div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
