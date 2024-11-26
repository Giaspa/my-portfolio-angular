
export type Project = {
  id: string,
  name: string,
  stack: string[],
  teamSize: number,
  role: string,
  description: string,
  type: string,
  dateFrom: string,
  dateTo: string | null,
  link: string | null,
  github: string | null,
  isAvaible: boolean,
}

export const MOCK_PROJECTS: Project[] = [
  {
    id: "My Portfolio Next",
    name: "My Portfolio Next",
    stack: [
      "React",
      "Next",
      "Tailwind",
      "SonarCloud",
      "Figma",
    ],
    link: "https://my-portfolio-next-gamma.vercel.app",
    github: "https://github.com/Giaspa/my-portfolio-next",
    isAvaible: true,
    description: "With this version of the portfolio, I wanted to explore the possibilities offered by React and Next.js, combining performance and simplicity in a single solution. The project was designed to highlight my ability to adapt to new technologies and leverage advanced tools like Tailwind and SonarCloud to create clean and accessible interfaces. This portfolio is not just a website but a concrete demonstration of my style and approach to the world of frontend development",
    type: "",
    dateFrom: "Nov 2024",
    dateTo: null,
    teamSize: 1,
    role: "Frontend developer & UX/UI designer"
  },
  {
    id: "My Portfolio Angular",
    name: "My Portfolio Angular",
    stack: [
      "Angular",
      "Tailwind",
      "SonarCloud",
      "Figma",
    ],
    link: "https://giaspa.github.io/my-portfolio-angular/",
    github: "https://github.com/Giaspa/my-portfolio-angular",
    isAvaible: true,
    description: "This project represents the first version of my personal portfolio, designed to showcase not only my technical skills in Angular but also my passion for simplicity and effective design. Every detail is crafted to deliver a smooth and intuitive experience, with the goal of presenting my professional background and projects in an engaging and direct way. The project was built using Angular, Tailwind, and SonarCloud to ensure high performance and clean code.",
    type: "",
    dateFrom: "Nov 2024",
    dateTo: null,
    teamSize: 1,
    role: "Frontend developer & UX/UI designer"
  },
  {
    id: "My Next Docs",
    name: "My Next Docs",
    stack: [
      "React",
      "Next",
      "Tailwind",
      "TypeScript",
    ],
    link: null,
    github: "https://github.com/Giaspa/my-next-docs",
    isAvaible: true,
    description: "This project is a practical exploration of Next.js concepts, designed as both a learning tool and a showcase of my development approach. Each page focuses on a specific feature of Next.js, such as dynamic routing or API routes, and demonstrates its implementation directly within the page itself. Built with React, Tailwind, and TypeScript, this project emphasizes hands-on learning and presents the power of Next.js in a structured and intuitive way",
    type: "",
    dateFrom: "Nov 2024",
    dateTo: null,
    teamSize: 1,
    role: "Fullstack developer"
  },
  {
    id: "The Guild",
    name: "The Guild",
    stack: [
      "React",
      "Next",
      "Supabase",
      "Prisma",
      "Tailwind",
      "TypeScript",
      "Figma",
    ],
    link: null,
    github: null,
    isAvaible: false,
    description: "The Guild was developed as part of Interlogica's internal contest, DevQuest, a playful yet innovative competition where small teams of developers create projects using new technologies or practices. Inspired by its fantasy theme, The Guild empowers admins (Masters) to assemble teams and assign them Quests. It also enables team members to log their daily availability, ensuring seamless coordination and allowing Masters to monitor individual efforts throughout the contest. Built with React, Next.js, Supabase, Prisma, and Tailwind, The Guild blends practicality with a touch of adventure.",
    type: "",
    dateFrom: "Nov 2024",
    dateTo: null,
    teamSize: 2,
    role: "Frontend developer & UX/UI designer"
  },
  {
    id: "My Angular Docs",
    name: "My Angular Docs",
    stack: [
      "Angular",
      "Tailwind",
      "SonarCloud",
    ],
    link: "https://giaspa.github.io/my-angular-docs/",
    github: "https://github.com/Giaspa/my-angular-docs",
    isAvaible: true,
    description: "This project is a compact documentation project aimed at revisiting and applying Angular fundamentals. Each page focuses on a core concept, such as change detection or dependency injection, and demonstrates its implementation directly in the page’s functionality. Built with Angular, Tailwind, and SonarCloud, this project not only serves as a learning exercise but also highlights the versatility and power of Angular in creating dynamic web applications.",
    type: "",
    dateFrom: "Oct 2024",
    dateTo: "Nov 2024",
    teamSize: 1,
    role: "Frontend developer"
  },
  {
    id: "Interfinder",
    name: "Interfinder",
    stack: [
      "Svelte",
      "Tailwind",
      "TypeScript",
    ],
    link: null,
    github: null,
    isAvaible: false,
    description: "Interfinder was created for DevQuest, Interlogica's internal competition. This innovative tool uses an automated registration form linked to corporate emails to map the geographical distribution of Interlogica employees across the country. Born from the desire to visualize the company’s reach after adopting a full-remote model, Interfinder provides valuable insights into team dispersion while reinforcing a sense of connection. Built with Svelte, Tailwind, and TypeScript, this project combines functionality with simplicity to deliver impactful results.",
    type: "",
    dateFrom: "Oct 2024",
    dateTo: null,
    teamSize: 3,
    role: "Frontend developer"
  },
  {
    id: "CT Servizi",
    name: "CT Servizi",
    stack: [
      "React",
      "Redux",
      "Tailwind",
      "Vite",
      "TypeScript",
      "Figma",
    ],
    link: null,
    github: null,
    isAvaible: false,
    description: "This is a web application designed for internal use by the employees of a Veneto municipality. It streamlines the management of parking and ZTL permits, replacing previously manual procedures with a fully digital solution. By engineering and automating these workflows, the project significantly improves efficiency and reduces administrative workload. Built with React, Redux, Tailwind, Vite, and TypeScript, CT Servizi showcases the power of modern web technologies in public administration.",
    type: "",
    dateFrom: "Ago 2024",
    dateTo: "Oct 2024",
    teamSize: 3,
    role: "Frontend developer & UX/UI designer"
  },
  {
    id: "ALD Ayvens",
    name: "ALD Ayvens",
    stack: [
      "Angular",
      "Javascript",
    ],
    link: null,
    github: null,
    isAvaible: false,
    description: "It's a web platform developed for a leading automotive company, enabling the efficient management of long-term rental vehicle fleets for both national and international clients. This project combines functionality and scalability to meet the needs of a diverse clientele, streamlining operations in the automotive rental industry. Built with AngularJS and JavaScript, ALD Ayvens exemplifies the role of technology in transforming business processes.",
    type: "",
    dateFrom: "Feb 2024",
    dateTo: "Ago 2024",
    teamSize: 22,
    role: "Frontend developer"
  },
  {
    id: "SWEN - funds manager",
    name: "SWEN - funds manager",
    stack: [
      "React",
      "Sass",
      "TypeScript",
      "Figma",
    ],
    link: null,
    github: null,
    isAvaible: false,
    description: "SWEN is a personal finance management web application designed to simplify budgeting and expense tracking. Users can log income (Earns) and categorize expenses into Wants, Needs, and Saves, allocating percentages to each category to create monthly budgets. The app allows tracking individual expenses, assigning them to categories, and monitoring remaining budgets. For deeper insights, expenses can also be tagged and analyzed through detailed charts. Built with React, Sass, and TypeScript, SWEN combines functionality and usability to empower users in achieving their financial goals.",
    type: "",
    dateFrom: "Jan 2024",
    dateTo: "Feb 2024",
    teamSize: 1,
    role: "Fullstack developer & UX/UI designer"
  },
  {
    id: "Game of life",
    name: "Game of life",
    stack: [
      "Angular",
      "Sass",
      "Figma",
    ],
    link: "https://giaspa.github.io/game-of-life/",
    github: "https://github.com/Giaspa/game-of-life",
    isAvaible: true,
    description: "This project is a digital implementation of Conway's famous cellular automaton. This simulation operates on an infinite, two-dimensional grid where each cell is either alive or dead. Based on a set of simple rules, cells interact with their eight neighbors to determine the next generation of the grid. The project showcases the elegance of iterative logic and functional programming, offering an engaging exploration of emergent behaviors from simple systems. Built with Angular and Sass, this project is a tribute to the beauty of mathematical patterns and their visualization.",
    type: "",
    dateFrom: "Nov 2023",
    dateTo: "Jan 2024",
    teamSize: 1,
    role: "Frontend developer & UX/UI designer"
  },
  {
    id: "Gestione Fondi Formatemp",
    name: "Gestione Fondi Formatemp",
    stack: [
      "Angular",
      "Figma",
      "Miro",
    ],
    link: "https://ftweb.formatemp.it/#/",
    github: null,
    isAvaible: true,
    description: " A management application developed for a major financing company. It streamlines the allocation and maintenance of financial resources to clients, ensuring efficient and accurate handling of funding processes. Built with Angular, Figma, and Miro, this project combines robust functionality with a user-friendly interface to support large-scale financial operations.",
    type: "",
    dateFrom: "Jun 2023",
    dateTo: "Mar 2024",
    teamSize: 6,
    role: "Frontend developer, Team leader & UX/UI designer"
  },
  {
    id: "La Tomba di Eracle - rpg game",
    name: "La Tomba di Eracle - rpg game",
    stack: [
      "Angular",
      "Firebase",
      "Figma",
    ],
    link: null,
    github: null,
    isAvaible: false,
    description: "A management platform designed for a Live Action Role Playing (LARP) group. Registered users can track their in-game progress and access comprehensive game documentation, while admins can create events and manage player interfaces. This project bridges the gap between physical gameplay and digital tools, enhancing the overall experience for players and organizers alike. Built with Angular and Firebase, it combines functionality and immersion for an engaging role-playing adventure.",
    type: "",
    dateFrom: "Dec 2021",
    dateTo: "Jul 2023",
    teamSize: 2,
    role: "Fullstack developer & UX/UI designer"

  },
  {
    id: "Repubblica digitale",
    name: "Repubblica digitale",
    stack: [
      "Angular",
      "MongoDB",
      "Sass",
      "Figma",
    ],
    link: "https://repubblicadigitale.gov.it/portale/",
    github: null,
    isAvaible: true,
    description: "Repubblica Digitale is a national strategic initiative promoted by the Department for Digital Transformation under the Presidency of the Council of Ministers. This project focuses on reducing the cultural digital divide in Italy, fostering education in future technologies, and supporting the nation's digital transformation. It also coordinates the National Coalition for Digital Skills, promoting concrete actions to enhance digital literacy among citizens, students, and workers. Built with Angular, MongoDB, Sass, and Figma, this project is a cornerstone in driving Italy's digital inclusion and progress.",
    type: "",
    dateFrom: "Jan 2023",
    dateTo: "Jun 2023",
    teamSize: 6,
    role: "Frontend developer, Team leader & UX/UI designer"
  },
  {
    id: "RVE - Regione Veneto",
    name: "RVE - Regione Veneto",
    stack: [
      "Angular",
      "Java",
      "Spring",
      "Figma",
    ],
    link: "https://www.regione.veneto.it/web/guest/home",
    github: null,
    isAvaible: true,
    description: "This is the official website of the Veneto Region, designed to provide high-quality digital services to its citizens. As the frontend team leader, I had the privilege of guiding a team of five talented individuals in developing robust and feature-rich frontend components. Over 8,000 lines of code were written and managed using modern technologies such as Angular 15, HTML, SCSS, and TypeScript. In addition, I re-engineered the codebase to implement crucial features like accessibility and responsiveness, enhancing usability and ensuring inclusivity across devices. This project exemplifies my commitment to delivering impactful and innovative digital solutions.",
    type: "",
    dateFrom: "Apr 2022",
    dateTo: "Jan 2023",
    teamSize: 6,
    role: "Fullstack developer, Team leader & UX/UI designer"
  },
  {
    id: "Biobanca Nazionale - IZS",
    name: "Biobanca Nazionale - IZS",
    stack: [
      "Angular",
      "Java",
      "Spring",
      "MySql",
      "MyBatis",
    ],
    link: null,
    github: null,
    isAvaible: false,
    description: "The Biobanca Nazionale is a management platform for monitoring and distributing biological and viral samples to laboratories across the country. As a team leader, I oversaw the development and maintenance of both backend and frontend aspects, guiding a team of four talented individuals. I managed over 40 components using Angular 12, HTML, CSS, and TypeScript, ensuring seamless project operations. A notable contribution was the implementation of a QR code generator, which significantly accelerated research processes, enhancing efficiency and user-friendliness. This project reflects my dedication to improving and innovating in mission-critical applications.",
    type: "",
    dateFrom: "Jan 2021",
    dateTo: "Jun 2023",
    teamSize: 7,
    role: "Fullstack developer & Team leader"
  },
]
