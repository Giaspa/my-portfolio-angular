import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { ProjectButtonComponent } from "./project-button/project-button.component";
import { Project, PROJECTS } from '../../../types/project.model';
import { ProjectsCarouselComponent } from "./projects-carousel/projects-carousel.component";
import { SVG_MAP } from '../../../types/svg.model';
import { ProjectService } from './project.service';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HeroComponent, ProjectButtonComponent, ProjectsCarouselComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects: Project[] = PROJECTS;
  svgs: any = SVG_MAP

  constructor(readonly service: ProjectService){}

}
