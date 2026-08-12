"use client";

export default function CTA() {
    return (
        <section className="relative border-t border-white/10 py-[200px] md:py-[100px] overflow-hidden">

            {/* RADIAL GLOW */}
            <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(77,158,255,0.25),transparent_60%)] blur-[100px] opacity-50 pointer-events-none" />

            {/* GRID OVERLAY */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,black_20%,transparent_80%)]" />

            <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center">

                {/* TAG */}
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-[40px] rounded-full border border-[#4D9EFF33] bg-[#14141a99] backdrop-blur-md text-[11px] text-[#4D9EFF] tracking-[0.5px] font-mono">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#4D9EFF] shadow-[0_0_10px_#4D9EFF] animate-pulse" />
                    ENOUGH READING / LET'S TALK
                </div>

                {/* HEADLINE */}
                <h2 className="text-[48px] md:text-[36px] lg:text-[110px] font-semibold tracking-[-0.04em] leading-[0.98] mb-[32px]">
                    If you've read this <em className="italic font-normal text-[#a8a8b3]">far</em>,<br />
                    we should probably <span className="text-[#4D9EFF]">talk.</span>
                </h2>

                {/* SUBTEXT */}
                <p className="text-[20px] md:text-[17px] text-[#a8a8b3] leading-[1.5] max-w-[620px] mx-auto mb-[56px] md:mb-[36px]">
                    <strong className="text-white font-medium">20 minutes.</strong> No pitch deck, no follow-up sequence, no pressure.
                    Just a real conversation about your business and whether we're the right people to build for it.
                </p>

                {/* BUTTONS */}
                <div className="flex flex-row justify-center items-center gap-4 mb-[48px] flex-wrap">

                    {/* PRIMARY */}
                    <a
                        href="https://cal.com/shitanshu"
                        target="_blank"
                        className="
      group
      px-8 py-4 rounded-full
      bg-white text-black
      font-semibold text-[16px]
      flex items-center justify-center gap-2
      transition-all duration-300
      hover:-translate-y-[2px]
      hover:shadow-[0_12px_36px_rgba(255,255,255,0.2)]
    "
                    >
                        Book a call
                        <svg
                            viewBox="0 0 14 14"
                            className="w-[14px] transition-transform duration-200 group-hover:translate-x-[3px]"
                            fill="none"
                        >
                            <path
                                d="M2 7h10m0 0L7 2m5 5L7 12"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </svg>
                    </a>

                    {/* SECONDARY */}
                    <a
                        href="mailto:hello@bluvo.io"
                        className="
                        px-8 py-4 rounded-full
      bg-[#14141a99] backdrop-blur-md
      border border-white/10
      text-white font-medium text-[16px]
      flex items-center justify-center
      transition-all duration-300
      hover:bg-[#14141acc]
      hover:border-white/20
    "
                    >
                        hello@bluvo.io
                    </a>

                </div>
                {/* TRUST ROW */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-4 pt-[32px] md:pt-[24px] border-t border-white/10 max-w-[720px] mx-auto">

                    {[
                        "20-MIN DISCOVERY CALL",
                        "REAL NUMBER, NOT AN ESTIMATE",
                        "NO PITCH, NO PRESSURE",
                    ].map((text, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 text-[11px] md:text-[10px] uppercase tracking-[1px] text-[#6c6c78] font-mono"
                        >
                            <span className="w-[16px] h-[16px] rounded-full bg-[#4D9EFF1a] border border-[#4D9EFF33] flex items-center justify-center text-[#4D9EFF]">
                                <svg viewBox="0 0 16 16" className="w-[8px] h-[8px] stroke-[2.5]">
                                    <path d="M3 8l3.5 3.5L13 5" fill="none" stroke="currentColor" />
                                </svg>
                            </span>
                            {text}
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}