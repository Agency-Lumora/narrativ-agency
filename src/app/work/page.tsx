import Services from "@/components/Services";
import Work from "@/components/Work";
import BuildTogetherCTA from "@/components/BuildTogetherCTA";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-[76px]">
      <Services />
      <Work />
      <BuildTogetherCTA />
    </main>
  );
}