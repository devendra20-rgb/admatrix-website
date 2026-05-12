// app/services/page.tsx
import ServicesHero from "@/components/services/ServicesHero";
import BrandingPromotion from "@/components/services/BrandingPromotion";
import EventActivation from "@/components/services/EventActivation";
import OutdoorAds from "@/components/services/OutdoorAds";
// import ServiceCTA from "@/components/services/ServiceCTA";
import JoinUsCTA from "@/components/about/JoinUsCTA";
import AllServices from "@/components/services/AllServices";

export const metadata = {
  title: "Our Services | Admatrix Advertising & Tech",
  description: "Explore our expertise in Branding, Event Activation, and Outdoor Advertising designed for high-impact growth.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white text-gray-900">
      <ServicesHero />
      <AllServices />
      {/* <BrandingPromotion />
      <EventActivation />
      <OutdoorAds /> */}
      <JoinUsCTA />
      {/* <ServiceCTA /> */}
    </div>
  );
}