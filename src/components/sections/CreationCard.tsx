import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import type { Product } from '../../lib/constants';
import { StarDoodle, HeartDoodle, TinyFlower } from '../doodles/Doodles';
import { ShoppingBag } from 'lucide-react';

interface CreationCardProps {
  product: Product;
  index: number;
}

export function CreationCard({ product, index }: CreationCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  // Rotate slightly based on index for editorial feel
  const rotations = [-2, 1.5, -1, 2.5, -1.5];
  const cardRotation = rotations[index % rotations.length] ?? 0;

  const sizeClasses = {
    small: 'row-span-1',
    medium: 'row-span-1',
    large: 'row-span-2',
  };

  return (
    <motion.div
      ref={ref}
      className={`relative group cursor-pointer ${sizeClasses[product.size]}`}
      initial={{ opacity: 0, y: 40, rotate: cardRotation - 2 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: cardRotation } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ rotate: 0, scale: 1.03, zIndex: 10 }}
    >
      {/* Hand-drawn frame border */}
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-md border border-[#f4c430]/20 hover:shadow-xl transition-shadow duration-300">

        {/* Paper texture overlay */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-30"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(244,196,48,0.05) 30px, rgba(244,196,48,0.05) 31px)',
          }}
        />

        {/* Image area */}
        <div
          className={`relative overflow-hidden bg-[#fdf8f0] ${
            product.size === 'large' ? 'h-72 md:h-80' : 'h-48 md:h-56'
          }`}
        >
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            loading="lazy"
          />

          {/* Category badge */}
          <div className="absolute top-3 left-3 z-20">
            <span
              className="text-xs font-sans font-medium bg-[#fde68a] text-[#4a2c0a] px-2 py-1 rounded-full border border-[#f4c430]/40"
            >
              {product.category}
            </span>
          </div>

          {/* Hover CTA overlay */}
          <motion.div
            className="absolute inset-0 bg-[#4a2c0a]/70 flex flex-col items-center justify-center gap-3 z-20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col items-center gap-2 px-4 text-center">
              <span
                className="font-handwritten text-xl text-[#fde68a]"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                {product.priceRange}
              </span>
              <a
                href="https://instagram.com/bloomwithme22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#f4c430] text-[#4a2c0a] font-sans font-medium text-sm px-5 py-2.5 rounded-full hover:bg-[#f97316] hover:text-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ShoppingBag size={14} />
                Order Now
              </a>
            </div>
          </motion.div>

          {/* Doodle that appears on hover */}
          <motion.div
            className="absolute top-2 right-2 z-30"
            initial={{ scale: 0, rotate: -20 }}
            whileHover={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <HeartDoodle size={18} color="#f9a8c9" />
          </motion.div>
        </div>

        {/* Card body */}
        <div className="p-4 relative">
          {/* Decorative corner star */}
          <div className="absolute top-3 right-3">
            <StarDoodle size={12} color="#f4c430" />
          </div>

          {/* Handwritten product label */}
          <span
            className="block text-xs text-[#7a9e7e] font-handwritten mb-1"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            handmade · {product.tags[0]}
          </span>

          <h3
            className="font-display text-lg font-medium text-[#4a2c0a] leading-tight mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {product.name}
          </h3>
          <p className="font-sans text-sm text-[#7c4a1e] leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Price + tiny flower */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#f4c430]/20">
            <span
              className="font-handwritten text-base text-[#f97316]"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              {product.priceRange}
            </span>
            <TinyFlower size={18} petalColor="#f4c430" centerColor="#4a2c0a" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
