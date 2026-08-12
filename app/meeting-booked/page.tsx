import type { Metadata } from "next";
import Link from "next/link";
import "./thank-you.css";
import Footer from "@/SharedComponent/Footer";

export const metadata: Metadata = {
  title: "Thank You | Bluvo Studio",
  description:
    "Your meeting has been booked with Bluvo Studio. We look forward to connecting with you soon.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="thankyou-page">

      {/* ============================================
          THANK YOU SECTION
      ============================================ */}

      <section className="thankyou-section">

        <div className="thankyou-content">

          <div className="thankyou-label">
            BOOKING CONFIRMED
          </div>

          <h1>
            Thank <em>You!</em>
          </h1>

          <p>
            Your meeting has been booked.
            I look forward to connecting with you soon.
          </p>

          <Link
            href="/"
            className="thankyou-btn"
          >
            Back to Home
          </Link>

        </div>

      </section>

      <Footer />

    </main>
  );
}