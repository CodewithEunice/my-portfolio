import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  olliepickett,
  onet,
  starlight,
  mikecollection,
  calcImg,
  dateme,
  ekoh,
  fit,
  aenon,
  mike,
  mimi,
  avatar,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Nextjs Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Freelancer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Fiverr (Freelancing)",
    icon: "",
    iconBg: "#E6DEDD",
    date: "Jan 2024 - March 2024",
    points: [
      "Collaborated with UX/UI designers to translate design mockups into pixel-perfect, responsive interfaces, ensuring a consistent and visually appealing user experience across devices.",
      "Implemented server-side rendering (SSR) and static site generation (SSG) using Next.js, enhancing the application's performance and SEO capabilities",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },

  {
    title: "Frontend Developer",
    company_name: "Upwork (Freelancing)",
    icon: "",
    iconBg: "#383E56",
    date: "August 2024 - November 2024",
    points: [
      "Developed and maintained various modules of a complex web application, employing React.js/Next.js and TypeScript for the frontend and consumed .Net, Django, Spring Boot and REST APIs  ",
      "Integrated third-party APIs and services to extend application functionalities, improving the overall user experience. ",
    ],
  },

  {
    title: "Frontend Developer",
    company_name: "Nxg-hub (Internship)",
    icon: "",
    iconBg: "#E6DEDD",
    date: "September 2024 - Present",
    points: [
      "Collaborated with the team to build a financial payment app, using plain React/tailwind for the Frontend.",
      "Implemented responsiveness and ensured cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Eunice has proven to be one of the most diligent and passionate Software developer Interns in our firm.",
    name: "Tobilola",
    designation: "Project Manager",
    company: "Nxg-hub technologies.",
    image: avatar,
  },
  {
    testimonial:
      "Eunice is one of the passionate and creative Software developers in Fiverr",
    name: "James Kelvin",
    designation: "Digital Marketer",
    company: "Headstart",
    image: avatar,
  },
  {
    testimonial:
      "Working with Eunice was really amazing, she's so passionate and good at what she does.",
    name: "Andrew Cross",
    designation: "Senior Developer",
    company: "Pentagon",
    image: avatar,
  },
];

const projects = [
  {
    name: "E-Shop",
    description:
      "E-Shop is an e-commerce web application that enables users to buy different electronic gadgets at the comfort of their homes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "typeScript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: mike,
    source_code_link: "",
    live_demo_link: "https://just-electronics.onrender.com/",
  },

  {
    name: "Aenon-fitness",
    description:
      "This is a fitness app that helps users register for gym classes.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },

      {
        name: "typeScript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: aenon,
    source_code_link: "",
    live_demo_link: "https://aenon-fitness.vercel.app/",
  },
  {
    name: "Dateme",
    description:
      "Dateme is a web dating application that allows users from different countries or continent to find love, make friends and meet new people. It makes it easier to find soul mate ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: dateme,
    source_code_link: "",
    live_demo_link: "http://dateme.onrender.com",
  },

  {
    name: "Calc project",
    description: "This is a simple calculator.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javaScript",
        color: "orange-text-gradient",
      },
    ],
    image: calcImg,
    source_code_link: "",
    live_demo_link: "https://new-calc-project.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
