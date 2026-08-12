export default function Hero() {
  return (
    <section
      id="how-we-think"
      className="
        relative
        text-[#e8e8ed]

        px-5
        sm:px-8
        md:px-10
        lg:px-[48px]

        max-w-[1200px]
        mx-auto

        pt-[20px]
        sm:pt-[50px]
        md:pt-[70px]
        lg:pt-[80px]

        pb-[80px]
        sm:pb-[60px]
        lg:pb-[90px]

        scroll-mt-3

        overflow-hidden
      "
    >
      {/* TOP BLUR GLOW */}
      <div
        className="
          absolute
          top-[-120px]
          left-1/2
          -translate-x-1/2

          w-[500px]
          h-[500px]

          rounded-full

          bg-[#4EA1FF]/10

          blur-[140px]

          pointer-events-none
          z-0
        "
      />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* TAG */}
        <div
          className="
            inline-flex
            items-center
            gap-2

            px-4
            py-2

            rounded-full

            border border-white/10

            bg-[#14141a66]
            backdrop-blur-md

            text-[10px]
            sm:text-[11px]

            uppercase
            tracking-[1.5px]

            text-[#a8a8b3]

            mb-[28px]
            sm:mb-[36px]

            animate-[fadeUp_0.8s_ease_forwards]
          "
        >
          <span className="w-[6px] h-[6px] rounded-full bg-[#4EA1FF] shadow-[0_0_10px_#4EA1FF]" />

          BLUVO STUDIO
        </div>

        {/* HEADING */}
        <h1
          className="
            text-white
            font-semibold

            text-[38px]
            leading-[1.08]

            sm:text-[58px]
            sm:leading-[1.05]

            md:text-[78px]
            md:leading-[1.02]

            lg:text-[124px]
            lg:leading-[117.8px]

            tracking-[-0.02em]
            lg:tracking-[-4.96px]

            mb-[28px]
            sm:mb-[32px]
            lg:mb-[36px]

            max-w-[1100px]
          "
        >
          <span className="inline-block animate-[fadeUp_0.7s_ease_forwards]">
            We think about{" "}
          </span>

          <span
            className="
              text-[#4EA1FF]

              inline-block

              animate-[fadeUp_0.9s_ease_forwards]
            "
          >
            websites
          </span>{" "}

          <span className="inline-block animate-[fadeUp_1.1s_ease_forwards]">
            differently.
          </span>
        </h1>

        {/* SUBHEADING */}
        <p
          className="
            text-[#a8a8b3]

            text-[15px]
            leading-[1.7]

            sm:text-[17px]

            md:text-[18px]

            lg:text-[22px]
            lg:leading-[30.8px]

            max-w-full
            sm:max-w-[620px]

            mb-[40px]
            sm:mb-[44px]
            lg:mb-[48px]

            animate-[fadeUp_1.3s_ease_forwards]

            opacity-0
          "
        >
          Most studios build websites.{" "}

          <span className="text-white font-medium">
            We build the thing between your ad and your bank account.
          </span>
        </p>

        {/* BUTTONS */}
        <div
          className="
            flex flex-col
            sm:flex-row

            items-stretch
            sm:items-center

            gap-4
            w-full
            sm:w-auto

            animate-[fadeUp_1.5s_ease_forwards]

            opacity-0
          "
        >
          {/* PRIMARY BUTTON */}
          <a
            href="#how-we-think"
            className="
              group

              flex items-center justify-center gap-2

              px-[24px] py-[14px]
              rounded-full

              bg-white text-[#08080a]

              text-[15px]
              font-medium
              leading-[22.5px]

              transition-all duration-300

              hover:bg-[#eaeaea]
              hover:-translate-y-[1px]

              w-full
              sm:w-fit
            "
          >
            Read how we think

            <span className="transition-transform duration-300 group-hover:translate-x-[3px]">
              →
            </span>
          </a>

          {/* SECONDARY BUTTON */}
          <a
            href="#work"
            className="
              flex items-center justify-center gap-2

              px-[24px] py-[14px]
              rounded-full

              bg-[#14141a66]
              border border-[#26262f]

              text-[#e8e8ed]

              text-[15px]
              font-medium
              leading-[22.5px]

              transition-all duration-300

              hover:bg-[#1c1c24]
              hover:border-[#3a3a46]

              w-full
              sm:w-fit
            "
          >
            See the work
          </a>
        </div>
      </div>
    </section>
  );
}