import { ReactLenis } from 'lenis/react'
import { motion, useScroll } from 'framer-motion'

import Hero from './components/Hero'
import BrandStory from './components/BrandStory'
import ProductShowcase from './components/ProductShowcase'
import PremiumDescription from './components/PremiumDescription'
import Experience from './components/Experience'
import Usage from './components/Usage'
import HealthBenefits from './components/HealthBenefits'
import ProductDetails from './components/ProductDetails'
import Trust from './components/Trust'
import FinalImpact from './components/FinalImpact'
import Footer from './components/Footer'

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      <div className="bg-darker text-white font-sans min-h-screen selection:bg-gold/30 selection:text-gold relative">

        {/* Premium Global Scroll Indicator */}
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 via-gold to-yellow-600 origin-left z-50 drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]"
        />

        <Hero />
        <BrandStory />
        <ProductShowcase />
        <PremiumDescription />
        <Experience />
        <Usage />
        <HealthBenefits />
        <ProductDetails />
        <Trust />
        <FinalImpact />
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default App
