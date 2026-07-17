import { SiteHeader } from '@/components/bite/site-header'
import { HeroSection } from '@/components/bite/hero-section'
import { FavoritesSection } from '@/components/bite/favorites-section'
import { TravelSection } from '@/components/bite/travel-section'
import { HowItWorksSection } from '@/components/bite/how-it-works-section'
import { IngredientsSection } from '@/components/bite/ingredients-section'
import { FreeGiftSection } from '@/components/bite/free-gift-section'
import { ReviewsSection } from '@/components/bite/reviews-section'
import { SocialFooter } from '@/components/bite/social-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <FavoritesSection />
        <TravelSection />
        <HowItWorksSection />
        <IngredientsSection />
        <FreeGiftSection />
        <ReviewsSection />
      </main>
      <SocialFooter />
    </div>
  )
}
