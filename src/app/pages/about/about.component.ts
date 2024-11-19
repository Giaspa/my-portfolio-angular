import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { ExperienceComponent } from "./experience/experience.component";
import { Experience } from '../../../types/experience.model';
import { About } from '../../../types/about.model';
import { CommonModule } from '@angular/common';

const EXPERIENCES: Experience[] = [
  {
    id: "interlogica",
    what: "Senior Frontend Developer",
    where: "Interlogica | società Benefit",
    whenFrom: "Feb 2024",
    whentTo: "Present",
    description: "I worked on key financial projects, maintaining and enhancing applications using Angular 2+, AngularJS, React and TypeScript. I handled UX/UI design and front-end development, working with back-end developers to define architecture. I modernised legacy code, improving maintainability by 50%, and managed projects using agile methodology with Jira."
  },
  {
    id: "reply",
    what: "Tech Lead Front End Developer",
    where: "Reply Whitehall",
    whenFrom: "Gen 2021",
    whentTo: "Feb 2024",
    description: "I have managed and developed over 10 projects, focusing on improving code readability and maintainability. I gained expertise in a range of languages and frameworks, including Angular 2+, JavaScript, TypeScript and Java. I worked with cross-functional teams of engineers and designers, mentoring both senior and junior members. I also mentored junior colleagues, streamlining the onboarding process and reducing their ramp-up time by 20%."
  },
  {
    id: "exolab",
    what: "Junior Fullstack Developer",
    where: "Exolab sr",
    whenFrom: "Lug 2021",
    whentTo: "Gen 2021",
    description: "I have managed and developed over 10 projects, focusing on improving code readability and maintainability. I gained expertise in a range of languages and frameworks, including Angular 2+, JavaScript, TypeScript and Java. I worked with cross-functional teams of engineers and designers, mentoring both senior and junior members. I also mentored junior colleagues, streamlining the onboarding process and reducing their ramp-up time by 20%."
  },
]

const ABOUT: About = {
  a_who: ["I am a fullstack developer with a strong passion for front-end and a deep love for TypeScript."],
  b_when: ["My journey into the world of technology started with a simple curiosity about how websites worked, but quickly turned into a career fuelled by passion and innovation."],
  c_so: ["Over the years, I have honed my skills at building scalable and intuitive applications that solve real problems and improve everyday life."],
  d_learn: [
    "What excites me most about development is the endless potential for growth.",
    "I enjoy keeping up with the latest technologies, constantly refining my skills and exploring new approaches to software design.",
    // "For me, every project is an opportunity to learn and add value."
  ],
  e_and: [
    "When I'm not writing code for work, you're likely to find me reading up on the latest IT trends, prototyping new ideas or finding creative solutions to complex challenges.",
    // "I am a firm believer in the power of collaboration and am always looking for ways to share knowledge and grow with my colleagues."
  ],
}
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeroComponent, ExperienceComponent, CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  experiences: Experience[] = EXPERIENCES;
  about: About = ABOUT;

}
