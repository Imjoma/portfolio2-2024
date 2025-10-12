import React from "react";

const SubInfo = () => {
  return (
    <section id="about" className="pt-12 lg:pt-0 text-textTertiary">
      <h2 className="text-white section-title lg:hidden">About</h2>
      <div className="space-y-5 ">
        <p>
          <span className=' font-semibold text-textPrimary cursor-[url("/assets/images/hand-wave.png"),_pointer]'>
            Hi! my name is Joma,{" "}
          </span>{" "}
          I design and build web applications.
        </p>
        <p>
          In the first half of 2021, I started the Web Development path. I like
          the fact that I can take simple ideas, apply my thought process, then
          design a mockup; I am able to turn them into real-world applications.
        </p>
        <p>
          These days, on top of revisiting my old projects and refreshing with
          the foundations, I keep myself occupied by learning new things —
          especially those related to digital content creation. I am also in the
          process of collaborating with a developer I know who is in the same
          field as I am. When I'm not working, I usually spend time watching
          videos or hanging out with my friends every other time.
        </p>
      </div>
    </section>
  );
};

export default SubInfo;
