export function HeroSection() {
  return (
    <section id="top" className="bg-cream">
      <div className="mx-auto max-w-2xl px-5 pt-8 pb-10 text-center">
        <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-coral uppercase">
          Berry Twist · Naturally Whitening
        </p>
        <h1 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-5xl">
          <span className="block text-navy">Small bites.</span>
          <span className="block text-coral">Big impact.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-navy/70">
          Naturally sweet berry toothpaste tablets that clean deeply and protect the planet!
        </p>

        <div className="relative mx-auto mt-6 aspect-square w-full max-w-md">
          <img
            src="/images/hero-berry-jar.png"
            alt="Bite Berry Twist toothpaste bits in a glass jar, surrounded by fresh strawberries, raspberries, blackberries and blueberries"
            className="h-full w-full object-contain"
          />
        </div>

        <a
          href="#favorites"
          className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full border-2 border-coral bg-background px-10 text-base font-semibold text-coral transition-colors hover:bg-coral hover:text-white focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Shop Now
        </a>
      </div>
    </section>
  )
}
