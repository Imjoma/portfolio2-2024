"use client";

import { navigation } from "@/constants/other";
import Link from "next/link";

import { useState, useEffect } from "react";

const REGEX = "/#";

const Navigation = () => {
  const [currentSection, setCurrentSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // console.log(section.id + " => " + sectionTop);

        if (sectionTop <= 300 && sectionBottom >= 300) {
          const hasThisSection = navigation.find((nav) => {
            return nav.url.replace(REGEX, "") === section.id;
          });
          // if true, set the new current section as active
          if (hasThisSection !== undefined) {
            setCurrentSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute("href");

    if (target !== null) {
      const targetSection = document.querySelector(target.replace("/", ""));

      const offset = 98;

      if (targetSection !== null) {
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetSection.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        console.log("bodyRect => " + bodyRect);
        console.log("elementRect => " + elementRect);
        console.log("elementPosition => " + elementPosition);
        console.log("offsetPosition => " + offsetPosition);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav className="hidden mt-4 lg:mt-20 lg:block">
      <ul className="flex flex-col space-y-4">
        {navigation.map(({ url, name }) => {
          const fixedStyle = "mr-3 inline-block -translate-y-1 h-[1px]";
          const transition = "transition-all duration-200 ease-in-out";

          const isCurrentSection = currentSection === url.replace(REGEX, "");
          // console.log(
          //   isCurrentSection +
          //     " => " +
          //     currentSection +
          //     " === " +
          //     url.replace(REGEX, "")
          // );

          return (
            <li key={url}>
              <Link href={url} className="group" onClick={handleNavClick}>
                <div
                  className={`${fixedStyle} ${transition} ${
                    isCurrentSection
                      ? "w-[60px] bg-textPrimary"
                      : "w-[30px] bg-textSecondary"
                  } group-hover:text-textPrimary group-hover:w-[60px] w-[30px] bg-textSecondary`}
                ></div>
                <span
                  className={` text-sm uppercase ${
                    isCurrentSection
                      ? " text-textPrimary"
                      : "text-textSecondary "
                  }  duration-200 ease-in-out group-hover:text-textPrimary
                  `}
                >
                  {name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
