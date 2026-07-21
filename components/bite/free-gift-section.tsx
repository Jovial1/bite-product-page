import { Gift } from 'lucide-react'

const GIFTS = [
  {
    name: 'Bamboo Toothbrush',
    note: 'Compostable handle, plant-based bristles.',
    image: '/images/toothbrush-product.png',
    alt: 'Two Bite bamboo toothbrushes with matching bamboo travel cases',
  },
  {
    name: 'Toothpaste Bits Duo',
    note: 'Naturally whitening + activated charcoal.',
    image: '/images/bits-duo.png',
    alt: 'Two Bite toothpaste bits bottles shown as a duo set',
  },
]

export function FreeGiftSection() {
  return (
    <section className="bg-background py-12">
      <div className="mx-auto max-w-2xl px-5">
        <div className="rounded-3xl bg-coral p-6 text-center text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-coral">
            <Gift className="size-4" />
            Free with $100 purchase
          </span>
          <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-balance">
            Spend $100, pick a freebie on us
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-white">
            Add your favorites to the bag and one of these goodies is yours, absolutely free.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {GIFTS.map((gift) => (
              <article key={gift.name} className="flex flex-col overflow-hidden rounded-2xl bg-background">
                <div className="aspect-square bg-cream">
                  <img
                    src={gift.image || '/placeholder.svg'}
                    alt={gift.alt}
                    className="h-full w-full object-contain p-2"
                  />
                </div>
                <div className="p-3 text-left">
                  <h3 className="font-display text-sm font-bold text-navy">{gift.name}</h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-navy">{gift.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
