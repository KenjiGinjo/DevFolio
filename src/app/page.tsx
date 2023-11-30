import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="main">
      <Header />
      <main>
        <AboutMe lang="en-US" />
        <Skills lang="en-US" />
        <Projects lang="en-US" />
      </main>
      <Footer />
    </div>
  );
}
