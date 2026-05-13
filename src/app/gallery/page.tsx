// app/gallery/page.tsx
import GalleryHero from "@/components/gallery/GalleryHero";
import FilterableMasonry from "@/components/gallery/FilterableMasonry";
import JustifiedGallery from "@/components/gallery/JustifiedGallery";
// import ServiceCTA from "@/components/services/ServiceCTA";
import JoinUsCTA from "@/components/about/JoinUsCTA";

export const metadata = {
  title: "Gallery | Fifth Element Visual Journey",
  description: "Explore our visual archive of successful brand activations, corporate events, and impactful outdoor advertising.",
};

export default function GalleryPage() {
  return (
    <main className="bg-white">
      {/* 1. Black Hero Section */}
      <GalleryHero />
      
      {/* 2. Interactive Filterable Gallery */}
      <FilterableMasonry />
      
      {/* 3. Detailed Justified Section with Story */}
      <JustifiedGallery />
      <JoinUsCTA />
      
      {/* 4. Common CTA */}
      {/* <ServiceCTA /> */}
    </main>
  );
}