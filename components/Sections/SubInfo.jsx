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
          the fact that from just any simple ideas, provide my thought process then design a mock up; I am able to turn those into a real-world application. 
        </p>
        <p>
          These days, on top of revisiting my old projects, I keep myself occupied
          by learning new things especially anything about digital content
          creation. I am also in the process of collaborating with a developer I know who is in the same field as mine.
          When I'm not working, I usually spend time watching videos or hanging out with my friends every other time.
        </p>
      </div>
    </section>
  );
};

export default SubInfo;
