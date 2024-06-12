import Image from "next/image";
import { Inter } from "next/font/google";
import { Hero } from "@/components/Hero";
import { TracingBeam } from "@/components/ui/tracing-beam";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full py-2">
        <TracingBeam className="px-6">
          <Hero />
          <TechStack />
          <Projects />
          <Contact />
        </TracingBeam >
      </div>
    </main>
  );
}
