import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { PRODUCTS, BLOOM_OPTIONS } from '../../lib/constants';
import type { BloomOption } from '../../lib/constants';
import { TinyFlower, StarDoodle, HeartDoodle, DotPattern } from '../doodles/Doodles';

export function PickYourBloom() {
  const [selected, setSelected] = useState<BloomOption | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const relevantProducts = selected
    ? PRODUCTS.filter((p) => p.occasion?.includes(selected))
    : [];

  const optionColors: Record<string, { bg: string; border: string; accent: string }> = {
    'For Someone Special': { bg: '#fce4ef', border: '#f9a8c9', accent: '#f9a8c9' },
    'For My Room': { bg: '#e8f4ea', border: '#7a9e7e', accent: '#7a9e7e' },
    'For a Celebration': { bg: '#fde68a', border: '#f4c430', accent: '#f4c430' },
    'Just Because 🌼': { bg: '#fef3c7', border: '#f97316', accent: '#f97316' },
  };

  return (
    <section
      id="pick"
      data-section="pick-your-bloom"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden bg-[#4a2c0a]"
    >
      {/* Floating decorations on dark bg */}
      <motion.div
        className="absolute top-8 left-12 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <TinyFlower size={60} petalColor="#f4c430" centerColor="#fde68a" />
      </motion.div>
      <motion.div
        className="absolute bottom-8 right-12 opacity-15"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        <TinyFlower size={80} petalColor="#f9a8c9" centerColor="#f97316" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-8 opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <StarDoodle size={30} color="#fde68a" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-16 opacity-10"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <HeartDoodle size={28} color="#f9a8c9" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <span
            className="inline-block font-handwritten text-lg text-[#f4c430] mb-3"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            find your perfect bloom ✨
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#fdf8f0] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What are you{' '}
            <em className="italic text-[#f4c430]">blooming</em> for?
          </h2>
          <DotPattern className="mx-auto mt-6" color="#f4c430" />
        </motion.div>

        {/* Option grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {BLOOM_OPTIONS.map((option, i) => {
            const colors = optionColors[option.label];
            const isActive = selected === option.label;

            return (
              <motion.button
                key={option.id}
                onClick={() => setSelected(isActive ? null : option.label)}
                className="relative flex flex-col items-center text-center p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer"
                style={{
                  background: isActive ? colors.bg : 'rgba(255,255,255,0.06)',
                  borderColor: isActive ? colors.border : 'rgba(244,196,48,0.2)',
                }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              >
                <span className="text-4xl mb-3">{option.emoji}</span>
                <h3
                  className="font-display text-base font-medium leading-tight mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: isActive ? '#4a2c0a' : '#fdf8f0',
                  }}
                >
                  {option.label}
                </h3>
                <p
                  className="font-sans text-xs leading-relaxed"
                  style={{ color: isActive ? '#7c4a1e' : 'rgba(253,248,240,0.6)' }}
                >
                  {option.description}
                </p>

                {isActive && (
                  <motion.div
                    className="absolute -top-2 -right-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[10px]"
                      style={{ background: colors.accent }}
                    >
                      ✓
                    </div>
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Filtered results */}
        <AnimatePresence>
          {selected && relevantProducts.length > 0 && (
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-center font-handwritten text-xl text-[#f4c430] mb-8"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                Here's what we'd recommend for you 🌻
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relevantProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/15 transition-all"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h4
                        className="font-display text-lg text-[#fde68a] font-medium"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {product.name}
                      </h4>
                      <p className="font-sans text-sm text-[#fdf8f0]/70 mt-1 line-clamp-2">
                        {product.description}
                      </p>
                      <p
                        className="font-handwritten text-base text-[#f4c430] mt-2"
                        style={{ fontFamily: "'Dancing Script', cursive" }}
                      >
                        {product.priceRange}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {selected && relevantProducts.length === 0 && (
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p
              className="font-handwritten text-xl text-[#f4c430]"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Let's create something custom just for you! 🌸
            </p>
            <a
              href="#custom"
              className="inline-block mt-4 bg-[#f4c430] text-[#4a2c0a] font-sans font-medium px-6 py-3 rounded-full hover:bg-[#f97316] hover:text-white transition-all"
            >
              Start a Custom Order
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
