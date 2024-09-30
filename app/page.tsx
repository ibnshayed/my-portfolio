import About from "./_components/About";
import Banner from "./_components/Banner";
import ResumeSection from "./_components/ResumeSection";
import Skills from "./_components/Skills";

export default function Home() {
  return (
    <div className="">
      {/* side bar */}
      <div></div>

      {/*  */}
      <div>
        {/* banner */}
        <Banner />
        <About />
        <Skills />
        <ResumeSection />
      </div>
    </div>
  );
}
