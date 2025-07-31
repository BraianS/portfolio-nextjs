import Hero from "@/components/Hero/hero";
import Nav from "@/components/Nav/nav";
import Project from "@/components/Projects/project";
import About from "@/components/About/about";
import Footer from "@/components/Footer/footer";
import Skills from "@/components/Skill/skill";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Skills/>
      <Project />
      <Footer />


    </div>
  );
}
