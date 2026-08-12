"use client";

import { useEffect, useRef } from "react";

export default function HeadStart() {

  const stageRef = useRef<HTMLDivElement>(null);
  const credibilityRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const themRow = stage.querySelector(".them") as HTMLElement;
    const usRow = stage.querySelector(".us") as HTMLElement;

    const dots = stage.querySelectorAll(".tangle-dot");
    const labels = stage.querySelectorAll(".v-label");
    const paths = stage.querySelectorAll(".tangle-path");

    const baseDelay = 800;
    const step = 200;

    dots.forEach((dot, i) => {
      (dot as HTMLElement).style.transitionDelay = `${baseDelay + i * step}ms`;
    });

    labels.forEach((label, i) => {
      (label as HTMLElement).style.transitionDelay = `${baseDelay + 50 + i * step}ms`;
    });

    paths.forEach((path, i) => {
      (path as HTMLElement).style.transitionDelay = `${i * 150}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            stage.classList.add("in");
            themRow?.classList.add("in");
            usRow?.classList.add("in");
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -100px 0px" }
    );

    observer.observe(stage);

    const cred = credibilityRef.current;
    if (cred) {
      const credObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              cred.classList.add("in");
            }
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
      );
      credObs.observe(cred);
    }
  }, []);



  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
  }, []);
  useEffect(() => {
    const them = document.querySelector(".stage-row.them");
    const us = document.querySelector(".stage-row.us");

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        them?.classList.add("in");

        setTimeout(() => {
          us?.classList.add("in");
        }, 3500); // sync delay
      }
    });

    observer.observe(document.querySelector(".stage")!);
  }, []);
  return (
    <section
      className="
    py-[80px]
    sm:py-[100px]
    lg:py-[120px]

    text-white
    overflow-x-hidden
  "
    >
      <div
        className="
      max-w-[1280px]
      mx-auto

      px-5
      sm:px-8
      md:px-10
      lg:px-[48px]
    "
      >
        {/* HEADER */}
        <div
          className="
      max-w-[1280px]
      mx-auto

      px-5
      sm:px-8
      md:px-10
      lg:px-[48px]
    "
        >
          <div
            className="
          flex items-center gap-3

          text-[10px]
          sm:text-[11px]

          tracking-[1.5px]

          text-[#6c6c78]
          uppercase

          mb-5
          sm:mb-6

          font-mono
        "
          >
            <span className="w-[24px] sm:w-[32px] h-[1px] bg-[#6c6c78]" />

            <span className="text-[#4D9EFF]">/ 02</span>

            <span>The head start</span>
          </div>
          <h2
            className="
          text-[36px]
          leading-[1.05]

          sm:text-[52px]

          md:text-[64px]

          lg:text-[76px]

          font-semibold
          tracking-[-0.035em]

          mb-5
          sm:mb-6
        "
          >
            There are no{" "}
            <em className="text-[#a8a8b3] font-normal italic">
              shortcuts
            </em>
            .
            <br />
            We just took the{" "}
            <span className="text-[#4D9EFF]">
              long route
            </span>{" "}
            first.
          </h2>

          <p
            className="
          text-[15px]
          sm:text-[17px]
          lg:text-[18px]

          text-[#a8a8b3]

          leading-[1.7]
          sm:leading-[1.55]

          max-w-full
          sm:max-w-[600px]
        "
          >
            Every "perfect" website is the result of dozens of expensive failures.{" "}
            <strong className="text-[#e8e8ed] font-medium">
              We've already shipped them.
            </strong>
          </p>
        </div>

        {/* STAGE */}

        <div
          className="
    stage

    relative
    overflow-hidden

    rounded-[20px]

    px-4
    sm:px-6
    md:px-8
    lg:px-10

    py-6
    sm:py-8
    lg:py-10
  "
        >
          <div className="stage-grid-overlay" />
          <div ref={stageRef} className="relative z-[2]">

            {/* GRID */}
            <div
              className="
        absolute inset-0

        opacity-30
        pointer-events-none

        bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]

        bg-[size:32px_32px]
        sm:bg-[size:40px_40px]
        lg:bg-[size:48px_48px]
      "
            />


            {/* ================= THEM ROW ================= */}
            <div
              className="
        stage-row them

        flex
        flex-col

        lg:grid
        lg:grid-cols-[180px_1fr_140px]

        gap-6
        sm:gap-8
        lg:gap-6

        items-start
        lg:items-center

        relative
        z-[2]
      "
            >

              {/* LEFT */}
              <div
                className="
          flex flex-col gap-3

          w-full
          lg:w-auto
        "
              >
                <div
                  className="
            inline-flex items-center gap-2

            text-[10px]
            sm:text-[11px]

            uppercase
            tracking-[1.5px]

            px-3 py-[6px]

            rounded-full

            border border-red-400/30
            text-red-400
            bg-red-400/5

            font-mono

            w-fit
          "
                >
                  <span className="w-[6px] h-[6px] rounded-full bg-red-400 shadow-[0_0_8px_#f87171]" />

                  THE LONG WAY
                </div>

                <div
                  className="
            text-[15px]
            sm:text-[17px]
            lg:text-[18px]

            font-semibold

            leading-[1.35]
            sm:leading-[1.25]
            lg:leading-[1.2]

            tracking-[-0.02em]

            text-white

            max-w-full

            break-words
          "
                >
                  A{" "}
                  <em className="text-red-400 font-normal italic">
                    generic
                  </em>{" "}
                  agency. 18 months of guesswork.
                </div>
              </div>

              {/* ================= SVG (UNCHANGED) ================= */}
              <div
                className="
    w-full

    h-[120px]
    sm:h-[160px]
    md:h-[190px]
    lg:h-[220px]

    flex
    items-center
    justify-center

    overflow-hidden
  "
              >
                <svg
                  viewBox="0 0 800 220"
                  preserveAspectRatio="xMidYMid meet"
                  className="
      w-full
      h-full

      min-w-0
    "
                >

                  {/* PATHS */}
                  <path
                    className="tangle-path dim"
                    d="M 30 110 Q 80 50, 130 90 T 220 70 Q 270 140, 320 80 T 410 120 Q 460 60, 510 110 T 600 130 Q 650 70, 700 100"
                  />

                  <path
                    className="tangle-path dim"
                    d="M 30 110 Q 70 170, 110 140 Q 150 100, 200 150 Q 250 180, 300 140 Q 360 110, 420 160 T 520 140 Q 580 110, 640 140 T 720 120"
                  />

                  <path
                    className="tangle-path"
                    d="M 30 110 C 80 40, 130 180, 180 100 S 280 140, 320 90 Q 380 50, 420 120 T 510 100 Q 560 140, 610 90 T 700 110 L 770 110"
                  />

                  <path
                    className="tangle-path"
                    d="M 30 110 Q 70 80, 120 120 Q 180 160, 240 100 T 330 130 Q 390 80, 450 110 T 540 120 Q 600 90, 660 110 T 770 110"
                  />

                  {/* DOTS */}
                  <circle className="tangle-dot fail" cx="80" cy="80" r="4" />
                  <circle className="tangle-dot fail" cx="125" cy="125" r="4" />
                  <circle className="tangle-dot fail" cx="170" cy="95" r="4" />
                  <circle className="tangle-dot partial" cx="220" cy="125" r="4" />
                  <circle className="tangle-dot fail" cx="270" cy="110" r="4" />
                  <circle className="tangle-dot partial" cx="315" cy="90" r="4" />
                  <circle className="tangle-dot fail" cx="365" cy="135" r="4" />
                  <circle className="tangle-dot partial" cx="415" cy="115" r="5" />
                  <circle className="tangle-dot fail" cx="465" cy="90" r="4" />
                  <circle className="tangle-dot partial" cx="515" cy="125" r="4" />
                  <circle className="tangle-dot partial" cx="565" cy="105" r="4" />
                  <circle className="tangle-dot partial" cx="615" cy="125" r="4" />
                  <circle className="tangle-dot partial-win" cx="700" cy="110" r="6" />

                  {/* LABELS */}
                  <text className="v-label" x="80" y="65" textAnchor="middle">
                    v1.0
                  </text>

                  <text className="v-label" x="125" y="145" textAnchor="middle">
                    v1.4
                  </text>

                  <text className="v-label" x="170" y="80" textAnchor="middle">
                    v2.1
                  </text>

                  <text className="v-label" x="220" y="145" textAnchor="middle">
                    v2.8
                  </text>

                  <text className="v-label" x="270" y="95" textAnchor="middle">
                    v3.0
                  </text>

                  <text className="v-label" x="315" y="75" textAnchor="middle">
                    v3.6
                  </text>

                  <text className="v-label" x="365" y="155" textAnchor="middle">
                    v4.2
                  </text>

                  <text className="v-label win" x="415" y="100" textAnchor="middle">
                    v6.0
                  </text>

                  <text className="v-label" x="465" y="75" textAnchor="middle">
                    v6.4
                  </text>

                  <text className="v-label" x="515" y="145" textAnchor="middle">
                    v7.3
                  </text>

                  <text className="v-label" x="565" y="90" textAnchor="middle">
                    v7.8
                  </text>

                  <text className="v-label" x="615" y="145" textAnchor="middle">
                    v8.1
                  </text>

                  <text className="v-label win" x="700" y="93" textAnchor="middle">
                    v8.4
                  </text>

                  {/* START */}
                  <g className="v-marker">
                    <circle cx="30" cy="110" r="4" fill="#6c6c78" />

                    <text
                      x="30"
                      y="155"
                      textAnchor="middle"
                      fill="#6c6c78"
                      fontSize="9"
                    >
                      DAY 0
                    </text>
                  </g>

                  {/* END */}
                  <g className="v-marker end">
                    <text
                      x="700"
                      y="155"
                      textAnchor="middle"
                      fill="#fb923c"
                      fontSize="9"
                      fontWeight="600"
                    >
                      MONTH 18 · 4.5%
                    </text>
                  </g>

                </svg>
              </div>
              {/* RIGHT STATS */}
              <div
                className="
    stage-stats

    flex
    flex-col

    gap-3
    sm:gap-4
    lg:gap-3

    w-auto

    items-start
    lg:items-end

    text-left
    lg:text-right

    ml-[-6px]
    sm:ml-0
  "
              >
                <div>
                  <div
                    className="
        text-[20px]
        sm:text-[22px]
        lg:text-[24px]

        font-bold
        text-red-400
      "
                  >
                    14
                  </div>

                  <div
                    className="
        text-[8px]
        sm:text-[9px]

        uppercase
        tracking-[1px]

        text-[#6c6c78]

        font-mono
      "
                  >
                    VERSIONS
                  </div>
                </div>

                <div>
                  <div
                    className="
        text-[20px]
        sm:text-[22px]
        lg:text-[24px]

        font-bold
        text-red-400
      "
                  >
                    ₹22L+
                  </div>

                  <div
                    className="
        text-[8px]
        sm:text-[9px]

        uppercase
        tracking-[1px]

        text-[#6c6c78]

        font-mono
      "
                  >
                    AD SPEND BURNT
                  </div>
                </div>

                <div>
                  <div
                    className="
        text-[20px]
        sm:text-[22px]
        lg:text-[24px]

        font-bold
        text-red-400
      "
                  >
                    18 mo
                  </div>

                  <div
                    className="
        text-[8px]
        sm:text-[9px]

        uppercase
        tracking-[1px]

        text-[#6c6c78]

        font-mono
      "
                  >
                    TO 4.5%
                  </div>
                </div>
              </div>

            </div>
            {/* DIVIDER */}
            <div
              className="
    text-center

    my-8
    sm:my-10
    lg:my-8

    relative

    px-4
  "
            >
              <span
                className="
      inline-block

      bg-[#0c0c0f]

      px-3
      sm:px-4

      py-[6px]

      text-[10px]
      sm:text-xs

      tracking-[1.5px]
      sm:tracking-[2px]

      text-[#6c6c78]

      uppercase
      font-mono

      rounded-full

      break-words
    "
              >
                Same destination · 4.5%
              </span>
            </div>

            {/* ================= US ROW ================= */}
            <div
              className="
    stage-row us

    flex
    flex-col

    lg:grid
    lg:grid-cols-[180px_1fr_140px]

    gap-6
    sm:gap-8
    lg:gap-6

    items-start
    lg:items-center
  "
            >

              {/* LEFT */}
              <div
                className="
      stage-label-left

      flex
      flex-col

      gap-3

      w-full
      lg:w-auto
    "
              >
                <div
                  className="
        stage-badge

        inline-flex
        w-fit
      "
                >
                  <span className="stage-badge-dot"></span>
                  OUR WAY
                </div>

                <div
                  className="
        stage-label-title

        text-[15px]
        sm:text-[17px]
        lg:text-[18px]

        leading-[1.35]
        sm:leading-[1.25]

        break-words
      "
                >
                  <em>Bluvo.</em> 21 days. One straight line.
                </div>
              </div>

              {/* ================= SVG ================= */}
              <div
                className="
      stage-visual

      w-full

      h-[120px]
      sm:h-[160px]
      md:h-[190px]
      lg:h-[220px]

      overflow-hidden
    "
              >
                <svg
                  viewBox="0 0 800 220"
                  preserveAspectRatio="xMidYMid meet"
                  className="
        w-full
        h-full
        min-w-0
      "
                >

                  {/* CLEAN PATH */}
                  <line
                    className="clean-path"
                    x1="30"
                    y1="110"
                    x2="700"
                    y2="110"
                  />

                  {/* RUNWAY */}
                  <line
                    className="clean-runway"
                    x1="700"
                    y1="110"
                    x2="770"
                    y2="110"
                    stroke="#26262f"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />

                  {/* START */}
                  <circle className="clean-dot-start" cx="30" cy="110" r="6" />

                  <text
                    className="clean-marker start"
                    x="30"
                    y="155"
                    textAnchor="middle"
                    fill="#4D9EFF"
                    fontFamily="JetBrains Mono"
                    fontSize="9"
                    letterSpacing="1"
                    fontWeight="600"
                  >
                    DAY 0
                  </text>

                  {/* END */}
                  <circle className="clean-dot-end" cx="700" cy="110" r="9" />

                  <text
                    className="clean-marker end"
                    x="700"
                    y="155"
                    textAnchor="middle"
                    fill="#4D9EFF"
                    fontFamily="JetBrains Mono"
                    fontSize="9"
                    letterSpacing="1"
                    fontWeight="600"
                  >
                    DAY 21 · LIVE @ 4.5%
                  </text>

                  {/* VERSION */}
                  <text
                    className="clean-marker v"
                    x="700"
                    y="90"
                    textAnchor="middle"
                    fill="#e8e8ed"
                    fontFamily="Inter Tight"
                    fontSize="11"
                    fontWeight="600"
                    letterSpacing="-0.5"
                  >
                    v1.0
                  </text>

                </svg>
              </div>

              {/* ================= STATS ================= */}
              <div
                className="
    stage-stats

    flex
    flex-col

    gap-3
    sm:gap-4
    lg:gap-3

    w-auto

    items-start
    lg:items-end

    text-left
    lg:text-right

    ml-[-6px]
    sm:ml-0
  "
              >
                <div>
                  <div
                    className="
          text-[20px]
          sm:text-[22px]
          lg:text-[24px]

          font-bold
          text-blue-400
        "
                  >
                    1
                  </div>

                  <div
                    className="
          text-[8px]
          sm:text-[9px]

          uppercase
          tracking-[1px]

          text-[#6c6c78]

          font-mono
        "
                  >
                    VERSION
                  </div>
                </div>

                <div>
                  <div
                    className="
          text-[20px]
          sm:text-[22px]
          lg:text-[24px]

          font-bold
          text-blue-400
        "
                  >
                    ₹0
                  </div>

                  <div
                    className="
          text-[8px]
          sm:text-[9px]

          uppercase
          tracking-[1px]

          text-[#6c6c78]

          font-mono
        "
                  >
                    AD SPEND BURNT
                  </div>
                </div>

                <div>
                  <div
                    className="
          text-[20px]
          sm:text-[22px]
          lg:text-[24px]

          font-bold
          text-blue-400
        "
                  >
                    21 d
                  </div>

                  <div
                    className="
          text-[8px]
          sm:text-[9px]

          uppercase
          tracking-[1px]

          text-[#6c6c78]

          font-mono
        "
                  >
                    TO 4.5%
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>


      </div>
    </section>
  );
}