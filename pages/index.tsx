import Image from "next/image";
import { Inter } from "next/font/google";
import { Hero } from "@/components/Hero";
import About from "@/components/About";
import { TracingBeam } from "@/components/ui/tracing-beam";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <TracingBeam className="px-6">
        <div className="max-w-7xl w-full">
          <Hero />
          <About />
        </div>
      </TracingBeam >
    </main>
  );
}
