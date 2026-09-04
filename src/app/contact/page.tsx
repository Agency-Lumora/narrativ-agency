import { Suspense } from "react";
import Cta from "@/components/Cta";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-[76px]">
      <Suspense fallback={null}>
        <Cta />
      </Suspense>
    </div>
  );
}