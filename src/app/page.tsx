"use client";   

import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import DeliveryAndOffer from "../components/DeliveryandOffer";
import Metrics from "@/components/Metrics";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import HomeServices from "@/components/HomeServices";
import HomeGalleryPreview from "@/components/gallery/HomeGalleryPreview";
import JoinUsCTA from "@/components/about/JoinUsCTA";
import OurThoughts from "@/components/OurThoughts";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <TrustedBy /> */}
      <HomeServices />
      
      <DeliveryAndOffer />
      {/* <TechShowcase /> */}
      <Solutions />
      {/* <Metrics /> */}
      {/* <Testimonials /> */}
       {/* <CaseStudies /> */}
      <HomeGalleryPreview />
      <OurThoughts />

      {/* <ValueProposition /> */}
     
      <JoinUsCTA />
    </>
  );
}
