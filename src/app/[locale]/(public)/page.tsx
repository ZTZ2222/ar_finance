import AboutUs from "@/components/sections/about-us"
import Hero from "@/components/sections/hero"
import WhyUs from "@/components/sections/why-us"

export default function Home() {
  return (
    <main className="bg-[#F9FAFB]">
      <Hero />
      <AboutUs />
      <WhyUs />
    </main>
  )
}
