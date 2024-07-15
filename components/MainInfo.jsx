import Link from "next/link";
import HeaderTag from "./HeaderTag";
import Navigation from "./Navigation";
import Socials from "./Socials";

import { Antonio } from "next/font/google";

const antonio = Antonio({ subsets: ["latin"] });

const MainInfo = () => {
  {
    /* no justify between on small screen
        header,✔️ navigation,✔️ sociallinks✔️
        fixed at top left on lg-screen, normal on small screen 
        */
  }

  return (
    <div className="lg:w-[410px] w-full h-auto lg:h-[calc(100vh-160px)] lg:fixed static  flex flex-col justify-normal lg:justify-between">
      <div>
        <div className={" flex flex-col space-y-8"}>
          <div className="flex flex-col space-y-2">
            <Link href="/">
              <h1 className={antonio.className + " text-5xl font-bold"}>
                Jose Maria Ipio
              </h1>
            </Link>
            <p className={antonio.className + " text-2xl font-semibold"}>
              Front-End Developer
            </p>
          </div>
          <HeaderTag />
        </div>
        <Navigation />
      </div>

      <Socials />
    </div>
  );
};

export default MainInfo;
