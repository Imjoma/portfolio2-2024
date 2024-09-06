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
          the fact that from just an idea, I can turn it into a real-world
          application. The following year, I graduated at ICCT Colleges with
          Bachelor's Degree in Information Technology.
        </p>
        <p>
          These days, on top of building my own projects, I keep myself occupied
          by learning new things especially anything about digital content
          creation. I also participate on some online courses, dev challenges
          and reaching out professionals in the same field on various platforms.
          When I'm not working, I usually spend time watching videos or hangout
          with my friends at least once a week.
        </p>
      </div>
    </section>
  );
};

export default SubInfo;
