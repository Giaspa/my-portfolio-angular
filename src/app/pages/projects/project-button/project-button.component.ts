import { Component, Input } from '@angular/core';
import { Project } from '../../../../types/project.model';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-button',
  standalone: true,
  imports: [],
  templateUrl: './project-button.component.html',
  styleUrl: './project-button.component.css'
})
export class ProjectButtonComponent {
  @Input() project!: Project;
  @Input() svgs!: any;

  constructor(readonly service: ProjectService, readonly router: Router) { }

  openCarousel() {
    this.service.setShowCarousel(true);

    setTimeout(() => {
      this.router.navigateByUrl('projects').then(() => {
        const element = document.getElementById(this.project.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        this.router.navigate([`projects`], { fragment: this.project.id })
      });
    }, 0);
  }
}
