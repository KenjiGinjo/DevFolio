import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
export default function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <div className="main">
      <Header />
      <main>
        <AboutMe lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
      </main>
      <Footer />
    </div>
  );
}
