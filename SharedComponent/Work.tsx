'use client';

import { useEffect, useRef, useState } from 'react';

export default function WorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [currentCase, setCurrentCase] = useState(0);

  const totalCases = 4;

  const setCase = (index: number) => {
    if (index < 0 || index >= totalCases) return;

    setCurrentCase(index);

    const track = trackRef.current;
    if (!track) return;

    const cases = track.children;
    const caseEl = cases[index] as HTMLElement;

    const wrapper = track.parentElement!;
    const wrapperRect = wrapper.getBoundingClientRect();

    const caseCenter =
      caseEl.offsetLeft + caseEl.offsetWidth / 2;

    const wrapperCenter = wrapperRect.width / 2;

    const offset = caseCenter - wrapperCenter;

    track.style.transform = `translateX(${-offset}px)`;
  };

  const updateScroll = () => {
    if (!sectionRef.current || window.innerWidth <= 968) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const sectionHeight = rect.height;
    const viewportHeight = window.innerHeight;

    const totalScroll = sectionHeight - viewportHeight;
    const scrolled = Math.max(0, -rect.top);
    const progress = Math.min(1, scrolled / totalScroll);

    const step = Math.min(
      totalCases - 1,
      Math.floor(progress * totalCases)
    );

    if (step !== currentCase) setCase(step);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, [currentCase]);
const casesData = [
  {
    tag: "D2C / ETHNIC WEAR",
    name: "Farida Gupta",
    thinking:
      'We rebuilt the product page around two questions: "is this my size" and "will it look good on me." Everything else came after.',
    metricLabel: "Conversion lift, 60 days post-launch",
    metricValue: "3.2×",
    metricContext:
      "From 1.4% to 4.5% conversion rate, with same traffic mix.",
  },
  {
    tag: "BEAUTY / D2C",
    name: "La Mior",
    thinking:
      "The old site loaded in 4.8 seconds. We migrated to Next.js with edge rendering. Same products, same ads. Different result.",
    metricLabel: "Customer acquisition cost",
    metricValue: "−41%",
    metricContext:
      "CAC drop in the first quarter post-launch.",
  },
  {
    tag: "WELLNESS / SAAS",
    name: "Balance Nutrition",
    thinking:
      "The old booking flow was 7 steps. We made it 3. Same offer, same price, more bookings.",
    metricLabel: "Booking conversion uplift",
    metricValue: "+62%",
    metricContext:
      "More bookings on the same traffic, within 30 days.",
  },
  {
    tag: "AYURVEDIC / D2C",
    name: "Shafeen Beauty",
    thinking:
      "Custom Shopify Plus build, optimised for paid traffic. Architecture before pixels.",
    metricLabel: "Return on ad spend, 90 days",
    metricValue: "5.1×",
    metricContext:
      "From 3.1× to 5.1× ROAS at scale on Meta.",
  },
];
  return (
    <>
  {/* ===================================================== */}
  {/* ================= DESKTOP ONLY ====================== */}
  {/* ===================================================== */}

  <div className="hidden lg:block">
    <section
      ref={sectionRef}
      className="relative z-[2] bg-[var(--bg-0)] h-[460vh]"
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">

        {/* HEADER */}
        <div className="px-[48px] pt-[48px] pb-[40px] backdrop-blur-[12px]">
          <div className="max-w-[1280px] mx-auto flex justify-between items-center gap-[40px]">

            <div className="flex items-center gap-[32px]">
              <h2 className="text-[32px] font-semibold tracking-[-0.025em] text-[var(--text-0)]">
                What this thinking{" "}
                <span className="text-[var(--blue)]">
                  produces.
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-[16px] text-[12px] tracking-[1.5px] text-[var(--text-3)]">
              <span className="text-[var(--blue)] text-[14px]">
                {String(currentCase + 1).padStart(2, "0")}
              </span>

              <div className="w-[24px] h-[1px] bg-[var(--line-2)]" />

              <span>04</span>
            </div>
          </div>
        </div>

        {/* TRACK */}
        <div className="flex-1 overflow-hidden flex items-center">
          <div
            ref={trackRef}
            className="flex gap-[32px] px-[96px] transition-transform duration-[800ms]"
          >
            {["Farida Gupta", "La Mior", "Balance Nutrition", "Shafeen Beauty"].map((name, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-[calc(100vw-192px)] max-w-[1180px]
                grid grid-cols-[1.4fr_1fr] gap-[64px] items-center
                transition-all duration-[600ms]
                ${currentCase === i ? "opacity-100 scale-100" : "opacity-40 scale-[0.96]"}`}
              >

             <div className="relative w-full aspect-[16/10] rounded-[12px] overflow-hidden border border-white/10 bg-[#111]">

  <img
    src={
      i === 0
        ? "/work/img1.png"
        : i === 1
        ? "/work/img2.png"
        : i === 2
        ? "/work/img3.png"
        : "/work/img4.png"
    }
    alt={casesData[i].name}
    className="
      w-full h-full
      object-cover
      transition-transform duration-700
      hover:scale-[1.03]
    "
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

</div>

                <div className="flex flex-col gap-[28px]">

                  <div className="inline-flex items-center gap-2 text-[11px] text-[var(--blue)] uppercase tracking-[1.5px] px-3 py-1 rounded-full border border-[var(--blue)] bg-[rgba(77,158,255,0.08)] w-fit">
                    {casesData[i].tag}
                  </div>

                  <h3 className="text-[clamp(36px,4vw,52px)] font-semibold tracking-[-0.03em] text-[var(--text-0)] leading-none">
                    {casesData[i].name}
                  </h3>

                  <p className="text-[17px] text-[var(--text-2)] leading-[1.6] max-w-[460px]">
                    {casesData[i].thinking}
                  </p>

                  <div className="p-[28px] rounded-[16px] border border-[var(--blue-line)] bg-[linear-gradient(180deg,rgba(77,158,255,0.06),transparent)] relative overflow-hidden max-w-[380px]">

                    <div className="text-[11px] text-[var(--blue)] uppercase tracking-[1.5px] mb-2">
                      {casesData[i].metricLabel}
                    </div>

                    <div className="text-[clamp(48px,6vw,72px)] font-bold tracking-[-0.05em] text-[var(--text-0)] leading-none mb-2">
                      {casesData[i].metricValue}
                    </div>

                    <div className="text-[13px] text-[var(--text-3)] leading-[1.4]">
                      {casesData[i].metricContext}
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[14px] text-[var(--text-2)] font-medium hover:text-[var(--blue)] transition"
                  >
                    Read the full story →
                  </a>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTROLS */}
        <div className="px-[48px] py-[32px] border-t border-[var(--line-1)] bg-[rgba(8,8,10,0.6)] backdrop-blur-[12px]">
          <div className="max-w-[1280px] mx-auto flex justify-between items-center">

            {/* PROGRESS */}
            <div className="flex gap-[6px] w-full max-w-[600px]">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  onClick={() => setCase(i)}
                  className="flex-1 h-[2px] bg-[var(--line-2)] cursor-pointer relative overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 transition-all duration-[600ms]
                    ${i <= currentCase ? "w-full bg-[var(--blue)]" : "w-0"}`}
                  />
                </div>
              ))}
            </div>

            {/* NAV */}
            <div className="flex gap-[8px]">
              <button
                disabled={currentCase === 0}
                onClick={() => setCase(currentCase - 1)}
                className="w-[40px] h-[40px] rounded-full border border-[var(--line-2)]"
              >
                ←
              </button>

              <button
                disabled={currentCase === totalCases - 1}
                onClick={() => setCase(currentCase + 1)}
                className="w-[40px] h-[40px] rounded-full border border-[var(--line-2)]"
              >
                →
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  </div>

  {/* ===================================================== */}
  {/* =============== MOBILE + TABLET ONLY ================= */}
  {/* ===================================================== */}

  <div className="block lg:hidden">
    <section
      className="
        relative
        z-[2]

        bg-[var(--bg-0)]

        overflow-hidden
      "
    >

      {/* HEADER */}
      <div
        className="
          px-5
          sm:px-8

          pt-16
          pb-10
        "
      >
        <div className="flex flex-col gap-6">

          <div className="flex items-center justify-between">

            <h2
              className="
                text-[30px]
                sm:text-[42px]

                font-semibold

                tracking-[-0.03em]

                leading-[1.05]

                text-[var(--text-0)]
              "
            >
              What this thinking{" "}
              <span className="text-[var(--blue)]">
                produces.
              </span>
            </h2>

            <div className="flex items-center gap-3 text-[11px] tracking-[1.5px] text-[var(--text-3)]">
              <span className="text-[var(--blue)]">
                04
              </span>

              <div className="w-[20px] h-[1px] bg-[var(--line-2)]" />

              <span>04</span>
            </div>
          </div>
        </div>
      </div>

      {/* STACKING CARDS */}
      <div className="relative flex flex-col px-5 sm:px-8 pb-20">

        {casesData.map((item, i) => (
          <div
            key={i}
            className="
              sticky

              rounded-[24px]

              border border-[var(--line-1)]

              bg-[rgba(12,12,15,0.82)]

              backdrop-blur-md

              overflow-hidden

              p-5
              sm:p-8

              mb-8

              shadow-[0_20px_80px_-30px_rgba(0,0,0,0.6)]
            "
            style={{
              top: `${80 + i * 24}px`,
              zIndex: 10 + i,
            }}
          >

        {/* IMAGE */}
<div
  className="
    relative
    w-full
    aspect-[16/10]

    rounded-[16px]
    overflow-hidden

    bg-[#111]

    mb-6

    border border-white/10
  "
>
  <img
    src={
      i === 0
        ? "/work/img1.png"
        : i === 1
        ? "/work/img2.png"
        : i === 2
        ? "/work/img3.png"
        : "/work/img4.png"
    }
    alt={casesData[i].name}
    className="
      w-full
      h-full
      object-cover

      transition-transform
      duration-700

      hover:scale-[1.03]
    "
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
</div>

            {/* CONTENT */}
            <div className="flex flex-col gap-6">

              <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] text-[var(--blue)] uppercase tracking-[1.5px] px-3 py-1 rounded-full border border-[var(--blue)] bg-[rgba(77,158,255,0.08)] w-fit">
                {item.tag}
              </div>

              <h3
                className="
                  text-[30px]
                  sm:text-[42px]

                  font-semibold

                  tracking-[-0.03em]

                  leading-none

                  text-[var(--text-0)]
                "
              >
                {item.name}
              </h3>

              <p
                className="
                  text-[15px]
                  sm:text-[17px]

                  text-[var(--text-2)]

                  leading-[1.7]
                "
              >
                {item.thinking}
              </p>

              {/* METRIC */}
              <div className="p-6 rounded-[16px] border border-[var(--blue-line)] bg-[linear-gradient(180deg,rgba(77,158,255,0.06),transparent)] relative overflow-hidden">

                <div className="text-[10px] sm:text-[11px] text-[var(--blue)] uppercase tracking-[1.5px] mb-2">
                  {item.metricLabel}
                </div>

                <div
                  className="
                    text-[48px]
                    sm:text-[64px]

                    font-bold

                    tracking-[-0.05em]

                    text-[var(--text-0)]

                    leading-none

                    mb-2
                  "
                >
                  {item.metricValue}
                </div>

                <div className="text-[12px] sm:text-[13px] text-[var(--text-3)] leading-[1.5]">
                  {item.metricContext}
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[14px] text-[var(--text-2)] font-medium"
              >
                Read the full story →
              </a>

            </div>
          </div>
        ))}

      </div>
    </section>
  </div>
</>
  );
}