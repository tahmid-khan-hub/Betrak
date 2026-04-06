import ScrollAnimate from "@/app/hooks/ScrollAnimate";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <ScrollAnimate direction="up"><div className="flex flex-col items-center gap-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 px-8 py-16 text-center">

          {/* Badge */}
          <div className="flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-300">
              Try it for free
            </span>
          </div>

          {/* Heading */}
          <h2 className="jakartaSans text-4xl font-bold text-gray-50">
            Ready to find out where{" "}
            <span className="bg-linear-to-r from-indigo-400 to-indigo-700 bg-clip-text text-transparent">
              you stand?
            </span>
          </h2>

          {/* Subtext */}
          <p className="max-w-xl text-gray-400 mb-3">
            Answer a few honest questions and let Betrak determine your addiction level, along with tips to help you take back control.
          </p>

          {/* Button */}
          <Link href={"/assessment"}><Button className={"bg-indigo-500/70 text-white hover:bg-indigo-600/70 px-8 py-6 text-md font-semibold"}>Take the Free Test<span className="transition-transform group-hover:translate-x-1">→</span></Button></Link>

        </div></ScrollAnimate>
      </div>
    </section>
  );
};

export default CTA;