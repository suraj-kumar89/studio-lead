"use client";

export default function Honest() {
  return (
    <section className="relative border-t border-white/10 py-[160px] md:py-[80px]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADER */}
        <div className="mb-[80px] md:mb-[48px] max-w-[900px]">
          <div className="flex items-center gap-3 text-[11px] tracking-[1.5px] text-[#6c6c78] uppercase mb-4">
            <div className="w-6 h-[1px] bg-white/20" />
            <span>/ 08</span>
            <span>Honest moment</span>
          </div>

          <h2 className="text-[44px] md:text-[32px] lg:text-[88px] font-semibold tracking-[-0.035em] leading-[1] mb-6">
            We're not for <em className="italic font-normal text-[#a8a8b3]">everyone.</em><br />
            And we're <span className="text-[#4D9EFF]">okay</span> with that.
          </h2>

          <p className="text-[18px] text-[#a8a8b3] leading-[1.5] max-w-[600px]">
            Telling you upfront saves us both a call.{" "}
            <strong className="text-white font-medium">Read both columns.</strong>
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-[48px]">

          {/* ✅ YES COLUMN */}
          <div className="relative p-[48px] md:p-[32px] rounded-[20px] border border-[#4D9EFF33] bg-[linear-gradient(180deg,rgba(77,158,255,0.04),rgba(12,12,15,0.5))] backdrop-blur-md hover:border-[#4D9EFF] transition">

            {/* HEADER */}
            <div className="mb-9 pb-6 border-b border-[#4D9EFF33]">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full border border-[#4D9EFF33] bg-[#4D9EFF0d] text-[11px] text-[#4D9EFF] tracking-[1.5px]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#4D9EFF] shadow-[0_0_8px_#4D9EFF]" />
                GREEN FLAGS
              </div>

              <h3 className="text-[28px] md:text-[22px] font-semibold">
                You'll <em className="text-[#4D9EFF] italic font-normal">like</em> us if...
              </h3>
            </div>

            {/* LIST */}
            <ul className="flex flex-col gap-2">
              {[
                "You see your website as a revenue asset, not a brochure.",
                "You'd rather build one thing really well than three things fast.",
                "You're okay with us pushing back when needed.",
                "You've thought about who's actually buying.",
                "You believe good design is a business decision.",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex gap-4 py-4 border-b border-white/10 last:border-none hover:pl-1 transition"
                >
                  <div className="w-6 h-6 flex items-center justify-center rounded-md bg-[#4D9EFF1a] border border-[#4D9EFF33] text-[#4D9EFF]">
                    ✓
                  </div>
                  <p className="text-[16px] md:text-[15px] text-white leading-[1.5]">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* ❌ NO COLUMN */}
          <div className="relative p-[48px] md:p-[32px] rounded-[20px] border border-red-400/20 bg-[linear-gradient(180deg,rgba(248,113,113,0.03),rgba(12,12,15,0.5))] backdrop-blur-md hover:border-red-400/40 transition">

            {/* HEADER */}
            <div className="mb-9 pb-6 border-b border-red-400/20">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full border border-red-400/20 bg-red-400/5 text-[11px] text-red-400 tracking-[1.5px]">
                <span className="w-[6px] h-[6px] rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.5)]" />
                RED FLAGS
              </div>

              <h3 className="text-[28px] md:text-[22px] font-semibold">
                We're <em className="text-red-400 italic font-normal">probably wrong</em> for you if...
              </h3>
            </div>

            {/* LIST */}
            <ul className="flex flex-col gap-2">
              {[
                "Budget is your only filter.",
                "You want a team that follows blindly.",
                "You haven't figured out what you're selling.",
                "You want 40 pages in 2 weeks.",
                "You think conversion is someone else's problem.",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex gap-4 py-4 border-b border-white/10 last:border-none hover:pl-1 transition"
                >
                  <div className="w-6 h-6 flex items-center justify-center rounded-md bg-red-400/10 border border-red-400/20 text-red-400">
                    ✕
                  </div>
                  <p className="text-[16px] md:text-[15px] text-white leading-[1.5]">
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* CLOSER */}
        <div className="text-center md:text-left max-w-[720px] mx-auto p-[36px] md:p-[24px] border border-white/10 rounded-[16px] bg-[#0f0f14] backdrop-blur-md">
          <p className="text-[18px] md:text-[16px] text-white leading-[1.5]">
            Felt seen by the right column?{" "}
            <em className="text-[#4D9EFF] italic">No hard feelings.</em><br />
            We'd rather{" "}
            <strong>point you to someone better</strong> than waste your time.
          </p>
        </div>

      </div>
    </section>
  );
}