import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { InstagramIcon } from '../icons/Icons';
import { BRAND, NAV_LINKS } from '../../lib/constants';
import { TinyFlower } from '../doodles/Doodles';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const shouldBeScrolled = window.scrollY > 40;

        setScrolled((previous) =>
          previous !== shouldBeScrolled ? shouldBeScrolled : previous
        );

        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav
        className={`
          fixed
          top-3
          left-1/2
          -translate-x-1/2
          z-50
          w-[calc(100%-1.5rem)]
          max-w-6xl
          rounded-full
          transition-[background-color,box-shadow,border-color,backdrop-filter]
          duration-300
          ${
            scrolled
              ? `
                bg-[#fdf8f0]/95
                backdrop-blur-md
                border
                border-[#f4c430]/30
                shadow-[0_8px_25px_rgba(74,44,10,0.08)]
              `
              : `
                bg-[#fdf8f0]/85
                backdrop-blur-sm
                border
                border-white/80
                shadow-[0_4px_18px_rgba(74,44,10,0.04)]
              `
          }
        `}
      >
        <div
          className="
            px-5
            sm:px-6
            lg:px-8
            h-14
            lg:h-[4.5rem]
            flex
            items-center
            justify-between
          "
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <a
            href="#"
            className="
              flex
              items-center
              gap-2
              group
              shrink-0
            "
            aria-label="Bloom With Me home"
          >
            <motion.div
              whileHover={{
                rotate: [0, -12, 12, -5, 0],
                scale: 1.1,
              }}
              transition={{
                duration: 0.35,
              }}
            >
              <TinyFlower
                size={27}
                petalColor="#f4c430"
                centerColor="#4a2c0a"
              />
            </motion.div>

            <span
              className="
                font-display
                text-lg
                lg:text-xl
                text-[#4a2c0a]
                leading-none
                font-medium
                tracking-tight
              "
            >
              Bloom
              <span className="italic text-[#f97316]">
                {' '}With
              </span>{' '}
              Me
            </span>
          </a>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div
            className="
              hidden
              md:flex
              items-center
              gap-6
              lg:gap-9
            "
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  relative
                  group
                  py-2
                  font-sans
                  text-[13px]
                  lg:text-sm
                  font-medium
                  text-[#7c4a1e]
                  hover:text-[#f97316]
                  transition-colors
                  duration-200
                "
              >
                {link.label}

                {/* Yellow flower */}
                <span
                  className="
                    absolute
                    -top-1
                    left-1/2
                    -translate-x-1/2
                    text-[10px]
                    text-[#f4c430]
                    opacity-0
                    scale-0
                    transition-all
                    duration-200
                    group-hover:opacity-100
                    group-hover:scale-100
                    group-hover:-translate-y-1
                  "
                >
                  ✿
                </span>

                {/* Yellow handmade underline */}
                <span
                  className="
                    absolute
                    left-1/2
                    -bottom-0.5
                    h-[3px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-[#f4c430]
                    transition-all
                    duration-250
                    group-hover:w-full
                  "
                />

                {/* Pink decorative dot */}
                <span
                  className="
                    absolute
                    -right-2
                    top-1
                    w-1
                    h-1
                    rounded-full
                    bg-[#f9a8c9]
                    opacity-0
                    scale-0
                    transition-all
                    duration-200
                    group-hover:opacity-100
                    group-hover:scale-100
                  "
                />
              </a>
            ))}
          </div>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="flex items-center gap-2 shrink-0">

            {/* Desktop Instagram */}

            <motion.a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.04,
                rotate: -1,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                hidden
                md:flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-full
                bg-[#fffaf0]
                border-2
                border-[#f4c430]
                text-[#4a2c0a]
                font-sans
                text-sm
                font-semibold
                shadow-[2px_3px_0px_rgba(74,44,10,0.10)]
                transition-colors
                duration-200
                hover:bg-[#fff3c4]
                hover:border-[#f97316]
                hover:text-[#f97316]
              "
            >
              <span className="text-[#f9a8c9] text-base">
                ✿
              </span>

              <InstagramIcon size={15} />

              <span>
                Come say hi
              </span>

              <span className="text-[#f97316] text-xs">
                ✨
              </span>
            </motion.a>


            {/* Mobile menu button */}

            <button
              className="
                md:hidden
                flex
                items-center
                justify-center
                w-10
                h-10
                rounded-full
                bg-[#f4c430]/20
                text-[#4a2c0a]
                hover:bg-[#f4c430]/40
                transition-colors
                duration-200
              "
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>

          </div>
        </div>
      </nav>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}

            <motion.div
              className="
                fixed
                inset-0
                bg-[#4a2c0a]/25
                z-40
                backdrop-blur-sm
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />


            {/* Drawer */}

            <motion.div
              className="
                fixed
                top-3
                right-3
                bottom-3
                w-[min(340px,calc(100%-24px))]
                bg-[#fdf8f0]
                z-50
                rounded-[28px]
                shadow-2xl
                border
                border-[#f4c430]/25
                flex
                flex-col
                overflow-hidden
              "
              initial={{
                x: '110%',
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: '110%',
              }}
              transition={{
                type: 'spring',
                damping: 28,
                stiffness: 320,
              }}
            >

              {/* Mobile header */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  p-6
                  border-b
                  border-[#f4c430]/20
                "
              >
                <div className="flex items-center gap-2">

                  <TinyFlower
                    size={24}
                    petalColor="#f4c430"
                    centerColor="#4a2c0a"
                  />

                  <span
                    className="
                      font-display
                      text-xl
                      text-[#4a2c0a]
                    "
                  >
                    Bloom
                    <span className="italic text-[#f97316]">
                      {' '}With
                    </span>{' '}
                    Me
                  </span>

                </div>


                <button
                  onClick={() => setMobileOpen(false)}
                  className="
                    w-9
                    h-9
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-[#f4c430]/15
                    text-[#4a2c0a]
                    hover:bg-[#f4c430]/30
                    transition-colors
                  "
                  aria-label="Close menu"
                >
                  <X size={19} />
                </button>

              </div>


              {/* Mobile links */}

              <nav className="flex flex-col gap-1 p-6">

                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="
                      flex
                      items-center
                      font-display
                      text-lg
                      text-[#4a2c0a]
                      py-4
                      px-4
                      rounded-2xl
                      hover:bg-[#f4c430]/15
                      hover:text-[#f97316]
                      transition-all
                      duration-200
                    "
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: i * 0.05,
                    }}
                  >
                    <span className="mr-3 text-[#f4c430]">
                      ✦
                    </span>

                    {link.label}

                  </motion.a>
                ))}

              </nav>


              {/* Mobile Instagram */}

              <div className="mt-auto p-6">

                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-[#f4c430]
                    hover:bg-[#f97316]
                    text-[#4a2c0a]
                    font-sans
                    font-semibold
                    py-3.5
                    rounded-full
                    transition-colors
                    duration-200
                  "
                >
                  <InstagramIcon size={16} />

                  Follow @bloomwithme22

                </a>

              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}