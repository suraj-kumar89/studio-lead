"use client";

import { useEffect, useRef, useState } from "react";

export default function Process() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const stages = timelineRef.current.querySelectorAll(".stage");
      const rect = timelineRef.current.getBoundingClientRect();

      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      let current = 0;

      stages.forEach((stage, i) => {
        const el = stage as HTMLElement;
        const top = el.getBoundingClientRect().top;

        if (top < viewportHeight * 0.6) {
          current = i;
        }
      });

      setActiveStage(current);

      // 🔥 Timeline fill animation
      const fill = document.getElementById("timelineFill");
      const indicator = document.getElementById("timelineIndicator");

      if (fill && indicator) {
        const totalHeight = timelineRef.current.offsetHeight;
        const progress =
          (window.innerHeight - rect.top) / totalHeight;

        const clamped = Math.min(1, Math.max(0, progress));

        fill.style.height = `${clamped * 100}%`;
        indicator.style.top = `${clamped * 100}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stages = [
    {
      num: "/ 01",
      day: "DAY 1–2",
      title: "Figure out who's actually buying.",
      desc: "One call with you. One call with your data. We map your funnel, audience, and the real money path. Before we touch a pixel.",
      chips: ["Discovery call", "Funnel audit", "Buyer mapping"],
    },
    {
      num: "/ 02",
      day: "DAY 3–10",
      title: "Design the conversation.",
      desc: "Wireframes first. Then visual direction. Then final designs. Two revision rounds, because three is procrastination.",
      chips: ["Wireframes", "Visual direction", "Final design", "2 revisions"],
    },
    {
      num: "/ 03",
      day: "DAY 11–18",
      title: "Build it properly.",
      desc: "Your stack, fully responsive, fast by default. CMS integration so you can edit without calling us.",
      chips: ["Next.js", "Sanity CMS", "Responsive", "Performance"],
    },
    {
      num: "/ 04",
      day: "DAY 19–20",
      title: "Try to break it.",
      desc: "Cross-browser, cross-device, performance audit, accessibility check.",
      chips: ["QA testing", "Lighthouse 90+", "WCAG", "Staging review"],
    },
    {
      num: "/ 05",
      day: "DAY 21",
      title: "Ship it.",
      desc: "Live by end of day. Full ownership. No vendor lock-in.",
      chips: ["Deploy", "Handover", "Docs", "Ownership"],
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
      className="relative border-t border-white/10 py-[160px] pb-[200px]"
    >
      <div className="max-w-[1100px] mx-auto px-6">

        {/* HEADER */}
        <div className="mb-[100px] max-w-[800px]">
          <div className="text-xs text-[#6c6c78] mb-4 tracking-[1.5px]">
            / 05 The process
          </div>

          <h2 className="text-[40px] sm:text-[56px] lg:text-[76px] font-semibold tracking-[-0.03em] leading-[1.02] mb-6">
            From kickoff to live in{" "}
            <span className="text-[#4D9EFF]">
              21 days.
            </span>
          </h2>

          <p className="text-[#a8a8b3] text-[18px] max-w-[560px]">
            No 60-page Notion docs. No weekly status calls that should’ve been a Slack message.
          </p>
        </div>

        {/* TIMELINE */}
        <div ref={timelineRef} className="relative">

          {/* LINE */}
          <div className="absolute left-[88px] top-0 bottom-0 w-[1px] bg-white/10">
            <div
              id="timelineFill"
              className="absolute top-0 left-0 w-full bg-[#4D9EFF]"
              style={{ height: "0%" }}
            />
          </div>

          {/* INDICATOR */}
          <div
            id="timelineIndicator"
            className="absolute left-[88px] w-[1px]"
          >
            <div className="absolute -left-[5px] w-[11px] h-[11px] bg-[#4D9EFF] rounded-full shadow-[0_0_16px_#4D9EFF]" />
          </div>

          {/* STAGES */}
          {stages.map((stage, i) => (
            <div
              key={i}
              className={`grid grid-cols-[180px_1fr] gap-[80px] py-[48px] transition-opacity duration-500 ${
                i <= activeStage ? "opacity-100" : "opacity-40"
              }`}
            >
              {/* LEFT */}
              <div className="flex flex-col gap-3">
                <div className="text-xs tracking-[1.5px] text-[#6c6c78]">
                  {stage.num}
                </div>

                <div className="text-sm px-3 py-1 border border-white/10 rounded-md text-[#6c6c78]">
                  {stage.day}
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <h3 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold mb-4">
                  {stage.title}
                </h3>

                <p className="text-[#a8a8b3] text-[17px] mb-6 max-w-[600px]">
                  {stage.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {stage.chips.map((chip, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1 rounded-full border border-white/10 text-sm text-[#6c6c78]"
                    >
                      {chip}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* CLOSER */}
        <div className="mt-[80px] p-[32px] border border-white/10 rounded-xl bg-white/5 backdrop-blur-md flex gap-6 max-w-[800px] mx-auto">
          <div className="w-10 h-10 rounded-lg bg-[#4D9EFF1a] flex items-center justify-center">
            ✔
          </div>

          <p className="text-[#a8a8b3]">
            <strong className="text-white">
              Bigger projects move on a 28 or 35-day clock.
            </strong>{" "}
            We'll tell you which on the first call.
          </p>
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

        border-t border-white/10

        py-20
        sm:py-24

        overflow-hidden
      "
    >
      <div
        className="
          max-w-[1100px]

          mx-auto

          px-5
          sm:px-8
        "
      >

        {/* HEADER */}
        <div className="mb-14 sm:mb-16">

          <div className="text-[10px] sm:text-xs text-[#6c6c78] mb-4 tracking-[1.5px]">
            / 05 The process
          </div>

          <h2
            className="
              text-[34px]
              sm:text-[52px]

              font-semibold

              tracking-[-0.03em]

              leading-[1.05]

              mb-5
            "
          >
            From kickoff to live in{" "}
            <span className="text-[#4D9EFF]">
              21 days.
            </span>
          </h2>

          <p
            className="
              text-[#a8a8b3]

              text-[15px]
              sm:text-[18px]

              leading-[1.7]

              max-w-[560px]
            "
          >
            No 60-page Notion docs. No weekly status calls that should’ve been a Slack message.
          </p>
        </div>

        {/* STACKING TIMELINE CARDS */}
        <div className="relative flex flex-col">

          {stages.map((stage, i) => (
            <div
              key={i}
              className="
                sticky

                rounded-[24px]

                border border-white/10

                bg-[rgba(12,12,15,0.82)]

                backdrop-blur-md

                overflow-hidden

                p-6
                sm:p-8

                mb-8

                shadow-[0_20px_80px_-30px_rgba(0,0,0,0.6)]
              "
              style={{
                top: `${80 + i * 24}px`,
                zIndex: 10 + i,
              }}
            >

              {/* TOP */}
              <div className="flex items-start justify-between gap-6 mb-8">

                <div className="flex flex-col gap-3">

                  <div className="text-[10px] sm:text-xs tracking-[1.5px] text-[#6c6c78]">
                    {stage.num}
                  </div>

                  <div className="text-[13px] sm:text-sm px-3 py-1 border border-white/10 rounded-md text-[#6c6c78] w-fit">
                    {stage.day}
                  </div>

                </div>

                <div className="w-3 h-3 rounded-full bg-[#4D9EFF] shadow-[0_0_18px_#4D9EFF]" />
              </div>

              {/* CONTENT */}
              <div>

                <h3
                  className="
                    text-[28px]
                    sm:text-[42px]

                    font-semibold

                    leading-[1.08]

                    tracking-[-0.03em]

                    mb-4
                  "
                >
                  {stage.title}
                </h3>

                <p
                  className="
                    text-[#a8a8b3]

                    text-[15px]
                    sm:text-[17px]

                    leading-[1.7]

                    mb-6
                  "
                >
                  {stage.desc}
                </p>

                {/* CHIPS */}
                <div className="flex flex-wrap gap-2">
                  {stage.chips.map((chip, idx) => (
                    <div
                      key={idx}
                      className="
                        px-3 py-1

                        rounded-full

                        border border-white/10

                        text-[12px]
                        sm:text-sm

                        text-[#6c6c78]
                      "
                    >
                      {chip}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* CLOSER */}
        <div
          className="
            mt-16

            p-6
            sm:p-8

            border border-white/10

            rounded-[24px]

            bg-white/5

            backdrop-blur-md

            flex items-start gap-5
          "
        >

          <div className="w-10 h-10 rounded-lg bg-[#4D9EFF1a] flex items-center justify-center flex-shrink-0">
            ✔
          </div>

          <p
            className="
              text-[#a8a8b3]

              text-[15px]
              sm:text-[17px]

              leading-[1.7]
            "
          >
            <strong className="text-white">
              Bigger projects move on a 28 or 35-day clock.
            </strong>{" "}
            We'll tell you which on the first call.
          </p>

        </div>

      </div>
    </section>
  </div>
</>
  );
}