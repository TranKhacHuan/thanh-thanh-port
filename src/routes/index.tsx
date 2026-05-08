import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { FadeInSection } from "@/components/FadeInSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <FadeInSection direction="down">
          <Hero />
        </FadeInSection>
        <FadeInSection direction="right">
          <About />
        </FadeInSection>
        <FadeInSection direction="left">
          <Experience />
        </FadeInSection>
        <FadeInSection direction="up">
          <Projects />
        </FadeInSection>
        <FadeInSection direction="right">
          <Skills />
        </FadeInSection>
        <FadeInSection direction="up">
          <Contact />
        </FadeInSection>
      </main>
      <Footer />
    </div>
  );
}
