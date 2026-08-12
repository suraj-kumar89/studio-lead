"use client";

export default function Interface() {
  return (
    <>
  {/* ===================================================== */}
  {/* ================= DESKTOP ONLY ====================== */}
  {/* ===================================================== */}

  <div className="hidden lg:block">
    <section className="relative border-t border-white/10 py-[160px]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADER */}
        <div className="mb-[64px] max-w-[900px]">

          <div className="flex items-center gap-3 text-[11px] tracking-[1.5px] text-[#6c6c78] uppercase mb-4">
            <div className="w-6 h-[1px] bg-white/20" />
            <span>/ 07</span>
            <span>The interface</span>
          </div>

          <h2 className="text-[40px] sm:text-[56px] lg:text-[76px] font-semibold tracking-[-0.03em] leading-[1.02] mb-6">
            Or, if it's{" "}
            <em className="text-[#a8a8b3] font-normal italic">
              easier,
            </em>{" "}
            here's how we{" "}
            <span className="text-[#4D9EFF]">
              build
            </span>
            .
          </h2>

          <p className="text-[18px] text-[#a8a8b3] leading-[1.55] max-w-[600px]">
            Same thinking. Different syntax.{" "}
            <strong className="text-white font-medium">
              For the founders who'd rather see a function than a slide deck.
            </strong>
          </p>
        </div>

        {/* CODE WINDOW */}
        <div className="rounded-[16px] border border-white/10 bg-[#0f0f14] overflow-hidden shadow-[0_24px_80px_-20px_rgba(0,0,0,0.6)]">

          {/* TOP BAR */}
          <div className="flex items-center justify-between px-[22px] py-[14px] border-b border-white/10 bg-gradient-to-b from-[#14141c99] to-[#0c0c0f99]">

            <div className="flex items-center gap-3">

              <div className="flex gap-[6px]">
                <div className="w-[11px] h-[11px] rounded-full bg-red-400/50" />
                <div className="w-[11px] h-[11px] rounded-full bg-yellow-400/50" />
                <div className="w-[11px] h-[11px] rounded-full bg-green-400/50" />
              </div>

              <div className="flex items-center gap-2 ml-2 text-[11px] px-3 py-1 bg-[#0f0f14] border border-white/10 rounded-t-md">
                <div className="w-3 h-3 bg-[#4D9EFF] rounded-sm" />
                build.ts
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-[1px] text-[#6c6c78] uppercase">
                @bluvo/studio · v1.0
              </span>

              <div className="w-[26px] h-[26px] flex items-center justify-center rounded-full border border-white/10 bg-[#141418] hover:bg-white hover:text-black transition">
                🐙
              </div>
            </div>
          </div>

          {/* CODE */}
          <div className="font-mono text-[15px] leading-[1.9] px-[48px] py-[36px] overflow-x-auto">

            {[
              "import { createBluvoSite } from '@bluvo/studio';",
              "",
              "// One call. We figure out the rest on the kickoff.",
              "const { site, revenue } = await createBluvoSite({",
              "",
              "// Who's actually buying.",
              "buyer: 'founders who got burned by their last agency',",
              "",
              "// Funnel job",
              "funnelJob: 'turn paid traffic into customers',",
              "friction: 'remove',",
              "loadTime: 'under 2s',",
              "",
              "// Stack",
              "stack: 'auto',",
              "",
              "// Ownership",
              "ownership: 'yours, all of it',",
              "revisions: 2,",
              "timeline: '21d',",
              "",
              "// What we refuse",
              "refuse: [",
              "'projects without a clear buyer',",
              "'40-page sites in 2 weeks',",
              "'race-to-the-bottom pricing'",
              "]",
              "});",
              "",
              "// → site.live = true",
              "// → revenue.delta = positive",
            ].map((line, i) => (
              <div
                key={i}
                className={`flex gap-[28px] ${
                  i === 6
                    ? "bg-[#4D9EFF0d] border-l-2 border-[#4D9EFF] pl-4 -ml-4"
                    : ""
                }`}
              >
                <span className="w-[28px] text-right text-[#6c6c78] text-[13px]">
                  {line ? i + 1 : ""}
                </span>

                <span className="whitespace-pre text-[#cfcfd6]">
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FOOT */}
        <div className="mt-8 flex items-center justify-between gap-4">

          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-2 px-3 py-1 border border-[#4D9EFF33] bg-[#4D9EFF0d] rounded-full text-[11px] text-[#4D9EFF]">
              <span className="w-[6px] h-[6px] bg-[#4D9EFF] rounded-full animate-pulse" />
              PRODUCTION-READY
            </span>

            <span className="text-[11px] uppercase text-[#6c6c78]">
              — No mock data. Real config from real projects.
            </span>
          </div>

          <a className="flex items-center gap-2 text-[#4D9EFF] text-sm hover:gap-3 transition-all">
            Run this in your project →
          </a>
        </div>

        {/* CLOSER */}
        <div className="mt-[80px] text-center max-w-[720px] mx-auto">

          <p className="text-[20px] font-medium text-white">
            It's just a function.{" "}
            <em className="text-[#4D9EFF] italic font-serif">
              Calling it is the hard part.
            </em>
          </p>

          <div className="mt-4 text-[11px] uppercase text-[#6c6c78]">
            — Most studios skip lines 4, 16, and 23
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

        border-t border-white/10

        py-20
        sm:py-24

        overflow-hidden
      "
    >
      <div
        className="
          max-w-[1200px]

          mx-auto

          px-5
          sm:px-8
        "
      >

        {/* HEADER */}
        <div className="mb-14 sm:mb-16">

          <div className="flex items-center gap-3 text-[10px] sm:text-[11px] tracking-[1.5px] text-[#6c6c78] uppercase mb-4">
            <div className="w-5 h-[1px] bg-white/20" />

            <span>/ 07</span>

            <span>The interface</span>
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
            Or, if it's{" "}
            <em className="text-[#a8a8b3] font-normal italic">
              easier,
            </em>{" "}
            here's how we{" "}
            <span className="text-[#4D9EFF]">
              build
            </span>
            .
          </h2>

          <p
            className="
              text-[15px]
              sm:text-[18px]

              text-[#a8a8b3]

              leading-[1.7]

              max-w-[600px]
            "
          >
            Same thinking. Different syntax.{" "}
            <strong className="text-white font-medium">
              For the founders who'd rather see a function than a slide deck.
            </strong>
          </p>
        </div>

        {/* STACKING CODE CARDS */}
       {/* SINGLE CODE CARD */}
<div className="relative">

  <div
    className="
      rounded-[24px]

      border border-white/10

      bg-[#0f0f14]

      overflow-hidden

      shadow-[0_24px_80px_-20px_rgba(0,0,0,0.6)]
    "
  >

    {/* TOP BAR */}
    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-gradient-to-b from-[#14141c99] to-[#0c0c0f99]">

      <div className="flex items-center gap-3">

        <div className="flex gap-[6px]">
          <div className="w-[10px] h-[10px] rounded-full bg-red-400/50" />
          <div className="w-[10px] h-[10px] rounded-full bg-yellow-400/50" />
          <div className="w-[10px] h-[10px] rounded-full bg-green-400/50" />
        </div>

        <div className="flex items-center gap-2 text-[10px] px-3 py-1 bg-[#0f0f14] border border-white/10 rounded-md">
          <div className="w-3 h-3 bg-[#4D9EFF] rounded-sm" />
          build.ts
        </div>
      </div>

      <span className="text-[9px] tracking-[1px] text-[#6c6c78] uppercase">
        v1.0
      </span>
    </div>

    {/* CODE */}
    <div className="font-mono text-[11px] sm:text-[13px] leading-[1.8] px-5 py-6 overflow-x-auto">

      {[
        "import { createBluvoSite } from '@bluvo/studio';",
        "",
        "// One call. We figure out the rest.",
        "const { site, revenue } = await createBluvoSite({",
        "",
        "buyer: 'founders who got burned',",
        "",
        "funnelJob: 'turn traffic into customers',",
        "friction: 'remove',",
        "loadTime: 'under 2s',",
        "",
        "timeline: '21d',",
        "});",
        "",
        "// → site.live = true",
      ].map((line, i) => (
        <div
          key={i}
          className={`flex gap-4 ${
            i === 5
              ? "bg-[#4D9EFF0d] border-l-2 border-[#4D9EFF] pl-3 -ml-3"
              : ""
          }`}
        >
          <span className="w-[18px] text-right text-[#6c6c78] text-[10px]">
            {line ? i + 1 : ""}
          </span>

          <span className="whitespace-pre text-[#cfcfd6]">
            {line}
          </span>
        </div>
      ))}
    </div>

  </div>
</div>

        {/* FOOT */}
        <div className="mt-10 flex flex-col gap-5 items-start">

          <div className="flex items-center gap-3 flex-wrap">

            <span className="flex items-center gap-2 px-3 py-1 border border-[#4D9EFF33] bg-[#4D9EFF0d] rounded-full text-[10px] sm:text-[11px] text-[#4D9EFF]">
              <span className="w-[6px] h-[6px] bg-[#4D9EFF] rounded-full animate-pulse" />
              PRODUCTION-READY
            </span>

            <span className="text-[10px] sm:text-[11px] uppercase text-[#6c6c78]">
              — No mock data. Real config from real projects.
            </span>
          </div>

          <a className="flex items-center gap-2 text-[#4D9EFF] text-sm">
            Run this in your project →
          </a>
        </div>

        {/* CLOSER */}
        <div className="mt-16 text-center max-w-[720px] mx-auto">

          <p className="text-[18px] sm:text-[20px] font-medium text-white">
            It's just a function.{" "}
            <em className="text-[#4D9EFF] italic font-serif">
              Calling it is the hard part.
            </em>
          </p>

          <div className="mt-4 text-[10px] sm:text-[11px] uppercase text-[#6c6c78]">
            — Most studios skip lines 4, 16, and 23
          </div>
        </div>

      </div>
    </section>
  </div>
</>
  );
}