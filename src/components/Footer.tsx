import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white/50 py-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold font-heading text-white">
          narrativ<span className="text-brand-red">.</span>
        </div>
        <div className="flex gap-8 text-sm uppercase tracking-widest font-medium">
          <Link href="https://www.instagram.com/narrativ._/" target="_blank" className="hover:text-white transition-colors">
            Instagram
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            LinkedIn
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Twitter
          </Link>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} narrativ. All rights reserved.
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-12 mt-8 pt-6 border-t border-white/10">
        <p className="text-center text-xs uppercase tracking-widest text-white/30">
          A Product by <span className="text-white/60 font-bold">Lumora</span>
        </p>
      </div>
    </footer>
  );
}
