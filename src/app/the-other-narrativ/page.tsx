import type { Metadata } from "next";
import OtherNarrativ from "@/components/OtherNarrativ";

export const metadata: Metadata = {
  title: "the other narrativ. | narrativ.",
  description: "Stories beyond the brief. Editorial content from the narrativ. universe.",
};

export default function TheOtherNarrativPage() {
  return (
    <main className="min-h-screen bg-white">
      <OtherNarrativ />
    </main>
  );
}
