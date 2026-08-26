import './index.css';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { BloomStory } from './components/sections/BloomStory';
import { Creations } from './components/sections/Creations';
import { PickYourBloom } from './components/sections/PickYourBloom';
import { Maker } from './components/sections/Maker';
import { CustomCreations } from './components/sections/CustomCreations';
import { InstagramGallery } from './components/sections/InstagramGallery';
import { FinalCTA } from './components/sections/FinalCTA';
import { SplineFlower } from './components/3d/SplineFlower';

/**
 * Bloom With Me — Main App
 *
 * Section order and data attributes are designed for future integration:
 *   - GSAP ScrollTrigger (data-section attributes on each section)
 *   - Framer Motion scroll-linked animations
 */
function App() {
  return (
    <div className="relative">
      
      {/* 🐝✨ THE FULL-SCREEN BEE OVERLAY 
          This layer sits on top of the entire website. It is completely invisible to clicks 
          (pointer-events-none), but the SplineFlower component catches your real mouse 
          movements and makes the 3D bee follow you all the way down the page!
      */}
      <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
        <SplineFlower mode="bee-overlay" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        {/* Section 01 — Hero */}
        <Hero />

        {/* Section 02 — The Blooming Story */}
        <BloomStory />

        {/* Section 03 — Creations */}
        <Creations />

        {/* Section 04 — Pick Your Bloom */}
        <PickYourBloom />

        {/* Section 05 — The Maker */}
        <Maker />

        {/* Section 06 — Custom Creations */}
        <CustomCreations />

        {/* Section 07 — Instagram Gallery */}
        <InstagramGallery />

        {/* Section 08 — Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
