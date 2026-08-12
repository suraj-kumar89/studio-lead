"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="
        relative
        z-10

        border-t border-white/10

        bg-[#08080a99]

        backdrop-blur-md

        py-16
        sm:py-20
        lg:py-[80px]

        pb-8
        sm:pb-10
        lg:pb-[32px]

        overflow-hidden
      "
    >
      <div
        className="
          max-w-[1200px]

          mx-auto

          px-5
          sm:px-8
          lg:px-6
        "
      >

        {/* ================================================= */}
        {/* ===================== TOP ======================= */}
        {/* ================================================= */}

        <div
          className="
            grid

            grid-cols-1
            lg:grid-cols-[2fr_1fr_1fr_1fr]

            gap-12
            sm:gap-14
            lg:gap-[48px]

            mb-16
            sm:mb-20
            lg:mb-[80px]
          "
        >

          {/* ================================================= */}
          {/* ==================== BRAND ====================== */}
          {/* ================================================= */}

          <div
            className="
              max-w-full
              lg:max-w-[320px]
            "
          >

            {/* LOGO */}
            <div className="flex items-center gap-[10px] mb-[20px]">

              <div
                className="
                  relative

                  w-[110px]
                  sm:w-[120px]

                  h-[36px]
                  sm:h-[40px]
                "
              >
                <Image
                  src="/logo1.png"
                  alt="Bluvo Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* TAGLINE */}
            <p
              className="
                italic
                font-serif

                text-[16px]
                sm:text-[17px]
                lg:text-[18px]

                leading-[1.5]

                text-[#a8a8b3]

                mb-[24px]
              "
            >
              We make websites we'd actually visit. A part of{" "}
              <strong className="text-white font-medium">
                Bluvo Digital Pvt Ltd.
              </strong>
            </p>

            {/* META */}
            <div className="text-[10px] sm:text-[11px] uppercase tracking-[1px] text-[#6c6c78] font-mono">

              <div className="flex items-start sm:items-center gap-2 flex-wrap">

                <span className="w-[4px] h-[4px] mt-[6px] sm:mt-0 rounded-full bg-[#4D9EFF] shadow-[0_0_6px_#4D9EFF]" />

                <span className="leading-[1.6]">
                  BLUVO STUDIO · BUILDING IN INDIA · SHIPPING WORLDWIDE
                </span>

              </div>
            </div>

          </div>

          {/* ================================================= */}
          {/* ================= MOBILE/TABLET ================= */}
          {/* ================================================= */}

          <div
            className="
              grid

              grid-cols-2
              sm:grid-cols-2
              lg:grid-cols-3

              gap-10
              sm:gap-12
              lg:gap-[48px]

              lg:col-span-3

              w-full
            "
          >

            {/* ================================================= */}
            {/* ==================== STUDIO ===================== */}
            {/* ================================================= */}

            <div>

              <div
                className="
                  text-[10px]
                  sm:text-[11px]

                  uppercase

                  tracking-[1.5px]

                  text-[#6c6c78]

                  font-mono

                  mb-[18px]
                  sm:mb-[20px]
                "
              >
                Studio
              </div>

              <ul className="flex flex-col gap-[12px]">

                {[
                  { name: "Work", href: "#work" },
                  { name: "Thinking", href: "#thinking" },
                  { name: "Process", href: "#process" },
                  { name: "FAQ", href: "#faq" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="
                        group

                        flex items-center gap-2

                        text-[14px]

                        text-[#a8a8b3]

                        hover:text-white

                        transition
                      "
                    >
                      {link.name}

                      <svg
                        viewBox="0 0 12 12"
                        className="w-[10px] opacity-0 group-hover:opacity-100 transition"
                        fill="none"
                      >
                        <path
                          d="M3 9L9 3M9 3H4M9 3V8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                  </li>
                ))}

              </ul>
            </div>

            {/* ================================================= */}
            {/* ==================== CONNECT ==================== */}
            {/* ================================================= */}

            <div>

              <div
                className="
                  text-[10px]
                  sm:text-[11px]

                  uppercase

                  tracking-[1.5px]

                  text-[#6c6c78]

                  font-mono

                  mb-[18px]
                  sm:mb-[20px]
                "
              >
                Connect
              </div>

              <ul className="flex flex-col gap-[12px]">

                {[
                  { name: "hello@bluvo.io", href: "mailto:hello@bluvo.io" },
                  { name: "LinkedIn", href: "https://linkedin.com/company/bluvo-digital" },
                  { name: "Instagram", href: "https://instagram.com/bluvo.studio" },
                  { name: "Behance", href: "https://behance.net/bluvo" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="
                        group

                        flex items-center gap-2

                        text-[14px]

                        text-[#a8a8b3]

                        hover:text-white

                        transition
                      "
                    >
                      {link.name}

                      <svg
                        viewBox="0 0 12 12"
                        className="w-[10px] opacity-0 group-hover:opacity-100 transition"
                        fill="none"
                      >
                        <path
                          d="M3 9L9 3M9 3H4M9 3V8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                  </li>
                ))}

              </ul>
            </div>

            {/* ================================================= */}
            {/* ================= BLUVO DIGITAL ================= */}
            {/* ================================================= */}

            <div
              className="
                col-span-2
                sm:col-span-2
                lg:col-span-1

                flex
                flex-col

                items-center
                lg:items-start

                text-center
                lg:text-left
              "
            >

              <div
                className="
                  text-[10px]
                  sm:text-[11px]

                  uppercase

                  tracking-[1.5px]

                  text-[#6c6c78]

                  font-mono

                  mb-[18px]
                  sm:mb-[20px]
                "
              >
                Bluvo Digital
              </div>

              <ul className="flex flex-col gap-[12px]">

                {[
                  { name: "Performance Marketing", href: "https://bluvodigital.com" },
                  { name: "Google Ads", href: "https://bluvodigital.com/google-ads" },
                  { name: "Meta Ads", href: "https://bluvodigital.com/meta-ads" },
                  { name: "SEO", href: "https://bluvodigital.com/seo" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group

                        flex items-center gap-2

                        text-[14px]

                        text-[#a8a8b3]

                        hover:text-white

                        transition
                      "
                    >
                      {link.name}

                      <svg
                        viewBox="0 0 12 12"
                        className="w-[10px] opacity-0 group-hover:opacity-100 transition"
                        fill="none"
                      >
                        <path
                          d="M3 9L9 3M9 3H4M9 3V8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                  </li>
                ))}

              </ul>
            </div>

          </div>
        </div>

        {/* ================================================= */}
        {/* ==================== BOTTOM ===================== */}
        {/* ================================================= */}

        <div
          className="
            pt-8
            sm:pt-[32px]

            border-t border-white/10

            flex
            flex-col
            sm:flex-col
            lg:flex-row

            items-start
            lg:items-center

            gap-5
            sm:gap-6
            lg:gap-[24px]
          "
        >

          {/* LEFT */}
          <div
            className="
              text-[12px]
              sm:text-[13px]

              text-[#6c6c78]

              leading-[1.6]
            "
          >
            © 2025 Bluvo Digital Pvt Ltd. All rights reserved.
          </div>

          {/* RIGHT */}
          <div
            className="
              lg:ml-auto

              italic
              font-serif

              text-[14px]
              sm:text-[15px]

              text-[#a8a8b3]
            "
          >
            Built by people who{" "}
            <span className="text-[#4D9EFF]">
              care.
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}