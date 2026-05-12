// app/careers/page.tsx
import CareersHero from "@/components/careers/CareersHero";
import CareerForm from "@/components/careers/CareerForm";

export const metadata = {
  title: "Careers | Join the Admatrix Team",
  description: "Shape the future of advertising and technology. Explore open roles and apply to join our innovative team.",
};

export default function CareersPage() {
  return (
    <main className="bg-white">
      <CareersHero />
      {/* <div className="relative z-20 -mt-20 pb-24"> */}
        <CareerForm />
      {/* </div> */}
    </main>
  );
}