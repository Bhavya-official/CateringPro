import FadeIn from './FadeIn.jsx'
export default function Booking() {
  function handleSubmit(e) {
    e.preventDefault()
    alert('Thank you! We will contact you shortly.')
  }

  return (
    <section id="booking" className="py-20 bg-brand-light dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
        <FadeIn>
          <h2 className="font-display tracking-wide text-3xl sm:text-4xl md:text-5xl dark:text-white">Book Our Catering</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Share a few details and our team will get back to you.</p>
          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:ring-offset-gray-900" placeholder="Name" required />
              <input type="email" className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:ring-offset-gray-900" placeholder="Email" required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input type="tel" className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:ring-offset-gray-900" placeholder="Phone" />
              <input type="date" className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:focus:ring-offset-gray-900" placeholder="Event Date" />
            </div>
            <textarea className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/40 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:ring-offset-gray-900" rows={4} placeholder="Message"></textarea>
            <button type="submit" className="rounded-md bg-brand-primary px-6 py-3 text-white transition hover:shadow focus:outline-none focus:ring-2 focus:ring-brand-primary/60 focus:ring-offset-2 dark:focus:ring-offset-gray-900">Request Quote</button>
          </form>
        </FadeIn>
        <FadeIn delay={80}>
          <div id="contact" className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-gray-800 dark:ring-gray-700">
            <h3 className="font-semibold text-lg dark:text-white">Contact</h3>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              <li>📍 123 Culinary Street, Mumbai</li>
              <li>📞 +91-98765-43210</li>
              <li>✉️ hello@cateringpro.com</li>
            </ul>
            <div className="mt-6 h-56 w-full overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1200&auto=format&fit=crop" alt="Map placeholder" className="h-full w-full object-cover" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
