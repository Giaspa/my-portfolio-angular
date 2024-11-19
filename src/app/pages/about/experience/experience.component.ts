import { Component, Input } from '@angular/core';
import { Experience } from '../../../../types/experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  @Input() experience?: Experience

}
