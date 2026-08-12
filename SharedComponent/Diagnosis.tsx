export default function Diagnosis() {
  return (
    <section
      id="diagnosis"
      className="
        py-[50px]
        sm:py-[60px]
        lg:py-[60px]
      "
    >
      <div
        className="
          max-w-[1200px]
          mx-auto

          px-5
          sm:px-8
          md:px-10
          lg:px-[48px]
        "
      >
        {/* HEADING */}
        <h2
          className="
            text-white
            font-semibold

            text-[34px]
            leading-[1.1]

            sm:text-[52px]
            sm:leading-[1.08]

            md:text-[62px]

            lg:text-[76px]
            lg:leading-[77.52px]

            tracking-[-0.02em]
            lg:tracking-[-2.28px]

            mb-[50px]
            sm:mb-[60px]
            lg:mb-[80px]
          "
        >
          Three kinds of websites.
          <br />
          Only <span className="text-[#4D9EFF]">one</span> makes money.
        </h2>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3

            gap-4
            sm:gap-5
          "
        >
          {/* CARD 1 */}
          <div
            className="
              bg-[#0f0f1499]
              border border-[#34343f]
              rounded-[16px]

              px-6 py-8
              sm:px-7 sm:py-9
              lg:px-[32px] lg:py-[40px]

              text-[#e8e8ed]
            "
          >
            {/* TAG */}
            <div className="flex items-center gap-[8px] text-[11px] tracking-[1.5px] uppercase text-[#6c6c78] mb-[24px]">
              <span className="w-[6px] h-[6px] bg-red-400 rounded-full"></span>
              KIND / 01
            </div>

            {/* TITLE */}
            <h3
              className="
                text-white
                font-semibold

                text-[22px]
                sm:text-[24px]

                tracking-[-0.48px]
                leading-[1.3]

                mb-[8px]
              "
            >
              Built by designers.
            </h3>

            {/* SUBTITLE */}
            <p
              className="
                text-[#a8a8b3]

                leading-[24px]

                text-[15px]
                sm:text-[16px]

                mb-[32px]
              "
            >
              Wins awards. Looks great in a portfolio. Converts at 0.6%.
            </p>

            {/* SLIDER */}
            <div>
              <div className="h-[4px] bg-[#111116] rounded-[2px] overflow-hidden">
                <div className="h-full w-[20%] bg-[#6c6c78] rounded-[2px]" />
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="
              bg-[#0f0f1499]
              border border-[#34343f]
              rounded-[16px]

              px-6 py-8
              sm:px-7 sm:py-9
              lg:px-[32px] lg:py-[40px]

              text-[#e8e8ed]
            "
          >
            <div className="flex items-center gap-[8px] text-[11px] tracking-[1.5px] uppercase text-[#6c6c78] mb-[24px]">
              <span className="w-[6px] h-[6px] bg-yellow-400 rounded-full"></span>
              KIND / 02
            </div>

            <h3
              className="
                text-white
                font-semibold

                text-[22px]
                sm:text-[24px]

                tracking-[-0.48px]
                leading-[1.3]

                mb-[8px]
              "
            >
              Built by developers.
            </h3>

            <p
              className="
                text-[#a8a8b3]

                leading-[24px]

                text-[15px]
                sm:text-[16px]

                mb-[32px]
              "
            >
              Loads fast. Code is clean. Reads like a brochure.
            </p>

            <div>
              <div className="h-[4px] bg-[#111116] rounded-[2px] overflow-hidden">
                <div className="h-full w-[50%] bg-[#6c6c78] rounded-[2px]" />
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="
              bg-[linear-gradient(rgba(77,158,255,0.06),rgba(15,15,20,0.6))]
              border border-[#4D9EFF]
              rounded-[16px]

              px-6 py-8
              sm:px-7 sm:py-9
              lg:px-[32px] lg:py-[40px]

              text-[#e8e8ed]

              shadow-[0_0_0_1px_rgba(77,158,255,0.25)]

              md:col-span-2
              lg:col-span-1
            "
          >
            <div className="flex items-center gap-[8px] text-[11px] tracking-[1.5px] uppercase text-[#4D9EFF] mb-[24px]">
              <span className="w-[6px] h-[6px] bg-[#4D9EFF] rounded-full"></span>
              KIND / 03
            </div>

            <h3
              className="
                text-white
                font-semibold

                text-[22px]
                sm:text-[24px]

                tracking-[-0.48px]
                leading-[1.3]

                mb-[8px]
              "
            >
              Built by people who run paid traffic.
            </h3>

            <p
              className="
                text-[#cfcfd6]

                leading-[24px]

                text-[15px]
                sm:text-[16px]

                mb-[32px]
              "
            >
              Knows who's buying. Removes the friction. Makes money.
            </p>

            <div>
              <div className="h-[4px] bg-[#111116] rounded-[2px] overflow-hidden">
                <div className="h-full w-[90%] bg-[#4D9EFF] rounded-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}