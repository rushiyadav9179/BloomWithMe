import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { InstagramIcon } from '../icons/Icons';
import { BRAND } from '../../lib/constants';
import { TinyFlower, StarDoodle, DotPattern } from '../doodles/Doodles';

// All 5 images in a masonry layout
const galleryItems = [
  { image: `${import.meta.env.BASE_URL}images/bouquet-sunflower.png`, alt: 'Handmade sunflower bouquet', size: 'tall' },
  { image: `${import.meta.env.BASE_URL}images/rakhi-sunshine.png`, alt: 'Sunshine rakhi and sunflower', size: 'normal' },
  { image: `${import.meta.env.BASE_URL}images/keychain-evileye.png`, alt: 'Evil eye crochet keychain', size: 'normal' },
  { image: `${import.meta.env.BASE_URL}images/bouquet-mixed.png`, alt: 'Mixed bloom bouquet', size: 'tall' },
  { image: `${import.meta.env.BASE_URL}images/flowerpots.png`, alt: 'Colourful flower pots', size: 'normal' },
];

export function InstagramGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="gallery"
      data-section="instagram-gallery"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden bg-[#fdf8f0]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <span
            className="inline-block font-handwritten text-lg text-[#f97316] mb-3"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            from my little world to yours
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#4a2c0a] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Little things.{' '}
            <em className="italic text-[#f97316]">Big joy.</em>
          </h2>
          <DotPattern className="mx-auto mt-5" color="#f4c430" />
          <div className="flex items-center justify-center gap-2 mt-4">
            <InstagramIcon size={16} className="text-[#7c4a1e]" />
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-[#7c4a1e] hover:text-[#f97316] transition-colors font-medium"
            >
              {BRAND.instagramHandle}
            </a>
          </div>
        </motion.div>

        {/* Masonry gallery */}
        <motion.div
          className="columns-2 md:columns-3 gap-4 space-y-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              className="relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full object-cover block"
                style={{ aspectRatio: item.size === 'tall' ? '3/4' : '1/1' }}
                loading="lazy"
              />

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-[#4a2c0a]/60 flex items-end justify-between p-4"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <span
                  className="font-handwritten text-base text-[#fde68a]"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  {item.alt}
                </span>
                <div className="flex gap-1">
                  <TinyFlower size={16} petalColor="#f4c430" centerColor="#4a2c0a" />
                  <StarDoodle size={14} color="#f4c430" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#4a2c0a] text-[#fdf8f0] font-sans font-medium px-8 py-4 rounded-full hover:bg-[#f97316] transition-all duration-300 hover:scale-105 text-base"
          >
            <InstagramIcon size={18} />
            See more on Instagram
          </a>
          <p
            className="font-handwritten text-sm text-[#7c4a1e]/60 mt-3"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            new creations every week ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}
