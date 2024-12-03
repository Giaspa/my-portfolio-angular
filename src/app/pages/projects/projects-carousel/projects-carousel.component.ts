import { Component, Input } from '@angular/core';
import { Project } from '../../../../types/project.model';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-carousel.component.html',
})
export class ProjectsCarouselComponent {
  @Input() projects!: Project[];
  @Input() svgs!: any;
  lastProjectsIndex: number = 0;

  constructor(readonly service: ProjectService, readonly router: Router) { }

  ngOnInit() {
    this.lastProjectsIndex = this.projects.length - 1
  }

  getBackId($index: number): string {
    if ($index === 0) {
      return `${this.projects[this.lastProjectsIndex].id}`;
    }

    return `${this.projects[$index - 1].id}`;
  }

  getAheadId($index: number) {
    if ($index === this.lastProjectsIndex) {
      return this.projects[0].id;
    }

    return this.projects[$index + 1].id;
  }

  closeCarousel() {
    this.service.setShowCarousel(false);
    this.router.navigate(["projects"]);
  }
}
