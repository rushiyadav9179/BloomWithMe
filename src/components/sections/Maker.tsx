import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TinyFlower, StarDoodle, HeartDoodle, DaisyDoodle, ThreadLine, DotPattern } from '../doodles/Doodles';

// Placeholder creator silhouette SVG
function CreatorSilhouette() {
  return (
    <svg viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="200" height="250" rx="20" fill="#fde68a" fillOpacity="0.3" />
      {/* Body silhouette */}
      <circle cx="100" cy="70" r="38" fill="#7c4a1e" fillOpacity="0.15" />
      <path d="M 40,250 C 40,160 60,140 100,130 C 140,140 160,160 160,250" fill="#7c4a1e" fillOpacity="0.1" />
      {/* Yarn/flowers in hands */}
      <circle cx="55" cy="170" r="20" fill="#f4c430" fillOpacity="0.5" />
      <circle cx="145" cy="175" r="16" fill="#f9a8c9" fillOpacity="0.5" />
      {/* Decorative elements */}
      <circle cx="70" cy="45" r="6" fill="#f4c430" fillOpacity="0.4" />
      <circle cx="130" cy="50" r="4" fill="#f9a8c9" fillOpacity="0.4" />
      {/* Text inside */}
      <text x="100" y="200" textAnchor="middle" fill="#7c4a1e" fillOpacity="0.4" fontSize="10" fontFamily="Dancing Script, cursive">
        photo coming soon
      </text>
      <text x="100" y="215" textAnchor="middle" fill="#7c4a1e" fillOpacity="0.4" fontSize="10" fontFamily="Dancing Script, cursive">
        🌻 @bloomwithme22
      </text>
    </svg>
  );
}

const annotations = [
  { text: 'obsessed with sunflowers 🌻', x: '-20%', y: '10%', rotate: -8, color: '#f97316' },
  { text: 'crocheting since 2022 ✨', x: '90%', y: '20%', rotate: 6, color: '#7a9e7e' },
  { text: 'based in India 🇮🇳', x: '-15%', y: '70%', rotate: 4, color: '#f9a8c9' },
  { text: 'every piece = love', x: '85%', y: '75%', rotate: -5, color: '#f4c430' },
];

export function Maker() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="maker"
      data-section="maker"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden bg-[#fdf8f0]"
    >
      {/* Soft blob */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at right, #fce4ef18 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Image + annotations */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-72 h-80 md:w-80 md:h-96">
              {/* Frame */}
              <div className="absolute inset-0 rounded-[2rem] border-2 border-[#f4c430]/30 bg-[#fdf8f0]" />
              <div className="absolute inset-3 rounded-[1.5rem] overflow-hidden bg-[#fef9ee] border border-[#f4c430]/20">
                <CreatorSilhouette />
              </div>

              {/* Floating handwritten annotations */}
              {annotations.map((ann, i) => (
                <motion.div
                  key={i}
                  className="absolute whitespace-nowrap"
                  style={{ left: ann.x, top: ann.y }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.7, ease: 'easeInOut' }}
                >
                  <span
                    className="text-xs font-handwritten px-2.5 py-1 rounded-full bg-white/80 border shadow-sm"
                    style={{
                      fontFamily: "'Dancing Script', cursive",
                      color: ann.color,
                      borderColor: `${ann.color}40`,
                      transform: `rotate(${ann.rotate}deg)`,
                      display: 'inline-block',
                    }}
                  >
                    {ann.text}
                  </span>
                </motion.div>
              ))}

              {/* Corner decorations */}
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                <DaisyDoodle size={32} petalColor="#fff" centerColor="#f4c430" />
              </motion.div>
              <motion.div
                className="absolute -bottom-3 -left-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <HeartDoodle size={24} color="#f9a8c9" />
              </motion.div>
              <div className="absolute -top-2 left-6">
                <StarDoodle size={16} color="#f4c430" />
              </div>
            </div>
          </motion.div>

          {/* Right — Story text */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="font-handwritten text-lg text-[#7a9e7e]"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              the person behind every bloom 🌻
            </span>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-[#4a2c0a] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hi, I'm the person behind{' '}
              <em className="italic text-[#f97316]">every little bloom.</em>
            </h2>

            <DotPattern color="#f4c430" />

            <div className="flex flex-col gap-4 font-sans text-base text-[#7c4a1e] leading-relaxed">
              <p>
                I started crocheting during a slow, quiet evening — and I haven't stopped since.
                There's something magical about turning a simple ball of yarn into a flower that
                someone will keep forever.
              </p>
              <p>
                Every sunflower, every tiny keychain, every Raksha Bandhan rakhi — each one is made
                by my hands, with my full attention. I don't rush. I don't mass produce.
              </p>
              <p>
                Bloom With Me started as a way to share the things I love making with people who
                love receiving handmade things. And it's grown into a little world I'm so proud of.
              </p>
            </div>

            {/* Handwritten personal note */}
            <div className="bg-[#fde68a]/30 border border-[#f4c430]/30 rounded-2xl p-5 relative">
              <div className="absolute -top-3 left-5">
                <TinyFlower size={24} petalColor="#f4c430" centerColor="#4a2c0a" />
              </div>
              <p
                className="font-handwritten text-xl text-[#f97316] leading-relaxed"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                "Making something for you isn't just a transaction — it's me putting a little piece
                of my heart into your hands."
              </p>
              <div className="flex items-center gap-2 mt-3">
                <ThreadLine width={40} color="#f97316" />
                <span
                  className="font-handwritten text-sm text-[#7c4a1e]"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  — the maker at Bloom With Me
                </span>
              </div>
            </div>

            {/* Instagram link */}
            <a
              href="https://instagram.com/bloomwithme22"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-[#f97316] hover:text-[#4a2c0a] transition-colors font-medium"
            >
              <StarDoodle size={14} color="#f97316" />
              Follow the journey @bloomwithme22
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
