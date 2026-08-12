"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "How is this different from a freelancer or a cheaper agency?",
      a: "They optimise for the deliverable. We optimise for whether it makes you money.",
    },
    {
      q: "What if I don't like the design?",
      a: "Two revision rounds. We get it right.",
    },
    {
      q: "Do I own everything when we're done?",
      a: "All of it. No vendor lock-in.",
    },
    {
      q: "Can you work with our existing brand?",
      a: "Yes, or we build one with you.",
    },
    {
      q: "What does this cost?",
      a: "Depends on scope. Real number on first call.",
    },
    {
      q: "How fast can you start?",
      a: "1–2 weeks from contract.",
    },
    {
      q: "Do you maintain the site?",
      a: "Yes, but you won’t need us.",
    },
  ];

  return (
    <section className="relative border-t border-white/10 py-[160px] md:py-[80px]">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-[96px] md:gap-[48px]">

          {/* LEFT */}
          <div className="lg:sticky top-[120px]">

            <div className="text-[11px] tracking-[1.5px] text-[#6c6c78] uppercase mb-4">
              / 09 Questions, answered
            </div>

            <h2 className="text-[40px] md:text-[32px] lg:text-[68px] font-semibold tracking-[-0.035em] leading-[1] mb-6 mt-8 md:mt-0">
              What people <em className="italic text-[#a8a8b3] font-normal">ask</em> before they{" "}
              <span className="text-[#4D9EFF]">sign.</span>
            </h2>

            <p className="text-[16px] text-[#a8a8b3] mb-8 max-w-[360px]">
              The seven questions every founder asks.
            </p>

            <div className="p-5 border border-white/10 rounded-xl bg-[#0f0f14] max-w-[360px]">
              <p className="text-[14px] text-[#6c6c78] mb-3">
                <strong className="text-white">Got a different one?</strong>
              </p>

              <a className="text-[#4D9EFF] text-sm flex items-center gap-2 hover:gap-3 transition">
                hello@bluvo.io →
              </a>
            </div>

          </div>

          {/* RIGHT */}
          <div className="border-t border-white/10">

            {faqs.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={i}
                  className={`
                    border-b border-white/10
                    ${isOpen ? "bg-[#0f0f14]" : "hover:bg-[#14141c33]"}
                    transition
                  `}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex justify-between items-start gap-8 px-6 py-7 md:px-4 md:py-5 text-left"
                  >
                    <div className="flex gap-4 flex-1">

                      <span className={`text-[11px] tracking-[1.5px] ${
                        isOpen ? "text-[#4D9EFF]" : "text-[#6c6c78]"
                      }`}>
                        / {String(i + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[18px] md:text-[16px] font-medium">
                        {item.q}
                      </span>
                    </div>

                    {/* ICON */}
                    <div
                      className={`
                        w-7 h-7 rounded-full border flex items-center justify-center
                        ${isOpen ? "bg-[#4D9EFF] border-[#4D9EFF]" : "border-white/20"}
                      `}
                    >
                      <div className="relative w-3 h-3">
                        <span className={`absolute w-full h-[1.5px] bg-white top-1/2 -translate-y-1/2`} />
                        <span className={`absolute h-full w-[1.5px] bg-white left-1/2 -translate-x-1/2 ${
                          isOpen ? "scale-y-0" : ""
                        } transition`} />
                      </div>
                    </div>

                  </button>

                  {/* ANSWER */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-[300px]" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 md:px-4 pb-8 pl-[72px] md:pl-[60px]">
                      <p className="text-[16px] md:text-[15px] text-[#a8a8b3] leading-[1.6]">
                        {item.a}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}