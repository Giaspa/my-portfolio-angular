import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { ProjectButtonComponent } from "./project-button/project-button.component";
import { Project } from '../../../types/project.model';
import { ProjectsCarouselComponent } from "./projects-carousel/projects-carousel.component";
import { SVG_MAP } from '../../../types/svg.model';
import { ProjectService } from './project.service';
import { HeaderComponent } from "../../components/header/header.component";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HeroComponent, ProjectButtonComponent, ProjectsCarouselComponent, HeaderComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects: Project[];
  svgs: any = SVG_MAP

  constructor(readonly service: ProjectService, readonly route: ActivatedRoute) {
    this.projects = this.route.snapshot.data['projects']
  }
}
