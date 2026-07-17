import { Check } from 'lucide-react'

const CLAIMS = [
  'No Palm Oil',
  'No SLS',
  'No Artificial Flavors',
  'No Sulfates',
  'No Plastic',
  'No Parabens',
  'No Artificial Preservatives',
  'No Artificial Sweeteners',
  'No Dyes',
  'No Gluten',
]

export function IngredientsSection() {
  return (
    <section id="ingredients" className="bg-cream py-12">
      <div className="mx-auto max-w-2xl px-5">
        <p className="text-sm font-semibold tracking-[0.2em] text-coral uppercase">High Quality Ingredients</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-balance text-navy">
          Never made with bad ingredients
        </h2>

        <ul className="mt-6 grid grid-cols-2 gap-3">
          {CLAIMS.map((claim) => (
            <li
              key={claim}
              className="flex items-center gap-2.5 rounded-xl border border-border bg-background px-3 py-3"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-navy">
                <Check className="size-4 text-white" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium text-navy">{claim}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
