import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { InstagramIcon } from '../icons/Icons';
import { BRAND } from '../../lib/constants';
import { TinyFlower, StarDoodle, HeartDoodle, DaisyDoodle, ThreadLine, DotPattern } from '../doodles/Doodles';

const customTags = [
  'Custom colors 🎨',
  'Mixed bouquets 🌸',
  'Raksha Bandhan sets',
  'Birthday gifts 🎂',
  'Room decor 🌿',
  'Anniversary blooms 💛',
  'Diwali gifts 🪔',
  'Personalized keychains',
  'Graduation gifts 🎓',
  'Friendship gifts',
  'Baby shower blooms 🌷',
  'Any occasion ✨',
];

export function CustomCreations() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="custom"
      data-section="custom-creations"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fdf8f0 0%, #fef3c7 50%, #fce4ef 100%)' }}
    >
      {/* Decorative background flowers */}
      <motion.div
        className="absolute top-8 right-8 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <TinyFlower size={120} petalColor="#f4c430" centerColor="#7c4a1e" />
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-8 opacity-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      >
        <DaisyDoodle size={100} petalColor="#fff" centerColor="#f4c430" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <span
            className="inline-block font-handwritten text-lg text-[#7a9e7e] mb-3"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            let's create together 🌻
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#4a2c0a] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Have something{' '}
            <em className="italic text-[#f97316]">in mind?</em>
          </h2>
          <DotPattern className="mx-auto mt-5" color="#f4c430" />
          <p className="font-sans text-base text-[#7c4a1e] max-w-lg mx-auto mt-6 leading-relaxed">
            Tell me your idea and let's turn it into something handmade.
            Every custom creation is made just for you — no two are ever alike.
          </p>
        </motion.div>

        {/* Tags cloud */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-14"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {customTags.map((tag, i) => (
            <motion.span
              key={tag}
              className="font-sans text-sm text-[#4a2c0a] bg-white/80 border border-[#f4c430]/40 px-4 py-2 rounded-full shadow-sm cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
              whileHover={{ scale: 1.08, background: '#fde68a', borderColor: '#f97316' }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA block */}
        <motion.div
          className="bg-white/60 backdrop-blur-sm rounded-3xl border border-[#f4c430]/30 p-10 lg:p-14 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Corner decorations */}
          <div className="absolute top-4 left-4">
            <StarDoodle size={18} color="#f4c430" />
          </div>
          <div className="absolute top-4 right-4">
            <HeartDoodle size={18} color="#f9a8c9" />
          </div>
          <div className="absolute bottom-4 left-4">
            <TinyFlower size={20} petalColor="#f9a8c9" centerColor="#7c4a1e" />
          </div>
          <div className="absolute bottom-4 right-4">
            <DaisyDoodle size={20} petalColor="#fff" centerColor="#f4c430" />
          </div>

          <ThreadLine width={60} color="#7a9e7e" className="inline-block mb-4 opacity-60" />
          <p
            className="font-handwritten text-2xl text-[#f97316] mb-8"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Ready to bloom together? 🌸
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#4a2c0a] text-[#fdf8f0] font-sans font-medium px-8 py-4 rounded-full hover:bg-[#f97316] transition-all duration-300 hover:scale-105 text-base"
            >
              <MessageCircle size={18} />
              Create Something Custom
            </a>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-[#4a2c0a] font-sans font-medium px-8 py-4 rounded-full border-2 border-[#f4c430]/50 hover:border-[#f97316] hover:bg-[#fde68a]/20 transition-all duration-300 text-base"
            >
              <InstagramIcon size={18} />
              Message on Instagram
            </a>
          </div>

          <p
            className="font-handwritten text-sm text-[#7c4a1e] mt-6"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            I usually reply within 24 hours ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}
