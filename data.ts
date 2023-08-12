import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "OOP & Data Structure",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "React.Js",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "HTML",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind Css",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Type Script",
    level: "70",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Chrome DevTools",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Visual Studio Code",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Npm",
    level: "80",
  },
];

export const projects: IProject[] = [
  { 
    name: "Grocery List",
    description:
      "This app shows the List of Grocery which you list",
    image_path: "/images/1.png",
    github_url: "https://github.com//projects/tree/main/Grocery%20List",
    category: ["Java Script","Css"],
    key_techs: ["Java Script", "HTML", "Css"],
  },
  {
    name: "Food Delivery",
    image_path: "/images/2.jpeg",
    github_url: "https://github.com/=/projects/tree/main/food%20delivery",
    category: ["HTML","Css"],
    description:
      "This Web App Show Food Which You Want to order",
    key_techs: ["HTML", "Css"],
  },

  {
    name: "Quiz",
    image_path: "/images/3.jpg",
    github_url: "https://github.com//projects/tree/main/quiz",
    category: ["Java Script", "HTML"],
    description:
      "This App Show Quiz",
    key_techs: [
      "Java Script",
      "HTML",
      "Css",
    ],
  },

  {
    name: "Tik Tac Toe Game",
    image_path: "/images/4.png",
    github_url: "https://github.com//projects/tree/main/tik%20tac%20toe%20game",
    category: ["Java Script"],
    description:
    "Play Tik Tac Toe Game",
    key_techs: ["Java Script", "HTML", "Css"],
  },

  {
    name: "ToDo List",
    image_path: "/images/5.jpg",
    github_url: "https://github.com//projects/tree/main/todo%20list",
    category: ["HTML","Java Script"],
    description:
      "Create To Do List",
    key_techs: ["Java Script", "HTML", "Css"],
  },

  {
    name: "YouTube Clone",
    image_path: "/images/6.png",
    github_url: "https://github.com//projects/tree/main/youtube%20clone",
    category: ["HTML","Java Script"],
    description:
      "YouTube Clone for Watching Videos",
    key_techs: ["Java Script", "HTML", "Css"],
  },
  
];
