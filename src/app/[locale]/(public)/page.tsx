import AboutUs from "@/components/sections/about-us"
import Blog from "@/components/sections/blog"
import CalculatorSection from "@/components/sections/calculator-section"
import CTA from "@/components/sections/cta"
import Hero from "@/components/sections/hero"
import OurServices from "@/components/sections/our-services"
import Plans from "@/components/sections/plans"
import WhyUs from "@/components/sections/why-us"

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <WhyUs />
      <CTA />
      <OurServices />
      <Plans />
      <CalculatorSection />
      <Blog />
    </main>
  )
}
