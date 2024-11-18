import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { ProjectButtonComponent } from "./project-button/project-button.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HeroComponent, ProjectButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
