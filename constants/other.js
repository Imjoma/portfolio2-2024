import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillApi,
  AiOutlineMail,
} from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { GrGraphQl } from "react-icons/gr";

import {
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiRedux,
  SiContentful,
  SiTiktok,
  SiTrpc,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

export const navigation = [
  {
    name: "Technologies",
    url: "/#technologies",
  },
  {
    name: "Experience",
    url: "/#experience",
  },
  {
    name: "Projects",
    url: "/#projects",
  },
  {
    name: "About",
    url: "/#about",
  },
];

export const socials = [
  {
    url: "mailto:jomaipio@gmail.com",
    Icon: AiOutlineMail,
  },
  {
    url: "/linkedin",
    Icon: IoLogoLinkedin,
  },
  {
    url: "/github",
    Icon: AiFillGithub,
  },
  {
    url: "/instagram",
    Icon: AiOutlineInstagram,
  },
  //   {
  //     url: '/tiktok',
  //     Icon: SiTiktok
  //   }
];

export const techStack = [
  {
    name: "Javascript",
    Icon: SiJavascript,
  },
  {
    name: "ReactJS",
    Icon: FaReact,
  },
  {
    name: "NextJS",
    Icon: TbBrandNextjs,
  },
  {
    name: "Redux",
    Icon: SiRedux,
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
  },
  {
    name: "Firebase",
    Icon: SiFirebase,
  },

  {
    name: "Node.js",
    Icon: FaNodeJs,
  },
  {
    name: "REST API",
    Icon: AiFillApi,
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
  },

  {
    name: "Figma",
    Icon: FaFigma,
  },

  {
    name: "Contentful",
    Icon: SiContentful,
  },
  {
    name: "Github",
    Icon: AiFillGithub,
  },
  {
    name: "Git",
    Icon: FaGitAlt,
  },
];
