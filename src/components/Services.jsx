import FadeIn from './FadeIn.jsx'
const items = [
  { title: 'Wedding Catering', desc: 'Elegant menus and polished service for your big day.', icon: '💍' },
  { title: 'Corporate Events', desc: 'Professional, punctual, and delicious every time.', icon: '🏢' },
  { title: 'Private Parties', desc: 'Tailored menus for birthdays, anniversaries, and more.', icon: '🎉' },
  { title: 'Outdoor Catering', desc: 'Fresh, seasonal menus perfect for open-air venues.', icon: '🌿' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-brand-light dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <h2 className="font-display tracking-wide text-3xl sm:text-4xl md:text-5xl dark:text-white">Our Services</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Comprehensive catering solutions tailored to your event.</p>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <FadeIn key={it.title} delay={idx * 60}>
              <div className="rounded-xl bg-white p-6 ring-1 ring-gray-200 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800 dark:ring-gray-700">
                <div className="text-3xl">{it.icon}</div>
                <h3 className="mt-4 font-semibold text-lg tracking-wide dark:text-white">{it.title}</h3>
                <p className="mt-2 text-gray-600 text-sm dark:text-gray-300">{it.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
