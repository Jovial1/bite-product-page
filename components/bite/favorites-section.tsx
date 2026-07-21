import { ShoppingBag } from 'lucide-react'

type Favorite = {
  tag: string
  name: string
  benefit: string
  price: string
  demo: string
  demoAlt: string
  product?: string
  productAlt?: string
}

const FAVORITES: Favorite[] = [
  {
    tag: 'Bestseller',
    name: 'Toothpaste Bits',
    benefit: 'Chew, brush, smile. A plastic-free clean in one little tablet.',
    price: '12',
    demo: '/images/toothpaste-bits-demo.png',
    demoAlt: 'Smiling woman holding a Bite toothpaste tablet between her teeth',
  },
  {
    tag: 'Zero Waste',
    name: 'Floss',
    benefit: 'Refillable, compostable floss in a reusable glass bottle.',
    price: '10',
    demo: '/images/floss-demo.png',
    demoAlt: 'Woman flossing her teeth and smiling',
    product: '/images/floss-product.png',
    productAlt: 'Two Bite floss glass refill bottles',
  },
  {
    tag: 'Whitening',
    name: 'Whitening Gel',
    benefit: 'A gentle, enamel-safe gel that brightens without the burn.',
    price: '30',
    demo: '/images/whitening-gel-demo.png',
    demoAlt: 'Man applying Bite whitening gel to his teeth with a bamboo applicator',
    product: '/images/whitening-gel-product.png',
    productAlt: 'Bite whitening gel bottle with bamboo applicator',
  },
  {
    tag: 'Fresh Mint',
    name: 'Mouthwash Bits',
    benefit: 'Bite, sip, swish. Fresh breath with no plastic bottle.',
    price: '12',
    demo: '/images/mouthwash-demo.png',
    demoAlt: 'Woman swishing mouthwash while holding a glass of water',
    product: '/images/mouthwash-product.png',
    productAlt: 'Bite mint mouthwash bits in a glass jar',
  },
]

function FavoriteCard({ fav }: { fav: Favorite }) {
  return (
    <article className="flex w-[78%] max-w-xs shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-border bg-background">
      <div className="relative aspect-[4/5] bg-cream">
        <img src={fav.demo || '/placeholder.svg'} alt={fav.demoAlt} className="h-full w-full object-cover" />
        <span className="absolute top-3 left-3 rounded-full bg-navy px-3 py-1 text-xs font-semibold text-white">
          {fav.tag}
        </span>
        {fav.product && (
          <div className="absolute right-3 bottom-3 flex size-20 items-center justify-center overflow-hidden rounded-2xl border border-border bg-background/95 p-1.5 shadow-sm">
            <img
              src={fav.product || '/placeholder.svg'}
              alt={fav.productAlt}
              className="h-full w-full object-contain"
            />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-bold text-navy">{fav.name}</h3>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-navy">{fav.benefit}</p>
        <button
          type="button"
          className="mt-4 flex min-h-11 items-center justify-center gap-2 rounded-full bg-coral px-4 font-semibold text-white transition-colors hover:brightness-90 focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <ShoppingBag className="size-4" />
          Add to Bag
          <span className="mx-1 text-white/75" aria-hidden="true">
            |
          </span>
          <span className="sr-only">for</span>${fav.price}
        </button>
      </div>
    </article>
  )
}

export function FavoritesSection() {
  return (
    <section id="favorites" className="bg-background py-12">
      <div className="mx-auto max-w-2xl px-5">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy">Our favorites</h2>
        <p className="mt-1 text-sm text-navy">Swipe to explore the daily routine.</p>
      </div>
      <div
        className="no-scrollbar mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 focus-visible:ring-2 focus-visible:ring-navy focus-visible:outline-none"
        role="list"
        aria-label="Favorite products"
        tabIndex={0}
      >
        {FAVORITES.map((fav) => (
          <div role="listitem" key={fav.name} className="contents">
            <FavoriteCard fav={fav} />
          </div>
        ))}
        <div className="w-1 shrink-0" aria-hidden="true" />
      </div>
    </section>
  )
}
