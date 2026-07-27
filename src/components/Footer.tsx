import logo from '../assets/images/whatthecrustlogo.jpg'

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'TikTok', href: '#' },
  { label: 'Facebook', href: '#' },
]

export function Footer() {
  return (
    <footer id="footer" className="bg-crust-black px-5 pb-10 pt-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 border-b border-crust-cream/10 pb-10 sm:flex-row sm:justify-between">
          <div className="flex items-start gap-3">
            <img src={logo} alt="What The Crust" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="font-display text-lg font-semibold text-crust-cream">What The Crust</p>
              <p className="mt-1 max-w-xs font-body text-sm text-crust-cream/55">
                Stone-fired pizza, built your way. Great days deserve great pizza.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:flex sm:gap-14">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-crust-cream/40">
                Explore
              </p>
              <ul className="mt-3 space-y-2 font-body text-sm text-crust-cream/70">
                <li><a href="#menu" className="hover:text-crust-red-light">Menu</a></li>
                <li><a href="#build" className="hover:text-crust-red-light">Build Your Own</a></li>
                <li><a href="#story" className="hover:text-crust-red-light">Our Story</a></li>
                <li><a href="#order" className="hover:text-crust-red-light">Order</a></li>
              </ul>
            </div>
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-crust-cream/40">
                Visit
              </p>
              <ul className="mt-3 space-y-2 font-body text-sm text-crust-cream/70">
                <li>123 Dough Street</li>
                <li>Open daily 11:00–22:00</li>
                <li>hello@whatthecrust.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pt-6 sm:flex-row sm:justify-between">
          <p className="font-body text-xs text-crust-cream/40">
            © {new Date().getFullYear()} What The Crust. All rights reserved.
          </p>
          <div className="flex gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="font-body text-xs text-crust-cream/50 hover:text-crust-red-light"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
