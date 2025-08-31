import FadeIn from './FadeIn.jsx'
export default function About() {
  return (
    <section id="about" className="py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
        <FadeIn>
          <img
            src="https://plus.unsplash.com/premium_photo-1663126620579-567a7ccc48f7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Chef preparing food"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </FadeIn>
        <FadeIn delay={80}>
          <h2 className="font-display tracking-wide text-3xl sm:text-4xl md:text-5xl dark:text-white">Passion on Every Plate</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            With years of experience, our chefs craft menus that combine seasonal ingredients with exquisite presentation. We
            believe every event deserves a culinary story to remember.
          </p>
          <ul className="mt-5 space-y-3 text-gray-700 dark:text-gray-300">
            <li>• Customizable menus for every occasion</li>
            <li>• Dietary accommodations and allergen-friendly options</li>
            <li>• Full-service staff and event coordination</li>
          </ul>
          <a href="#menu" className="mt-8 inline-block rounded-md bg-brand-primary px-6 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:ring-offset-2 dark:focus:ring-offset-gray-900">View Menu</a>
        </FadeIn>
      </div>
    </section>
  )
}
