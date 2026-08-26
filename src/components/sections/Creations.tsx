import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { PRODUCTS, CATEGORIES } from '../../lib/constants';
import type { Category } from '../../lib/constants';
import { CreationCard } from './CreationCard';
import { DotPattern, TinyFlower } from '../doodles/Doodles';

export function Creations() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const filteredProducts =
    activeCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="creations"
      data-section="creations"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #fdf8f0 0%, #fef9ee 100%)' }}
    >
      {/* Subtle background bloom */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] h-64 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, #fde68a22 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <span
            className="inline-block font-handwritten text-lg text-[#7a9e7e] mb-3"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            every piece is one of a kind
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#4a2c0a] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The{' '}
            <em className="italic text-[#f97316]">Creations</em>
          </h2>
          <DotPattern className="mx-auto mt-5" color="#f4c430" />
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap gap-2 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative font-sans text-sm font-medium px-5 py-2.5 rounded-full border-2 transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#4a2c0a] text-[#fdf8f0] border-[#4a2c0a] shadow-md'
                  : 'bg-white text-[#7c4a1e] border-[#f4c430]/40 hover:border-[#f4c430] hover:bg-[#fde68a]/20'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  className="absolute -top-1.5 -right-1.5"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <TinyFlower size={14} petalColor="#f4c430" centerColor="#4a2c0a" />
                </motion.div>
              )}
            </button>
          ))}
        </motion.div>

        {/* Product grid — editorial masonry style */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProducts.map((product, i) => (
              <CreationCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p
            className="font-handwritten text-xl text-[#7c4a1e] mb-4"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            don't see what you're looking for?
          </p>
          <a
            href="#custom"
            className="inline-flex items-center gap-2 bg-[#f4c430] text-[#4a2c0a] font-sans font-medium px-8 py-3.5 rounded-full hover:bg-[#f97316] hover:text-white transition-all duration-300 hover:scale-105"
          >
            <TinyFlower size={16} petalColor="#4a2c0a" centerColor="#f4c430" />
            Request a Custom Creation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
