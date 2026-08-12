"use client";

import { useEffect, useRef, useState } from "react";

const questions = [
  {
    title: "Who's actually buying, and what are they thinking when they land?",
    desc: "Most sites are designed for the founder. We design them for the buyer. We map their mental state at every step of the funnel.",
  },
  {
    title: "What's this page's job in the funnel?",
    desc: "A homepage from a Google search has different work to do than a landing page from a Meta ad. Most agencies treat every page like the homepage. We don't.",
  },
  {
    title: "What's the friction we can remove?",
    desc: "Every form field, every extra click, every confusing label costs you conversions. We don't add things to the website. We remove them, until what's left is the shortest path between intent and purchase.",
  },
  {
    title: "How fast does this need to be?",
    desc: "A 2-second site converts roughly 3× better than a 5-second site. Speed is a conversion lever, not a tech checkbox.",
  },
];

const stageLabels = [
  "BUYER FOCUS",
  "FUNNEL JOB",
  "FRICTION OFF",
  "SPEED GAIN",
];

export default function Framework1() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [step, setStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      if (window.innerWidth <= 968) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const sectionHeight = rect.height;

      const viewportHeight = window.innerHeight;

      const totalScroll = sectionHeight - viewportHeight;

      const scrolled = Math.max(0, -rect.top);

      const progress = Math.min(1, scrolled / totalScroll);

      const newStep = Math.min(
        3,
        Math.floor(progress * 4)
      );

      setStep(newStep);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);
 return (

    <>
       {/* ===================================================== */}
{/* DESKTOP VIEW */}
{/* ===================================================== */}

<div className="hidden lg:block">

  <section
    ref={sectionRef}
    id="thinking"
    className="
      relative
      z-[2]
      border-t border-white/10
      bg-[#08080a]
      h-[460vh]
    "
  >

    {/* STICKY */}
    <div
      className="
        sticky
        top-0
        h-screen
        overflow-hidden
        flex
        items-center
      "
    >

      {/* GRID */}
      <div
        className="
          absolute inset-0
          pointer-events-none
          z-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:160px_160px]
        "
      />

      {/* RADIAL */}
      <div
        className="
          absolute inset-0 z-0
          bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_30%,#08080a_95%)]
        "
      />

      {/* PROGRESS */}
      <div
        className="
          absolute
          right-[48px]
          top-1/2
          -translate-y-1/2
          flex flex-col
          gap-3
          z-20
        "
      >

        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            className={`
              flex items-center gap-3
              font-mono text-[10px]
              tracking-[1px]
              transition-colors

              ${
                i === step
                  ? "text-[#4D9EFF]"
                  : i < step
                  ? "text-[#a8a8b3]"
                  : "text-[#6c6c78]"
              }
            `}
          >

            <div
              className="
                relative
                w-[32px]
                h-[2px]
                overflow-hidden
                rounded-full
                bg-white/10
              "
            >

              <div
                className={`
                  absolute inset-y-0 left-0
                  transition-all duration-500

                  ${
                    i <= step
                      ? "w-full bg-[#4D9EFF]"
                      : "w-0"
                  }
                `}
              />

            </div>

            <span>
              {String(i + 1).padStart(2, "0")}
            </span>

          </button>
        ))}

      </div>

      {/* WRAP */}
      <div
        className="
          relative z-10
          w-full
          max-w-[1200px]
          mx-auto
          px-6
        "
      >

        {/* HEADER */}
        <div className="mb-[60px]">

          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[1.5px] text-[#6c6c78] mb-6">
            <span className="w-6 h-[1px] bg-white/20"></span>
            <span>/ 03</span>
            <span>How we think</span>
          </div>

          <h2
            className="
              text-[clamp(36px,4.5vw,60px)]
              font-semibold
              tracking-[-0.03em]
              leading-none
              max-w-[800px]
            "
          >
            Every website answers{" "}
            <span className="text-[#4D9EFF]">
              four questions.
            </span>
          </h2>

        </div>

        {/* INNER */}
        <div
          className="
            grid
            grid-cols-[1.1fr_1fr]
            gap-[80px]
            items-center
            min-h-[480px]
          "
        >

          {/* STAGE */}
          <div
            className="
              relative
              aspect-square
              max-w-[480px]
              w-full
              overflow-hidden
              rounded-[20px]
              border border-white/10
              bg-[radial-gradient(ellipse_at_top_left,rgba(77,158,255,0.08),transparent_50%),rgba(12,12,15,0.6)]
              backdrop-blur-md
            "
          >

            {/* SVG AREA */}
            <div className="absolute inset-0 flex items-center justify-center">

              {/* SVG 1 */}
              {step === 0 && (
               <div className="
      diagram-1

      absolute inset-0

      flex items-center justify-center
    "><svg viewBox="0 0 200 200" fill="none"><g className="founder-eye" transform="translate(50, 100)"><circle cx="0" cy="0" r="22" stroke="#4a4a55" strokeWidth="1" strokeDasharray="2 4"/><circle cx="0" cy="0" r="8" fill="#4a4a55"/><text x="0" y="48" textAnchor="middle" fill="#4a4a55" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="1">FOUNDER</text></g><g className="buyer-eye" transform="translate(150, 100)"><circle cx="0" cy="0" r="28" stroke="#4D9EFF" strokeWidth="1.5"/><circle cx="0" cy="0" r="22" stroke="#4D9EFF" strokeWidth="1" opacity="0.4"/><circle cx="0" cy="0" r="10" fill="#4D9EFF"/><text x="0" y="58" textAnchor="middle" fill="#4D9EFF" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="1">BUYER</text></g><line x1="78" y1="100" x2="118" y2="100" stroke="#4D9EFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/><path d="M115 96 L122 100 L115 104" stroke="#4D9EFF" strokeWidth="1.5" fill="none"/></svg></div>
  )}
              {/* SVG 2 */}
             
  {step === 1 && (
   <svg viewBox="0 0 200 200" fill="none"><rect x="20" y="40" width="160" height="22" rx="4" stroke="#34343f" strokeWidth="1" fill="none"/><text x="100" y="55" textAnchor="middle" fill="#a8a8b3" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="1">AD</text><rect x="35" y="78" width="130" height="22" rx="4" stroke="#4D9EFF" strokeWidth="1.5" fill="rgba(77, 158, 255, 0.08)"/><text x="100" y="93" textAnchor="middle" fill="#4D9EFF" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="1">LANDING</text><rect x="50" y="116" width="100" height="22" rx="4" stroke="#34343f" strokeWidth="1" fill="none"/><text x="100" y="131" textAnchor="middle" fill="#a8a8b3" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="1">PRODUCT</text><rect x="65" y="154" width="70" height="22" rx="4" stroke="#34343f" strokeWidth="1" fill="none"/><text x="100" y="169" textAnchor="middle" fill="#a8a8b3" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="1">CHECKOUT</text><line x1="100" y1="62" x2="100" y2="78" stroke="#34343f" strokeWidth="1"/><line x1="100" y1="100" x2="100" y2="116" stroke="#34343f" strokeWidth="1"/><line x1="100" y1="138" x2="100" y2="154" stroke="#34343f" strokeWidth="1"/><circle cx="100" cy="89" r="3" fill="#4D9EFF"><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/></circle></svg>
  )}
              {/* SVG 3 */}
             
  {step === 2 && (
    <svg viewBox="0 0 200 200" fill="none"><rect x="30" y="30" width="140" height="20" rx="3" stroke="#4D9EFF" strokeWidth="1.5" fill="rgba(77, 158, 255, 0.05)"/><text x="36" y="44" fill="#4D9EFF" fontFamily="JetBrains Mono" fontSize="9">email</text><g className="form-field formField-1"><rect x="30" y="58" width="140" height="20" rx="3" stroke="#34343f" strokeWidth="1" fill="none"/><text x="36" y="72" fill="#6c6c78" fontFamily="JetBrains Mono" fontSize="9">phone</text></g><g className="form-field formField-2"><rect x="30" y="86" width="140" height="20" rx="3" stroke="#34343f" strokeWidth="1" fill="none"/><text x="36" y="100" fill="#6c6c78" fontFamily="JetBrains Mono" fontSize="9">company</text></g><g className="formField form-field-3"><rect x="30" y="114" width="140" height="20" rx="3" stroke="#34343f" strokeWidth="1" fill="none"/><text x="36" y="128" fill="#6c6c78" fontFamily="JetBrains Mono" fontSize="9">job_title</text></g><g className="form-field formField-4"><rect x="30" y="142" width="140" height="20" rx="3" stroke="#34343f" strokeWidth="1" fill="none"/><text x="36" y="156" fill="#6c6c78" fontFamily="JetBrains Mono" fontSize="9">how_did_you_hear</text></g><rect x="30" y="172" width="60" height="20" rx="3" fill="#4D9EFF"/><text x="60" y="186" textAnchor="middle" fill="#08080a" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600">SUBMIT</text></svg>
  )}

              {/* SVG 4 */}
            {step === 3 && (
    <svg viewBox="0 0 200 200" fill="none"><path d="M 40 140 A 60 60 0 0 1 160 140" stroke="#26262f" strokeWidth="2" fill="none"/><path className="speed-arc-active" d="M 40 140 A 60 60 0 0 1 100 80" stroke="#4D9EFF" strokeWidth="3" fill="none" strokeLinecap="round"/><g stroke="#34343f" strokeWidth="1"><line x1="40" y1="140" x2="46" y2="135"/><line x1="56" y1="106" x2="62" y2="108"/><line x1="100" y1="80" x2="100" y2="88"/><line x1="144" y1="106" x2="138" y2="108"/><line x1="160" y1="140" x2="154" y2="135"/></g><text x="40" y="158" textAnchor="middle" fill="#4D9EFF" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600">2s</text><text x="100" y="68" textAnchor="middle" fill="#a8a8b3" fontFamily="JetBrains Mono" fontSize="9">3s</text><text x="160" y="158" textAnchor="middle" fill="#6c6c78" fontFamily="JetBrains Mono" fontSize="9">5s</text><g className="speed-needle" transform="translate(100, 140)"><line x1="0" y1="0" x2="0" y2="-50" stroke="#4D9EFF" strokeWidth="2" strokeLinecap="round"/><circle cx="0" cy="0" r="4" fill="#4D9EFF"/></g><text x="100" y="178" textAnchor="middle" fill="#e8e8ed" fontFamily="Inter Tight" fontSize="11" fontWeight="600">3× CONVERSION</text></svg>
  )}


            </div>

          </div>

          {/* QUESTIONS */}
          <div className="relative min-h-[380px]">

            {questions.map((q, i) => (
              <div
                key={i}
                className={`
                  absolute inset-0
                  transition-all duration-500

                  ${
                    i === step
                      ? "opacity-100 translate-y-0"
                      : i < step
                      ? "opacity-0 -translate-y-5"
                      : "opacity-0 translate-y-5"
                  }
                `}
              >

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-3
                    py-1
                    rounded-full
                    border border-[#4D9EFF33]
                    bg-[#4D9EFF0d]
                    font-mono
                    text-[11px]
                    tracking-[1px]
                    text-[#4D9EFF]
                    mb-6
                  "
                >

                  <span className="w-[6px] h-[6px] rounded-full bg-[#4D9EFF]" />

                  QUESTION / {String(i + 1).padStart(2, "0")}

                </div>

                <h3
                  className="
                    text-[clamp(28px,3vw,42px)]
                    font-semibold
                    tracking-[-0.025em]
                    leading-[1.1]
                    mb-6
                  "
                >
                  {q.title}
                </h3>

                <p
                  className="
                    text-[17px]
                    leading-[1.6]
                    text-[#a8a8b3]
                    max-w-[480px]
                  "
                >
                  {q.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>

  </section>

</div>

{/* ===================================================== */
/* MOBILE + TABLET VIEW */
/* ===================================================== */}
{/* ===================================================== */}
{/* MOBILE + TABLET VIEW */}
{/* ===================================================== */}

<div className="block lg:hidden bg-[#08080a] border-t border-white/10">

  <section
    id="thinking-mobile"
    className="
      relative
      py-[80px]
      sm:py-[100px]
    "
  >

    {/* GRID */}
    <div
      className="
        absolute inset-0
        pointer-events-none
        bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:80px_80px]
      "
    />

    <div className="relative z-10 px-5 sm:px-8">

      {/* HEADER */}
      <div className="mb-[56px]">

        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[1.5px] text-[#6c6c78] mb-5">
          <span className="w-5 h-[1px] bg-white/20"></span>

          <span>/ 03</span>

          <span>How we think</span>
        </div>

        <h2
          className="
            text-[32px]
            sm:text-[44px]

            font-semibold

            tracking-[-0.03em]

            leading-[1.05]
          "
        >
          Every website answers{" "}
          <span className="text-[#4D9EFF]">
            four questions.
          </span>
        </h2>

      </div>

      {/* STACK CARDS */}
      <div className="flex flex-col gap-[28px]">

        {questions.map((q, i) => (

          <div
            key={i}
            className="
              sticky
              top-[80px]

              rounded-[20px]

              border border-white/10

              bg-[rgba(12,12,15,0.88)]

              backdrop-blur-md

              overflow-hidden

              p-5
              sm:p-7
            "
          >

            {/* TOP */}
            <div className="flex items-center justify-between mb-5">

              <div
                className="
                  inline-flex
                  items-center
                  gap-2

                  px-3
                  py-1

                  rounded-full

                  border border-[#4D9EFF33]

                  bg-[#4D9EFF0d]

                  text-[#4D9EFF]

                  font-mono
                  text-[10px]

                  tracking-[1px]
                "
              >

                <span className="w-[6px] h-[6px] rounded-full bg-[#4D9EFF]" />

                QUESTION / {String(i + 1).padStart(2, "0")}

              </div>

              <div
                className="
                  text-[10px]

                  uppercase

                  tracking-[1px]

                  text-[#6c6c78]

                  font-mono
                "
              >
                {stageLabels[i]}
              </div>

            </div>

            {/* ===================================================== */}
            {/* SVG CONTAINER */}
            {/* ===================================================== */}

            <div
              className="
                relative

                w-full
                aspect-square

                rounded-[16px]

                border border-white/10

                bg-[radial-gradient(ellipse_at_top_left,rgba(77,158,255,0.08),transparent_50%),rgba(12,12,15,0.6)]

                mb-6

                overflow-hidden

                flex
                items-center
                justify-center
              "
            >

              {/* TOP LINE */}
              <div
                className="
                  absolute top-0 left-0

                  w-full h-[1px]

                  bg-gradient-to-r
                  from-transparent
                  via-[#4D9EFF33]
                  to-transparent
                "
              />

              {/* SVG 1 */}
              {i === 0 && (
                <svg viewBox="0 0 200 200" fill="none"><g className="founder-eye" transform="translate(50, 100)"><circle cx="0" cy="0" r="22" stroke="#4a4a55" strokeWidth="1" strokeDasharray="2 4"/><circle cx="0" cy="0" r="8" fill="#4a4a55"/><text x="0" y="48" textAnchor="middle" fill="#4a4a55" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="1">FOUNDER</text></g><g className="buyer-eye" transform="translate(150, 100)"><circle cx="0" cy="0" r="28" stroke="#4D9EFF" strokeWidth="1.5"/><circle cx="0" cy="0" r="22" stroke="#4D9EFF" strokeWidth="1" opacity="0.4"/><circle cx="0" cy="0" r="10" fill="#4D9EFF"/><text x="0" y="58" textAnchor="middle" fill="#4D9EFF" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="1">BUYER</text></g><line x1="78" y1="100" x2="118" y2="100" stroke="#4D9EFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.5"/><path d="M115 96 L122 100 L115 104" stroke="#4D9EFF" strokeWidth="1.5" fill="none"/></svg>
              )}

              {/* SVG 2 */}
              {i === 1 && (
               <svg viewBox="0 0 200 200" fill="none"><rect x="20" y="40" width="160" height="22" rx="4" stroke="#34343f" strokeWidth="1" fill="none"/><text x="100" y="55" textAnchor="middle" fill="#a8a8b3" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="1">AD</text><rect x="35" y="78" width="130" height="22" rx="4" stroke="#4D9EFF" strokeWidth="1.5" fill="rgba(77, 158, 255, 0.08)"/><text x="100" y="93" textAnchor="middle" fill="#4D9EFF" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="1">LANDING</text><rect x="50" y="116" width="100" height="22" rx="4" stroke="#34343f" strokeWidth="1" fill="none"/><text x="100" y="131" textAnchor="middle" fill="#a8a8b3" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="1">PRODUCT</text><rect x="65" y="154" width="70" height="22" rx="4" stroke="#34343f" strokeWidth="1" fill="none"/><text x="100" y="169" textAnchor="middle" fill="#a8a8b3" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="1">CHECKOUT</text><line x1="100" y1="62" x2="100" y2="78" stroke="#34343f" strokeWidth="1"/><line x1="100" y1="100" x2="100" y2="116" stroke="#34343f" strokeWidth="1"/><line x1="100" y1="138" x2="100" y2="154" stroke="#34343f" strokeWidth="1"/><circle cx="100" cy="89" r="3" fill="#4D9EFF"><animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/></circle></svg>
              )}

              {/* SVG 3 */}
              {i === 2 && (
                <svg viewBox="0 0 200 200" fill="none"><rect x="30" y="30" width="140" height="20" rx="3" stroke="#4D9EFF" strokeWidth="1.5" fill="rgba(77, 158, 255, 0.05)"/><text x="36" y="44" fill="#4D9EFF" fontFamily="JetBrains Mono" fontSize="9">email</text><g className="form-field formField-1"><rect x="30" y="58" width="140" height="20" rx="3" stroke="#34343f" strokeWidth="1" fill="none"/><text x="36" y="72" fill="#6c6c78" fontFamily="JetBrains Mono" fontSize="9">phone</text></g><g className="form-field formField-2"><rect x="30" y="86" width="140" height="20" rx="3" stroke="#34343f" strokeWidth="1" fill="none"/><text x="36" y="100" fill="#6c6c78" fontFamily="JetBrains Mono" fontSize="9">company</text></g><g className="formField form-field-3"><rect x="30" y="114" width="140" height="20" rx="3" stroke="#34343f" strokeWidth="1" fill="none"/><text x="36" y="128" fill="#6c6c78" fontFamily="JetBrains Mono" fontSize="9">job_title</text></g><g className="form-field formField-4"><rect x="30" y="142" width="140" height="20" rx="3" stroke="#34343f" strokeWidth="1" fill="none"/><text x="36" y="156" fill="#6c6c78" fontFamily="JetBrains Mono" fontSize="9">how_did_you_hear</text></g><rect x="30" y="172" width="60" height="20" rx="3" fill="#4D9EFF"/><text x="60" y="186" textAnchor="middle" fill="#08080a" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600">SUBMIT</text></svg>
  )}
              

              {/* SVG 4 */}
              {i === 3 && (
                 <svg viewBox="0 0 200 200" fill="none"><path d="M 40 140 A 60 60 0 0 1 160 140" stroke="#26262f" strokeWidth="2" fill="none"/><path className="speed-arc-active" d="M 40 140 A 60 60 0 0 1 100 80" stroke="#4D9EFF" strokeWidth="3" fill="none" strokeLinecap="round"/><g stroke="#34343f" strokeWidth="1"><line x1="40" y1="140" x2="46" y2="135"/><line x1="56" y1="106" x2="62" y2="108"/><line x1="100" y1="80" x2="100" y2="88"/><line x1="144" y1="106" x2="138" y2="108"/><line x1="160" y1="140" x2="154" y2="135"/></g><text x="40" y="158" textAnchor="middle" fill="#4D9EFF" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600">2s</text><text x="100" y="68" textAnchor="middle" fill="#a8a8b3" fontFamily="JetBrains Mono" fontSize="9">3s</text><text x="160" y="158" textAnchor="middle" fill="#6c6c78" fontFamily="JetBrains Mono" fontSize="9">5s</text><g className="speed-needle" transform="translate(100, 140)"><line x1="0" y1="0" x2="0" y2="-50" stroke="#4D9EFF" strokeWidth="2" strokeLinecap="round"/><circle cx="0" cy="0" r="4" fill="#4D9EFF"/></g><text x="100" y="178" textAnchor="middle" fill="#e8e8ed" fontFamily="Inter Tight" fontSize="11" fontWeight="600">3× CONVERSION</text></svg>
              )}

            </div>

            {/* CONTENT */}
            <h3
              className="
                text-[24px]
                sm:text-[30px]

                font-semibold

                leading-[1.15]

                tracking-[-0.03em]

                mb-4
              "
            >
              {q.title}
            </h3>

            <p
              className="
                text-[15px]
                sm:text-[16px]

                leading-[1.7]

                text-[#a8a8b3]
              "
            >
              {q.desc}
            </p>

          </div>

        ))}

      </div>

    </div>

  </section>

</div>
</>
  );
}

