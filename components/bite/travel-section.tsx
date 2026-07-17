type TravelSet = {
  name: string
  description: string
  price: string
  image: string
  alt: string
  featured?: boolean
}

const TRAVEL_SETS: TravelSet[] = [
  {
    name: 'The Travel Pouch',
    description: 'Everything you need for the road, zipped into one tidy mesh pouch.',
    price: '45',
    image: '/images/travel-pouch.png',
    alt: 'Bite travel pouch with mouthwash bits, bamboo toothbrush and floss on a green tiled surface',
    featured: true,
  },
  {
    name: 'Essentials Trio',
    description: 'Toothpaste bits, whitening gel and mouthwash for weekend getaways.',
    price: '38',
    image: '/images/travel-flatlay.png',
    alt: 'Flatlay of Bite toothpaste jar, whitening gel and mouthwash bits with scattered tablets',
  },
  {
    name: 'Travel Case Kit',
    description: 'A complete kit with tongue scraper, gel and mint mouthwash bits.',
    price: '52',
    image: '/images/travel-case.png',
    alt: 'Bite travel case kit with toothpaste, tin, whitening gel, tongue scraper and mouthwash bits',
  },
  {
    name: 'Best of Bite',
    description: 'Our full lineup in one grey flatlay set — the ultimate starter.',
    price: '60',
    image: '/images/bundle-grey.png',
    alt: 'Grey flatlay of the full Bite product bundle including jars, tin and bamboo toothbrush',
  },
  {
    name: 'Everyday Bundle',
    description: 'All the daily heroes, beautifully arranged and ready to gift.',
    price: '58',
    image: '/images/all-products.png',
    alt: 'Bite full product range arranged on a textured background',
  },
]

export function TravelSection() {
  return (
    <section id="travel" className="bg-navy py-12">
      <div className="mx-auto max-w-2xl px-5">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance text-white">
          The Perfect Travel Sets
        </h2>
        <p className="mt-1 text-sm text-white/60">Plastic-free routines that fit in your carry-on.</p>
      </div>
      <div
        className="no-scrollbar mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2"
        role="list"
        aria-label="Travel sets"
      >
        {TRAVEL_SETS.map((set) => (
          <article
            role="listitem"
            key={set.name}
            className={`flex shrink-0 snap-start flex-col overflow-hidden rounded-3xl bg-background ${
              set.featured ? 'w-[85%] max-w-sm' : 'w-[72%] max-w-xs'
            }`}
          >
            <div className={`relative bg-cream ${set.featured ? 'aspect-[4/3]' : 'aspect-square'}`}>
              <img src={set.image || '/placeholder.svg'} alt={set.alt} className="h-full w-full object-cover" />
              {set.featured && (
                <span className="absolute top-3 left-3 rounded-full bg-coral px-3 py-1 text-sm font-semibold text-white">
                  Featured
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-4">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-navy">{set.name}</h3>
                <span className="font-display text-lg font-bold text-coral">${set.price}</span>
              </div>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-navy/65">{set.description}</p>
              <button
                type="button"
                className="mt-4 flex min-h-11 items-center justify-center rounded-full border-2 border-navy px-4 font-semibold text-navy transition-colors hover:bg-navy hover:text-white focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                Add to Bag
              </button>
            </div>
          </article>
        ))}
        <div className="w-1 shrink-0" aria-hidden="true" />
      </div>
    </section>
  )
}
