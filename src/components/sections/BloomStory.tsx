import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TinyFlower, StarDoodle, ThreadLine, DotPattern } from '../doodles/Doodles';

const steps = [
  {
    icon: '🧶',
    label: 'Yarn',
    description: 'Soft, warm yarn chosen with care — the raw soul of every creation.',
    color: '#f4c430',
  },
  {
    icon: '🪡',
    label: 'Thread',
    description: 'Each thread is measured, cut, and laid by hand — no shortcuts.',
    color: '#f97316',
  },
  {
    icon: '✂️',
    label: 'Stitch',
    description: 'One loop at a time, the flower begins to take shape.',
    color: '#7a9e7e',
  },
  {
    icon: '🌻',
    label: 'Flower',
    description: 'The petals open. A new handmade bloom comes to life.',
    color: '#f4c430',
  },
  {
    icon: '🎁',
    label: 'Creation',
    description: 'Wrapped, loved, and sent out into the world — to be yours.',
    color: '#f9a8c9',
  },
];

export function BloomStory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="story"
      data-section="bloom-story"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden bg-[#fdf8f0]"
    >
      {/* Soft background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 50%, #fde68a18 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="inline-block font-handwritten text-lg text-[#f97316] mb-3"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            the handmade process
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#4a2c0a] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Made slowly.{' '}
            <em className="italic text-[#f97316]">One stitch</em>
            <br />
            at a time.
          </h2>
          <div className="flex justify-center mt-6">
            <DotPattern color="#f4c430" />
          </div>
          <p className="font-sans text-base text-[#7c4a1e] max-w-lg mx-auto mt-6 leading-relaxed">
            While the world moves fast, every Bloom With Me creation is made slowly — with patience,
            intention, and a whole lot of love. No machines. No mass production.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting thread line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 pointer-events-none px-24">
            <svg
              viewBox="0 0 900 40"
              fill="none"
              className="w-full"
              aria-hidden="true"
            >
              <motion.path
                d="M 0,20 C 100,5 200,35 300,15 S 450,35 600,18 S 750,30 900,20"
                stroke="#f4c430"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="1000"
                strokeDashoffset={isInView ? 0 : 1000}
                fill="none"
                style={{ transition: 'stroke-dashoffset 2s ease-in-out 0.5s' }}
              />
            </svg>
          </div>

          {/* Step cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                className="flex flex-col items-center text-center gap-4 relative"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Icon circle */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-sm border-2 border-white relative z-10 bg-white"
                  style={{ boxShadow: `0 4px 20px ${step.color}40` }}
                >
                  {step.icon}
                </div>

                {/* Connector arrow (mobile) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute right-0 top-8 translate-x-1/2 z-20">
                    <span className="text-[#f4c430] text-lg">›</span>
                  </div>
                )}

                <div>
                  <h3
                    className="font-display text-lg font-medium text-[#4a2c0a] mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {step.label}
                  </h3>
                  <p className="font-sans text-sm text-[#7c4a1e] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Small decorative element */}
                <div className="absolute -top-2 -right-2">
                  {i % 2 === 0 ? (
                    <StarDoodle size={12} color={step.color} />
                  ) : (
                    <TinyFlower size={14} petalColor={step.color} centerColor="#4a2c0a" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom emotional quote */}
        <motion.div
          className="text-center mt-20 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <ThreadLine width={80} color="#f9a8c9" className="inline-block mb-4 opacity-60" />
          <p
            className="font-handwritten text-2xl md:text-3xl text-[#f97316]"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            "Every bloom is a little piece of me."
          </p>
          <ThreadLine width={80} color="#f9a8c9" className="inline-block mt-4 opacity-60" />
        </motion.div>
      </div>
    </section>
  );
}
