import { motion } from 'framer-motion';
import { StarDoodle, HeartDoodle, TinyFlower, DaisyDoodle, ThreadLine, HandDrawnArrow } from '../doodles/Doodles';

// Floating doodle elements
const floatingElements = [
  { component: 'star', x: '8%', y: '18%', size: 18, color: '#f4c430', delay: 0, duration: 5 },
  { component: 'heart', x: '88%', y: '22%', size: 20, color: '#f9a8c9', delay: 0.5, duration: 6 },
  { component: 'flower', x: '5%', y: '55%', size: 32, delay: 0.8, duration: 7, petalColor: '#f9a8c9', centerColor: '#7c4a1e' },
  { component: 'star', x: '92%', y: '60%', size: 14, color: '#f97316', delay: 1.2, duration: 4.5 },
  { component: 'daisy', x: '15%', y: '78%', size: 26, delay: 0.3, duration: 6.5, petalColor: '#fff', centerColor: '#f4c430' },
  { component: 'heart', x: '80%', y: '75%', size: 16, color: '#f4c430', delay: 0.9, duration: 5.5 },
  { component: 'star', x: '75%', y: '10%', size: 22, color: '#f9a8c9', delay: 1.5, duration: 7 },
  { component: 'flower', x: '92%', y: '38%', size: 22, delay: 0.6, duration: 5, petalColor: '#f4c430', centerColor: '#4a2c0a' },
];

function FloatingEl({ el }: { el: typeof floatingElements[0] }) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ left: el.x, top: el.y }}
      animate={{
        y: [0, -14, -6, -14, 0],
        rotate: [0, 4, -2, 4, 0],
      }}
      transition={{
        duration: el.duration,
        repeat: Infinity,
        delay: el.delay,
        ease: 'easeInOut',
      }}
    >
      {el.component === 'star' && <StarDoodle size={el.size} color={el.color} />}
      {el.component === 'heart' && <HeartDoodle size={el.size} color={el.color} />}
      {el.component === 'flower' && (
        <TinyFlower size={el.size} petalColor={(el as any).petalColor} centerColor={(el as any).centerColor} />
      )}
      {el.component === 'daisy' && (
        <DaisyDoodle size={el.size} petalColor={(el as any).petalColor} centerColor={(el as any).centerColor} />
      )}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      data-section="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fdf8f0]"
    >
      {/* Soft organic blob backgrounds */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #fde68a 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f9a8c9 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-[30%] right-[10%] w-[25vw] h-[25vw] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a8c5ab 0%, transparent 70%)' }}
      />

      {/* Floating decorative elements */}
      {floatingElements.map((el, i) => (
        <FloatingEl key={i} el={el} />
      ))}

      {/* Main content grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center min-h-[80vh]">

          {/* Left — Text */}
          <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">

            {/* Handwritten label */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ThreadLine width={60} color="#7a9e7e" />
              <span
                className="font-handwritten text-lg text-[#7a9e7e]"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                handmade with love ✨
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] text-[#4a2c0a]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              Bloom{' '}
              <em className="text-[#f97316] not-italic italic">the way</em>
              <br />
              you're meant to.
            </motion.h1>

            {/* Sub-text */}
            <motion.p
              className="font-sans text-base lg:text-lg text-[#7c4a1e] max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              Every creation is crafted by hand — one stitch, one petal, one moment at a time.{' '}
              <span
                className="font-handwritten text-[#f97316]"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                No two pieces are ever the same.
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a
                href="#creations"
                className="group relative bg-[#4a2c0a] text-[#fdf8f0] font-sans font-medium px-8 py-4 rounded-full text-base hover:bg-[#f97316] transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Creations
                  <TinyFlower size={16} petalColor="#f4c430" centerColor="#4a2c0a" className="group-hover:animate-[wiggle_0.4s_ease]" />
                </span>
              </a>
              <a
                href="#maker"
                className="font-sans font-medium px-8 py-4 rounded-full text-base text-[#4a2c0a] border-2 border-[#4a2c0a]/30 hover:border-[#f4c430] hover:bg-[#f4c430]/10 transition-all duration-300"
              >
                Meet the Maker
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="flex gap-8 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {[
                { num: '100%', label: 'Handmade' },
                { num: '∞', label: 'Made with love' },
                { num: '🇮🇳', label: 'India-made' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span
                    className="text-2xl font-medium text-[#f97316]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.num}
                  </span>
                  <span className="font-sans text-xs text-[#7c4a1e] mt-0.5">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Product showcase / 3D mount area */}
          <motion.div
            className="relative flex items-center justify-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/*
              ╔═══════════════════════════════════╗
              ║   3D MOUNT POINT                  ║
              ║   data-3d-mount="hero-flower"     ║
              ║   Future: Three.js / R3F flower   ║
              ╚═══════════════════════════════════╝
            */}
            <div
              data-3d-mount="hero-flower"
              className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] lg:w-[580px] lg:h-[580px]"
            >
              {/* Decorative circle bg (visible behind 3D) */}
              <div className="absolute inset-0 rounded-full bg-[#fde68a]/20 border-2 border-[#f4c430]/25 pointer-events-none" />
              <div className="absolute inset-6 rounded-full bg-[#fdf8f0]/40 border border-[#f4c430]/15 pointer-events-none" />

              {/* Hero handmade bouquet */}
              <motion.img
                src={`${import.meta.env.BASE_URL}images/hero-bouquet.png.png`}
                alt="Handmade crochet sunflower bouquet"
                className="absolute inset-0 z-10 w-full h-full object-contain p-8"
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1.4, y: 9 }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />

              {/* Handwritten annotation — top left */}
              <motion.div
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-8 flex flex-col items-center z-20 pointer-events-none"
                animate={{ rotate: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span
                  className="text-sm text-[#7a9e7e] bg-white/80 px-3 py-1 rounded-full border border-[#7a9e7e]/30 shadow-sm"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  each petal, by hand 🌻
                </span>
              </motion.div>

              {/* Handwritten annotation — bottom right */}
              <motion.div
                className="absolute -bottom-4 -right-4 sm:-bottom-4 sm:-right-6 z-20 pointer-events-none"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span
                  className="text-sm text-[#f97316] bg-[#fde68a]/80 px-3 py-1 rounded-full border border-[#f97316]/20 shadow-sm"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  made with yarn & love ✨
                </span>
              </motion.div>

              {/* Floating tiny decorations around circle */}
              <motion.div
                className="absolute -top-3 right-8 z-20 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <StarDoodle size={20} color="#f4c430" />
              </motion.div>
              <motion.div
                className="absolute bottom-6 -left-4 z-20 pointer-events-none"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <HeartDoodle size={18} color="#f9a8c9" />
              </motion.div>
            </div>

            {/* Brand name annotation */}
            <motion.div
              className="absolute bottom-0 right-0 md:right-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <span
                className="font-handwritten text-base text-[#7c4a1e]/60"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                @bloomwithme22
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span
            className="font-handwritten text-sm text-[#7c4a1e]/60"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HandDrawnArrow size={32} color="#7c4a1e" direction="down" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
