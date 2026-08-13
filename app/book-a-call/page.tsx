import type { Metadata } from "next";
import Script from "next/script";
import "./book-a-call.css";
import Footer from "@/SharedComponent/Footer";

export const metadata: Metadata = {
  title: "Book a Call | Bluvo Studio",
  description:
    "Book a discovery call with Bluvo Studio to discuss your website, growth and digital project.",
};

export default function BookACallPage() {
  return (
    <main className="book-call-page">

      {/* ============================================
          BOOKING SECTION
      ============================================ */}

      <section className="book-demo-section">

        <div className="book-heading">
          <span className="book-eyebrow">
            LET&apos;S TALK
          </span>

          <h1>
            Book a <em>call.</em>
          </h1>

          <p>
            Tell us a little about what you&apos;re building.
            Pick a time that works for you and let&apos;s talk.
          </p>
        </div>

        {/* ============================================
            CALENDLY
        ============================================ */}

        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/shitanshu-digital/bluvo-studio-discovery-call"
        />

      </section>

      {/* Calendly Script */}

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    <Footer/>
    </main>
  );
}


