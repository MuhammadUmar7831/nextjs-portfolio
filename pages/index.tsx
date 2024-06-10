import Image from "next/image";
import { Inter } from "next/font/google";
import { Hero } from "@/components/Hero";
import { TracingBeam } from "@/components/ui/tracing-beam";
import TechStack from "@/components/TechStack/TechStack";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <TracingBeam className="px-6">
          <Hero />
          <TechStack />
        </TracingBeam >
      </div>
    </main>
  );
}
