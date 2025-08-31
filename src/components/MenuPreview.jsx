import FadeIn from './FadeIn.jsx'
const items = [
  { name: 'Caprese Skewers', price: '$8', img: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=800&auto=format&fit=crop' },
  { name: 'Herb Roasted Chicken', price: '$18', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop' },
  { name: 'Penne Arrabbiata', price: '$14', img: 'https://media.istockphoto.com/id/2028160734/photo/penne-pasta-arrabbiata-in-a-bowl-directly-above-photo.jpg?s=612x612&w=0&k=20&c=1bjas_EA4Z6EFR49mqA1QbqQ9ugL3VJrpFUd-DeJIx0=' },
  { name: 'Chocolate Truffle', price: '$9', img: 'https://media.istockphoto.com/id/1264330682/photo/close-up-image-of-homemade-chocolate-cupcakes-topped-with-piped-chocolate-icing-frosting-dark.webp?a=1&b=1&s=612x612&w=0&k=20&c=_pdc8Bv76lX8DzBKkye0jhl9EE4nldU_W2YwkyOG_wM=' },
]

export default function MenuPreview() {
  return (
    <section id="menu" className="py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <h2 className="font-display tracking-wide text-3xl sm:text-4xl md:text-5xl dark:text-white">Popular Dishes</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">A taste of our most requested menu items.</p>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <FadeIn key={it.name} delay={idx * 60}>
              <div className="group overflow-hidden rounded-xl bg-white ring-1 ring-gray-200 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800 dark:ring-gray-700">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={it.img} alt={it.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <h3 className="font-semibold tracking-wide dark:text-white">{it.name}</h3>
                  <span className="text-brand-primary font-medium">{it.price}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
