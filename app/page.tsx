import About from "./_components/About";
import Banner from "./_components/Banner";
import ResumeSection from "./_components/ResumeSection";
import Skills from "./_components/Skills";
import Works from "./_components/Works";

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
        <Works />
      </div>
    </div>
  );
}
