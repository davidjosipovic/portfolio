import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
export default function Home() {
  return (
    <div className="mt-8">

      <Hero/>
      <About/>
      <Projects/>
      <Contact/>

    </div>
  );
}
