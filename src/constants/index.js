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
  eko,
  fit,


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
    company_name: "Nxg-hub (Internship)",
    icon: "",
    iconBg: "#E6DEDD",
    date: "September 2024 - Present",
    points: [
      "Collaborated with UX/UI designers to translate design mockups into pixel-perfect, responsive interfaces, ensuring a consistent and visually appealing user experience across devices.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Betteroffservices Advertising Agency (Freelancing)",
    icon: "",
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Joined the Frontend team to Develop and maintain various modules of a complex web application, employing React.js/Next.js and TypeScript for the frontend and also consumed .Net, and REST APIs  ",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Eunice has proven to be one of the best, creative and passionate Software developers  Interns in our firm",
    name: "Tobilola"  ,
    designation: "Project Manager",
    company: "Nxg-hub technologies",
    image: avatar,
  },
  {
    testimonial:
      "After Eunice collaborated with our team to optimize our website, we gained more traffic by 70%. We can't thank her and the team enough!",
    name: "Mr Joshua ",
    designation: "Managing Director",
    company: "Betteroffservice advertising Agency",
    image: avatar,
  },
];

const projects = [
  
  {
    name: "Calc project",
    description:
      "This is a simple calculator.",
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

   {
    name: "Eko hotel landing page",
    description:
      "Eko Hotels & Suites is the most preferred hotel in West Africa,Located in the heart of Victoria Island.",
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
    image: eko,
    source_code_link: "",
    live_demo_link: "https://ekohotel.vercel.app/",
  },

  {
    name: "i-fitness",
    description:
      "i-fitness is a fitness app that helps users register for gym classes.",
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
    image: fit,
    source_code_link: "",
    live_demo_link: "https://i-fitness-umber.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
