import FadeIn from './FadeIn.jsx'
const imgs = [
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
  'https://media.istockphoto.com/id/847241034/photo/pasta-pens.jpg?s=612x612&w=0&k=20&c=8O44TazGMRdKx5nEs4v4lB3ROZqGsor1iDatNWGNXWQ=',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-brand-light dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <h2 className="font-display tracking-wide text-3xl sm:text-4xl md:text-5xl dark:text-white">Gallery</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">A glimpse into our recent events.</p>
        </FadeIn>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {imgs.map((src, i) => (
            <FadeIn key={i} delay={i * 50}>
              <div className="group relative h-56 w-full overflow-hidden rounded-xl ring-1 ring-gray-200 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg dark:ring-gray-700">
                <img src={src} alt={`Gallery ${i+1}`} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:bg-black/20" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
