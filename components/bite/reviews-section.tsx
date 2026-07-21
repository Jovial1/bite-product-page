import { Star } from 'lucide-react'

type Review = {
  quote: string
  name: string
  location: string
  image: string
  alt: string
}

const REVIEWS: Review[] = [
  {
    quote: "I love knowing that I'm helping the planet by using a bamboo toothbrush.",
    name: 'Cyrus Rostam',
    location: 'NYC',
    image: '/images/toothbrush-demo.png',
    alt: 'Smiling man brushing his teeth with a Bite bamboo toothbrush',
  },
  {
    quote: '100% sustainable & cruelty free is the way to be.',
    name: 'Taejong Yi',
    location: 'Seattle',
    image: '/images/toothbrush-headshot.png',
    alt: 'Young man smiling while holding a Bite bamboo toothbrush',
  },
  {
    quote: 'These bites help me look good and feel good.',
    name: 'Melody Truman',
    location: 'Austin',
    image: '/images/mouthwash-demo.png',
    alt: 'Blonde woman smiling after using Bite mouthwash',
  },
  {
    quote: 'I like the convenience of 4 months supply in one small jar.',
    name: 'Paris Nazanin',
    location: 'Miami',
    image: '/images/mouthwash-product.png',
    alt: 'Small Bite mouthwash jar holding a multi-month supply of bits',
  },
  {
    quote: 'One bite a day keeps my teeth and the planet clean.',
    name: 'Roya Shirin',
    location: 'Honolulu',
    image: '/images/toothpaste-bits-demo.png',
    alt: 'Woman holding a Bite toothpaste bit between her teeth',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5" role="img" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-coral text-coral" aria-hidden="true" />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-cream py-12">
      <div className="mx-auto max-w-2xl px-5">
        <p className="text-sm font-semibold tracking-[0.2em] text-coral uppercase">One Million Reviews</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy">
          Loved by happy mouths
        </h2>
      </div>
      <div className="no-scrollbar mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 focus-visible:ring-2 focus-visible:ring-navy focus-visible:outline-none" role="region" aria-label="Customer reviews" tabIndex={0}>
        {REVIEWS.map((review) => (
          <div key={review.name} className="contents">
          <article className="flex w-[78%] max-w-xs shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-border bg-background">
            <div className="aspect-[4/3] bg-cream">
              <img src={review.image || '/placeholder.svg'} alt={review.alt} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <Stars />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-navy">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <footer className="mt-4">
                <p className="font-display text-sm font-bold text-navy">{review.name}</p>
                <p className="text-sm text-navy">{review.location}</p>
              </footer>
            </div>
          </article>
          </div>
        ))}
        <div className="w-1 shrink-0" aria-hidden="true" />
      </div>
    </section>
  )
}
