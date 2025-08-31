import FadeIn from './FadeIn.jsx'
const testimonials = [
  { name: 'Aarav', text: 'Exceptional service and the food was outstanding. Our guests still talk about it!' },
  { name: 'Mia', text: 'Professional team and beautifully presented dishes. Highly recommended.' },
  { name: 'Kabir', text: 'They made our wedding unforgettable. Every detail was perfect.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <h2 className="font-display tracking-wide text-3xl sm:text-4xl md:text-5xl dark:text-white">Testimonials</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">What our clients are saying</p>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="rounded-xl bg-white p-6 ring-1 ring-gray-200 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800 dark:ring-gray-700">
                <p className="text-gray-700 dark:text-gray-300">“{t.text}”</p>
                <div className="mt-4 font-medium text-brand-primary">— {t.name}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
