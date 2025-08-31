export default function Hero() {
  return (
    <section id="hero" className="relative isolate h-[85vh] min-h-[560px] flex items-center">
      <img
        src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop"
        alt="Catering banquet"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight tracking-wide">
            Exquisite Catering for Your Special Moments
          </h1>
          <p className="mt-3 text-lg text-gray-200">
            From intimate gatherings to grand celebrations, we craft unforgettable culinary experiences.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#booking" className="rounded-md bg-brand-primary px-6 py-3 text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-primary/60">Book Now</a>
            <a href="#services" className="rounded-md border border-white/80 px-6 py-3 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60">Explore Services</a>
          </div>
        </div>
      </div>
    </section>
  )
}
