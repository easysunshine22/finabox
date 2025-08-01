import HeroSection from '@/components/sections/banner/hero-section';
import FaqSection from '@/components/sections/faq/faq-section';
import FeaturesSection from '@/components/sections/features/features-section';
import MakeAlertSection from '@/components/sections/makealert/makealert-section';
import PricingSection from '@/components/sections/pricing/pricing-section';
import TestimonialsSection from '@/components/sections/testimonials/testimonials-section';
import TrustedBySection from '@/components/sections/trustedby/trustedby-section';
import WeBuildForSection from '@/components/sections/webuildfor/webuildfor-section';
import WhyUsSection from '@/components/sections/whyus/whyus-section';

export default function Home() {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <TrustedBySection />
      <div id="features" className='pt-10'>
        <FeaturesSection />
      </div>
      <WhyUsSection />
      <WeBuildForSection />
      <TestimonialsSection />
      <div id="pricing" className='pt-10'>
        <PricingSection />
      </div>
      <FaqSection />
      <div id="contact">
        <MakeAlertSection />
      </div>
    </>
  );
}