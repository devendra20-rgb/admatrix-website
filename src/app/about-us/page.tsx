// app/about/page.tsx
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import TeamValues from "@/components/about/TeamValues";
import JoinUsCTA from "@/components/about/JoinUsCTA";

export const metadata = {
  title: "About 5th Element | Innovative Tech Solutions",
  description: "Discover our mission, values, journey, and what drives us to empower businesses with next-gen technology.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">
      <AboutHero />
      <OurStory />
      {/* <TeamValues /> */}
      <JoinUsCTA />
    </div>
  );
}