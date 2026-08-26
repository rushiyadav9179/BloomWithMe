import { MessageCircle } from 'lucide-react';
import { InstagramIcon } from '../icons/Icons';
import { BRAND } from '../../lib/constants';
import { TinyFlower, DaisyDoodle, StarDoodle, HeartDoodle } from '../doodles/Doodles';

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-16 pb-8"
      style={{ background: '#f4c430' }}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#4a2c0a]/10" />

      {/* Background doodles */}
      <div className="absolute top-6 left-6 opacity-20">
        <DaisyDoodle size={60} petalColor="#fff" centerColor="#4a2c0a" />
      </div>
      <div className="absolute bottom-6 right-10 opacity-15">
        <TinyFlower size={80} petalColor="#f97316" centerColor="#4a2c0a" />
      </div>
      <div className="absolute top-10 right-1/4 opacity-10">
        <StarDoodle size={30} color="#4a2c0a" />
      </div>
      <div className="absolute bottom-10 left-1/3 opacity-10">
        <HeartDoodle size={25} color="#f97316" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <TinyFlower size={28} petalColor="#4a2c0a" centerColor="#fdf8f0" />
              <span
                className="text-2xl text-[#4a2c0a] font-medium"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Bloom<em className="italic"> With</em> Me
              </span>
            </div>
            <p
              className="font-sans text-sm text-[#4a2c0a]/70 leading-relaxed max-w-xs"
            >
              Handmade with patience, creativity, and love — from one pair of hands to yours.
            </p>
            <span
              className="font-handwritten text-base text-[#4a2c0a]/60"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              🇮🇳 Made in India, with love
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4
              className="font-display font-medium text-base text-[#4a2c0a] mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Explore
            </h4>
            {[
              { label: 'Creations', href: '#creations' },
              { label: 'About the Maker', href: '#maker' },
              { label: 'Custom Orders', href: '#custom' },
              { label: 'Our Story', href: '#story' },
              { label: 'Instagram Gallery', href: '#gallery' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-[#4a2c0a]/70 hover:text-[#4a2c0a] transition-colors flex items-center gap-1.5 group"
              >
                <span className="w-1 h-1 rounded-full bg-[#4a2c0a]/40 group-hover:bg-[#4a2c0a] transition-colors" />
                {link.label}
              </a>
            ))}
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <h4
              className="font-display font-medium text-base text-[#4a2c0a] mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Connect
            </h4>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden md:flex items-center gap-2
                relative
                px-5 py-2.5
                rounded-full
                bg-[#fffaf0]
                border-2 border-[#f4c430]
                text-[#4a2c0a]
                font-sans text-sm font-medium
                transition-all duration-300
                hover:bg-[#fff3c4]
                hover:border-[#f97316]
                hover:text-[#f97316]
                hover:-rotate-1
                hover:scale-105
                shadow-[2px_3px_0px_rgba(74,44,10,0.12)]
              "
            >
              {/* Cute flower decoration */}
              <span
                className="
                  absolute -top-2 -right-2
                  w-5 h-5
                  flex items-center justify-center
                  text-[11px]
                  bg-[#f9a8c9]
                  rounded-full
                  rotate-12
                  transition-transform duration-300
                  group-hover:rotate-45
                "
              >
                ✿
              </span>

              <InstagramIcon size={15} />

              <span>Come say hi</span>

              <span className="text-[#f97316] text-xs">
                ✨
              </span>
            </a>
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-sans text-sm text-[#4a2c0a]/80 hover:text-[#4a2c0a] transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp Order / Enquiry
            </a>
            <div className="mt-2">
              <p
                className="font-handwritten text-sm text-[#4a2c0a]/60"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                DM for custom orders, bulk gifts,
              </p>
              <p
                className="font-handwritten text-sm text-[#4a2c0a]/60"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                corporate gifting & more ✨
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#4a2c0a]/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-[#4a2c0a]/50">
            © {new Date().getFullYear()} Bloom With Me. All creations handmade with 💛
          </p>
          <div className="flex items-center gap-2">
            <TinyFlower size={14} petalColor="#4a2c0a" centerColor="#fdf8f0" />
            <StarDoodle size={12} color="#4a2c0a" />
            <HeartDoodle size={12} color="#f97316" />
            <StarDoodle size={12} color="#4a2c0a" />
            <TinyFlower size={14} petalColor="#4a2c0a" centerColor="#fdf8f0" />
          </div>
        </div>
      </div>
    </footer>
  );
}
