import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { BRAND } from '../../lib/constants';
import { TinyFlower, StarDoodle, HeartDoodle, DaisyDoodle, ThreadLine } from '../doodles/Doodles';

// Big decorative flower for the final CTA
function BigFlower() {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-40 md:w-52 md:h-52">
      {/* Petals */}
      {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle, i) => (
        <ellipse
          key={i}
          cx={80 + Math.cos((angle * Math.PI) / 180) * 42}
          cy={80 + Math.sin((angle * Math.PI) / 180) * 42}
          rx="16"
          ry="26"
          fill={i % 2 === 0 ? '#f4c430' : '#f97316'}
          fillOpacity="0.85"
          transform={`rotate(${angle}, ${80 + Math.cos((angle * Math.PI) / 180) * 42}, ${80 + Math.sin((angle * Math.PI) / 180) * 42})`}
        />
      ))}
      {/* Center */}
      <circle cx="80" cy="80" r="24" fill="#4a2c0a" />
      <circle cx="80" cy="80" r="14" fill="#7c4a1e" />
      <circle cx="74" cy="74" r="3" fill="#f4c430" fillOpacity="0.4" />
      <circle cx="84" cy="76" r="2" fill="#f4c430" fillOpacity="0.3" />
      <circle cx="78" cy="84" r="2.5" fill="#f4c430" fillOpacity="0.4" />
    </svg>
  );
}

// Floating petals for the confetti effect
const petals = [
  { x: '10%', y: '20%', color: '#f4c430', size: 20, delay: 0 },
  { x: '85%', y: '15%', color: '#f9a8c9', size: 16, delay: 0.5 },
  { x: '20%', y: '75%', color: '#f97316', size: 14, delay: 1 },
  { x: '75%', y: '70%', color: '#f4c430', size: 18, delay: 0.3 },
  { x: '50%', y: '10%', color: '#f9a8c9', size: 12, delay: 0.8 },
  { x: '92%', y: '50%', color: '#f4c430', size: 22, delay: 1.2 },
  { x: '5%', y: '50%', color: '#f97316', size: 15, delay: 0.6 },
];

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="final-cta"
      data-section="final-cta"
      ref={ref}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #fde68a 0%, #fdf8f0 40%, #fce4ef 100%)' }}
    >
      {/* Floating petals / doodles */}
      {petals.map((p, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ left: p.x, top: p.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        >
          {i % 3 === 0 ? (
            <TinyFlower size={p.size} petalColor={p.color} centerColor="#4a2c0a" />
          ) : i % 3 === 1 ? (
            <StarDoodle size={p.size} color={p.color} />
          ) : (
            <HeartDoodle size={p.size} color={p.color} />
          )}
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative z-10">

        {/* Big flower illustration */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ scale: 0, rotate: -20 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2, type: 'spring', stiffness: 120, damping: 12 }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <BigFlower />
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <ThreadLine width={60} color="#f97316" className="inline-block mb-4 opacity-60" />
          <h2
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#4a2c0a] leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A little{' '}
            <em className="italic text-[#f97316]">handmade happiness,</em>
            <br />
            made just for you.
          </h2>
        </motion.div>

        <motion.p
          className="font-sans text-base text-[#7c4a1e] max-w-md mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Whether it's a gift, a little something for yourself, or a custom order for someone special —
          every bloom here was made with patience and love.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          <a
            href="#creations"
            className="flex items-center justify-center gap-2 bg-[#4a2c0a] text-[#fdf8f0] font-sans font-medium px-8 py-4 rounded-full hover:bg-[#f97316] transition-all duration-300 hover:scale-105 text-base"
          >
            <DaisyDoodle size={18} petalColor="#fdf8f0" centerColor="#f4c430" />
            Explore Creations
          </a>
          <a
            href={BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-[#4a2c0a] font-sans font-medium px-8 py-4 rounded-full border-2 border-[#4a2c0a]/20 hover:border-[#f97316] hover:bg-[#fde68a]/30 transition-all duration-300 text-base"
          >
            <MessageCircle size={18} />
            Order / Message Me
          </a>
        </motion.div>

        {/* Emotional sign-off */}
        <motion.p
          className="font-handwritten text-xl text-[#f97316] mt-12"
          style={{ fontFamily: "'Dancing Script', cursive" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Thank you for being part of the Bloom With Me world 🌻
        </motion.p>
      </div>
    </section>
  );
}
