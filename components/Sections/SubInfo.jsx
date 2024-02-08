import React from "react";

const SubInfo = () => {
  return (
    <section id="about" className="pt-2 text-textTertiary">
      <div className="space-y-5 ">
        <p>
          <span className=' font-semibold text-textPrimary cursor-[url("/assets/images/hand-wave.png"),_pointer]'>
            Hi! my name is Joma,{" "}
          </span>{" "}
          I design and develop web applications.
        </p>
        <p>
          In the second half of 2021, I started the Web Development path. I like
          the fact that I can design an app and push it forward into a
          real-world application. The following year, I graduated at{" "}
          <span className="font-semibold text-textPrimary">ICCT Colleges</span>{" "}
          with Bachelor's Degree in Information Technology.
        </p>
        <p>
          These days, I keep myself occupied by learning new things especially
          anything about digital content creation. When I'm not working, I
          usually spend time watching YouTube videos and sometimes withdraw
          myself through walking every other night.
        </p>
      </div>
    </section>
  );
};

export default SubInfo;
