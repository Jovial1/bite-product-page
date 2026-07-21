const STEPS = [
  { number: '1', title: 'Grab a Toothpaste Bit', copy: 'Take one tablet from the glass jar — no tube, no plastic.' },
  { number: '2', title: 'Chew your Bit', copy: 'Bite down and let it foam up into a fresh, minty paste.' },
  { number: '3', title: 'Brush with a wet toothbrush', copy: 'Brush like normal for a deep, naturally whitening clean.' },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background py-12">
      <div className="mx-auto max-w-2xl px-5">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-navy">How it works</h2>
        <p className="mt-1 text-sm text-navy">Brushing with bits is easy.</p>

        <div className="mt-5 overflow-hidden rounded-3xl bg-cream">
          <img
            src="/images/how-it-works.png"
            alt="Close-up of a person placing a Bite toothpaste bit into their mouth"
            className="aspect-[16/10] w-full object-cover object-bottom"
          />
        </div>

        <ol className="mt-6 grid gap-4 sm:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.number} className="rounded-2xl border border-border bg-background p-4">
              <span className="flex size-9 items-center justify-center rounded-full bg-coral font-display text-base font-bold text-white">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-base font-bold text-navy">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-navy">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
