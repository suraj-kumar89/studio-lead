"use client";
import {
  SiNextdotjs,
  SiShopify,
  SiReact,
  SiWordpress,
} from "react-icons/si";
export default function Toolkit() {
  return (
    <section className="relative border-t border-white/10 py-[60px]">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADER */}
        <div className="mb-[80px] max-w-[800px]">
          <div className="flex items-center gap-3 text-[11px] tracking-[1.5px] text-[#6c6c78] uppercase mb-4">
            <div className="w-6 h-[1px] bg-white/20" />
            <span>/ 06</span>
            <span>The toolkit</span>
          </div>

          <h2 className="text-[40px] sm:text-[56px] lg:text-[68px] font-semibold tracking-[-0.03em] leading-[1.02] mb-6">
            Four stacks. Nine industries.{" "}
            <span className="text-[#4D9EFF]">One standard.</span>
          </h2>

          <p className="text-[18px] text-[#a8a8b3] max-w-[560px]">
            We build on what fits your business, not what's easiest for us.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-4 mb-[64px]">

          {/* LEFT COLUMN */}
          <div className="relative rounded-[20px] border border-white/10 bg-[rgba(12,12,15,0.5)] backdrop-blur-md p-[40px] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* HEADER */}
            <div className="mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-2 text-[11px] tracking-[1.5px] text-[#4D9EFF] uppercase mb-4">
                <div className="w-[6px] h-[6px] rounded-full bg-[#4D9EFF] shadow-[0_0_8px_#4D9EFF]" />
                STACKS WE BUILD ON
              </div>

              <h3 className="text-[28px] font-semibold mb-2">
                Fluent in four.
              </h3>

              <p className="text-[#6c6c78] text-[15px]">
                Pick what fits. We'll tell you what doesn't.
              </p>
            </div>

            {/* STACK LIST */}
            <div className="flex flex-col gap-3">

              {[
                {
                  name: "Next.js",
                  desc: "Our default. Fast, SEO-friendly, scales with you.",
                  tag: "DEFAULT",
                  color: "#ffffff",
                },
                {
                  name: "Shopify",
                  desc: "For D2C brands. Custom themes, not template clones.",
                  tag: "D2C",
                  color: "#95BF47",
                },
                {
                  name: "React",
                  desc: "For complex apps and dashboards. Speed and interactivity.",
                  tag: "APPS",
                  color: "#61DAFB",
                },
                {
                  name: "WordPress",
                  desc: "For content-heavy sites. Easy to edit without a developer.",
                  tag: "CONTENT",
                  color: "#21759B",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    flex items-center gap-5 p-[16px] rounded-[12px]
                    border border-transparent
                    transition-all duration-300
                    hover:bg-[rgba(20,20,28,0.5)]
                    hover:border-white/20
                    hover:translate-x-[2px]
                  "
                >
                  {/* LOGO */}
                  <div className="w-[44px] h-[44px] flex items-center justify-center rounded-[10px] bg-[#141418] border border-white/10 text-[#a8a8b3]">
                    {item.name === "Next.js" && <SiNextdotjs />}
                    {item.name === "Shopify" && <SiShopify />}
                    {item.name === "React" && <SiReact />}
                    {item.name === "WordPress" && <SiWordpress />}
                  </div>

                  {/* INFO */}
                  <div className="flex-1">
                    <div className="text-[17px] font-semibold mb-1">
                      {item.name}
                    </div>
                    <div className="text-[13px] text-[#6c6c78]">
                      {item.desc}
                    </div>
                  </div>

                  {/* TAG */}
                  <div
                    className={`
                      text-[10px] px-2 py-1 rounded-md border
                      ${
                        item.tag === "DEFAULT"
                          ? "text-[#4D9EFF] border-[#4D9EFF33] bg-[#4D9EFF0d]"
                          : "text-[#6c6c78] border-white/10"
                      }
                    `}
                  >
                    {item.tag}
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative rounded-[20px] border border-white/10 bg-[rgba(12,12,15,0.5)] backdrop-blur-md p-[40px] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* HEADER */}
            <div className="mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center gap-2 text-[11px] tracking-[1.5px] text-[#4D9EFF] uppercase mb-4">
                <div className="w-[6px] h-[6px] rounded-full bg-[#4D9EFF]" />
                WHERE WE'VE BUILT
              </div>

              <h3 className="text-[28px] font-semibold mb-2">
                Nine industries deep.
              </h3>

              <p className="text-[#6c6c78] text-[15px]">
                Different categories. Same standard.
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="p-4 bg-[#141418] border border-white/10 rounded-[10px]">
                <div className="text-[32px] font-bold">
                  68<span className="text-[#4D9EFF]">+</span>
                </div>
                <div className="text-[10px] text-[#6c6c78] uppercase">
                  SITES SHIPPED
                </div>
              </div>

              <div className="p-4 bg-[#141418] border border-white/10 rounded-[10px]">
                <div className="text-[32px] font-bold">9</div>
                <div className="text-[10px] text-[#6c6c78] uppercase">
                  INDUSTRIES
                </div>
              </div>
            </div>

            {/* CHIPS */}
            <div className="flex flex-wrap gap-2">
              {[
                "D2C & Ecommerce",
                "SaaS & Tech",
                "Health & Wellness",
                "EdTech",
                "Real Estate",
                "Professional Services",
                "Beauty & Personal Care",
                "Fashion & Lifestyle",
                "Anything that sells online",
              ].map((chip, i) => (
                <div
                  key={i}
                  className="
                    flex items-center gap-2 px-4 py-2 rounded-full
                    border border-white/10 bg-[#141418]
                    text-[14px] text-[#a8a8b3]
                    hover:border-[#4D9EFF33]
                    hover:bg-[#4D9EFF0d]
                    hover:text-white
                    transition-all duration-200
                  "
                >
                  <span className="text-[11px] text-[#6c6c78]">
                    / {String(i + 1).padStart(2, "0")}
                  </span>
                  {chip}
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className="text-center py-[32px] border-y border-white/10 rounded-[16px] bg-[#0f0f14] backdrop-blur-md">
          <p className="text-[17px] text-[#a8a8b3]">
            Yours not on the list?{" "}
            <span className="text-[#4D9EFF] font-medium">
              The thinking translates.
            </span>
          </p>

          <div className="mt-2 text-[11px] uppercase tracking-[1px] text-[#6c6c78]">
            — We'll figure out the right stack on the first call
          </div>
        </div>

      </div>
    </section>
  );
}