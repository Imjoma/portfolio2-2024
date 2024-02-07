import Link from "next/link";
import HeaderTag from "./HeaderTag";
import Navigation from "./Navigation";
import Socials from "./Socials";

const MainInfo = () => {
  {
    /* no justify between on small screen
        header,✔️ navigation,✔️ sociallinks✔️
        fixed at top left on lg-screen, normal on small screen 
        */
  }

  return (
    <div className="lg:w-[410px] w-full h-auto lg:h-[calc(100vh-160px)] lg:fixed static  flex flex-col justify-normal lg:justify-between">
      <div className="">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <h1 className="text-5xl font-bold">Jose Maria Ipio</h1>
          </Link>
          <p className="text-2xl font-semibold">Front-End Developer</p>
          <HeaderTag />
        </div>
        <Navigation />
      </div>

      <Socials />
    </div>
  );
};

export default MainInfo;
