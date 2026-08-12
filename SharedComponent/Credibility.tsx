"use client";

import { useEffect, useRef, useState } from "react";

export default function Credibility() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
<div
  ref={ref}
  data-active={active}
  className="
    relative z-10

    mt-[40px]
    sm:mt-[-65px]
    lg:mt-[-55px]

    backdrop-blur-[12px]

    px-5
    sm:px-8
    md:px-10
    lg:px-[48px]

    py-8
    sm:py-10
    lg:py-[56px]

    overflow-hidden

    shadow-[0_0_0_1px_rgba(77,158,255,0.15),0_24px_80px_-30px_rgba(77,158,255,0.2)]

    opacity-0
    translate-y-[20px]

    transition-all
    duration-[800ms]
    ease-[cubic-bezier(0.16,1,0.3,1)]

    data-[active=true]:opacity-100
    data-[active=true]:translate-y-0
  "
>
  {/* TOP GRADIENT LINE */}
  {/* <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4d9eff] to-transparent opacity-60" /> */}

  {/* RADIAL GLOW */}
  <div
    className="
      pointer-events-none

      absolute
      top-1/2
      left-1/2

      w-[500px]
      sm:w-[650px]
      lg:w-[800px]

      h-[250px]
      sm:h-[320px]
      lg:h-[400px]

      -translate-x-1/2
      -translate-y-1/2

      bg-[radial-gradient(ellipse,rgba(77,158,255,0.4)_0%,transparent_60%)]

      blur-[60px]
      opacity-40
    "
  />

  {/* INNER */}
  <div className="relative z-[2]">

    {/* EYEBROW */}
    <div
      className="
        flex items-center justify-center

        gap-[8px]
        sm:gap-[12px]

        mb-[20px]
        sm:mb-[24px]
      "
    >
      <div className="w-[18px] sm:w-[24px] h-[1px] bg-[#4d9eff]" />

      <span
        className="
          font-mono

          text-[9px]
          sm:text-[11px]

          tracking-[1.5px]
          sm:tracking-[2px]

          uppercase
          text-[#4d9eff]

          text-center
        "
      >
        HERE'S HOW WE KNOW
      </span>

      <div className="w-[18px] sm:w-[24px] h-[1px] bg-[#4d9eff]" />
    </div>

    {/* TEXT */}
    <p
      className="
        text-center

        max-w-[800px]
        mx-auto

        mb-[40px]
        sm:mb-[48px]
        lg:mb-[56px]

        text-[24px]
        sm:text-[32px]
        md:text-[38px]
        lg:text-[44px]

        leading-[1.15]

        font-semibold
        tracking-[-0.03em]
      "
    >
      <em className="font-serif italic text-[#4d9eff] font-normal">
        Eight years of paid lessons.
      </em>

      <br />

      <strong className="text-white font-semibold">
        Built into every site we ship.
      </strong>
    </p>

    {/* STATS GRID */}
    <div
      className="
        grid

        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3

        gap-[14px]
        sm:gap-[16px]

        max-w-[980px]
        mx-auto
      "
    >

      {[
        {
          value: "₹40Cr",
          accent: "+",
          label: "in ad spend managed",
          meta: "ACROSS META · GOOGLE · LINKEDIN",
        },
        {
          value: "60",
          accent: "+",
          label: "brands launched & scaled",
          meta: "D2C · SAAS · WELLNESS · BEAUTY",
        },
        {
          value: "8",
          accent: " yr",
          label: "of pattern recognition",
          meta: "SAME LESSONS, AGAIN & AGAIN",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="
            relative overflow-hidden text-center

            rounded-[16px]

            border border-[rgba(77,158,255,0.3)]

            bg-[rgba(8,8,10,0.6)]

            backdrop-blur-[8px]

            px-5
            sm:px-6
            lg:px-[28px]

            py-7
            sm:py-8
            lg:py-[36px]

            transition-all
            duration-300
            ease-[cubic-bezier(0.16,1,0.3,1)]

            hover:-translate-y-[2px]
            hover:border-[#4d9eff]

            hover:shadow-[0_20px_60px_-20px_rgba(77,158,255,0.3)]
          "
        >
          {/* TOP LINE */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4d9eff] to-transparent opacity-40" />

          {/* VALUE */}
          <div
            className="
              text-[44px]
              sm:text-[58px]
              md:text-[72px]
              lg:text-[88px]

              font-bold

              leading-[0.95]

              tracking-[-0.05em]

              mb-[10px]
              sm:mb-[12px]
            "
          >
            {item.value}

            <span className="text-[#4d9eff]">
              {item.accent}
            </span>
          </div>

          {/* LABEL */}
          <div
            className="
              text-[14px]
              sm:text-[15px]
              lg:text-[16px]

              text-[#cfcfd6]

              font-medium

              mb-[6px]
            "
          >
            {item.label}
          </div>

          {/* META */}
          <div
            className="
              font-mono

              text-[9px]
              sm:text-[10px]

              uppercase

              tracking-[1.2px]
              sm:tracking-[1.5px]

              text-[#6c6c78]

              break-words
            "
          >
            {item.meta}
          </div>
        </div>
      ))}

    </div>

    {/* BYLINE */}
    <div
      className="
        mt-[36px]
        sm:mt-[42px]
        lg:mt-[48px]

        pt-[24px]
        sm:pt-[28px]
        lg:pt-[32px]

        border-t border-[rgba(77,158,255,0.3)]

        text-center
      "
    >
      <p
        className="
          font-serif
          italic

          text-[15px]
          sm:text-[16px]
          lg:text-[17px]

          text-[#a8a8b3]

          leading-[1.6]
        "
      >
        We are the performance marketing team that{" "}
        <strong className="not-italic text-white font-medium">
          also builds the website
        </strong>
        .
        <br />
        That is the whole advantage.
      </p>
    </div>

  </div>
</div>
  );
}