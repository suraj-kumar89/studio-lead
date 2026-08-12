import Credibility from "@/SharedComponent/Credibility";
import CTA from "@/SharedComponent/CTA";

import Diagnosis from "@/SharedComponent/Diagnosis";
import FAQ from "@/SharedComponent/FAQs";
import Footer from "@/SharedComponent/Footer";
import Framework from "@/SharedComponent/Framework";
import HeadStart from "@/SharedComponent/HeadStart";
import Hero from "@/SharedComponent/Hero";
import Honest from "@/SharedComponent/Honest";
import Interface from "@/SharedComponent/Intereface";
import LogoMarquee from "@/SharedComponent/Logomarquee";
import Process from "@/SharedComponent/Process";
import Toolkit from "@/SharedComponent/Toolkit";
import Work from "@/SharedComponent/Work";

export default function Home() {
  return (
    <main>
      <Hero/>
      <LogoMarquee/>
      <Diagnosis/>
      <HeadStart/>
      <Credibility/>
     
      <Framework/>
      <Work/>
      <Process/>
      <Toolkit/>
      <Interface/>
      <Honest/>
      <FAQ/>
      <CTA/>
       <Footer/>
    </main>
  );
}