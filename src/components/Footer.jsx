export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl"><span className="text-brand-primary">Catering</span>Pro</div>
          <p className="mt-3 text-sm text-gray-400">Elevating events with exceptional cuisine and service.</p>
        </div>
        <div>
          <div className="font-semibold text-white">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#menu" className="hover:text-white">Menu</a></li>
            <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="#booking" className="hover:text-white">Booking</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Hours</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Mon–Fri: 9:00 – 19:00</li>
            <li>Sat: 10:00 – 17:00</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm">© {new Date().getFullYear()} CateringPro. All rights reserved.</div>
    </footer>
  )
}
