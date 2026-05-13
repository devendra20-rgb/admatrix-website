import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import BrandingDetailed from "@/components/case-studies/BrandingDetailed";
import EventsDetailed from "@/components/case-studies/EventsDetailed";
import OutdoorDetailed from "@/components/case-studies/OutdoorDetailed";
// import ServiceCTA from "@/components/services/ServiceCTA";
import JoinUsCTA from "@/components/about/JoinUsCTA";

export default function CaseStudiesPage() {
  return (
    <main className="bg-white">
      <CaseStudiesHero />
      <BrandingDetailed />
      <EventsDetailed />
      <OutdoorDetailed />
      <JoinUsCTA />
      {/* <ServiceCTA /> */}
    </main>
  );
}