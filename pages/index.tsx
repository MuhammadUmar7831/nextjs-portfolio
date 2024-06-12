import Image from "next/image";
import { Inter } from "next/font/google";
import { Hero } from "@/components/Hero";
import { TracingBeam } from "@/components/ui/tracing-beam";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import { Contact } from "@/components/Contact";
import Menu from "@/components/Menu";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const homeRef = useRef(null);
  const techStackRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const menuRefs = [homeRef, techStackRef, projectsRef, contactRef];

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <Menu menuRefs={menuRefs}/>
      <div className="max-w-7xl w-full py-2">
        <TracingBeam className="px-6">
          <Hero homeRef={menuRefs[0]}/>
          <TechStack techStackRef={menuRefs[1]}/>
          <Projects projectsRef={menuRefs[2]}/>
          <Contact contactRef={menuRefs[3]}/>
        </TracingBeam >
      </div>
    </main>
  );
}
