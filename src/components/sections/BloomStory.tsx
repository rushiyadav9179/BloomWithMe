import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  TinyFlower,
  StarDoodle,
  ThreadLine,
  DotPattern,
} from '../doodles/Doodles';

const steps = [
  {
    icon: '🧶',
    label: 'Yarn',
    description:
      'Soft, warm yarn chosen with care — the raw soul of every creation.',
    color: '#f4c430',
  },
  {
    icon: '🪡',
    label: 'Thread',
    description:
      'Each thread is measured, cut, and laid by hand — no shortcuts.',
    color: '#f97316',
  },
  {
    icon: '✂️',
    label: 'Stitch',
    description:
      'One loop at a time, the flower begins to take shape.',
    color: '#7a9e7e',
  },
  {
    icon: '🌻',
    label: 'Flower',
    description:
      'The petals open. A new handmade bloom comes to life.',
    color: '#f4c430',
  },
  {
    icon: '🎁',
    label: 'Creation',
    description:
      'Wrapped, loved, and sent out into the world — to be yours.',
    color: '#f9a8c9',
  },
];

export function BloomStory() {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  });

  return (
    <section
      id="story"
      data-section="bloom-story"
      ref={ref}
      className="
        relative
        py-24 lg:py-32
        overflow-hidden
        bg-[#fdf8f0]
      "
    >

      {/* =====================================================
          SOFT BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          background:
            'radial-gradient(ellipse at 65% 45%, #fde68a30 0%, transparent 65%)',
        }}
      />


      {/* =====================================================
          BACKGROUND TREE
          The tree sits behind everything.
      ===================================================== */}

      <motion.div
        className="
          absolute
          pointer-events-none
          select-none
          z-0

          -right-10
          top-26

          w-[700px]
          h-[840px]

          lg:w-[820px]
          lg:h-[920px]

          bg-[url('/images/bloom-tree.png')]
          bg-contain
          bg-no-repeat
          bg-right-top

          opacity-[0.92]
        "
        initial={{
          opacity: 0,
          x: 60,
          scale: 0.97,
        }}
        animate={
          isInView
            ? {
                opacity: 0.92,
                x: 0,
                scale: 1,
              }
            : {}
        }
        transition={{
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        aria-hidden="true"
      />


      {/* =====================================================
          SOFT WHITE VEIL
          Keeps text readable over the tree.
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          z-[1]
        "
        style={{
          background:
            'linear-gradient(90deg, rgba(253,248,240,0.98) 0%, rgba(253,248,240,0.92) 35%, rgba(253,248,240,0.45) 68%, rgba(253,248,240,0.08) 100%)',
        }}
      />


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">


        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <motion.div
          className="
            text-center
            mb-16
            lg:mb-24
          "
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <span
            className="
              inline-block
              font-handwritten
              text-lg
              text-[#f97316]
              mb-3
            "
            style={{
              fontFamily: "'Dancing Script', cursive",
            }}
          >
            the handmade process 🌻
          </span>


          <h2
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              text-[#4a2c0a]
              leading-tight
            "
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Made slowly.{' '}

            <em className="italic text-[#f97316]">
              One stitch
            </em>

            <br />

            at a time.
          </h2>


          <div className="flex justify-center mt-6">
            <DotPattern color="#f4c430" />
          </div>


          <p
            className="
              font-sans
              text-base
              text-[#7c4a1e]
              max-w-lg
              mx-auto
              mt-6
              leading-relaxed
            "
          >
            While the world moves fast, every Bloom With Me creation
            is made slowly — with patience, intention, and a whole lot
            of love. No machines. No mass production.
          </p>

        </motion.div>



        {/* =====================================================
            PROCESS AREA
        ===================================================== */}

        <div className="relative">


          {/* ===================================================
              DECORATIVE CENTER THREAD
          =================================================== */}

          <div
            className="
              hidden
              lg:block
              absolute
              top-[42px]
              left-[7%]
              right-[7%]
              pointer-events-none
              z-[1]
            "
          >
            <svg
              viewBox="0 0 900 50"
              fill="none"
              className="w-full"
              aria-hidden="true"
            >

              <motion.path
                d="
                  M 0,25
                  C 90,5 150,45 230,22
                  S 360,8 450,25
                  S 600,42 690,20
                  S 810,10 900,25
                "
                stroke="#f4c430"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="1000"
                strokeDashoffset={isInView ? 0 : 1000}
                fill="none"
                style={{
                  transition:
                    'stroke-dashoffset 2.2s ease-in-out 0.5s',
                }}
              />

            </svg>
          </div>



          {/* ===================================================
              PROCESS CARDS
          =================================================== */}

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-5
              gap-6
              lg:gap-4
            "
          >

            {steps.map((step, i) => (

              <motion.div
                key={step.label}
                className="
                  relative
                  flex
                  flex-col
                  items-center
                  text-center
                  group
                "
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >


                {/* =================================================
                    CARD
                ================================================= */}

                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    relative
                    w-full
                    min-h-[250px]
                    px-5
                    py-7

                    rounded-[28px]

                    bg-[#fffdf7]/85
                    backdrop-blur-sm

                    border
                    border-white

                    shadow-[0_12px_35px_rgba(74,44,10,0.08)]

                    transition-all
                    duration-300

                    group-hover:shadow-[0_18px_45px_rgba(74,44,10,0.13)]
                  "
                >


                  {/* Decorative flower */}

                  <div
                    className="
                      absolute
                      -top-3
                      -right-2
                    "
                  >
                    {i % 2 === 0 ? (
                      <StarDoodle
                        size={14}
                        color={step.color}
                      />
                    ) : (
                      <TinyFlower
                        size={17}
                        petalColor={step.color}
                        centerColor="#4a2c0a"
                      />
                    )}
                  </div>


                  {/* =================================================
                      ICON
                  ================================================= */}

                  <motion.div
                    whileHover={{
                      rotate: [0, -5, 5, 0],
                      scale: 1.08,
                    }}
                    className="
                      relative
                      z-10
                      mx-auto

                      w-20
                      h-20

                      rounded-full

                      flex
                      items-center
                      justify-center

                      text-3xl

                      bg-white

                      border-2
                      border-white

                      shadow-[0_8px_25px_rgba(74,44,10,0.08)]
                    "
                    style={{
                      boxShadow:
                        `0 8px 28px ${step.color}35`,
                    }}
                  >
                    {step.icon}
                  </motion.div>


                  {/* =================================================
                      STEP NUMBER
                  ================================================= */}

                  <span
                    className="
                      block
                      mt-5
                      font-handwritten
                      text-sm
                    "
                    style={{
                      color: step.color,
                      fontFamily:
                        "'Dancing Script', cursive",
                    }}
                  >
                    0{i + 1}
                  </span>


                  {/* =================================================
                      TITLE
                  ================================================= */}

                  <h3
                    className="
                      font-display
                      text-xl
                      font-medium
                      text-[#4a2c0a]
                      mt-1
                      mb-2
                    "
                    style={{
                      fontFamily:
                        "'Playfair Display', serif",
                    }}
                  >
                    {step.label}
                  </h3>


                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}

                  <p
                    className="
                      font-sans
                      text-sm
                      text-[#7c4a1e]
                      leading-relaxed
                    "
                  >
                    {step.description}
                  </p>


                  {/* =================================================
                      BOTTOM DOT
                  ================================================= */}

                  <div
                    className="
                      absolute
                      bottom-4
                      left-1/2
                      -translate-x-1/2

                      w-1.5
                      h-1.5

                      rounded-full
                    "
                    style={{
                      backgroundColor: step.color,
                    }}
                  />

                </motion.div>


                {/* =================================================
                    MOBILE CONNECTOR
                ================================================= */}

                {i < steps.length - 1 && (
                  <div
                    className="
                      lg:hidden
                      flex
                      justify-center
                      py-2
                    "
                  >
                    <span
                      className="
                        text-[#f4c430]
                        text-xl
                      "
                    >
                      ↓
                    </span>
                  </div>
                )}

              </motion.div>

            ))}

          </div>

        </div>

        {/* =====================================================
            CUSTOMER LOVE
        ===================================================== */}

        <motion.div
          className="relative mt-20 lg:mt-24"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.8,
            delay: 1,
          }}
        >
          {/* Small heading */}

          <div className="text-center mb-8">

            <span
              className="
                font-handwritten
                text-lg
                text-[#f97316]
              "
              style={{
                fontFamily: "'Dancing Script', cursive",
              }}
            >
              little notes from happy hearts ✨
            </span>

            <h3
              className="
                font-display
                text-2xl
                md:text-3xl
                text-[#4a2c0a]
                mt-2
              "
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Loved by the people
              <em className="italic text-[#f97316]">
                {' '}who bloom with us.
              </em>
            </h3>

          </div>


          {/* Review cards */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-10
              max-w-10xl
              mx-auto
            "
          >

            {/* Review 1 */}

            <motion.div
              whileHover={{
                y: -6,
                rotate: -1,
              }}
              className="
                relative
                rounded-[22px]
                backdrop-blur-sm
                border
                px-7
                py-6
              bg-[#fff1f6]/90
              border-[#f9a8c9]/45
                shadow-[0_10px_30px_rgba(249,168,201,0.18)]
              "
            >

              <span
                className="
                  absolute
                  -top-3
                  left-5
                  text-lg
                "
              >
                🌻
              </span>

              <div className="text-[#f4c430] text-sm mb-3">
                ★★★★★
              </div>

              <p
                className="
                  font-handwritten
                  text-[18px]
                  leading-relaxed
                  text-[#7c4a1e]
                "
                style={{
                  fontFamily: "'Dancing Script', cursive",
                }}
              >
                "The bouquet was even prettier
                than I imagined. You can really
                feel the love in every flower."
              </p>

              <div
                className="
                  mt-4
                  text-xs
                  font-sans
                  text-[#a16a32]
                "
              >
                — Happy customer
              </div>

            </motion.div>


            {/* Review 2 */}

            <motion.div
              whileHover={{
                y: -6,
                rotate: 1,
              }}
              className="
                relative
                rounded-[22px]
                backdrop-blur-sm
                border
                px-6
                py-5
                bg-[#fff1f6]/90
                border-[#f9a8c9]/45
                shadow-[0_10px_30px_rgba(249,168,201,0.18)]
              "
            >

              <span
                className="
                  absolute
                  -top-3
                  right-5
                  text-lg
                "
              >
                💛
              </span>

              <div className="text-[#f4c430] text-sm mb-3">
                ★★★★★
              </div>

              <p
                className="
                  font-handwritten
                  text-[18px]
                  leading-relaxed
                  text-[#7c4a1e]
                "
                style={{
                  fontFamily: "'Dancing Script', cursive",
                }}
              >
                "My sister absolutely loved
                the rakhi! It was so cute and
                felt really personal."
              </p>

              <div
                className="
                  mt-4
                  text-xs
                  font-sans
                  text-[#a16a32]
                "
              >
                — Happy customer
              </div>

            </motion.div>


            {/* Review 3 */}

            <motion.div
              whileHover={{
                y: -6,
                rotate: -1,
              }}
              className="
                relative
                rounded-[22px]
                backdrop-blur-sm
                border
                px-6
                py-5
                bg-[#ffeaf2]/90
                border-[#f9a8c9]/50
                shadow-[0_10px_30px_rgba(249,168,201,0.20)]
              "
            >

              <span
                className="
                  absolute
                  -top-3
                  left-5
                  text-lg
                "
              >
                ✨
              </span>

              <div className="text-[#f4c430] text-sm mb-3">
                ★★★★★
              </div>

              <p
                className="
                  font-handwritten
                  text-[18px]
                  leading-relaxed
                  text-[#7c4a1e]
                "
                style={{
                  fontFamily: "'Dancing Script', cursive",
                }}
              >
                "Such a beautiful handmade
                gift. The little details made
                it feel extra special."
              </p>

              <div
                className="
                  mt-4
                  text-xs
                  font-sans
                  text-[#a16a32]
                "
              >
                — Happy customer
              </div>

            </motion.div>

          </div>

        </motion.div>

        {/* =====================================================
            EMOTIONAL QUOTE
        ===================================================== */}

        <motion.div
          className="
            text-center
            mt-20
            relative
          "
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.8,
            delay: 1,
          }}
        >

          <ThreadLine
            width={80}
            color="#f9a8c9"
            className="
              inline-block
              mb-4
              opacity-60
            "
          />

          <p
            className="
              font-handwritten
              text-2xl
              md:text-3xl
              text-[#f97316]
            "
            style={{
              fontFamily:
                "'Dancing Script', cursive",
            }}
          >
            "Every bloom is a little piece of me."
          </p>

          <ThreadLine
            width={80}
            color="#f9a8c9"
            className="
              inline-block
              mt-4
              opacity-60
            "
          />

        </motion.div>

      </div>

    </section>
  );
}