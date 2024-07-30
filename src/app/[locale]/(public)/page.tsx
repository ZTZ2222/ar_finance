import AboutUs from "@/components/sections/about-us"
import CTA from "@/components/sections/cta"
import Hero from "@/components/sections/hero"
import OurServices from "@/components/sections/our-services"
import Plans from "@/components/sections/plans"
import WhyUs from "@/components/sections/why-us"

export default function Home() {
  return (
    <main className="bg-[#F9FAFB]">
      <Hero />
      <AboutUs />
      <WhyUs />
      <CTA />
      <OurServices />
      <Plans />
    </main>
  )
}
