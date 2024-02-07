import SubInfo from "@/components/Sections/SubInfo.jsx";
import MainInfo from "../components/MainInfo.jsx";
import Technologies from "@/components/Sections/Technologies.jsx";
import Experience from "@/components/Sections/Experience.jsx";
import Projects from "@/components/Sections/Projects.jsx";
import Footer from "@/components/Footer.jsx";

export default function Home() {
  return (
    // removed: lg:h-full
    <main className="max-w-[1280px] mx-auto h-auto  relative px-6 sm:px-12 md:px-16 lg:px-20 py-[60px] md:py-[90px]">
      <MainInfo />
      <div className="relative flex flex-col w-full ml-0 space-y-32 lg:w-1/2 lg:ml-auto sm:pb-0">
        <SubInfo />
        <Technologies />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
